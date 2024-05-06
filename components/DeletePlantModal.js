import React from 'react';

function DeletePlantModal({ plant, onClose, onDelete }) {
    const modalStyle = {
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        zIndex: 1050,  // Make sure it's higher than EditPlantModal
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    };

    const modalContentStyle = {
        backgroundColor: 'white',
        padding: '20px',
        borderRadius: '10px',
        boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)'
    };

    function handleDelete() {
        onDelete(plant._id);
        onClose();  // Close the modal after deletion
    }

    return (
        <div style={modalStyle} className="modal-overlay" >
            <div style={modalContentStyle} className="modal-content" >
                <div>
                    <p>Are you sure you want to delete {plant.name}?</p>
                    <button onClick={handleDelete}>Delete Plant</button>
                    <button onClick={onClose}>Cancel</button>
                </div>
            </div>
        </div>
    );
}

export default DeletePlantModal;
