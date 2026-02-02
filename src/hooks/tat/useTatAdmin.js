import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createTat, patchTat, deleteTat } from "@/features/tat/tatapi";

/* ======================
   ADMIN HOOK
====================== */
export const useTatAdmin = () => {
  const queryClient = useQueryClient();

  /* ✅ Create */
  const createMutation = useMutation({
    mutationFn: createTat,
    onSuccess: () => {
      queryClient.invalidateQueries(["tat"]);
    },
  });

  /* ✅ Patch */
  const patchMutation = useMutation({
    mutationFn: patchTat,
    onSuccess: () => {
      queryClient.invalidateQueries(["tat"]);
    },
  });

  /* ✅ Delete */
  const deleteMutation = useMutation({
    mutationFn: deleteTat,
    onSuccess: () => {
      queryClient.invalidateQueries(["tat"]);
    },
  });

  return {
    createTat: createMutation.mutateAsync,
    patchTat: patchMutation.mutateAsync,
    deleteTat: deleteMutation.mutateAsync,

    isCreating: createMutation.isPending,
    isPatching: patchMutation.isPending,
    isDeleting: deleteMutation.isPending,
  };
};
