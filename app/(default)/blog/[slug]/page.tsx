import { notFound } from "next/navigation";
import { posts } from "@/app/(default)/blog/posts";

interface BlogPostPageProps {
  params: Promise<{
    slug: string;
  }>;
}

const getSectionId = (heading: string) =>
  heading
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, "")
    .trim()
    .replace(/\s+/g, "-");

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = posts.find((item) => item.slug === slug);

  if (!post) {
    notFound();
  }

  return (
    <main className="relative mx-auto min-h-screen w-full max-w-6xl px-4 pb-24 pt-24 sm:px-6">
      <div className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-112 bg-linear-to-b from-blue-100/60 via-indigo-100/30 to-transparent" aria-hidden="true" />

      <section className="relative mx-auto max-w-5xl overflow-hidden rounded-3xl border border-slate-200/80 bg-white/90 px-6 py-10 shadow-[0_24px_80px_-40px_rgba(15,23,42,0.55)] sm:px-10 sm:py-14">
        <div className="pointer-events-none absolute -right-16 -top-16 h-56 w-56 rounded-full bg-blue-200/60 blur-3xl" aria-hidden="true" />
        <div className="pointer-events-none absolute -bottom-20 -left-16 h-56 w-56 rounded-full bg-indigo-200/50 blur-3xl" aria-hidden="true" />

        <div className="relative">
          <div className="flex flex-wrap items-center gap-2">
            <span className="inline-flex items-center rounded-full border border-blue-200 bg-blue-50 px-3 py-1 text-xs font-semibold tracking-wide text-blue-700">
              Blog
            </span>
            <span className="inline-flex items-center rounded-full border border-indigo-200 bg-indigo-50 px-3 py-1 text-xs font-semibold tracking-wide text-indigo-700">
              By {post.author}
            </span>
          </div>

          <h1 className="mt-5 max-w-4xl text-4xl font-semibold tracking-tight text-slate-900 sm:text-5xl">
            {post.title}
          </h1>

          <p className="mt-5 max-w-3xl text-lg leading-relaxed text-slate-600">{post.subtitle}</p>

          <div className="mt-6 flex flex-wrap items-center gap-3 text-sm text-slate-500">
            <span className="rounded-full border border-slate-200 bg-white px-3 py-1">{post.publishedAt}</span>
            <span className="rounded-full border border-slate-200 bg-white px-3 py-1">{post.readTime}</span>
          </div>
        </div>
      </section>

      <section className="mx-auto mt-12 grid max-w-5xl gap-8 lg:grid-cols-[240px_minmax(0,1fr)]">
        <aside className="hidden lg:block">
          <div className="sticky top-28 rounded-2xl border border-slate-200 bg-white/90 p-5 shadow-sm">
            <p className="text-xs font-semibold uppercase tracking-wider text-slate-500">On this page</p>
            <ul className="mt-4 space-y-2 text-sm text-slate-600">
              {post.sections.map((section) => (
                <li key={`toc-${section.heading}`}>
                  <a
                    href={`#${getSectionId(section.heading)}`}
                    className="block rounded-md px-2 py-1.5 transition hover:bg-slate-50 hover:text-slate-900"
                  >
                    {section.heading}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </aside>

        <article className="relative overflow-hidden rounded-3xl border border-slate-200 bg-white px-6 py-8 shadow-[0_16px_48px_-30px_rgba(15,23,42,0.45)] sm:px-10 sm:py-12">
          <div className="pointer-events-none absolute right-0 top-0 h-24 w-24 rounded-bl-3xl bg-linear-to-bl from-slate-100 to-transparent" aria-hidden="true" />

          {post.sections.map((section, sectionIndex) => (
            <section
              id={getSectionId(section.heading)}
              key={section.heading}
              className="mb-12 border-b border-slate-100 pb-12 last:mb-0 last:border-b-0 last:pb-0 scroll-mt-28"
            >
              <h2 className="text-2xl font-semibold tracking-tight text-slate-900 sm:text-3xl">{section.heading}</h2>

              <div className="mt-5 space-y-4 text-[17px] leading-8 text-slate-700">
                {section.paragraphs?.map((paragraph, index) => (
                  <p
                    key={`${section.heading}-paragraph-${index}`}
                    className={sectionIndex === 0 && index === 0 ? "text-xl font-medium leading-9 text-slate-800 first-letter:mr-1 first-letter:text-4xl first-letter:font-semibold first-letter:text-slate-900" : ""}
                  >
                    {paragraph}
                  </p>
                ))}
              </div>

              {section.bullets && (
                <ul className="mt-5 list-disc space-y-2 pl-6 text-[17px] leading-8 text-slate-700 marker:text-slate-400">
                  {section.bullets.map((bullet) => (
                    <li key={`${section.heading}-${bullet}`}>{bullet}</li>
                  ))}
                </ul>
              )}

              {section.endingParagraphs && (
                <div className="mt-5 space-y-4 text-[17px] leading-8 text-slate-700">
                  {section.endingParagraphs.map((paragraph, index) => (
                    <p key={`${section.heading}-ending-paragraph-${index}`}>{paragraph}</p>
                  ))}
                </div>
              )}

              {section.endingBullets && (
                <ul className="mt-5 list-disc space-y-2 pl-6 text-[17px] leading-8 text-slate-700 marker:text-slate-400">
                  {section.endingBullets.map((bullet) => (
                    <li key={`${section.heading}-ending-${bullet}`}>{bullet}</li>
                  ))}
                </ul>
              )}

              {section.closing && (
                <div className="mt-5 space-y-4 text-[17px] leading-8 text-slate-700">
                  {section.closing.map((paragraph, index) => (
                    <p key={`${section.heading}-closing-${index}`}>{paragraph}</p>
                  ))}
                </div>
              )}
            </section>
          ))}
        </article>
      </section>
    </main>
  );
}
