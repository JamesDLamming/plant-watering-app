// In App.js, assuming you have an API setup
import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import PlantList from '../components/PlantList';
 import AddPlantForm from '../components/AddPlantForm';

function App() {
    const [plants, setPlants] = useState([]);

    useEffect(() => {
        fetch(`${process.env.NEXT_PUBLIC_BASE_API_URL}/api/plants`)
            .then(response => response.json())
            .then(data => setPlants(data))
            .catch(error => console.error('Error fetching plants:', error));

    }, []);

    const addPlant = plant => {
        fetch(`${process.env.NEXT_PUBLIC_BASE_API_URL}/api/plants`, {
            method: 'POST', // Specify the method to POST
            headers: {
                'Content-Type': 'application/json', // Set the headers to inform the server about the data type
            },
            body: JSON.stringify(plant) // Convert the JavaScript object to a JSON string
        })
        .then(response => response.json()) // Convert the response to JSON
        .then(data => {
            setPlants(prevPlants => [...prevPlants, data]); // Update the state with the new plant
            console.log('Plant added:', data);
        })
        .catch(error => {
            console.error('Error adding plant:', error);
        });
    };
    
const updatePlantWateringDate = (plantId, newDates) => {
    console.log(plantId, newDates)
    fetch(`${process.env.NEXT_PUBLIC_BASE_API_URL}/api/plants/${plantId}/water`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(newDates)
    })
    .then(response => response.json())
    .then(updatedPlant => {
        setPlants(plants => plants.map(plant => plant._id === plantId ? updatedPlant : plant));
    })
    .catch(error => console.error('Failed to update plant:', error));
};

const updatePlant = (plantId, newData) => {
    fetch(`${process.env.NEXT_PUBLIC_BASE_API_URL}/api/plants/${plantId}/edit`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(newData)
    })
    .then(response => {
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
    })
    .then(updatedPlant => {
        setPlants(plants => plants.map(plant => plant._id === plantId ? updatedPlant : plant));
    })
    .catch(error => {
        console.error('Failed to update plant:', error);
        // Optionally handle user notification here
    });
};

function deletePlant(plantId) {
    fetch(`${process.env.NEXT_PUBLIC_BASE_API_URL}/api/plants/${plantId}`, {
        method: 'DELETE'
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Failed to delete the plant');
        }
        return response.json();
    })
    .then(data => {
        console.log(data.message);
        // Optionally update the state to remove the plant from the list
        setPlants(currentPlants => currentPlants.filter(plant => plant._id !== plantId));

    })
    .catch(error => {
        console.error('Error deleting plant:', error);
    });
}

    return (
        <div>
            <Header />
            <AddPlantForm addPlant={addPlant} />
            
            <PlantList plants={plants} updatePlantWateringDate={updatePlantWateringDate} updatePlant={updatePlant} deletePlant={deletePlant}/>
        </div>
    );
}

export default App;
