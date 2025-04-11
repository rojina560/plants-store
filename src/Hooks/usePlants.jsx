import React, { useEffect, useState } from 'react';

const usePlants = () => {
    const [plants,setPlants] = useState([])
    const [loading,setLoading] = useState(true)
    useEffect(()=>{
        fetch('http://localhost:5000/plants')
        .then(res => res.json())
        .then(data => {
            setPlants(data)
    setLoading(true)
        })
    },[])
    console.log(plants);
    return[ plants,loading]
};

export default usePlants;