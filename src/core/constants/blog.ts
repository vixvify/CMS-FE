import { SnackbarState } from "./alert";

export const confirmDeleteText = {
  title: "Delete it?",
  confirmButtonText: "Yes, Delete it!",
};

export const deleteSuccessText: SnackbarState = {
  open: true,
  message: "Delete success",
  severity: "success",
};

export const deleteFailedText: SnackbarState = {
  open: true,
  message: "Delete failed",
  severity: "error",
};

export const postSuccessText: SnackbarState = {
  open: true,
  message: "Post success",
  severity: "success",
};

export const postFailedText: SnackbarState = {
  open: true,
  message: "Post failed",
  severity: "error",
};

export const updateSuccessText: SnackbarState = {
  open: true,
  message: "Update success",
  severity: "success",
};

export const updateFailedText: SnackbarState = {
  open: true,
  message: "Update failed",
  severity: "error",
};
