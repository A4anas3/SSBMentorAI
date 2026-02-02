import { useQuery } from "@tanstack/react-query";
import { fetchOirTestNames, fetchOirTestById } from "@/features/oir/oirapi";

export const OIR_KEYS = {
  all: ["oir"],
  names: ["oir", "names"],
  detail: (id) => ["oir", "detail", id],
};

export const useOirTestNames = () => {
  return useQuery({
    queryKey: OIR_KEYS.names,
    queryFn: fetchOirTestNames,
  });
};

export const useOirTestDetail = (id) => {
  return useQuery({
    queryKey: OIR_KEYS.detail(id),
    queryFn: () => fetchOirTestById(id),
    enabled: !!id,
  });
};
