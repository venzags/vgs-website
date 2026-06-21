export default function CookiePolicyPage() {
  return (
    <main className="bg-slate-50 py-20 text-slate-900">
      <section className="mx-auto max-w-4xl px-6">
        <p className="text-sm font-semibold text-blue-700">LEGAL</p>

        <h1 className="mt-3 text-4xl font-bold">Cookie Policy</h1>

        <p className="mt-6 text-lg leading-8 text-slate-600">
          This Cookie Policy explains how Venza Global Services may use cookies
          and similar technologies on this website.
        </p>

        <div className="mt-10 space-y-8 rounded-2xl bg-white p-8 shadow-sm">
          <section>
            <h2 className="text-xl font-bold">What Are Cookies?</h2>
            <p className="mt-3 leading-7 text-slate-600">
              Cookies are small text files stored on your device when you visit
              a website. They help websites remember preferences and improve
              browsing experience.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold">Cookies We May Use</h2>
            <ul className="mt-3 list-disc space-y-2 pl-6 leading-7 text-slate-600">
              <li>Essential cookies required for website functionality.</li>
              <li>Performance cookies used to understand site usage.</li>
              <li>Preference cookies used to remember settings.</li>
              <li>Security cookies used to prevent misuse and fraud.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold">Managing Cookies</h2>
            <p className="mt-3 leading-7 text-slate-600">
              You can control or delete cookies through your browser settings.
              Disabling some cookies may affect certain website functions.
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