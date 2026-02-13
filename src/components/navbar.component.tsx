"use client";

import Link from "next/link";
import { useAuthStore } from "@/store/auth";

export default function Navbarcomponent() {
  const { user, loading } = useAuthStore();
  return (
    <nav className="fixed inset-x-0 top-0 z-50 border-b border-slate-200 bg-white/80 backdrop-blur">
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

          {user && !loading && (
            <li>
              <Link
                href="/pages/form"
                className="transition hover:text-slate-900"
              >
                Post
              </Link>
            </li>
          )}

          {!user && !loading && (
            <li>
              <Link href={"/pages/register"}>
                <button className="rounded-full border border-slate-300 px-4 py-1.5 text-sm font-medium text-slate-700 transition hover:border-slate-400 hover:text-slate-900">
                  Sign up
                </button>
              </Link>
            </li>
          )}
          {!user && !loading && (
            <li>
              <Link href={"/pages/login"}>
                <button className="rounded-full border border-slate-300 px-4 py-1.5 text-sm font-medium text-slate-700 transition hover:border-slate-400 hover:text-slate-900">
                  Log in
                </button>
              </Link>
            </li>
          )}

          {user && !loading && (
            <li>
              <Link href={"/pages/register"}>
                <button className="rounded-full border border-slate-300 px-4 py-1.5 text-sm font-medium text-slate-700 transition hover:border-slate-400 hover:text-slate-900">
                  Logout
                </button>
              </Link>
            </li>
          )}
        </ul>
      </div>
    </nav>
  );
}
