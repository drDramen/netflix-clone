import { ReactNode } from 'react';

type Props = {
  className?: string;
  children?: ReactNode;
};

export const Container = ({ className = '', children }: Props) => (
  <div className={`max-w-8xl ml-auto mr-auto px-4 md:px-8 lg:px-16 ${className}`}>{children}</div>
);
