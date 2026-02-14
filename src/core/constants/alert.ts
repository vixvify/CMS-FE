import { SweetAlertOptions } from "sweetalert2";

export type SnackbarState = {
  open: boolean;
  message: string;
  severity: "success" | "error";
};

export const defaultSnackbar: SnackbarState = {
  open: false,
  message: "",
  severity: "success",
};

export const confirmAlertStyle: SweetAlertOptions = {
  icon: "warning",
  showCancelButton: true,
  confirmButtonColor: "#3085d6",
  cancelButtonColor: "#d33",
};
