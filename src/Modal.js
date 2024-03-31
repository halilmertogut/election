const Modal = ({ isOpen, onClose, children }) => {
    if (!isOpen) return null;
  
    return (
      <div className="fixed inset-0 bg-black bg-opacity-95 flex justify-center items-center z-50">
        <div className="bg-white p-4 rounded-lg shadow-lg max-w-sm w-full">
          <div className="flex justify-end">
            <button onClick={onClose} className="text-lg font-semibold text-black">&times;</button>
          </div>
          {children}
        </div>
      </div>
    );
  };
export default Modal;  