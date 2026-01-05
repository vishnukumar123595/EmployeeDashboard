import ReactDOM from "react-dom";
const ImagePreviewModal = ({ image, onConfirm, onCancel }) => {
    return ReactDOM.createPortal(
    <div className="modal-backdrop">
      <div className="modal">
        <h3>Preview Profile Image</h3>

        <img
          src={image}
          alt="Preview"
          className="preview-modal-image"
        />

        <div className="modal-actions" style={{display:'flex', gap:'10px'}}>
          <button className="btn btn-success" onClick={onConfirm}>
            Upload
          </button>
          <button className="btn btn-delete" onClick={onCancel}>
            Cancel
          </button>
        </div>
      </div>
    </div>,
    document.getElementById("modal-root")
  );
};

export default ImagePreviewModal;
