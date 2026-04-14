import { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { Card } from '../components/Card'
import { Chip } from '../components/Chip'
import { projects } from '../data/profile'

export function ProjectDetailPage() {
  const { slug } = useParams()
  const project = projects.find((item) => item.slug === slug)
  const projectMedia = project?.media ?? []
  const [activeMediaIndex, setActiveMediaIndex] = useState<number | null>(null)

  useEffect(() => {
    if (activeMediaIndex === null) return
    if (projectMedia.length === 0) return

    const mediaCount = projectMedia.length

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setActiveMediaIndex(null)
      } else if (event.key === 'ArrowLeft') {
        setActiveMediaIndex((value) => {
          if (value === null) return 0
          return (value - 1 + mediaCount) % mediaCount
        })
      } else if (event.key === 'ArrowRight') {
        setActiveMediaIndex((value) => {
          if (value === null) return 0
          return (value + 1) % mediaCount
        })
      }
    }

    window.addEventListener('keydown', onKeyDown)
    document.body.style.overflow = 'hidden'

    return () => {
      window.removeEventListener('keydown', onKeyDown)
      document.body.style.overflow = ''
    }
  }, [activeMediaIndex, projectMedia.length])

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
                className={`h-full w-full ${
                  project.coverFit === 'contain' ? 'object-contain' : 'object-cover'
                } ${project.coverPosition ?? 'object-center'}`}
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
              {project.media.map((item, index) => (
                <button
                  key={item.src}
                  type="button"
                  onClick={() => setActiveMediaIndex(index)}
                  className="pressable group flex h-full w-full flex-col rounded-3xl border border-white/70 bg-white p-4 text-left shadow-soft transition-all duration-300 hover:-translate-y-1 hover:shadow-lift focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-300"
                >
                  <div
                    className={`overflow-hidden rounded-2xl bg-slate-100 transition-transform duration-300 group-hover:scale-[1.01] ${
                      item.layout === 'portrait' ? 'h-72 md:h-[30rem]' : 'h-40'
                    }`}
                  >
                    <img
                      src={item.src}
                      alt={item.alt}
                      className={`h-full w-full ${
                        item.layout === 'portrait' ? 'object-contain' : 'object-cover'
                      }`}
                      loading="lazy"
                    />
                  </div>
                  <div className="mt-3 space-y-2">
                    <p className="text-base font-semibold text-body">{item.caption}</p>
                    <p className="text-sm font-bold uppercase tracking-[0.22em] text-sky-700">
                      Click to expand
                    </p>
                  </div>
                </button>
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

      {projectMedia.length > 0 && activeMediaIndex !== null ? (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-slate-950/85 px-4 py-6 backdrop-blur-sm"
          role="dialog"
          aria-modal="true"
          aria-label={`${projectMedia[activeMediaIndex].caption} full screen view`}
          onClick={() => setActiveMediaIndex(null)}
        >
          <div
            className="flex max-h-[92vh] w-full max-w-7xl flex-col overflow-hidden rounded-3xl border border-white/15 bg-white shadow-2xl"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="flex items-center justify-between gap-4 border-b border-slate-200 px-5 py-4">
              <div>
                <p className="text-sm font-bold uppercase tracking-[0.24em] text-body/60">
                  Full Screen View
                </p>
                <p className="text-lg font-semibold text-ink">
                  {projectMedia[activeMediaIndex].caption}
                </p>
              </div>
              <button
                type="button"
                onClick={() => setActiveMediaIndex(null)}
                className="pressable inline-flex rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-bold text-ink transition-all hover:bg-slate-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-300"
              >
                Close
              </button>
            </div>
            <div className="relative grid min-h-0 flex-1 place-items-center bg-slate-100 p-4 md:p-6">
              {projectMedia.length > 1 ? (
                <>
                  <button
                    type="button"
                    onClick={() =>
                      setActiveMediaIndex(
                        (value) => (value === null ? 0 : (value - 1 + projectMedia.length) % projectMedia.length)
                      )
                    }
                    aria-label="Previous image"
                    className="pressable absolute left-3 top-1/2 -translate-y-1/2 rounded-full border border-white/70 bg-white/90 p-3 text-2xl font-bold text-ink shadow-lg transition-all hover:-translate-x-0.5 hover:bg-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-300"
                  >
                    ‹
                  </button>
                  <button
                    type="button"
                    onClick={() =>
                      setActiveMediaIndex((value) => (value === null ? 0 : (value + 1) % projectMedia.length))
                    }
                    aria-label="Next image"
                    className="pressable absolute right-3 top-1/2 -translate-y-1/2 rounded-full border border-white/70 bg-white/90 p-3 text-2xl font-bold text-ink shadow-lg transition-all hover:translate-x-0.5 hover:bg-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-300"
                  >
                    ›
                  </button>
                </>
              ) : null}
              <img
                src={projectMedia[activeMediaIndex].src}
                alt={projectMedia[activeMediaIndex].alt}
                className="max-h-[78vh] max-w-full rounded-2xl object-contain shadow-xl"
                loading="eager"
              />
            </div>
          </div>
        </div>
      ) : null}
    </div>
  )
}
