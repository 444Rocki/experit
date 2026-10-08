import {useEffect, useState} from 'react';
import { Buttons } from "../components/ui/Buttons";
import { FormInput } from "../components/ui/FormInput";
import type { CommentsData, updateCommentDataProp } from "../types";
import { fetchCommentsData } from "../Service/query";
import { createComment, updateCommentData, deleteComment } from "../Service/mutations"
import { Modal } from "../components/ui/modal";


export const Home = () => {

  const [comments, setComments] = useState<CommentsData[]>([]);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [email, setEmail] = useState<string>("");
  const [name, setName] = useState<string>("");
  const [commentBody, setCommentBody] = useState<string>("");
  const [postId, setPostId] = useState<number>(1);

  useEffect(() => {
  
    fetchCommentsData()
      .then((data) => {
        setComments(data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

const handleUpdateForm = (id: number, name: string, value: string) => {
    setComments((prevComments) => {
      return prevComments.map((comment) => {
        if (comment.id === id) {
          return { ...comment, [name]: value };
        }
        return comment;
      });
    });
  };

  const handleEdit = (id: number) => {
    const email = comments.find((comment) => comment.id === id)?.email;
    const name = comments.find((comment) => comment.id === id)?.name;
    const body = comments.find((comment) => comment.id === id)?.body;
    const payload = {
      email,
      name,
      body,
    };
    updateCommentData({ id, data: payload })
      .then(() => {
        console.log("Comment updated");
      })
      .catch((err) => {
        console.error("Error updating comment", err);
      });
  };

const handleDelete = (id: number) => {
    deleteComment(id)
      .then(() => {
        setComments((prevComments) => {
          return prevComments.filter((comment) => comment.id !== id);
        });
        console.log("Comment deleted");
      })
      .catch((err) => {
        console.error("Error deleting comment", err);
      });
  };

  const handleSubmit = () => {
    const payload: updateCommentDataProp = {
      email,
      name,
      postId,
    };
    createComment(payload)
      .then(() => {
        console.log("Comment created");
      })
      .catch((err) => {
        console.error("Error creating comment", err);
      });
  };

  return (
    <div className='flex flex-col gap-4 w-full'>
      <Buttons.solid
        color='bg-blue-400'
        hover='bg-blue-500'
        onClick={() => setIsModalOpen(true)}>
        New Post
      </Buttons.solid>
      {comments.map((comment: CommentsData) => (
        <div className='flex justify-between items-center gap-2' key={comment.id}>
          <div className='flex gap-2 items-center justify-center w-full'>
            <FormInput
              label={`name-${comment.id}`}
              type='text'
              name='name'
              id='name'
              value={comment.name}
              onChange={(e) => handleUpdateForm(comment.id, 'name', e.target.value)}
            />
            <FormInput
              label={`email-${comment.id}`}
              type='text'
              name='email'
              id='email'
              value={comment.email}
              onChange={(e) => handleUpdateForm(comment.id, 'email', e.target.value)}
            />
            <FormInput
              label={`body-${comment.id}`}
              type='text'
              name='body'
              id='body'
              value={comment.body}
              onChange={(e) => handleUpdateForm(comment.id, 'body', e.target.value)}
            />
          </div>
          <div className='flex gap-2 items-center'>
            <Buttons.solid
              color='bg-blue-400'
              hover='bg-blue-500'
              onClick={() => {handleEdit(comment.id)}}>
              Edit
            </Buttons.solid>
            <Buttons.outline
              color='bg-red-400'
              hover='bg-red-500'
              textColor='bg-red-400'
              onClick={() => {handleDelete(comment.id)}}>
              Delete
            </Buttons.outline>
          </div>
        </div>
      ))}
      {isModalOpen && (
        <Modal onClose={() => setIsModalOpen(false)}>
          <div className='flex flex-col gap-2 items-center justify-center w-full'>
            <FormInput
              label={`name`}
              type='text'
              name='name'
              id='name'
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <FormInput
              label={`email`}
              type='text'
              name='email'
              id='email'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <FormInput
              label={`body`}
              type='text'
              name='body'
              id='body'
              value={commentBody}
              onChange={(e) => setCommentBody(e.target.value)}
            />
            <FormInput
              label={`userId`}
              type='number'
              name='userId'
              id='userId'
              value={postId.toString()}
              onChange={(e) => setPostId(Number(e.target.value))}
            />
            <Buttons.solid
              color='bg-blue-400'
              hover='bg-blue-500'
              onClick={handleSubmit}>
              Submit
            </Buttons.solid>
          </div>
        </Modal>
      )}
    </div>
  );
};
