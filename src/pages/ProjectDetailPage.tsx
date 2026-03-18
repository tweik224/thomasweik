import { Link, useParams } from 'react-router-dom'
import { Card } from '../components/Card'
import { Chip } from '../components/Chip'
import { projects } from '../data/profile'

export function ProjectDetailPage() {
  const { slug } = useParams()
  const project = projects.find((item) => item.slug === slug)

  if (!project) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-[#f3e5cf] via-[#f8f7f3] to-[#e6f1ff] px-6 py-10 md:px-12 lg:px-16">
        <div className="mx-auto max-w-5xl">
          <Card className="space-y-4 text-center">
            <h1 className="text-4xl font-bold text-ink">Project Not Found</h1>
            <p className="text-xl text-body">The requested project page does not exist yet.</p>
            <div>
              <Link
                to="/"
                className="pressable inline-flex rounded-full border border-sky-200 bg-sky-500 px-6 py-3 text-lg font-bold text-white transition-all hover:bg-sky-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-300 focus-visible:ring-offset-2"
              >
                Back to Portfolio
              </Link>
            </div>
          </Card>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#f3e5cf] via-[#f8f7f3] to-[#e6f1ff] px-6 py-10 md:px-12 lg:px-16">
      <div className="mx-auto max-w-5xl space-y-6">
        <div className="flex items-center justify-between gap-4">
          <Link
            to="/"
            className="pressable inline-flex rounded-full border border-white/80 bg-white/75 px-5 py-2 text-base font-bold text-ink transition-all hover:border-sky-200 hover:text-sky-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-300 focus-visible:ring-offset-2"
          >
            Back to Portfolio
          </Link>
        </div>

        <Card className="space-y-5">
          {project.coverImage ? (
            <div className="h-64 overflow-hidden rounded-3xl border border-white/70 bg-white">
              <img
                src={project.coverImage}
                alt={project.coverAlt ?? `${project.title} cover`}
                className={`h-full w-full object-cover ${project.coverPosition ?? 'object-center'}`}
                loading="lazy"
              />
            </div>
          ) : (
            <div className={`h-64 rounded-3xl border border-white/70 bg-gradient-to-br ${project.visual}`} />
          )}
          <div className="space-y-3">
            <p className="text-lg font-semibold text-body">{project.categories.join(' · ')}</p>
            <h1 className="text-5xl font-bold text-ink">{project.title}</h1>
            <p className="text-2xl font-semibold text-sky-700">{project.role}</p>
            <p className="text-lg text-body">
              {project.organization} · {project.dates}
            </p>
            <p className="text-xl leading-relaxed text-body">{project.overview}</p>
          </div>

          <div className="flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <Chip key={tag} label={tag} />
            ))}
          </div>
        </Card>

        <Card className="space-y-4">
          <h2 className="text-3xl font-bold text-ink">Project Highlights</h2>
          <ul className="list-disc space-y-2 pl-6 text-xl text-body">
            {project.bullets.map((bullet) => (
              <li key={bullet}>{bullet}</li>
            ))}
          </ul>
        </Card>

        <Card className="space-y-4">
          <h2 className="text-3xl font-bold text-ink">Full Project Details</h2>
          <ul className="list-disc space-y-2 pl-6 text-xl text-body">
            {project.fullDetails.map((detail) => (
              <li key={detail}>{detail}</li>
            ))}
          </ul>
        </Card>

        <Card className="space-y-4">
          <h2 className="text-3xl font-bold text-ink">Project Gallery</h2>
          {project.media && project.media.length > 0 ? (
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
              {project.media.map((item) => (
                <figure
                  key={item.src}
                  className="rounded-3xl border border-white/70 bg-white p-4 shadow-soft"
                >
                  <div className="h-40 overflow-hidden rounded-2xl bg-slate-100">
                    <img
                      src={item.src}
                      alt={item.alt}
                      className="h-full w-full object-cover"
                      loading="lazy"
                    />
                  </div>
                  <figcaption className="mt-3 text-base font-semibold text-body">
                    {item.caption}
                  </figcaption>
                </figure>
              ))}
            </div>
          ) : (
            <>
              <p className="text-lg text-body">
                Replace these placeholders with your own images and captions in `src/data/profile.ts`.
              </p>
              <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
                {project.mediaPlaceholders?.map((placeholder) => (
                  <div
                    key={placeholder}
                    className="rounded-3xl border border-white/70 bg-white p-4 shadow-soft"
                  >
                    <div className="h-40 rounded-2xl bg-gradient-to-br from-sky-100 to-[#dbeafe]" />
                    <p className="mt-3 text-base font-semibold text-body">{placeholder}</p>
                  </div>
                ))}
              </div>
            </>
          )}
        </Card>
      </div>
    </div>
  )
}
