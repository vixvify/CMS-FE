"use client";

import { IBlog } from "@/core/domain/blog";

type Homeprops = {
  blogs: IBlog[];
};

export default function Home({ blogs }: Homeprops) {
  return (
    <div className="min-h-screen py-24 pt-40">
      <div className="mx-auto max-w-5xl px-6">
        <h1 className="text-center text-4xl font-semibold tracking-tight text-slate-900">
          Blog App by Next.js & Golang
        </h1>

        <div className="mt-16 flex flex-col items-center gap-10">
          {blogs?.map((e, i) => {
            return (
              <div key={i}>
                <article className="w-full max-w-3xl rounded-2xl border border-slate-200 bg-white p-8 shadow-sm transition hover:shadow-md">
                  <h2 className="text-2xl font-semibold leading-snug text-slate-900">
                    {e.title}
                  </h2>

                  <p className="mt-4 text-base leading-relaxed text-slate-600 line-clamp-3">
                    {e.content}
                  </p>
                  <div className="mt-2">
                    <a
                      href={`/blog/${e.id}`}
                      className="items-center text-sm font-medium text-slate-800 hover:underline"
                    >
                      Read more
                      <span className="ml-1">→</span>
                    </a>
                  </div>
                  <div className="mt-8 flex items-center justify-between border-t border-slate-100 pt-4 text-sm text-slate-500">
                    <div className="flex items-center gap-2">
                      <span className="font-medium text-slate-700">Author</span>
                      <span>{e.author}</span>
                    </div>

                    <div className="flex items-center gap-2">
                      <span className="font-medium text-slate-700">Date</span>
                      <time>
                        {" "}
                        {new Date(e.created_at).toLocaleString("th-TH")}
                      </time>
                    </div>
                  </div>
                </article>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
