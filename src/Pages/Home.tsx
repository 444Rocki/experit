import {useEffect, useState} from 'react';
import { Buttons } from "../components/ui/Buttons";
import { FormInput } from "../components/ui/FormInput";
import type { CommentsData } from "../types";
import { fetchCommentsData } from "../Service/query";


export const Home = () => {

  const [comments, setComments] = useState<CommentsData[]>([]);

  useEffect(() => {
  
    fetchCommentsData()
      .then((data) => {
        setComments(data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);
  return (
    <div className='flex flex-col gap-4 w-full'>
      {comments.map((comment: CommentsData) => (
        <div className='flex justify-between items-center gap-2' key={comment.id}>
          <FormInput
            label=''
            type='text'
            name='name'
            id='name'
            value={comment.name}
            onChange={() => {}}
          />
          <div className='flex gap-2 items-center'>
            <Buttons.solid
              color='bg-blue-400'
              hover='bg-blue-500'
              onClick={() => {}}>
              Edit
            </Buttons.solid>
            <Buttons.outline
              color='bg-red-400'
              hover='bg-red-500'
              textColor='bg-red-400'>
              Delete
            </Buttons.outline>
          </div>
        </div>
      ))}
    </div>
  );
};