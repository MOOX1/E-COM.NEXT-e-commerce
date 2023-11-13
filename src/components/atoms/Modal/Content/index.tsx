import { ReactNode } from 'react';
import Div from '../../Div';

interface IContentProps {
  isVisible: boolean;
  width: string;
  children: ReactNode;
}

export const Content = ({ isVisible, width, children }: IContentProps) => {
  return (
    <Div
      animate={{
        y: isVisible ? 0 : -100,
        opacity: isVisible ? 1 : 0,
        width: width,
      }}
      transition={{ duration: 0.3, delay: 0.1 }}
      className={`relative z-50 h-auto rounded-3xl border border-mediaBlue bg-strongBlue`}
    >
      {children}
    </Div>
  );
};
