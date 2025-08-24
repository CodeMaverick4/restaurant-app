import { createPortal } from "react-dom";

export default function Modal({children}) {
  

  return createPortal(
    <div className="backdrop">
      <div className="modal">
        {children}
      </div>
        
    </div>,
    document.getElementById("modal-root") 
  );
}
