import { ReactNode } from 'react';
import Div from '../../Div';

interface IModalRootProps {
  isVisible: boolean;
  children: ReactNode;
}

export const ModalRoot = ({ isVisible, children }: IModalRootProps) => {
  return (
    <Div
      animate={{ opacity: isVisible ? 1 : 0 }}
      transition={{ duration: 0.3 }}
      className={
        ' absolute left-0 top-0 z-10 flex h-screen w-screen items-center justify-center ' +
        (isVisible ? 'block' : 'hidden')
      }
    >
      {children}
    </Div>
  );
};
