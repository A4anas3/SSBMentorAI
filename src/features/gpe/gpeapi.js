import { api } from "@/lib/api";

/* ======================
   GET SAMPLE GPE
====================== */
export const fetchSampleGpe = async () => {
  const res = await api.get("/gto/gpe/sample");
  return res.data;
};

/* ======================
   GET GPE BY ID
====================== */
export const fetchGpeById = async (id) => {
  const res = await api.get(`/gto/gpe/${id}`);
  return res.data;
};

/* ======================
   GET GPE TEST
====================== */
export const fetchGpeTest = async () => {
  const res = await api.get("/gto/gpe/test");
  return res.data;
};

/* ======================
   ADMIN CREATE GPE
====================== */
/* ======================
   ADMIN CREATE GPE
====================== */
export const createGpe = async (payload) => {
  const res = await api.post("/admin/gto/gpe/create", payload);
  return res.data;
};

/* ======================
   ADMIN DELETE GPE
====================== */
export const deleteGpe = async (id) => {
  const res = await api.delete(`/admin/gto/gpe/${id}`);
  return res.data;
};
export const patchGpe = async (id, payload) => {
  const res = await api.patch(`/admin/gto/gpe/update/${id}`, payload);
  return res.data;
};
