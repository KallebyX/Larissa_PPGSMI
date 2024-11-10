import React from 'react';
import classNames from 'classnames';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  size?: 'sm' | 'md' | 'lg';
}

export const Button: React.FC<ButtonProps> = ({ size = 'md', className, ...props }) => {
  const sizeClasses = {
    sm: 'py-1 px-2 text-sm',
    md: 'py-2 px-4 text-base',
    lg: 'py-3 px-6 text-lg',
  };

  return (
    <button className={classNames(sizeClasses[size], className)} {...props} />
  );
};
