import { FC, ReactNode } from "react";

interface ButtonProps {
  classType?: string;
  className?: string;
  type?: "submit" | "reset" | "button";
  disabled?: boolean;
  onClick?: () => void;
  children: ReactNode;
}

const Button: FC<ButtonProps> = ({
  classType,
  className,
  children,
  ...props
}) => {
  const cls = ["bg-grey text-black-500 rounded pt-2 pb-1 text-sm", className];

  return (
    <button className={cls.join(" ")} {...props}>
      {children}
    </button>
  );
};

export default Button;
