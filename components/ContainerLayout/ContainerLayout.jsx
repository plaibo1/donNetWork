import { motion } from "framer-motion";
import { forwardRef } from "react";
import style from "./layout.module.sass";

export function ContainerLayout({ children, id }) {
  return (
    <div className="container max-w-7xl mx-auto px-5 py-5 md:py-24">
      {children}
    </div>
  );
}

export function PageContainer({ children }) {
  return <div className="mt-[80px] sm:mt-14">{children}</div>;
}

export const PopUpWrapperForMotion = forwardRef((props, ref) => {
  return (
    <div className={style.popUpWrapper} ref={ref}>
      {props.children}
    </div>
  );
});

PopUpWrapperForMotion.displayName = "PopUpWrapperForMotion";

export const PopUpWrapper = motion(PopUpWrapperForMotion);

PopUpWrapper.displayName = "PopUpWrapper";
