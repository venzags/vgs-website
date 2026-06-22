"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const stories = [
  {
    id: 1,
    business: "Sharon Bakers",
    category: "Food Business Story",
    title: "From Church Poverty to Sacred Taste",
    shortDescription:
      "A story of resilience, faith, hard work, and the journey of building a food business with purpose.",
    description:
      "Sharon Bakers represents a journey shaped by difficult beginnings, determination, and the desire to create something meaningful through food. This customer story highlights the people, values, and effort behind a growing local food business.",
    image: "/images/customer-stories/sharon-bakers.jpg",
    source:
      "https://www.optvlogs.com/2026/04/from-church-poverty-to-sacred-taste-sam.html",
  },
  {
    id: 2,
    business: "Basheer Mess",
    category: "Restaurant Story",
    title: "Homely Meals, Local Trust and Everyday Hospitality",
    shortDescription:
      "A food story built around simple meals, familiar flavours, and the warmth of homely hospitality.",
    description:
      "Basheer Mess is presented as a place where food is connected to comfort, trust, and local community. The story focuses on the value of serving familiar meals with consistency and care.",
    image: "/images/customer-stories/basheer-mess.jpg",
    source:
      "https://www.optvlogs.com/2026/04/basheer-mess-homely-meals-interview.html",
  },
  {
    id: 3,
    business: "Aiswarya Breakfast",
    category: "Breakfast & Hospitality Story",
    title: "Where Home Comes to the Plate",
    shortDescription:
      "A breakfast story that celebrates traditional flavours, morning routines, and food that feels familiar.",
    description:
      "Aiswarya Breakfast reflects the importance of local food culture and the emotional connection people have with simple, well-prepared meals. The story brings together hospitality, tradition, and everyday customer experience.",
    image: "/images/customer-stories/aiswarya-breakfast.jpg",
    source:
      "https://www.optvlogs.com/2026/02/where-home-comes-to-plate-aiswarya.html",
  },
  {
    id: 4,
    business: "Sree Ganesh Café",
    category: "Café Story • Ernakulam",
    title: "The Heartbeat of Gopalapuram",
    shortDescription:
      "The story of a café shaped by community, local identity, and the everyday rhythm of its customers.",
    description:
      "Sree Ganesh Café represents more than a place to eat. It reflects the role that local cafés play in neighbourhood culture, conversations, routines, and the shared identity of a community.",
    image: "/images/customer-stories/sree-ganesh-cafe.jpg",
    source:
      "https://www.optvlogs.com/2026/02/the-heartbeat-of-gopalapuram-story-of.html",
  },
];

export default function CustomerStoriesPage() {
  const [activeStory, setActiveStory] = useState(0);

  const currentStory = stories[activeStory];

  const showPrevious = () => {
    setActiveStory((current) =>
      current === 0 ? stories.length - 1 : current - 1,
    );
  };

  const showNext = () => {
    setActiveStory((current) =>
      current === stories.length - 1 ? 0 : current + 1,
    );
  };

  return (
    <main className="overflow-hidden bg-slate-50 text-slate-900">
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-slate-950 via-blue-950 to-cyan-950 px-6 py-24 text-white sm:py-32">
        <div className="absolute inset-0 opacity-30">
          <div className="absolute -left-20 top-10 h-80 w-80 rounded-full bg-blue-500 blur-3xl" />
          <div className="absolute -bottom-20 right-0 h-96 w-96 rounded-full bg-cyan-500 blur-3xl" />
        </div>

        <div className="relative mx-auto max-w-6xl text-center">
          <p className="text-sm font-bold uppercase tracking-[0.22em] text-cyan-300">
            Customer Stories
          </p>

          <h1 className="mt-5 text-4xl font-bold sm:text-6xl">
            Stories Behind Local Businesses
          </h1>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-200">
            Discover inspiring business journeys, local food stories, and the
            people behind places that customers remember.
          </p>
        </div>
      </section>

      {/* Featured Story Gallery */}
      <section className="px-6 py-20">
        <div className="mx-auto max-w-6xl">
          <div className="mb-10 text-center">
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-blue-700">
              Featured Story Gallery
            </p>

            <h2 className="mt-4 text-3xl font-bold sm:text-4xl">
              Explore the Stories
            </h2>
          </div>

          <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-xl">
            <div className="grid lg:grid-cols-2">
              {/* Image frame */}
              <div className="relative min-h-[320px] overflow-hidden bg-slate-200 sm:min-h-[460px]">
                <Image
                  key={currentStory.image}
                  src={currentStory.image}
                  alt={currentStory.business}
                  fill
                  priority
                  className="object-cover transition duration-700 ease-out hover:scale-105"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent" />

                <div className="absolute bottom-0 left-0 p-7 text-white">
                  <p className="text-sm font-bold uppercase tracking-[0.16em] text-cyan-300">
                    {currentStory.category}
                  </p>

                  <h3 className="mt-3 text-3xl font-bold">
                    {currentStory.business}
                  </h3>
                </div>
              </div>

              {/* Story content */}
              <div className="flex flex-col justify-center p-8 sm:p-12">
                <p className="text-sm font-bold uppercase tracking-[0.18em] text-blue-700">
                  Story {currentStory.id} of {stories.length}
                </p>

                <h2 className="mt-4 text-3xl font-bold leading-tight sm:text-4xl">
                  {currentStory.title}
                </h2>

                <p className="mt-6 text-lg leading-8 text-slate-600">
                  {currentStory.description}
                </p>

                <a
                  href={currentStory.source}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-8 inline-flex w-fit rounded-xl bg-blue-700 px-6 py-3 font-bold text-white transition hover:bg-blue-800"
                >
                  Read Full Story on OPTVLOGS →
                </a>

                {/* Future-ready Previous / Next */}
                <div className="mt-10 flex flex-wrap gap-4">
                  <button
                    type="button"
                    onClick={showPrevious}
                    className="rounded-xl border border-slate-300 px-5 py-3 font-bold text-slate-700 transition hover:border-blue-700 hover:bg-blue-50 hover:text-blue-700"
                  >
                    ← Previous Story
                  </button>

                  <button
                    type="button"
                    onClick={showNext}
                    className="rounded-xl border border-blue-700 bg-blue-700 px-5 py-3 font-bold text-white transition hover:bg-blue-800"
                  >
                    Next Story →
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Story dots */}
          <div className="mt-8 flex justify-center gap-3">
            {stories.map((story, index) => (
              <button
                key={story.id}
                type="button"
                onClick={() => setActiveStory(index)}
                aria-label={`Open ${story.business} story`}
                className={`h-3 rounded-full transition-all ${
                  activeStory === index
                    ? "w-10 bg-blue-700"
                    : "w-3 bg-slate-300 hover:bg-slate-400"
                }`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* All Stories Grid */}
      <section className="bg-white px-6 py-20">
        <div className="mx-auto max-w-6xl">
          <div className="mb-12">
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-blue-700">
              All Customer Stories
            </p>

            <h2 className="mt-4 text-3xl font-bold sm:text-4xl">
              Local Stories Worth Discovering
            </h2>
          </div>

          <div className="grid gap-7 md:grid-cols-2 lg:grid-cols-4">
            {stories.map((story, index) => (
              <button
                key={story.id}
                type="button"
                onClick={() => {
                  setActiveStory(index);
                  window.scrollTo({ top: 500, behavior: "smooth" });
                }}
                className="group overflow-hidden rounded-2xl border border-slate-200 bg-slate-50 text-left shadow-sm transition hover:-translate-y-2 hover:shadow-xl"
              >
                <div className="relative h-56 overflow-hidden bg-slate-200">
                  <Image
                    src={story.image}
                    alt={story.business}
                    fill
                    className="object-cover transition duration-500 group-hover:scale-110"
                  />
                </div>

                <div className="p-6">
                  <p className="text-xs font-bold uppercase tracking-[0.14em] text-blue-700">
                    {story.category}
                  </p>

                  <h3 className="mt-3 text-xl font-bold">{story.business}</h3>

                  <p className="mt-3 text-sm leading-6 text-slate-600">
                    {story.shortDescription}
                  </p>

                  <p className="mt-5 font-bold text-blue-700 group-hover:text-cyan-600">
                    View Story →
                  </p>
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Add future story CTA */}
      <section className="bg-slate-950 px-6 py-20 text-center text-white">
        <div className="mx-auto max-w-4xl">
          <p className="text-sm font-bold uppercase tracking-[0.18em] text-cyan-300">
            Future Stories
          </p>

          <h2 className="mt-4 text-4xl font-bold">
            Every Business Has a Story
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-300">
            More customer stories, entrepreneur journeys, food businesses, and
            local success stories can be added here in the future.
          </p>

          <Link
            href="/business-enquiry"
            className="mt-8 inline-flex rounded-xl bg-cyan-400 px-6 py-3 font-bold text-slate-950 transition hover:bg-cyan-300"
          >
            Share Your Business Story →
          </Link>
        </div>
      </section>
    </main>
  );
}