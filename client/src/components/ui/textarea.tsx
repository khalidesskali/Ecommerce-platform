import React, { forwardRef } from "react";
import { cn } from "@/lib/utils";

interface TextareaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  error?: string;
  fullWidth?: boolean;
}

const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, label, error, fullWidth = false, ...props }, ref) => {
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

        <textarea
          ref={ref}
          className={cn(
            "w-full px-4 py-3 border border-muted rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-200 bg-background placeholder:text-muted-foreground resize-none",
            error &&
              "border-destructive focus:border-destructive focus:ring-destructive/20",
            fullWidth && "w-full",
            className
          )}
          {...props}
        />

        {error && <p className="text-sm text-destructive">{error}</p>}
      </div>
    );
  }
);

Textarea.displayName = "Textarea";

export { Textarea };
export type { TextareaProps };
