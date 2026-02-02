import { useQuery } from "@tanstack/react-query";
import { api } from "@/lib/api";

/* ======================
   QUERY KEYS (LOCAL)
====================== */
const TAT_KEYS = {
  cards: ["tat", "cards"],
  detail: (id) => ["tat", "detail", id],
  sample: (id) => ["tat", "sample", id],
};

/* ======================
   API FUNCTIONS (LOCAL)
====================== */
const fetchTatTestCards = async () => {
  const res = await api.get("/api/tat/tests");
  return res.data;
};

const fetchTatTestById = async (id) => {
  const res = await api.get(`/api/tat/tests/${id}`);
  return res.data;
};

const fetchTatSampleByTestId = async (id) => {
  const res = await api.get(`/api/tat/tests/sample/${id}`);
  return res.data;
};

/* ======================
   HOOKS
====================== */

// 1️⃣ Cards
export const useTatTestCards = () =>
  useQuery({
    queryKey: TAT_KEYS.cards,
    queryFn: fetchTatTestCards,
  });

// 2️⃣ Test Detail
export const useTatTestDetail = (id) =>
  useQuery({
    queryKey: TAT_KEYS.detail(id),
    queryFn: () => fetchTatTestById(id),
    enabled: !!id,
  });

// 3️⃣ Sample
export const useTatSample = (id) =>
  useQuery({
    queryKey: TAT_KEYS.sample(id),
    queryFn: () => fetchTatSampleByTestId(id),
    enabled: !!id,
  });
