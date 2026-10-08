import React from "react";
import { Buttons } from "./Buttons";

export const Modal = ({
  children,
  onClose,
}: {
  children: React.ReactNode;
  onClose: () => void;
}) => {
  return (
    <div className='fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center'>
      <div className='bg-white p-4 rounded-lg w-1/2'>
        <div className='flex gap-2 justify-between items-center'>
          <h1>New Post</h1>
          <Buttons.solid
            color='bg-blue-400'
            hover='bg-blue-500'
            onClick={onClose}>
            Close
          </Buttons.solid>
        </div>
        <div className='flex flex-col gap-2'>{children}</div>
      </div>
    </div>
  );
};