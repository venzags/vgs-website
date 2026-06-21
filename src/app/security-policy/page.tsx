export default function SecurityPolicyPage() {
  return (
    <main className="bg-slate-50 py-20 text-slate-900">
      <section className="mx-auto max-w-4xl px-6">
        <p className="text-sm font-semibold text-blue-700">LEGAL</p>

        <h1 className="mt-3 text-4xl font-bold">Security Policy</h1>

        <p className="mt-6 text-lg leading-8 text-slate-600">
          Venza Global Services takes website, client, and information security
          seriously.
        </p>

        <div className="mt-10 space-y-8 rounded-2xl bg-white p-8 shadow-sm">
          <section>
            <h2 className="text-xl font-bold">Security Measures</h2>
            <p className="mt-3 leading-7 text-slate-600">
              We use reasonable security practices including access controls,
              secure hosting, software updates, monitoring, and protection
              against unauthorized access.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold">User Responsibility</h2>
            <p className="mt-3 leading-7 text-slate-600">
              Users should avoid sending passwords, bank details, card details,
              private keys, recovery phrases, or other highly sensitive
              information through public website forms.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold">Report a Security Issue</h2>
            <p className="mt-3 leading-7 text-slate-600">
              If you discover a possible security issue involving this website,
              contact us through the official contact page with relevant
              details.
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