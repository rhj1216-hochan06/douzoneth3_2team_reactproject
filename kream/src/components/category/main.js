import React, { useState } from 'react';
import styles from './category.module.css';
import { Products } from '../products/Products';
import { AccessorieCategory } from './accessorieCategory';
import { ClothCategory } from './clothCategory';
import { LifeCategory } from './lifeCategory';
import { TechCategory } from './techCategory';

export const MainCategory = () => {
    const [content, setContent] = useState();

    const handleClickButton = e => {
        const { name } = e.target;
        setContent(name);
    };

    const selectComponent = {
        accessorieCategory: <AccessorieCategory />,
        clothCategory: <ClothCategory />,
        lifeCategory: <LifeCategory />,
        techCategory: <TechCategory />,
    };

//     const Container = styles.div`
//     ${props => props.theme.flex('center', 'center')}
//     height: 20vh;
//   `;

//     const Button = styles.button`
//     padding: 1rem 2rem;
//     margin-right: 1rem;
//     color: #111111;
//     background-color: #eeeeee;
//     border-radius: 2rem;
//   `;

//     const Content = styles.div`
//     ${props => props.theme.flex('center', 'center')}
//     width: 100%;
//     height: 100%;
//   `;

    console.log(content);

    return (
        <>
            <div>
                    {Products.map(data => {
                        return (
                            <button onClick={handleClickButton} name={data.name} key={data.id}>
                                {data.text}
                            </button>
                        );
                    })}
                {content && <div>{selectComponent[content]}</div>}
            </div>
        </>
    );
};
