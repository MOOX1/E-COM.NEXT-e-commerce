'use client';

import { X } from 'lucide-react';
import { ReactNode } from 'react';
import Div from '../Div';

interface ModalProps {
  width: string;
  iconClose: boolean;
  contentModal: ReactNode;
  isVisible: boolean;
  handleModal: () => void;
}

export default function Modal({
  iconClose,
  width,
  contentModal,
  handleModal,
  isVisible
}: ModalProps) {
  return (
    <>
      <Div
        animate={{ opacity: isVisible ? 1 : 0 }}
        transition={{ duration: 0.3 }}
        className={
          ' absolute left-0 top-0 z-10 flex h-screen w-screen items-center justify-center ' +
          (isVisible ? 'block' : 'hidden')
        }
      >
        <div
          onClick={handleModal}
          className={
            ' absolute left-0 top-0 z-10 flex h-screen w-screen items-center justify-center bg-black/50 ' +
            (isVisible ? 'block' : 'hidden')
          }
        ></div>
        <Div
          animate={{
            y: isVisible ? 0 : -100,
            opacity: isVisible ? 1 : 0,
            width: width
          }}
          transition={{ duration: 0.3, delay: 0.1 }}
          className={`relative z-50 h-auto rounded-3xl border border-mediaBlue bg-strongBlue`}
        >
          {contentModal}
          {iconClose && (
            <div
              onClick={handleModal}
              className="absolute right-4 top-4 cursor-pointer"
            >
              <X className="text-white" />
            </div>
          )}
        </Div>
      </Div>
    </>
  );
}
