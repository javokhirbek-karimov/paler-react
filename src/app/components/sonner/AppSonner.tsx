// confirmToast.tsx
import React from "react";
import { toast, Toaster } from "sonner";
import { Box, Button } from "@mui/material";

export const confirmToast = (
  message: string,
  onConfirm: () => Promise<void> | void,
) => {
  toast.custom((id) => (
    <Box
      sx={{
        p: 2,
        background: "#a7ac6f",
        color: "#ffffff",
        borderRadius: 1,
        minWidth: 250,
      }}
    >
      <p>{message}</p>

      <Box display="flex" gap={1} mt={1} justifyContent="space-between">
        <Button
          variant="contained"
          color="error"
          size="small"
          onClick={async () => {
            await onConfirm();
            toast.dismiss(id);
          }}
        >
          Yes
        </Button>

        <Button
          variant="outlined"
          size="small"
          onClick={() => toast.dismiss(id)}
          sx={{
            color: "#000000",
            background: "#ffffff",
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
          color: "#a7ac6f",
          fontWeight: 500,
          borderRadius: "8px",
          minWidth: "250px",
        },
      }}
    />
  );
}
