import React, {useEffect, useState} from 'react';

const Mission = () => {
    const [mission, setMission] = useState([])
    useEffect( () => {
        fetch('https://api.spacexdata.com/v3/launches/')
            .then(value => value.json())
            .then(value => {
               // let filter => (){
               //      if (value.launch_year !== 2020)
               // }
                setMission(value);
            })
    }, [])

    return (
        <div>
            {mission.map(value => <div>{value.mission_name}</div>)}
        </div>
    );
};

export default Mission;