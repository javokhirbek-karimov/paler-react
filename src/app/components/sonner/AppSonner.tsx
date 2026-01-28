// confirmToast.tsx
import React from "react";
import { toast, Toaster } from "sonner";
import { Box, Button } from "@mui/material";

export const confirmToast1 = (
  message: string,
  onConfirm: () => Promise<void> | void,
) => {
  toast.custom((id) => (
    <Box
      sx={{
        p: 2,
        background: "#000000",
        border: "1px solid #a7ac6f",
        color: "#a7ac6f",
        borderRadius: 1,
        minWidth: 250,
      }}
    >
      <p>{message}</p>

      <Box display="flex" gap={1} mt={1} justifyContent="space-between">
        <Button
          color="error"
          size="small"
          sx={{
            backgroundColor: "#000000",
            color: "#ff4444",
            border: "1px solid rgba(255, 68, 68, 0.3)",
            "&:hover": {
              backgroundColor: "rgba(255, 68, 68, 0.2)",
              borderColor: "#ff4444",
              color: "#ff4444",
            },
          }}
          onClick={async () => {
            await onConfirm();
            toast.dismiss(id);
          }}
        >
          Yes
        </Button>

        <Button
          size="small"
          onClick={() => toast.dismiss(id)}
          sx={{
            backgroundColor: "#000000",
            color: "#a7ac6f",
            border: "1px solid #a7ac6f",
            "&:hover": {
              backgroundColor: "#a7ac6f",
              borderColor: "#a7ac6f",
              color: "#ffffff",
            },
          }}
        >
          No
        </Button>
      </Box>
    </Box>
  ));
};

export const confirmToast = (
  message: string,
  onConfirm: () => Promise<void> | void,
) => {
  toast.custom((id) => (
    <Box
      sx={{
        p: 2,
        background: "#000000",
        border: "1px solid #a7ac6f",
        color: "#a7ac6f",
        borderRadius: 1,
        minWidth: 250,
      }}
    >
      <p>{message}</p>

      <Box display="flex" gap={1} mt={1} justifyContent="space-between">
        <Button
          color="error"
          size="small"
          sx={{
            backgroundColor: "#000000",
            color: "#a7ac6f",
            border: "1px solid #a7ac6f",
            "&:hover": {
              backgroundColor: "#a7ac6f",
              borderColor: "#a7ac6f",
              color: "#ffffff",
            },
          }}
          onClick={async () => {
            await onConfirm();
            toast.dismiss(id);
          }}
        >
          Yes
        </Button>

        <Button
          size="small"
          onClick={() => toast.dismiss(id)}
          sx={{
            backgroundColor: "#000000",
            color: "#ff4444",
            border: "1px solid rgba(255, 68, 68, 0.3)",
            "&:hover": {
              backgroundColor: "rgba(255, 68, 68, 0.2)",
              borderColor: "#ff4444",
              color: "#ff4444",
            },
          }}
        >
          No
        </Button>
      </Box>
    </Box>
  ));
};

export default function AppSonner() {
  return (
    <Toaster
      position="top-center"
      richColors
      toastOptions={{
        style: {
          background: "#000000",
          border: "1px solid #a7ac6f",
          fontSize: "18px",
          color: "#a7ac6f",
          fontWeight: 700,
          borderRadius: "8px",
          minWidth: "250px",
        },
      }}
    />
  );
}
