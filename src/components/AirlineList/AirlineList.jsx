// components/AirlineList.jsx

import React from 'react';
import { useSelector } from 'react-redux';

const AirlineList = () => {
    const airlines = useSelector(state => state.airlineReducer);

    return (
        <div>
            <h2>Airline List</h2>
            <table>
                <thead>
                    <tr>
                        <th>Airline Name</th>
                        <th>Plane Count</th>
                    </tr>
                </thead>
                <tbody>
                    {airlines.map((airline, index) => (
                        <tr key={index}>
                            <td>{airline.name}</td>
                            <td>{airline.planes}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default AirlineList;
