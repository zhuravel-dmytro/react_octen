import React, {useEffect, useState} from 'react';

import {carsService} from "../../services/carsService";
import Car from "../car/Car";

const Cars = () => {
    const [cars, setCars] = useState([]);
    useEffect(() => {
        carsService.getAll().then(value => setCars([...value]))
    }, [])


    return (
        <div>
            <div> {cars.map(car => <Car key={car.id} car={car}/>)}</div>
        </div>
    );
};

export default Cars;