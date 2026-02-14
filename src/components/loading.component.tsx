import { Box, CircularProgress } from "@mui/material";

export default function LoadingOverlay() {
  return (
    <Box
      sx={{
        position: "fixed",
        inset: 0,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "rgba(255,255,255,0.6)",
        zIndex: 9999,
      }}
    >
      <CircularProgress size={30} />
    </Box>
  );
}
