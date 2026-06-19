export default function ContactPage() {
  return (
    <main className="min-h-screen bg-gray-50 py-20 px-6">
      <div className="max-w-3xl mx-auto bg-white p-8 rounded-2xl shadow-lg">

        <h1 className="text-4xl font-bold text-center mb-4">
          Contact Venza Global Services
        </h1>

        <p className="text-gray-600 text-center mb-10">
          Have a question, partnership inquiry, or business requirement?
          Send us a message and our team will get back to you.
        </p>

        <form className="space-y-6">

          <input
            type="text"
            placeholder="Full Name"
            className="w-full border p-3 rounded-lg"
          />

          <input
            type="email"
            placeholder="Email Address"
            className="w-full border p-3 rounded-lg"
          />

          <input
            type="tel"
            placeholder="Phone Number"
            className="w-full border p-3 rounded-lg"
          />

          <input
            type="text"
            placeholder="Company Name"
            className="w-full border p-3 rounded-lg"
          />

          <select className="w-full border p-3 rounded-lg">
            <option>Select Inquiry Type</option>
            <option>General Inquiry</option>
            <option>Business Partnership</option>
            <option>Support Request</option>
            <option>Project Discussion</option>
            <option>Career Opportunity</option>
          </select>

          <textarea
            placeholder="Your Message"
            rows={6}
            className="w-full border p-3 rounded-lg"
          />

          <button
            type="submit"
            className="w-full bg-blue-700 hover:bg-blue-800 text-white py-3 rounded-lg font-semibold transition"
          >
            Send Message
          </button>

        </form>

      </div>
    </main>
  );
}