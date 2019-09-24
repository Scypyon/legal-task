import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

import { fetchResults } from "../../store/showResultsModule/showResultsAction"
import { Redirect } from 'react-router-dom';

const ChooseData: React.FC = () => {

    const [choose, setChoose] = useState();
    const dispatch = useDispatch();

    const showResults = (query: string) => {
        dispatch(fetchResults(query));
        setChoose(query);
    }
    if (choose) {
        return choose === 'schools/' ? <Redirect to="/schools" /> : <Redirect to="/courts" />;
    }

    return (
        <>
            <h1>Cześć {localStorage.getItem('Name')} !</h1>
            <button onClick={() => showResults('courts/')}>courts</button>
            <button onClick={() => showResults('schools/')}>schools</button>
        </>
    );
}

export default ChooseData;
