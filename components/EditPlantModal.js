import React, { useState } from 'react';
import DeletePlantModal from './DeletePlantModal'; // Ensure this is correctly imported

function EditPlantModal({ plant, onClose, onSave, onDelete }) {
    const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
    const [currentDeletePlant, setCurrentDeletePlant] = useState(null);


    // const modalStyle = {
    //     position: 'fixed',  // Fixed position to cover the entire viewport
    //     top: 0,
    //     left: 0,
    //     width: '100vw',  // 100% of the viewport width
    //     height: '100vh',  // 100% of the viewport height
    //     backgroundColor: 'rgba(0, 0, 0, 0.5)',  // Semi-transparent background
    //     zIndex: 1000,  // Ensure it is above other content
    //     display: 'flex',
    //     justifyContent: 'center',
    //     alignItems: 'center'
    // };

    // const modalContentStyle = {
    //     backgroundColor: 'white',  // Background color for the modal content
    //     padding: '20px',
    //     borderRadius: '10px',
    //     boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)'  // Optional: Adding some shadow
    // };

    const [formData, setFormData] = useState({
        name: plant.name,
        location: plant.location,
        wateringFrequency: plant.wateringFrequency,
        lastWateredDate: plant.lastWateredDate,
        nextWaterDate: plant.nextWaterDate
    });

    const handleChange = (event) => {
        setFormData({
            ...formData,
            [event.target.name]: event.target.value
        });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        onSave(plant._id, formData);
    };
    function handleOutsideClick(e) {
        if (e.target.className === "modal-overlay") {
            onClose();
        }
    }
    const handleDeletePlant = (plant) => {
        setCurrentDeletePlant(plant);
        setIsDeleteModalOpen(true);
    };
    

    

    return (
        <div  className="modal-overlay" onClick={handleOutsideClick}>
        <div className="modal-content" onClick={e => e.stopPropagation()}>
        <div className="modal">
            <form onSubmit={handleSubmit}>
                <label>Name:</label>
                <input type="text" name="name" value={formData.name} onChange={handleChange} />
                <label>Location:</label>
                <input type="text" name="location" value={formData.location} onChange={handleChange} />

                <label>Last Watered Date:</label>
                <input type="date" name="lastWateredDate" value={formData.lastWateredDate} onChange={handleChange} />

                <label>Watering Frequency (days):</label>
                <input type="number" name="wateringFrequency" value={formData.wateringFrequency} onChange={handleChange} />

                <button type="submit">Save</button>
                <button type="button" onClick={() => handleDeletePlant(plant)}>Delete Plant</button>
                <button onClick={onClose}>Close</button>
            </form>
        </div>
        
        </div>
        {isDeleteModalOpen && currentDeletePlant && (
                        <DeletePlantModal
                            plant={currentDeletePlant}
                            onClose={() => setIsDeleteModalOpen(false)}
                            onDelete={(plantId) => {
                                onDelete(plantId);
                                setIsDeleteModalOpen(false);
                                onClose()
                            }}
                        />
                    )}
        </div>
                    
    );
}

export default EditPlantModal;
