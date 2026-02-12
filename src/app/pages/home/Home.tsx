"use client";

import { IBlog } from "@/core/domain/blog";

type Homeprops = {
  blogs: IBlog[];
};

export default function Home({ blogs }: Homeprops) {
  return (
    <div className="min-h-screen py-24 pt-35">
      <div className="mx-auto max-w-5xl px-6">
        <h1 className="text-center text-4xl font-semibold tracking-tight text-slate-900">
          Blog App by Next.js & Golang
        </h1>

        <div className="mt-16 flex flex-col items-center gap-10">
          <article className="w-full max-w-3xl rounded-2xl border border-slate-200 bg-white p-8 shadow-sm transition hover:shadow-md">
            <h2 className="text-2xl font-semibold leading-snug text-slate-900">
              What is Next.js
            </h2>

            <p className="mt-4 text-base leading-relaxed text-slate-600">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum.
            </p>

            <div className="mt-8 flex items-center justify-between border-t border-slate-100 pt-4 text-sm text-slate-500">
              <div className="flex items-center gap-2">
                <span className="font-medium text-slate-700">Author</span>
                <span>vixvify</span>
              </div>

              <div className="flex items-center gap-2">
                <span className="font-medium text-slate-700">Date</span>
                <time>11/19/2025</time>
              </div>
            </div>
          </article>
        </div>
      </div>
    </div>
  );
}
