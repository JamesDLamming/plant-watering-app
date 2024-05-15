import React, { useState } from 'react';
import DeletePlantModal from './DeletePlantModal'; // Ensure this is correctly imported

function EditPlantModal({ plant, onClose, onSave, onDelete }) {
    const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
    const [currentDeletePlant, setCurrentDeletePlant] = useState(null);


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
            <form onSubmit={handleSubmit} className='form'>
                <div className="form-input" >
                    <label>Name:</label>
                    <input type="text" name="name" className='form-input' value={formData.name} onChange={handleChange} />
                </div>
                <div className="form-input" >
                <label>Location:</label>
                <input type="text" name="location" className='form-input' value={formData.location} onChange={handleChange} />
                </div>
                <div className="form-input" >
                <label>Last Watered Date:</label>
                <input type="date" name="lastWateredDate" className='form-input' value={formData.lastWateredDate} onChange={handleChange} />
                </div>
                <div className="form-input" >
                <label>Watering Frequency (days):</label>
                <input type="number" name="wateringFrequency" className='form-input' value={formData.wateringFrequency} onChange={handleChange} />
                </div>
                <button type="submit" className='button'>Save</button>
                <button type="button" className='button deletePlantButton' onClick={() => handleDeletePlant(plant)}>Delete Plant</button>
                <button onClick={onClose} className='button closeButton'>Close</button>
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
