import React, { useState } from 'react';

function AddPlantForm({ addPlant, onClose }) {
    const todayDate = new Date().toISOString().split('T')[0];

    const [plant, setPlant] = useState({
        name: '',
        location: '',
        lastWateredDate: todayDate,
        wateringFrequency: '',
        wateringAmount: '',
        photo: null // Change to null to handle file input
    });

    const handleChange = (e) => {
        const { name, value, files } = e.target;
        setPlant({
            ...plant,
            [name]: files ? files[0] : value // Handle file input
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        
        // Calculate next watering date
        const nextWateringDate = calculateNextWateringDate(plant.lastWateredDate, plant.wateringFrequency);

        // Create a FormData object
        const formData = new FormData();
        formData.append('name', plant.name);
        formData.append('location', plant.location);
        formData.append('lastWateredDate', plant.lastWateredDate);
        formData.append('wateringFrequency', plant.wateringFrequency);
        formData.append('wateringAmount', plant.wateringAmount);
        formData.append('nextWaterDate', nextWateringDate);
        if (plant.photo) {
            formData.append('photo', plant.photo); // Append the file
        }

        // Use the addPlant function passed as a prop to add the new plant
        addPlant(formData);

        // Reset form fields
        setPlant({ name: '', location: '', lastWateredDate: todayDate, wateringFrequency: '', wateringAmount: '', photo: null });

        onClose();
    };

    // Function to calculate the next watering date
    const calculateNextWateringDate = (lastWateredDate, wateringFrequency) => {
        const date = new Date(lastWateredDate);
        date.setDate(date.getDate() + parseInt(wateringFrequency));
        return date.toISOString().split('T')[0]; // Format to YYYY-MM-DD
    };

    return (
        <form onSubmit={handleSubmit} className="form">
            <div className='form-input-parent'>
                <input className="form-input" type="text" name="name" value={plant.name} onChange={handleChange} placeholder="Plant Name" required />
            </div>
            <div className='form-input-parent'>
                <input className="form-input" type="text" name="location" value={plant.location} onChange={handleChange} placeholder="Location" required />
            </div>
            <div className='form-input-parent'>
                <input className="form-input" type="date" name="lastWateredDate" value={plant.lastWateredDate} onChange={handleChange} placeholder="Last Watered Date" required />
            </div>
            <div className='form-input-parent'>
                <input className="form-input" type="number" min="1" name="wateringFrequency" value={plant.wateringFrequency} onChange={handleChange} placeholder="Watering Frequency (days)" required />
            </div>
            <div className='form-input-parent'>
                <input className="form-input" type="number" min="1" name="wateringAmount" value={plant.wateringAmount} onChange={handleChange} placeholder="Water Amount (ml)" required />
            </div>
            <div className='form-input-parent'>
                <input className="form-input" type="file" name="photo" onChange={handleChange} placeholder="Photo" />
            </div>
            <div className='form-input-parent'>
                <button type="submit" className="button">Add Plant</button>
                <button type="button" onClick={onClose} className='button closeButton'>Close</button>
            </div>
        </form>
    );
}

export default AddPlantForm;
