import { api } from "@/lib/api";

/* ======================
   USER APIs
====================== */
export const fetchOirTestNames = async () => {
  const res = await api.get("/api/oir/tests");
  return res.data;
};

export const fetchOirTestById = async (id) => {
  const res = await api.get(`/api/oir/tests/${id}`);
  return res.data;
};

/* ======================
   ADMIN APIs
====================== */
export const createOir = async (payload) => {
  const res = await api.post("/api/admin/oir/tests", payload);
  return res.data;
};

export const patchOir = async ({ id, payload }) => {
  const res = await api.patch(`/api/admin/oir/tests/${id}/full`, payload);
  return res.data;
};

export const deleteOir = async (id) => {
  const res = await api.delete(`/api/admin/oir/tests/${id}`);
  return res.data;
};
