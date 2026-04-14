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
      <div className="mx-auto max-w-5xl space-y-5 md:space-y-6">
        <div className="flex items-center justify-between gap-4">
          <Link
            to="/"
            className="pressable inline-flex rounded-full border border-white/80 bg-white/75 px-4 py-2 text-sm font-bold text-ink transition-all hover:border-sky-200 hover:text-sky-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-300 focus-visible:ring-offset-2 md:px-5 md:text-base"
          >
            Back to Portfolio
          </Link>
        </div>

        <Card className="space-y-4 md:space-y-5">
          {project.coverImage ? (
            <div className="h-48 overflow-hidden rounded-3xl border border-white/70 bg-white md:h-64">
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
            <div className={`h-48 rounded-3xl border border-white/70 bg-gradient-to-br md:h-64 ${project.visual}`} />
          )}
          <div className="space-y-2.5 md:space-y-3">
            <p className="text-sm font-semibold text-body md:text-lg">{project.categories.join(' · ')}</p>
            <h1 className="text-3xl font-bold text-ink md:text-5xl">{project.title}</h1>
            <p className="text-lg font-semibold text-sky-700 md:text-2xl">{project.role}</p>
            <p className="text-sm text-body md:text-lg">
              {project.organization} · {project.dates}
            </p>
            <p className="text-base leading-relaxed text-body md:text-xl">{project.overview}</p>
          </div>

          <div className="flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <Chip key={tag} label={tag} />
            ))}
          </div>
        </Card>

        <Card className="space-y-4">
          <h2 className="text-2xl font-bold text-ink md:text-3xl">Project Highlights</h2>
          <ul className="list-disc space-y-2 pl-5 text-base text-body md:pl-6 md:text-xl">
            {project.bullets.map((bullet) => (
              <li key={bullet}>{bullet}</li>
            ))}
          </ul>
        </Card>

        <Card className="space-y-4">
          <h2 className="text-2xl font-bold text-ink md:text-3xl">Full Project Details</h2>
          <ul className="list-disc space-y-2 pl-5 text-base text-body md:pl-6 md:text-xl">
            {project.fullDetails.map((detail) => (
              <li key={detail}>{detail}</li>
            ))}
          </ul>
        </Card>

        <Card className="space-y-4">
          <h2 className="text-2xl font-bold text-ink md:text-3xl">Project Gallery</h2>
          {project.media && project.media.length > 0 ? (
            <div className="grid grid-cols-1 gap-3 md:grid-cols-2 md:gap-4 lg:grid-cols-3">
              {project.media.map((item, index) => (
                <button
                  key={item.src}
                  type="button"
                  onClick={() => setActiveMediaIndex(index)}
                  className="pressable group flex h-full w-full flex-col rounded-3xl border border-white/70 bg-white p-3 text-left shadow-soft transition-all duration-300 hover:-translate-y-1 hover:shadow-lift focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-300 md:p-4"
                >
                  <div
                    className={`overflow-hidden rounded-2xl bg-slate-100 transition-transform duration-300 group-hover:scale-[1.01] ${
                      item.layout === 'portrait' ? 'h-64 sm:h-72 md:h-[30rem]' : 'h-36 sm:h-40'
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
                    <p className="text-sm font-semibold text-body md:text-base">{item.caption}</p>
                    <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-sky-700 md:text-sm">
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
                    className="rounded-3xl border border-white/70 bg-white p-3 shadow-soft md:p-4"
                  >
                    <div className="h-32 rounded-2xl bg-gradient-to-br from-sky-100 to-[#dbeafe] md:h-40" />
                    <p className="mt-3 text-sm font-semibold text-body md:text-base">{placeholder}</p>
                  </div>
                ))}
              </div>
            </>
          )}
        </Card>
      </div>

      {projectMedia.length > 0 && activeMediaIndex !== null ? (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-slate-950/85 px-3 py-4 backdrop-blur-sm md:px-4 md:py-6"
          role="dialog"
          aria-modal="true"
          aria-label={`${projectMedia[activeMediaIndex].caption} full screen view`}
          onClick={() => setActiveMediaIndex(null)}
        >
          <div
            className="flex max-h-[92vh] w-full max-w-7xl flex-col overflow-hidden rounded-3xl border border-white/15 bg-white shadow-2xl"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="flex items-center justify-between gap-3 border-b border-slate-200 px-4 py-3 md:gap-4 md:px-5 md:py-4">
              <div>
                <p className="text-[11px] font-bold uppercase tracking-[0.24em] text-body/60 md:text-sm">
                  Full Screen View
                </p>
                <p className="text-base font-semibold text-ink md:text-lg">
                  {projectMedia[activeMediaIndex].caption}
                </p>
              </div>
              <button
                type="button"
                onClick={() => setActiveMediaIndex(null)}
                className="pressable inline-flex rounded-full border border-slate-200 bg-white px-3 py-2 text-xs font-bold text-ink transition-all hover:bg-slate-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-300 md:px-4 md:text-sm"
              >
                Close
              </button>
            </div>
            <div className="relative grid min-h-0 flex-1 place-items-center bg-slate-100 p-3 md:p-6">
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
                    className="pressable absolute left-2 top-1/2 -translate-y-1/2 rounded-full border border-white/70 bg-white/90 p-2.5 text-xl font-bold text-ink shadow-lg transition-all hover:-translate-x-0.5 hover:bg-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-300 md:left-3 md:p-3 md:text-2xl"
                  >
                    ‹
                  </button>
                  <button
                    type="button"
                    onClick={() =>
                      setActiveMediaIndex((value) => (value === null ? 0 : (value + 1) % projectMedia.length))
                    }
                    aria-label="Next image"
                    className="pressable absolute right-2 top-1/2 -translate-y-1/2 rounded-full border border-white/70 bg-white/90 p-2.5 text-xl font-bold text-ink shadow-lg transition-all hover:translate-x-0.5 hover:bg-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-300 md:right-3 md:p-3 md:text-2xl"
                  >
                    ›
                  </button>
                </>
              ) : null}
              <img
                src={projectMedia[activeMediaIndex].src}
                alt={projectMedia[activeMediaIndex].alt}
                className="max-h-[72vh] max-w-full rounded-2xl object-contain shadow-xl md:max-h-[78vh]"
                loading="eager"
              />
            </div>
          </div>
        </div>
      ) : null}
    </div>
  )
}
