"use client";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-blue-50 via-white to-white">
      {/* Hero Section */}
      <section className="px-6 py-20 sm:px-8 sm:py-32">
        <div className="mx-auto max-w-3xl">
          <h1 className="mb-8 text-6xl font-bold leading-tight text-gray-900 sm:text-7xl">
            About Clearform
          </h1>
          
          <p className="mb-12 text-2xl font-medium text-gray-700">
            Most forms collect answers.
          </p>
        </div>
      </section>

      {/* Problem Section */}
      <section className="bg-white border-t border-gray-200 px-6 py-16 sm:px-8 sm:py-24">
        <div className="mx-auto max-w-3xl">
          <h2 className="mb-8 text-3xl font-bold text-gray-900 sm:text-4xl">
            We started Clearform because we noticed something frustrating:
          </h2>
          
          <div className="space-y-6 text-lg text-gray-700">
            <p>
              <strong>The real problem isn't collecting feedback.</strong>
              <br />
              It's the quality of what people submit.
            </p>

            <p>
              After speaking with founders, marketers, and hiring managers, we kept hearing the same thing:
            </p>

            <div className="space-y-4 border-l-4 border-blue-500 bg-gradient-to-r from-blue-50 to-transparent py-6 pl-6">
              <p className="italic">"We get responses… but they're vague."</p>
              <p className="italic">"We spend more time interpreting feedback than acting on it."</p>
              <p className="italic">"The dashboard is full, but clarity is missing."</p>
            </div>

            <p>
              Forms were doing their job — technically.
              <br />
              But decisions were still hard.
            </p>

            <p className="text-xl font-semibold text-gray-900">
              That didn't make sense to us.
            </p>
          </div>
        </div>
      </section>

      {/* Why We Built Section */}
      <section className="border-t border-gray-200 px-6 py-16 sm:px-8 sm:py-24 bg-white">
        <div className="mx-auto max-w-3xl">
          <h2 className="mb-8 text-3xl font-bold text-gray-900 sm:text-4xl">
            Why We Built Clearform
          </h2>
          
          <div className="space-y-6 text-lg text-gray-700">
            <p className="text-xl font-semibold text-gray-900">
              Feedback should make decisions easier, not harder.
            </p>

            <p>
              But most tools focus on increasing submission rates, not improving the responses themselves.
            </p>

            <p>
              If someone gives a rushed, unclear, emotional answer, no amount of analytics can fully fix that later.
            </p>

            <p>
              So we asked a simple question:
            </p>

            <div className="rounded-lg bg-blue-50 border-l-4 border-blue-500 py-8 px-6">
              <p className="text-xl font-semibold text-gray-900">
                What if forms could help people respond more clearly while they're typing?
              </p>
            </div>

            <p>
              That's what Clearform is built to do.
            </p>
          </div>
        </div>
      </section>

      {/* What We Do Differently Section */}
      <section className="border-t border-gray-200 px-6 py-16 sm:px-8 sm:py-24 bg-white">
        <div className="mx-auto max-w-3xl">
          <h2 className="mb-8 text-3xl font-bold text-gray-900 sm:text-4xl">
            What Clearform Does Differently
          </h2>
          
          <div className="space-y-8 text-lg text-gray-700">
            <p className="text-xl font-semibold text-gray-900">
              Clearform is a response-first form platform.
            </p>

            <p>
              Instead of collecting raw input and analyzing it afterward, we focus on improving clarity at the source.
            </p>

            <div>
              <p className="mb-4 font-semibold text-gray-900">We help teams:</p>
              <ul className="space-y-3 pl-6">
                <li className="flex items-start">
                  <span className="mr-3 text-blue-500">•</span>
                  <span>Monitor responses as they come in</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-3 text-blue-500">•</span>
                  <span>Measure response quality and completeness</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-3 text-blue-500">•</span>
                  <span>Act on structured, decision-ready input</span>
                </li>
              </ul>
            </div>

            <div className="rounded-lg border-2 border-blue-500 bg-blue-50 py-6 px-6">
              <p className="font-semibold text-gray-900">It's not about more feedback.</p>
              <p className="font-semibold text-gray-900">It's about better feedback.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Who It's For Section */}
      <section className="border-t border-gray-200 px-6 py-16 sm:px-8 sm:py-24 bg-white">
        <div className="mx-auto max-w-3xl">
          <h2 className="mb-8 text-3xl font-bold text-gray-900 sm:text-4xl">
            Who It's For
          </h2>
          
          <div className="space-y-6 text-lg text-gray-700">
            <p>
              Clearform is built for people who rely on feedback to make real decisions:
            </p>

            <ul className="space-y-4 pl-6">
              <li className="flex items-start">
                <span className="mr-3 text-blue-500">→</span>
                <span>Startup founders refining product direction</span>
              </li>
              <li className="flex items-start">
                <span className="mr-3 text-blue-500">→</span>
                <span>Marketing teams testing campaigns</span>
              </li>
              <li className="flex items-start">
                <span className="mr-3 text-blue-500">→</span>
                <span>Hiring managers reviewing applicants</span>
              </li>
              <li className="flex items-start">
                <span className="mr-3 text-blue-500">→</span>
                <span>Teams running internal feedback loops</span>
              </li>
            </ul>

            <div className="rounded-lg bg-gray-100 py-6 px-6">
              <p className="font-semibold text-gray-900">
                If messy input slows you down, Clearform is built for you.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Where We Are Now Section */}
      <section className="border-t border-gray-200 px-6 py-16 sm:px-8 sm:py-24 bg-white">
        <div className="mx-auto max-w-3xl">
          <h2 className="mb-8 text-3xl font-bold text-gray-900 sm:text-4xl">
            Where We Are Now
          </h2>
          
          <div className="space-y-6 text-lg text-gray-700">
            <p>
              We're currently in early access, shaped by conversations with 50+ founders and teams who shared their frustrations openly.
            </p>

            <p>
              Clearform is still evolving — thoughtfully, intentionally — with one goal in mind:
            </p>

            <div className="rounded-lg border-2 border-blue-500 bg-blue-50 py-6 px-6">
              <p className="text-xl font-semibold text-gray-900">
                Make decisions clearer by improving input quality at the source.
              </p>
            </div>

            <p className="text-lg font-medium text-gray-900">
              If that resonates with you, we'd love to build it together.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="border-t border-gray-200 px-6 py-16 sm:px-8 sm:py-24 bg-gradient-to-b from-white to-blue-50">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="mb-6 text-3xl font-bold text-gray-900">Ready to get started?</h2>
          <p className="mb-8 text-lg text-gray-700">
            Join our early access program and help shape the future of form feedback.
          </p>
                <a
                  href="/early-access"
                  className="inline-block rounded-lg bg-blue-600 px-8 py-3 font-semibold text-white transition-colors hover:bg-blue-700"
                >
                  Request Early Access
                </a>
              </div>
            </section>
          </main>
        );
      }
