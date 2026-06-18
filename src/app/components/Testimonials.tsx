export default function Testimonials() {
  const testimonials = [
    {
      name: "Michael Johnson",
      company: "Global Tech Solutions",
      review:
        "VGS delivered exceptional cloud and AI solutions that significantly improved our operational efficiency.",
    },
    {
      name: "Sarah Williams",
      company: "Future Finance Group",
      review:
        "Professional team, excellent communication, and outstanding results. Highly recommended.",
    },
    {
      name: "David Anderson",
      company: "Retail Growth Hub",
      review:
        "Their digital transformation strategy helped us scale faster and improve customer engagement.",
    },
  ];

  return (
    <section
      id="testimonials"
      className="py-24 bg-slate-50"
    >
      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-5xl font-bold text-center mb-4">
          Client Testimonials
        </h2>

        <p className="text-center text-gray-600 max-w-3xl mx-auto mb-16">
          Hear what our clients say about working with VGS Global Services.
        </p>

        <div className="grid md:grid-cols-3 gap-8">

          {testimonials.map((testimonial) => (
            <div
              key={testimonial.name}
              className="bg-white rounded-2xl p-8 shadow-md hover:shadow-xl transition-all duration-300"
            >
              <div className="text-5xl text-blue-600 mb-4">
                "
              </div>

              <p className="text-gray-600 mb-8 leading-relaxed">
                {testimonial.review}
              </p>

              <div>
                <h3 className="text-xl font-bold text-blue-700">
                  {testimonial.name}
                </h3>

                <p className="text-gray-500">
                  {testimonial.company}
                </p>
              </div>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}