export default function AccessibilityPage() {
  return (
    <main className="bg-slate-50 py-20 text-slate-900">
      <section className="mx-auto max-w-4xl px-6">
        <p className="text-sm font-semibold text-blue-700">LEGAL</p>

        <h1 className="mt-3 text-4xl font-bold">
          Accessibility Declaration
        </h1>

        <p className="mt-6 text-lg leading-8 text-slate-600">
          Venza Global Services aims to make this website accessible and usable
          for as many people as possible.
        </p>

        <div className="mt-10 space-y-8 rounded-2xl bg-white p-8 shadow-sm">
          <section>
            <h2 className="text-xl font-bold">Our Commitment</h2>
            <p className="mt-3 leading-7 text-slate-600">
              We work to provide clear content, readable text, keyboard
              navigation support, responsive layouts, and accessible website
              features.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold">Ongoing Improvements</h2>
            <p className="mt-3 leading-7 text-slate-600">
              Accessibility is an ongoing effort. We may update design,
              navigation, contrast, content structure, and other elements to
              improve usability.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold">Need Help?</h2>
            <p className="mt-3 leading-7 text-slate-600">
              If you experience difficulty accessing any part of this website,
              please contact us through the Contact Us page and explain the
              issue.
            </p>
          </section>
        </div>

        <p className="mt-8 text-sm text-slate-500">
          Last updated: June 2026
        </p>
      </section>
    </main>
  );
}