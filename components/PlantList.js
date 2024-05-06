import React, { useState } from 'react';
import PlantItem from './PlantItem';
import EditPlantModal from './EditPlantModal';

function PlantList({ plants, updatePlantWateringDate, updatePlant, deletePlant }) {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [currentPlant, setCurrentPlant] = useState(null);

    const handleEditPlant = (plant) => {
        setCurrentPlant(plant);
        setIsModalOpen(true);
    };

    return (
        <div>
            {plants.sort((a, b) => new Date(a.nextWaterDate) - new Date(b.nextWaterDate)).map(plant => (
                <PlantItem key={plant._id} plant={plant}
                    onWaterPlant={() => {
                        const nextWateringDate = new Date();
                        const lastWateringDate = new Date();
                        lastWateringDate.setDate(new Date().getDate());
                        nextWateringDate.setDate(new Date().getDate() + plant.wateringFrequency);
                        console.log({
                            lastWateredDate: lastWateringDate.toISOString(),
                            nextWaterDate: nextWateringDate.toISOString()
                        })
                        updatePlantWateringDate(plant._id, {
                            lastWateredDate: lastWateringDate.toISOString(),
                            nextWaterDate: nextWateringDate.toISOString()
                        });
                    }}
                    onEditPlant={() => handleEditPlant(plant)}
                    
                />
            ))}

            {isModalOpen && currentPlant && (
                <EditPlantModal
                    plant={currentPlant}
                    onClose={() => setIsModalOpen(false)}
                    onSave={(plantId, updatedData) => {
                        updatePlant(plantId, updatedData);
                        setIsModalOpen(false);
                    }}
                    onDelete={(plantId) => {
                        deletePlant(plantId)
                    }}
                />
            )}
        </div>
    );
}

export default PlantList;
