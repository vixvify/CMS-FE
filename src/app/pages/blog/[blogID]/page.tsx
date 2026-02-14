"use client";

import { blogService } from "@/infra/container";
import Link from "next/link";
import { IBlog } from "@/core/domain/blog";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import LoadingOverlay from "@/components/loading.component";

export default function Blog() {
  const { blogID } = useParams() as { blogID: string };
  const [loading, setLoading] = useState(false);
  const [blog, setBlog] = useState<IBlog>();

  useEffect(() => {
    const fetchBlog = async () => {
      setLoading(true);
      const res = await blogService.getBlogByID(blogID);
      setBlog(res);
      setLoading(false);
    };

    if (blogID) {
      fetchBlog();
    }
  }, [blogID]);

  return (
    <div className="min-h-screen bg-slate-50 pt-40 px-6">
      {loading && <LoadingOverlay />}
      <div className="mx-auto max-w-3xl">
        <Link href="/" className="text-sm text-slate-600 hover:underline">
          ← Back to home
        </Link>

        <article className="mt-8 rounded-2xl border border-slate-200 bg-white p-10 shadow-sm">
          <h1 className="text-4xl font-semibold text-slate-900 leading-tight">
            {blog?.title}
          </h1>

          <div className="mt-6 flex items-center justify-between text-sm text-slate-500">
            <div>
              <span className="font-medium text-slate-700">Author:</span>{" "}
              {blog?.author}
            </div>

            {blog && (
              <time>{new Date(blog.created_at).toLocaleString("th-TH")}</time>
            )}
          </div>

          <div className="mt-8 border-t border-slate-100 pt-6 text-slate-700 leading-relaxed whitespace-pre-line">
            {blog?.content}
          </div>
        </article>
      </div>
    </div>
  );
}
