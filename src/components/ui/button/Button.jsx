import { cva } from 'class-variance-authority';
import React, { ButtonHTMLAttributes, FC, forwardRef } from 'react';
import { cn } from '@/utils/helpers';
import Loader from '../loader';

const buttonVariants = cva(
  `px-3 py-2 rounded-xl transition-all hover:ring-2 ring-indigo-300 hover:text-white`,
  {
    variants: {
      variant: {
        primary: 'bg-blue-400',
        danger: 'bg-red-500',
        lemony: 'bg-lemon-100 text-white',
        alert: 'bg-yellow-500',
      },
      size: {
        small: 'py-2 px-4',
        large: 'text-xl py-3 px-6',
      },
    },
    defaultVariants: {
      size: 'small',
      variant: 'primary',
    },
  }
);

// export interface ButtonProps
//     extends ButtonHTMLAttributes<HTMLButtonElement>,
//         VariantProps<typeof buttonVariants> {
//     ref?: React.Ref<HTMLButtonElement>;
// }

const Button = forwardRef(
  ({ size, variant, className, children, isLoading, ...props }, ref) => {
    return (
      <button
        ref={ref}
        type="button"
        className={cn(buttonVariants({ className, variant, size }))}
        {...props}
      >
        <div className="flex items-center justify-center gap-3 align-middle">
          {isLoading && <Loader />}
          {children}
        </div>
      </button>
    );
  }
);

export default Button;
