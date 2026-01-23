import { useMutation, useQueryClient } from "@tanstack/react-query";
import {
  createLecturette,
  deleteLecturette,
  patchLecturette,
} from "@/features/gto/lecturetteapi";

export const useLecturetteAdmin = () => {
  const queryClient = useQueryClient();

  // ✅ CREATE
  const createMutation = useMutation({
    mutationFn: createLecturette,
    onSuccess: () => {
      queryClient.invalidateQueries(["lecturettes"]);
    },
  });

  // ✅ DELETE
  const deleteMutation = useMutation({
    mutationFn: deleteLecturette,
    onSuccess: () => {
      queryClient.invalidateQueries(["lecturettes"]);
    },
  });

  // ✅ PATCH (EDIT)
  const patchMutation = useMutation({
    mutationFn: ({ id, data }) => patchLecturette(id, data),
    onSuccess: () => {
      queryClient.invalidateQueries(["lecturettes"]);
      queryClient.invalidateQueries(["lecturette"]);
    },
  });

  return {
    createLecturette: createMutation,
    deleteLecturette: deleteMutation,
    patchLecturette: patchMutation,
  };
};
