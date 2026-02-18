/**
 * EXAMPLE TO USE THE BUTTON:
 *  <Button variant="default" icon={<PlusIcon className="h-5 w-5" />} size="large" iconPos="left">
      text go here
    </Button>

    OR USE FOR DISABLE:
    <Button disabled icon={<PlusIcon className="h-5 w-5" />} size="large" iconPos="left">
      text go here
    </Button>
 */
import { forwardRef } from "react";
import React from "react";
import { cva, VariantProps } from "class-variance-authority";
import clsx from "clsx";

//Define the button base type
const base = "inline-flex items-center rounded-md transition";

//Variants for the button
const buttonStyles = cva(base, {
  variants: {
    variant: {
      default:
        "bg-pink-100 text-purple-600 hover:border-none hover:bg-purple-600 hover:text-pink-100",
      outline: "text-pink-100 border-1 border-pink-100",
    },
    size: {
      large: "px-lg py-lg gap-lg text-accent-md",
      default: "px-xl py-lg gap-lg text-accent-default",
      small: "px-xl py-lg gap-md text-accent-xs",
    },
    iconPos: {
      none: "flex",
      left: "flex flex-row",
      right: "flex flex-row-reverse",
    },
    disabled: {
      true: "bg-pink-100 text-purple-300 pointer-events-none",
      false: "",
    },
  },

  compoundVariants: [
    //Outline hover
    {
      variant: "outline",
      disabled: false,
      class: "hover:border-transparent hover:bg-purple-600 hover:text-pink-100",
    },

    //Outline disable
    {
      variant: "outline",
      disabled: true,
      class: "border-purple-300 text-purple-300",
    },
  ],

  defaultVariants: {
    variant: "default",
    size: "default",
    iconPos: "none",
    disabled: false,
  },
});

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> &
  VariantProps<typeof buttonStyles> & {
    icon?: React.ReactNode;
  };

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    { variant, size, icon, iconPos, disabled, className, children, ...props },
    ref,
  ) => {
    return (
      <button
        ref={ref}
        disabled={disabled}
        className={clsx(
          buttonStyles({
            variant,
            size,
            iconPos,
            disabled: disabled ? true : false,
            className,
          }),
        )}
        {...props}
      >
        {icon && iconPos !== "none" && <span>{icon}</span>}
        <span>{children}</span>
      </button>
    );
  },
);
Button.displayName = "Button";

export default Button;
