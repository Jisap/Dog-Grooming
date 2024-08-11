import React from 'react';
import { RiCloseFill } from "react-icons/ri";

function Modal({ isOpen, onClose, children }) {
  if (!isOpen) return null;

  // return (
  //   <div className="fixed inset-0 flex justify-center items-center z-50">
  //     <div className="bg-black bg-opacity-50 absolute inset-0"></div>
  //     <div className="bg-white p-5 rounded-lg m-4 max-w-lg w-full relative z-50">
  //       {children}
  //       <button 
  //         onClick={onClose} 
  //         className="absolute top-0 right-0 m-3 px-4 py-4 bg-blue-500 text-white rounded hover:bg-blue-700 z-50">
  //         <RiCloseFill className='text-3xl text-orange ' />
  //       </button>
  //     </div>
  //   </div>
  // );

  return (
    <div className="fixed inset-0 flex justify-center items-center z-50 p-4">
      <div className="bg-black bg-opacity-50 absolute inset-0"></div>
      <div className="bg-white p-5 rounded-lg w-full max-w-lg max-h-[90vh] overflow-y-auto relative z-50">
        <div className="mb-4">
          {React.Children.map(children, child => { // Children colección de todos los hijos del modal // child es un cb que se aplica a cada hijo
            if (React.isValidElement(child) && child.type === 'img') {
              return React.cloneElement(child, {
                className: `${child.props.className || ''} w-full h-auto object-contain max-h-[50vh]`
              });
            }
            return child;
          })}
        </div>
        <button
          onClick={onClose}
          className="absolute top-0 right-0 m-3 p-2 bg-blue-500 text-white rounded-full hover:bg-blue-700 z-50"
          aria-label="Cerrar"
        >
          <RiCloseFill className='bg-orange/70 text-2xl text-white rounded-full' />
        </button>
      </div>
    </div>
  );
}

export default Modal;
