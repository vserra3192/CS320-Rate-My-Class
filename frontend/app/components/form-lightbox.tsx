"use client";

import { useRef, type ReactNode } from "react";

export function FormLightbox({ children, label }: { children: ReactNode; label: string }) {
  const dialog = useRef<HTMLDialogElement>(null);
  const trigger = useRef<HTMLButtonElement>(null);

  function close() {
    dialog.current?.close();
  }

  return (
    <>
      <button ref={trigger} type="button" className="lightbox-trigger" onClick={() => dialog.current?.showModal()}>
        {label}
      </button>
      <dialog
        ref={dialog}
        className="form-lightbox"
        aria-label={label}
        onClose={() => trigger.current?.focus()}
        onClick={(event) => {
          if (event.target === event.currentTarget) {
            const bounds = event.currentTarget.getBoundingClientRect();
            if (event.clientX < bounds.left || event.clientX > bounds.right || event.clientY < bounds.top || event.clientY > bounds.bottom) close();
          }
        }}
      >
        <button type="button" className="lightbox-close" aria-label="Close dialog" onClick={close} autoFocus>
          ×
        </button>
        {children}
      </dialog>
    </>
  );
}
