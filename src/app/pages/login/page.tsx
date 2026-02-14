"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { authservice } from "@/infra/container";
import { Snackbar, Alert } from "@mui/material";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { useAuthStore } from "@/store/auth";
import LoadingOverlay from "@/components/loading.component";
import { ILogin } from "@/core/domain/auth";
import { SnackbarState, defaultSnackbar } from "@/core/constants/alert";
import { loginSuccessText, loginFailedText } from "@/core/constants/auth";

export default function Register() {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<ILogin>({ mode: "onBlur" });

  const [loading, setLoading] = useState(false);
  const [snackbar, setSnackbar] = useState<SnackbarState>({
    ...defaultSnackbar,
  });
  const router = useRouter();
  const { setUser } = useAuthStore();

  const onSubmit = async (data: ILogin) => {
    setLoading(true);
    try {
      const user = await authservice.login(data);
      setLoading(false);
      setUser(user);
      setSnackbar({
        ...loginSuccessText,
      });
      router.push("/");
    } catch (err) {
      console.error(err);
      setLoading(false);
      setSnackbar({
        ...loginFailedText,
      });
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 pt-40 px-4">
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
          Log in
        </h1>

        <form
          className="mt-10 rounded-2xl border border-slate-200 bg-white p-8 shadow-sm"
          onSubmit={handleSubmit(onSubmit)}
        >
          <div className="mt-5 flex flex-col gap-2">
            <label className="text-sm font-medium text-slate-700">Email</label>
            <input
              type="text"
              placeholder="Your Email"
              {...register("email", { required: true })}
              className="rounded-lg border border-slate-300 px-3 py-2 text-slate-900 outline-none transition focus:border-slate-400 focus:ring-2 focus:ring-slate-200"
            />
            {errors.email && (
              <p className="text-sm text-red-500">Email is required</p>
            )}
          </div>

          <div className="mt-5 flex flex-col gap-2">
            <label className="text-sm font-medium text-slate-700">
              Password
            </label>
            <input
              type="password"
              placeholder="Enter Password"
              {...register("password", { required: true })}
              className="rounded-lg border border-slate-300 px-3 py-2 text-slate-900 outline-none transition focus:border-slate-400 focus:ring-2 focus:ring-slate-200"
            />
            {errors.password && (
              <p className="text-sm text-red-500">Password is required</p>
            )}
          </div>

          <button
            type="submit"
            className="mt-8 w-full rounded-lg bg-slate-900 py-2.5 text-sm font-medium text-white transition hover:bg-slate-800"
            disabled={!isValid}
          >
            Log in
          </button>
          <div className="flex justify-center items-center gap-5 mt-7">
            <p className="text-sm font-medium text-slate-700">
              Don&apos;t Have any account
            </p>
            <Link href={"/pages/register"}>
              <p className="text-sm font-medium text-slate-700 hover:text-black">
                Sign up
              </p>
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}
