import React, { useState } from 'react';

function EditPlantForm({ addPlant }) {
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
    };

    // Function to calculate the next watering date
    const calculateNextWateringDate = (lastWateredDate, wateringFrequency) => {
        const date = new Date(lastWateredDate);
        date.setDate(date.getDate() + parseInt(wateringFrequency));
        return date.toISOString().split('T')[0]; // Format to YYYY-MM-DD
    };

    return (
        <form onSubmit={handleSubmit} className="p-4">
            <input type="text" name="name" className="form-input" value={plant.name} onChange={handleChange} placeholder="Plant Name" required />
            <input type="text" name="location" className="form-input"  value={plant.location} onChange={handleChange} placeholder="Location" required />
            <input type="date" name="lastWateredDate" className="form-input"  value={plant.lastWateredDate} onChange={handleChange} placeholder="Last Watered Date" required />
            <input type="number" min="1" name="wateringFrequency" className="form-input" value={plant.wateringFrequency} onChange={handleChange} placeholder="Watering Frequency (days)" required />
            <input type="number" min="1" name="wateringAmount" className="form-input"  value={plant.wateringAmount} onChange={handleChange} placeholder="Water Amount (ml)" required />
            <input type="text" name="photo" value={plant.photo} className="form-input"  onChange={handleChange} placeholder="Photo URL" required />
            <button type="submit" className="bg-green-500 text-white p-2 mt-2">Edit Plant</button>
        </form>
    );
}

export default EditPlantForm;
