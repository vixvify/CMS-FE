"use client";

import Link from "next/link";
import { useAuthStore } from "@/store/auth";
import Swal, { SweetAlertOptions } from "sweetalert2";
import { authservice } from "@/infra/container";
import { Snackbar, Alert } from "@mui/material";
import { useState } from "react";

type SnackbarState = {
  open: boolean;
  message: string;
  severity: "success" | "error";
};

export default function Navbarcomponent() {
  const { user, setUser } = useAuthStore();

  const [snackbar, setSnackbar] = useState<SnackbarState>({
    open: false,
    message: "",
    severity: "success",
  });

  const confirmAlertStyle: SweetAlertOptions = {
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
  };

  const confirmLogout = () => {
    Swal.fire({
      title: "Log out?",
      confirmButtonText: "Yes, Logout!",
      ...confirmAlertStyle,
    }).then((result) => {
      if (result.isConfirmed) {
        logout();
      }
    });
  };

  const logout = async () => {
    try {
      await authservice.logout();
      setUser(null);
      setSnackbar({
        open: true,
        message: "Log out success",
        severity: "success",
      });
    } catch (err) {
      console.error(err);
      setSnackbar({
        open: true,
        message: "Log out failed",
        severity: "error",
      });
    }
  };

  return (
    <nav className="fixed inset-x-0 top-0 z-50 border-b border-slate-200 bg-white/80 backdrop-blur">
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
      <div className="mx-auto flex h-20 max-w-6xl items-center justify-between px-6">
        <Link
          href="/"
          className="text-lg font-semibold tracking-tight text-slate-900"
        >
          BlogApp
        </Link>

        <ul className="flex items-center gap-10 text-sm font-medium text-slate-700">
          <li>
            <Link href="/" className="transition hover:text-slate-900">
              Home
            </Link>
          </li>

          {user && (
            <li>
              <Link
                href="/pages/form"
                className="transition hover:text-slate-900"
              >
                Post
              </Link>
            </li>
          )}

          {!user && (
            <li>
              <Link href={"/pages/login"}>
                <button className="rounded-full border border-slate-300 px-4 py-1.5 text-sm font-medium text-slate-700 transition hover:border-slate-400 hover:text-slate-900">
                  Log in
                </button>
              </Link>
            </li>
          )}

          {user && (
            <li>
              <button
                className="rounded-full border border-slate-300 px-4 py-1.5 text-sm font-medium text-slate-700 transition hover:border-slate-400 hover:text-slate-900"
                onClick={confirmLogout}
              >
                Logout
              </button>
            </li>
          )}
        </ul>
      </div>
    </nav>
  );
}
