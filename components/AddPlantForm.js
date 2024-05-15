import React, { useState } from 'react';

function AddPlantForm({ addPlant, onClose }) {
    const [plant, setPlant] = useState({
        name: '',
        location: '',
        lastWateredDate: '',
        wateringFrequency: '',
        wateringAmount: '',
        photo: ''
    });

    const handleChange = (e) => {
        setPlant({ ...plant, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        
        // Calculate next watering date
        const nextWateringDate = calculateNextWateringDate(plant.lastWateredDate, plant.wateringFrequency);
        
        // Create a new plant object including the nextWateredDate
        const newPlant = {
            ...plant,
            nextWaterDate: nextWateringDate
        };

        // Use the addPlant function passed as a prop to add the new plant
        addPlant(newPlant);
        
        // Reset form fields
        setPlant({ name: '', location: '', lastWateredDate: '', wateringFrequency: '', wateringAmount: '', photo: '' });

        onClose()
    };

    // Function to calculate the next watering date
    const calculateNextWateringDate = (lastWateredDate, wateringFrequency) => {
        const date = new Date(lastWateredDate);
        date.setDate(date.getDate() + parseInt(wateringFrequency));
        return date.toISOString().split('T')[0]; // Format to YYYY-MM-DD
    };

    return (
        <form onSubmit={handleSubmit} className="form">
            <div className='form-input'><input className="form-input" type="text" name="name" value={plant.name} onChange={handleChange} placeholder="Plant Name" required /></div>
            <div className='form-input'><input className="form-input" type="text" name="location" value={plant.location} onChange={handleChange} placeholder="Location" required /></div>
            <div className='form-input'><input className="form-input" type="date" name="lastWateredDate" value={plant.lastWateredDate} onChange={handleChange} placeholder="Last Watered Date" required /></div>
            <div className='form-input'><input className="form-input"  type="number" min="1" name="wateringFrequency" value={plant.wateringFrequency} onChange={handleChange} placeholder="Watering Frequency (days)" required /></div>
            <div className='form-input'><input className="form-input" type="number" min="1" name="wateringAmount" value={plant.wateringAmount} onChange={handleChange} placeholder="Water Amount (ml)" required /></div>
            <div className='form-input'><input className="form-input" type="text" name="photo" value={plant.photo} onChange={handleChange} placeholder="Photo URL" required /></div>
            <button type="submit" className="button">Add Plant</button>
            <button onClick={onClose} className='button closeButton'>Close</button>
        </form>
    );
}

export default AddPlantForm;
