export default function PrivacyPolicyPage() {
  return (
    <main className="bg-slate-50 py-20 text-slate-900">
      <section className="mx-auto max-w-4xl px-6">
        <p className="text-sm font-semibold text-blue-700">LEGAL</p>

        <h1 className="mt-3 text-4xl font-bold">Privacy Notice</h1>

        <p className="mt-6 text-lg leading-8 text-slate-600">
          Venza Global Services respects your privacy and is committed to
          protecting personal information shared through this website.
        </p>

        <div className="mt-10 space-y-8 rounded-2xl bg-white p-8 shadow-sm">
          <section>
            <h2 className="text-xl font-bold">Information We Collect</h2>
            <p className="mt-3 leading-7 text-slate-600">
              We may collect your name, email address, phone number, company
              details, enquiry details, and information submitted through our
              contact or consultation forms.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold">How We Use Information</h2>
            <p className="mt-3 leading-7 text-slate-600">
              We use submitted information to respond to enquiries, provide
              consultations, improve our services, communicate with clients,
              and maintain website security.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold">Data Protection</h2>
            <p className="mt-3 leading-7 text-slate-600">
              We take reasonable administrative and technical measures to
              protect personal data from unauthorized access, misuse, or loss.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold">Contact</h2>
            <p className="mt-3 leading-7 text-slate-600">
              For privacy-related questions, contact Venza Global Services
              through our official contact page.
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