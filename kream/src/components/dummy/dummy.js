import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

export const Dummy = () => {


    const navigate = useNavigate();


    useEffect(
        () => {
            navigate(-2)
        }, []
    );

    return (
        // <navigate(-2)>
        <></>
    );


}