export interface CommentsData {
  postId: number;
  id: number;
  userId: number;
  title?: string;
  body?: string;
}

export interface updateCommentDataProp {
  userId?: number;
  title?: string;
  body?: string;
}

export interface FormInputProp {
  label: string;
  type: string;
  name: string;
  id: string;
  value?: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}