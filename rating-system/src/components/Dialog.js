function Dialog(props) {
  if (!props.isOpen) return null;

  return (
    <div className="dialogContainer">
      <div className="innerDialogContainer" >
        <h3>Welcome to the Project Box</h3>
        <p >Click below to proceed to the rating system!</p>
        
        {/* Button triggers parent state closure */}
        <button onClick={props.onClose} >
          Close Dialog
        </button>
      </div>
    </div>
  );
}

export default Dialog;