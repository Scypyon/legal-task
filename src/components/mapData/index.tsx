import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Redirect } from 'react-router';

const MapData: React.FC = () => {

    const [back, goBack] = useState();
    const store = useSelector((state: any) => state.results.results);
    console.log(store)

    useEffect(() => {
        goBack(false);
    }, [])
    return (
        <>
            {back && <Redirect to="chooseData" />}
            <button onClick={() => goBack(true)}>Wstecz</button>
            {store.results ? store.results.map((el: any) => <div><p>{el.id}</p><p>{el.resource_uri}</p></div>) : <div>Wczytuję...</div>}
        </>
    );
}

export default MapData;
