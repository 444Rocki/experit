export interface CommentsData {
  postId: number;
  id: number;
  name: string;
  email: string;
  body: string;
}

export interface FormInputProp {
  label: string;
  type: string;
  name: string;
  id: string;
  value?: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}