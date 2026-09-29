import api from "./index";

export const fetchCommentsData = async () => {
  try {
    const response = await api.get("/comments");
    return response.data;
  } catch (error) {
    console.error("Error fetching comments data:", error);
    throw error;
  }
};