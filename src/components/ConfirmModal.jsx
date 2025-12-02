const ConfirmModal = ({ message, onConfirm, onCancel }) => {
  return (
    <div className="modal-backdrop">
      <div className="modal-container">
        <p>{message}</p>
        <div className="modal-buttons">
          <button className="btn-eliminar" onClick={onConfirm}>Sí</button>
          <button className="btn-editar" onClick={onCancel}>No</button>
        </div>
      </div>
    </div>
  );
};

export default ConfirmModal;