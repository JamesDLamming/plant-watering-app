import React, { useState } from 'react';
import DeletePlantModal from './DeletePlantModal'; // Ensure this is correctly imported

function EditPlantModal({ plant, onClose, onSave, onDelete }) {
    const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
    const [currentDeletePlant, setCurrentDeletePlant] = useState(null);


    const [plantData, setPlantData] = useState({
        name: plant.name,
        location: plant.location,
        wateringFrequency: plant.wateringFrequency,
        lastWateredDate: plant.lastWateredDate,
        nextWaterDate: plant.nextWaterDate,
        photo: plant.photo
    });

    const handleChange = (e) => {
        const { name, value, files } = e.target;

        setPlantData({
            ...plantData,
            [name]: files ? files[0] : value // Handle file input
        });
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        const nextWateringDate = calculateNextWateringDate(plantData.lastWateredDate, plantData.wateringFrequency);

        const formData = new FormData();
        formData.append('name', plantData.name);
        formData.append('location', plantData.location);
        formData.append('lastWateredDate', plantData.lastWateredDate);
        formData.append('wateringFrequency', plantData.wateringFrequency);
        formData.append('wateringAmount', plantData.wateringAmount);
        formData.append('nextWaterDate', nextWateringDate);
        if (plantData.photo instanceof File) {
            formData.append('photo', plantData.photo); // Append the file if a new file is selected
        } else {
            formData.append('photo', plant.photo); // Keep the existing photo URL
        }


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
    
    const calculateNextWateringDate = (lastWateredDate, wateringFrequency) => {
        const date = new Date(lastWateredDate);
        date.setDate(date.getDate() + parseInt(wateringFrequency));
        return date.toISOString().split('T')[0]; // Format to YYYY-MM-DD
    };
    

    return (
        <div  className="modal-overlay" onClick={handleOutsideClick}>
        <div className="modal-content" onClick={e => e.stopPropagation()}>
        <div className='modalHeading'>
                    <h3>Edit Plant</h3>                </div>
                    <div className="modal">
    <form onSubmit={handleSubmit} className='form'>
        <div className="form-input-parent">
            <label>Name:</label>
            <input type="text" name="name" className='form-input' value={plantData.name} onChange={handleChange} />
        </div>
        <div className="form-input-parent">
            <label>Location:</label>
            <input type="text" name="location" className='form-input' value={plantData.location} onChange={handleChange} />
        </div>
        <div className="form-input-parent">
            <label>Last Watered Date:</label>
            <input type="date" name="lastWateredDate" className='form-input' value={plantData.lastWateredDate.split('T')[0]} onChange={handleChange} />
        </div>
        <div className="form-input-parent">
            <label>Watering Frequency (days):</label>
            <input type="number" name="wateringFrequency" className='form-input' value={plantData.wateringFrequency} onChange={handleChange} />
        </div>
        <div className="plantImage">
            <img className="plantImage" src={plant.photo} onClick={() => document.getElementById('fileInput').click()} alt="Plant" />
            <input
                id="fileInput"
                type="file"
                style={{ display: 'none' }}
                name="photo"
                onChange={handleChange}
            />
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
