import { useQuery } from "@tanstack/react-query";

import { useMutation } from "@tanstack/react-query";
import {
  fetchBasicLecturettes,
  searchLecturettes,
  filterLecturettesByCategory,
  getLecturetteById,
} from "@/features/gto/lecturetteapi.js";

export const useLecturettes = () => {
  return useQuery({
    queryKey: ["lecturettes"],
    queryFn: fetchBasicLecturettes,
  });
};

export const useLecturetteSearch = () => {
  const searchMutation = useMutation({
    mutationFn: searchLecturettes,
  });

  const categoryMutation = useMutation({
    mutationFn: filterLecturettesByCategory,
  });

  return {
    search: searchMutation,
    filterByCategory: categoryMutation,
  };
};
export const useLecturetteById = (id) => {
  return useQuery({
    queryKey: ["lecturette", id],
    queryFn: () => getLecturetteById(id),
    enabled: !!id, // only run when id exists
  });
};
