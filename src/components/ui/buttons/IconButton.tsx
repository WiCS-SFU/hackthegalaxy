import { forwardRef } from "react";
import React from "react";
import { cva, VariantProps } from "class-variance-authority";
import clsx from "clsx";

//Define the button base type
const base =
  "inline-flex p-lg justify-center items-center gap-lg rounded-md transition-colors";

//Variants for the button
const iconButtonStyles = cva(base, {
  variants: {
    variant: {
      default:
        "bg-pink-100 text-purple-600 hover:text-pink-100 hover:bg-purple-600",
      outline:
        "text-pink-100 border border-pink-100 hover:bg-purple-600 hover:text-pink-100",
    },
    disabled: {
      true: "pointer-events-none",
      false: "",
    },
  },

  compoundVariants: [
    //DEFAULT disabled
    {
      variant: "default",
      disabled: true,
      class: "bg-pink-100 text-purple-300",
    },
    //Outline disabled
    {
      variant: "outline",
      disabled: true,
      class: "border-purple-300 text-purple-300",
    },
  ],

  defaultVariants: {
    variant: "default",
    disabled: false,
  },
});

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> &
  VariantProps<typeof iconButtonStyles> & {
    icon?: React.ReactNode;
  };

const IconButton = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ variant, icon, disabled, className, children, ...props }, ref) => {
    return (
      <button
        ref={ref}
        disabled={disabled}
        data-icon-btn={variant}
        className={clsx(
          iconButtonStyles({
            variant,
            disabled: disabled ? true : false,
            className,
          }),
        )}
        {...props}
      >
        {icon && <span>{icon}</span>}
      </button>
    );
  },
);
IconButton.displayName = "Icon Button";

export default IconButton;
