import React from 'react'
import * as style from './style';
import { AiOutlineArrowRight } from 'react-icons/ai';

function TagComponent(props:any) {
    const { name } = props;
    return (
        <>
            <style.Container>
                <style.Title> {name} </style.Title>
                <style.Icon>
                    <AiOutlineArrowRight/>
                </style.Icon>
            </style.Container>
        </>
    )
}

export default TagComponent
