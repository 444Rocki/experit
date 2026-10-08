import api from "./index";
import type { updateCommentDataProp } from "../types";


const createComment = async (data: updateCommentDataProp) => {
  try {
    const response = await api.post("/comments", data);
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

const updateCommentData = async ({
  id,
  data,
}: {
  id: number;
  data: updateCommentDataProp;
}) => {
  try {
    const response = await api.patch(`/comments/${id}`, data);
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

const deleteComment = async (id: number) => {
  try {
    const response = await api.delete(`/comments/${id}`);
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export { createComment, updateCommentData, deleteComment };