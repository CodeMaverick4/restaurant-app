import { createPortal } from "react-dom";

export default function Modal({isOpen,children}) {
  if(!isOpen) return

  return createPortal(
    <div className="backdrop">
      <div className="modal">
        {children}
      </div>
        
    </div>,
    document.getElementById("modal-root") 
  );
}
