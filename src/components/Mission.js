import React, {useEffect, useState} from 'react';

import './Mission.css'

const Mission = () => {
    const [filterMision, setFilterMision] = useState([])
    useEffect( () => {
        fetch('https://api.spacexdata.com/v3/launches/')
            .then(value => value.json())
            .then(value => {
                let filterMision = value.filter(value => value.launch_year !== '2020');
                setFilterMision(filterMision)
            })
    }, [])

    return (
        <div>
            {filterMision.map(value =>
                <div className= 'infoBlock' key={value.flight_number}>
                {value.launch_year} - {value.mission_name}
                    <img src={value.links.mission_patch_small} alt="img"/>
                </div>)
            }
        </div>
    );
};

export default Mission;