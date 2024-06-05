// components/AirlineForm.jsx

import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

const AirlineForm = () => {
    const [airlineName, setAirlineName] = useState('');
    const [planeCount, setPlaneCount] = useState('');

    const dispatch = useDispatch();

    const handleAddAirline = () => {
        dispatch({ type: 'ADD_AIRLINE', payload: { name: airlineName, planes: parseInt(planeCount, 10) } });
        setAirlineName('');
        setPlaneCount('');
    };

    return (
        <div>
            <h2>Add Airline</h2>
            <input type="text" placeholder="Airline Name" value={airlineName} onChange={(e) => setAirlineName(e.target.value)} />
            <input type="number" placeholder="Plane Count" value={planeCount} onChange={(e) => setPlaneCount(e.target.value)} />
            <button onClick={handleAddAirline}>Add Airline</button>
        </div>
    );
};

export default AirlineForm;
