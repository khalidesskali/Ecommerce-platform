import React, { forwardRef } from "react";
import { cn } from "@/lib/utils";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  fullWidth?: boolean;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
}

const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    {
      className,
      label,
      error,
      fullWidth = false,
      leftIcon,
      rightIcon,
      ...props
    },
    ref
  ) => {
    return (
      <div className={cn("space-y-2", fullWidth && "w-full")}>
        {label && (
          <label
            htmlFor={props.id}
            className="block text-sm font-medium text-text"
          >
            {label}
            {props.required && <span className="text-destructive ml-1">*</span>}
          </label>
        )}

        <div className="relative">
          {leftIcon && (
            <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-5 h-5">
              {leftIcon}
            </div>
          )}

          <input
            ref={ref}
            className={cn(
              "w-full px-4 py-3 border border-muted rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-200 bg-background placeholder:text-muted-foreground",
              leftIcon && "pl-10",
              rightIcon && "pr-10",
              error &&
                "border-destructive focus:border-destructive focus:ring-destructive/20",
              fullWidth && "w-full",
              className
            )}
            {...props}
          />

          {rightIcon && (
            <div className="absolute right-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-5 h-5">
              {rightIcon}
            </div>
          )}
        </div>

        {error && <p className="text-sm text-destructive">{error}</p>}
      </div>
    );
  }
);

Input.displayName = "Input";

export { Input };
export type { InputProps };
