"use client";

import { useForm } from "react-hook-form";
import { blogService } from "@/infra/container";
import { useAuthStore } from "@/store/auth";
import { Snackbar, Alert } from "@mui/material";
import { useRouter } from "next/navigation";
import { useState } from "react";
import LoadingOverlay from "@/components/loading.component";
import { useEffect } from "react";
import { SnackbarState, defaultSnackbar } from "@/core/constants/alert";
import { postFailedText, postSuccessText } from "@/core/constants/blog";
import { ICreateBlog } from "@/core/domain/blog";

export default function Form() {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<ICreateBlog>({ mode: "onBlur" });

  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const { user } = useAuthStore();
  const [snackbar, setSnackbar] = useState<SnackbarState>({
    ...defaultSnackbar,
  });

  const onSubmit = async (data: ICreateBlog) => {
    if (!user) {
      return;
    }
    setLoading(true);
    try {
      await blogService.createBlog(data);
      setLoading(false);
      setSnackbar({
        ...postSuccessText,
      });
      router.push("/");
    } catch (err) {
      console.error(err);
      setLoading(false);
      setSnackbar({
        ...postFailedText,
      });
    }
  };

  useEffect(() => {
    if (!user) {
      router.replace("/pages/login");
    }
  }, [user, router]);

  if (!user) return null;

  return (
    <div className="min-h-screen bg-slate-50 pt-40  px-4">
      {loading && <LoadingOverlay />}
      <Snackbar
        open={snackbar.open}
        autoHideDuration={3000}
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
        onClose={() => setSnackbar((s) => ({ ...s, open: false }))}
      >
        <Alert
          onClose={() => setSnackbar((s) => ({ ...s, open: false }))}
          severity={snackbar.severity}
          variant="filled"
          sx={{ width: "100%" }}
        >
          {snackbar.message}
        </Alert>
      </Snackbar>
      <div className="mx-auto w-full max-w-xl">
        <h1 className="text-center text-4xl font-semibold text-slate-900">
          Post Blog
        </h1>

        <form
          className="mt-10 rounded-2xl border border-slate-200 bg-white p-8 shadow-sm"
          onSubmit={handleSubmit(onSubmit)}
        >
          <div className="flex flex-col gap-2">
            <label className="text-sm font-medium text-slate-700">Title</label>
            <input
              type="text"
              placeholder="Enter blog title"
              {...register("title", { required: true })}
              className="rounded-lg border border-slate-300 px-3 py-2 text-slate-900 outline-none transition focus:border-slate-400 focus:ring-2 focus:ring-slate-200"
            />
            {errors.title && (
              <p className="text-sm text-red-500">Title is required</p>
            )}
          </div>

          <div className="mt-5 flex flex-col gap-2">
            <label className="text-sm font-medium text-slate-700">
              Content
            </label>
            <textarea
              rows={6}
              placeholder="Write your content..."
              {...register("content", { required: true })}
              className="resize-none rounded-lg border border-slate-300 px-3 py-2 text-slate-900 outline-none transition focus:border-slate-400 focus:ring-2 focus:ring-slate-200"
            />
            {errors.content && (
              <p className="text-sm text-red-500">Content is required</p>
            )}
          </div>

          <div className="mt-5 flex flex-col gap-2">
            <label className="text-sm font-medium text-slate-700">Author</label>
            <input
              type="text"
              placeholder="Your name"
              {...register("author", { required: true })}
              className="rounded-lg border border-slate-300 px-3 py-2 text-slate-900 outline-none transition focus:border-slate-400 focus:ring-2 focus:ring-slate-200"
            />
            {errors.author && (
              <p className="text-sm text-red-500">Author is required</p>
            )}
          </div>

          <button
            type="submit"
            className="mt-8 w-full rounded-lg bg-slate-900 py-2.5 text-sm font-medium text-white transition hover:bg-slate-800"
            disabled={!isValid}
          >
            Post blog
          </button>
        </form>
      </div>
    </div>
  );
}
