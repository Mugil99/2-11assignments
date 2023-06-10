import React from "react";
const Modal=(props)=>{
    
    const {setShowProp}=props;
    
    const onClose=()=>{
         setShowProp(false);
    }
    return(
      <div className="modal">
        <button onClick={onClose}>Close</button>
        <p>This is content of Modal</p>
      </div>
    )
}
export default Modal;