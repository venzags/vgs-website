export default function DisclaimerPage() {
  return (
    <main className="bg-slate-50 py-20 text-slate-900">
      <section className="mx-auto max-w-4xl px-6">
        <p className="text-sm font-semibold text-blue-700">LEGAL</p>

        <h1 className="mt-3 text-4xl font-bold">Disclaimer</h1>

        <p className="mt-6 text-lg leading-8 text-slate-600">
          The information on this website is provided for general business and
          informational purposes only.
        </p>

        <div className="mt-10 space-y-8 rounded-2xl bg-white p-8 shadow-sm">
          <section>
            <h2 className="text-xl font-bold">No Professional Guarantee</h2>
            <p className="mt-3 leading-7 text-slate-600">
              Website content does not constitute legal, financial, tax,
              investment, cybersecurity, or other professional advice.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold">Accuracy of Information</h2>
            <p className="mt-3 leading-7 text-slate-600">
              We aim to keep information accurate and current, but we do not
              guarantee that all website content is complete, error-free, or
              always up to date.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold">Third-Party Links</h2>
            <p className="mt-3 leading-7 text-slate-600">
              This website may contain links to external websites. Venza Global
              Services is not responsible for third-party content, privacy
              practices, services, or availability.
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