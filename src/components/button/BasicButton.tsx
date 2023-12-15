import React, { ReactNode, MouseEvent } from 'react';

interface BasicButtonProps {
  children?: ReactNode;
  className?: string;
}

export const BasicButton: React.FC<BasicButtonProps> = ({
  children,
  className,
}) => {
  const buttonClassName = `text-white py-2 px-4 rounded text-sm ${
    className || ''
  }`;

  return <button className={buttonClassName}>{children}</button>;
};
