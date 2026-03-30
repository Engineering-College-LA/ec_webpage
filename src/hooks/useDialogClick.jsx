import { useCallback } from "react";

const useDialogClick = (ref, callback) => {
  const handleDialogClick = useCallback(
    (e) => {
      const dialogDimensions = ref.current.getBoundingClientRect();
      const isOutsideClick =
        e.clientX < dialogDimensions.left ||
        e.clientX > dialogDimensions.right ||
        e.clientY < dialogDimensions.top ||
        e.clientY > dialogDimensions.bottom;

      if (isOutsideClick) {
        ref.current.close();
        callback();
      }
    },
    [ref, callback]
  );

  return { handleDialogClick };
};

export default useDialogClick;
