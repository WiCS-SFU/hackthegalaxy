/**
 * Button Component:-------------------------------------------
 *
 * Props:
 * - variant: "default" | "ghost" | "outline"
 * - size: "default" | "large" | "small"
 * - iconPos: "none" | "left" | "right"
 * - icon?: React node (optional)
 * - disabled?: boolean
 *
 * Default Button with <Button/>:-------------------------------
 * variant = "default"
 * size = "default"
 * iconPos = "none"
 *
 * EXAMPLE:------------------------------------------------------
 * <Button
 *   variant="default"
 *   size="large"
 *   icon={<PlusIcon className="h-5 w-5" />}
 *   iconPos="left"
 * >
 *   Apply Now
 * </Button>
 *
 * DISABLE EXAMPLE:-----------------------------------------------
 * <Button disabled>
 *   Apply Now
 * </Button>
 *
 * COMMON USAGE:---------------------------------------------------
 * Default: <Button>Apply Now</Button>
 * Outline: <Button variant="outline">Apply Now</Button>
 * Ghost: <Button variant="ghost">Apply Now</Button>
 * Icon button: <Button icon={<PlusIcon />} iconPos="left">Apply Now</Button> --> Remember to import PlusIcon from Heroicons
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
      ghost: "text-pink-100",
      default:
        "bg-pink-100 text-purple-600 hover:border-none hover:bg-purple-600 hover:text-pink-100",
      outline: "text-pink-100 border-1 border-pink-100",
    },
    size: {
      large: "px-lg py-lg gap-lg text-accent-lg",
      default: "px-xl py-lg gap-lg text-accent-md",
      small: "px-xl py-lg gap-md text-accent-xs",
    },
    iconPos: {
      none: "flex",
      left: "flex flex-row",
      right: "flex flex-row-reverse",
    },
    disabled: {
      true: "pointer-events-none",
      false: "",
    },
  },

  compoundVariants: [
    //DEFAULT hover
    {
      variant: "default",
      disabled: false,
      class: "hover:bg-purple-600 hover:text-pink-100",
    },
    //DEFAULT disabled
    {
      variant: "default",
      disabled: true,
      class: "bg-pink-100 text-purple-300",
    },
    //Ghost hover
    {
      variant: "ghost",
      disabled: false,
      class: "hover:bg-purple-600 hover:text-pink-100",
    },
    //Ghost disabled
    {
      variant: "ghost",
      disabled: true,
      class: "text-purple-300",
    },
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
