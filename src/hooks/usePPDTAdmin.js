import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import {
  fetchAllPPDTImagesAdmin,
  addPPDTImage,
  updatePPDTImage,
  deletePPDTImage,
  toggleSamplePPDTImage,
} from "@/features/ppdt/ppdtAdminApi.js";

/* ======================
   GET ALL IMAGES (ADMIN)
   ====================== */
export const useAdminPPDTImages = () =>
  useQuery({
    queryKey: ["admin-ppdt-images"],
    queryFn: fetchAllPPDTImagesAdmin,
  });

/* ======================
   ADD IMAGE (ADMIN)
   ====================== */
export const useAddPPDTImage = () => {
  const qc = useQueryClient();

  return useMutation({
    mutationFn: addPPDTImage,
    onSuccess: () => {
      qc.invalidateQueries({ queryKey: ["admin-ppdt-images"] });
    },
  });
};

/* ======================
   UPDATE IMAGE (ADMIN)
   ====================== */
export const useUpdatePPDTImage = () => {
  const qc = useQueryClient();

  return useMutation({
    mutationFn: updatePPDTImage,
    onSuccess: () => {
      qc.invalidateQueries({ queryKey: ["admin-ppdt-images"] });
    },
  });
};

/* ======================
   DELETE IMAGE (ADMIN)
   ====================== */
export const useDeletePPDTImage = () => {
  const qc = useQueryClient();

  return useMutation({
    mutationFn: deletePPDTImage,
    onSuccess: () => {
      qc.invalidateQueries({ queryKey: ["admin-ppdt-images"] });
      qc.invalidateQueries({ queryKey: ["ppdt-test-images"] });
      qc.invalidateQueries({ queryKey: ["sample-ppdt"] });
    },
  });
};

/* ======================
   TOGGLE SAMPLE (ADMIN)
   ====================== */
export const useToggleSamplePPDTImage = () => {
  const qc = useQueryClient();

  return useMutation({
    mutationFn: toggleSamplePPDTImage,
    onSuccess: () => {
      qc.invalidateQueries({ queryKey: ["ppdt-test-images"] });
      qc.invalidateQueries({ queryKey: ["sample-ppdt"] }); // 🔥 important
    },
  });
};
