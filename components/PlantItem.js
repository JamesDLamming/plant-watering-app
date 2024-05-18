import React from 'react';
import { format } from 'date-fns';


function PlantItem({ plant, onWaterPlant, onEditPlant }) {
    // Helper function to format date as "5th June"
    function formatDate(dateStr) {
        // Extract the date part only from the ISO string
        const datePart = dateStr.split('T')[0]; // Gets '2024-05-06' from '2024-05-06T00:00:00.000Z'
        const date = new Date(datePart + 'T00:00:00'); // Appends T00:00:00 to ensure no timezone offset
    
        // Now format the date with date-fns or any other library/method you prefer
        return format(date, 'do MMMM');
    }


    

    return (
        <div className="plant-item">
            <div className="plantImage">
                <img className="plantImage" src={plant.photo}></img>
            </div>
            <div>
            <h3 className='plantItemHeading'>{plant.name}</h3>
            <p>Location: {plant.location}</p>
            <p>Water every {plant.wateringFrequency} days</p>
            <p>Last watered on: {plant.lastWateredDate ? formatDate(plant.lastWateredDate) : 'Not available'}</p>
            <p style={{fontWeight :'bold'}}>Next watered on: {plant.nextWaterDate ? formatDate(plant.nextWaterDate) : 'Not available'}</p>
            </div>
            <div>
            <button className="button editButton" onClick={onEditPlant}>Edit</button>
            <button className="button waterNowButton" onClick={onWaterPlant}>Water Now</button>
            </div>
        </div>
    );
}

export default PlantItem;
