import { useRef, useEffect, useCallback } from "react";

/**
 * A hook that calls a callback when a click occurs outside the provided ref.
 * @param {React.MutableRefObject} ref - The ref representing the component's DOM node.
 * @param {Function} callback - The callback function to call when a click occurs outside the ref.
 */
const useClickOutside = (ref, callback) => {
  const handleClick = useCallback(
    (event) => {
      if (ref.current && !ref.current.contains(event.target)) {
        callback();
      }
    },
    [ref, callback]
  );

  useEffect(() => {
    const handleClickOutside = (event) => handleClick(event);
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [handleClick]);
};

/**
 * A hook that calls a callback when a mousedown event occurs outside the component.
 * @param {Function} callback - The callback function to call when a mousedown event occurs outside the component.
 * @returns {React.MutableRefObject} ref - The ref representing the component's DOM node.
 */
const useClickOutsideMouseDown = (callback) => {
  const ref = useRef(null);

  const handleClick = useCallback(
    (event) => {
      if (ref.current && !ref.current.contains(event.target)) {
        callback();
      }
    },
    [ref, callback]
  );

  useEffect(() => {
    const handleClickOutside = (event) => handleClick(event);
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [handleClick]);

  return ref;
};

export { useClickOutside, useClickOutsideMouseDown };
