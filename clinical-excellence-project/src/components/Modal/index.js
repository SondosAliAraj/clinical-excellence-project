import React, { useState } from "react";
import "./style.css";

const Modal = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleModal = () => setIsOpen(!isOpen);

  return (
    <div>
      <button onClick={toggleModal}>Open Modal</button>
      {isOpen && (
        <div className="modalContainer">
          <div className="modalContent">
            <h2>Modal Title</h2>
            <p>Modal content goes here.</p>
            <button onClick={toggleModal}>Close Modal</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Modal;
