import { useRef } from "react";

const useAnimation = () => {
  const elementRef = useRef<HTMLDivElement>(null);

  const withAnimation =
    (callback: () => void) => (ref: React.RefObject<HTMLDivElement>) => {
      ref.current?.classList.add("animate__animated", "animate__zoomOutRight");
      setTimeout(() => {
        callback();
      }, 1000);
    };

  return { elementRef, withAnimation };
};

export default useAnimation;
