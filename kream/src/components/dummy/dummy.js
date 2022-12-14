import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

export const Dummy =() =>{
    const navigate = useNavigate();
    useEffect(
        () => {
            window.location.reload();
            
        }, []
    );
    return(
        navigate(-2) 
        );
}