import type { EducationItem } from '../data/profile'
import { Card } from './Card'
import { Chip } from './Chip'

interface EducationCardProps {
  education: EducationItem
  coursework: string[]
}

export function EducationCard({ education, coursework }: EducationCardProps) {
  return (
    <Card className="space-y-5 h-full">
      <h3 className="text-4xl font-bold text-ink">{education.degree}</h3>
      <div className="space-y-1">
        <p className="text-3xl font-semibold text-sky-700">{education.school}</p>
        <p className="text-xl text-body">{education.location}</p>
        <p className="text-xl font-semibold text-body">{education.dates}</p>
        <p className="text-xl text-body">Minor: {education.minor}</p>
      </div>

      <div>
        <h4 className="text-sm font-bold uppercase tracking-[0.24em] text-body/70">Highlights</h4>
        <ul className="mt-2 list-disc space-y-1 pl-5 text-lg text-body">
          {education.highlights.map((point) => (
            <li key={point}>{point}</li>
          ))}
        </ul>
      </div>

      <div>
        <h4 className="text-sm font-bold uppercase tracking-[0.24em] text-body/70">Activities</h4>
        <div className="mt-3 flex flex-wrap gap-2">
          {education.activities.map((item) => (
            <Chip key={item} label={item} />
          ))}
        </div>
      </div>

      <div>
        <h4 className="text-sm font-bold uppercase tracking-[0.24em] text-body/70">Relevant Coursework</h4>
        <div className="mt-3 flex flex-wrap gap-2">
          {coursework.map((course) => (
            <Chip key={course} label={course} />
          ))}
        </div>
      </div>
    </Card>
  )
}
