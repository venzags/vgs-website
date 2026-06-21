"use client";

import { useState } from "react";

export default function CustomizeCookiesPage() {
  const [saved, setSaved] = useState(false);

  return (
    <main className="bg-slate-50 py-20 text-slate-900">
      <section className="mx-auto max-w-3xl px-6">
        <p className="text-sm font-semibold text-blue-700">PRIVACY SETTINGS</p>

        <h1 className="mt-3 text-4xl font-bold">Customize Cookies</h1>

        <p className="mt-6 text-lg leading-8 text-slate-600">
          Choose which optional cookies you allow on the Venza Global Services
          website.
        </p>

        <div className="mt-10 space-y-6 rounded-2xl bg-white p-8 shadow-sm">
          <label className="flex items-start justify-between gap-6 border-b border-slate-100 pb-6">
            <div>
              <h2 className="font-bold">Essential Cookies</h2>
              <p className="mt-2 text-sm leading-6 text-slate-600">
                Required for basic website functions and security.
              </p>
            </div>

            <input
              type="checkbox"
              checked
              disabled
              className="mt-1 h-5 w-5"
            />
          </label>

          <label className="flex items-start justify-between gap-6 border-b border-slate-100 pb-6">
            <div>
              <h2 className="font-bold">Analytics Cookies</h2>
              <p className="mt-2 text-sm leading-6 text-slate-600">
                Help us understand website traffic and improve performance.
              </p>
            </div>

            <input type="checkbox" className="mt-1 h-5 w-5" />
          </label>

          <label className="flex items-start justify-between gap-6">
            <div>
              <h2 className="font-bold">Marketing Cookies</h2>
              <p className="mt-2 text-sm leading-6 text-slate-600">
                Used for relevant promotions and advertising measurement.
              </p>
            </div>

            <input type="checkbox" className="mt-1 h-5 w-5" />
          </label>

          <button
            type="button"
            onClick={() => setSaved(true)}
            className="mt-4 rounded-xl bg-blue-700 px-6 py-3 font-bold text-white transition hover:bg-blue-800"
          >
            Save Cookie Preferences
          </button>

          {saved && (
            <p className="text-sm font-medium text-green-600">
              Preferences saved for this session. Full persistent cookie control
              can be connected later.
            </p>
          )}
        </div>
      </section>
    </main>
  );
}