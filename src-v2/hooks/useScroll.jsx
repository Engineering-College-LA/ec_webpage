import { useState, useEffect } from "react";

/**
 * @function useScroll
 * @description React Hook that tracks scroll position
 * @returns {Object} : {scrollX, scrollY}
 */
const useScroll = () => {
  const [scrollState, setScrollState] = useState({ scrollX: 0, scrollY: 0 });

  useEffect(() => {
    const handleScroll = () => {
      setScrollState((prevState) => ({
        ...prevState,
        scrollX: window.scrollX,
        scrollY: window.scrollY,
      }));
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return scrollState;
};

export default useScroll;
