import type { ProjectItem } from '../data/profile'
import { Card } from './Card'
import { Chip } from './Chip'
import { Link } from 'react-router-dom'

interface ProjectCardProps {
  project: ProjectItem
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <Card className="flex h-full flex-col space-y-0.5 p-4 hover:-translate-y-1 hover:shadow-lift">
      {project.coverImage ? (
        <div className="h-32 overflow-hidden rounded-3xl border border-white/70 bg-white">
          <img
            src={project.coverImage}
            alt={project.coverAlt ?? `${project.title} cover`}
            className={`h-full w-full ${
              project.coverFit === 'contain' ? 'object-contain' : 'object-cover'
            } ${project.coverPosition ?? 'object-center'}`}
            loading="lazy"
          />
        </div>
      ) : (
        <div
          className={`h-32 rounded-3xl border border-white/70 bg-gradient-to-br ${project.visual}`}
          aria-hidden="true"
        />
      )}
      <div className="mt-3.5 space-y-2">
        <p className="text-base font-semibold text-body">{project.categories.join(' · ')}</p>
        <h3 className="text-2xl font-bold leading-tight text-ink">{project.title}</h3>
        <p className="text-base font-semibold text-sky-700">{project.role}</p>
        <p className="text-base text-body">
          {project.organization} · {project.cardDates ?? project.dates}
        </p>
        <p className="text-base leading-relaxed text-body">{project.description}</p>
      </div>
      <div className="mt-2.5 flex flex-wrap gap-1.5">
        {project.tags.map((tag) => (
          <Chip key={tag} label={tag} compact />
        ))}
      </div>
      <div className="mt-auto pt-4">
        <Link
          to={`/projects/${project.slug}`}
          className="pressable inline-flex rounded-full border border-sky-200 bg-sky-500 px-5 py-2.5 text-sm font-bold text-white transition-all hover:-translate-y-0.5 hover:bg-sky-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-300 focus-visible:ring-offset-2"
          aria-label={`View full project details for ${project.title}`}
        >
          View Full Project
        </Link>
      </div>
    </Card>
  )
}
