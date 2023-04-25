import axios from "../core/axios";

export const getAll = async (type) => {
  return (await axios.get("/files?type=" + type)).data;
};

export const remove = async (id) => {
  return (await axios.delete("/files?id=" + id.join(","))).data;
};

export const upload = async (file) => {
  const formData = new FormData();
  formData.append("file", file);
  const { data } = await axios.post("/upload", formData);
  return data;
};
