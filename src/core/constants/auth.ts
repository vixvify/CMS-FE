import { SnackbarState } from "./alert";

export const loginSuccessText: SnackbarState = {
  open: true,
  message: "Login success",
  severity: "success",
};

export const loginFailedText: SnackbarState = {
  open: true,
  message: "Login failed",
  severity: "error",
};

export const signupSuccessText: SnackbarState = {
  open: true,
  message: "Sign up success",
  severity: "success",
};

export const signupFailedText: SnackbarState = {
  open: true,
  message: "Sign up failed",
  severity: "error",
};

export const confirmLogoutText = {
  title: "Log out?",
  confirmButtonText: "Yes, Logout!",
};

export const logoutSuccessText: SnackbarState = {
  open: true,
  message: "Log out success",
  severity: "success",
};

export const logoutFailedText: SnackbarState = {
  open: true,
  message: "Log out failed",
  severity: "error",
};
