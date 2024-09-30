import { clsx } from "clsx";
import * as React from "react";
import Marker from "./Marker";

type ButtonProps = {
  icon: string;
  children: React.ReactNode; // Add the 'children' prop here
  href: string;
  onClick: () => void;
  markerFill: string;
};

const Button: React.FC<ButtonProps> = ({
  icon,
  children,
  href,
  onClick,
  markerFill,
}) => {
  const Inner = () => (
    <>
      <span className="relative flex items-center min-h-[60px] px-4 gap-5 rounded-2xl inner-before group-hover:before:opacity-100 overflow-hidden">
        <span className="absolute -left-[1px]">
          <Marker markerFill={markerFill} />
        </span>
        {icon && (
          <img
            src={icon}
            alt="circle"
            className="size-10 mr-5 object-contain z-10"
          />
        )}
        <span className="relative z-2 font-poppins base-bold text-p1 uppercase">
          {children}
        </span>
      </span>
    </>
  );

  return href ? (
    <a
      className={clsx("relative, p-0.5 gap-5 rounded-2xl shadow-500 group")}
      href={href}
    >
      <Inner />
    </a>
  ) : (
    <button
      className={clsx("relative, p-0.5 gap-5 rounded-2xl shadow-500 group")}
    >
      <Inner />
    </button>
  );
};

export default Button;
