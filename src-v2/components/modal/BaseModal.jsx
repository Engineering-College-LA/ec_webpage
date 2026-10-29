import { useEffect, useRef } from "react";
import { X } from "lucide-react";
import Button from "../button/Button";
import useDialogClick from "../../hooks/useDialogClick";

const BaseModal = ({
  label,
  openModal,
  closeModal,
  children,
  className = "",
  handleOutsideClick = true,
}) => {
  const modalRef = useRef();
  const { handleDialogClick } = useDialogClick(modalRef, closeModal);

  useEffect(() => {
    if (openModal) {
      modalRef.current?.showModal();
    } else {
      modalRef.current?.close();
    }
  }, [openModal]);

  return (
    <dialog
      ref={modalRef}
      className={`dialog ${className}`}
      onCancel={closeModal}
      onClick={handleOutsideClick ? handleDialogClick : undefined}
    >
      <div className="mb-4 flex items-center justify-between">
        <span className="text-md font-semibold text-slate-700">{label}</span>
        <Button
          className={
            "flex items-center justify-center rounded-md bg-slate-100 p-2 text-red-600 shadow-sm cursor-pointer"
          }
          onClick={closeModal}
        >
          <X size={32} className="cursor-pointer" />
        </Button>
      </div>
      <div>{children}</div>
    </dialog>
  );
};

export default BaseModal;
