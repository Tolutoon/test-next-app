"use client";

import React from 'react';
import Image from 'next/image';
import styled from 'styled-components';


interface CardProps {
    title: string;
    description?: string;
    image?: any;
}

function Card({ title, description, image}: CardProps ) {
  return (    
        <CardStyled >
        <div 
        className='image'
        style={{
            height: '100%',
            width: '100%',
        }}
        >
            <p className='new'>New</p>
            <div className='text'>
                <h3>{title}</h3>
                <p>{description}</p>
            </div>
            <Image 
            src={image} 
            alt='image' 
            style={{
                height: '100%', 
                width: '100%',
                objectFit: 'cover',
                objectPosition: 'center',
                borderRadius: '8px',
                }}/>
        </div>
        </CardStyled>
    )
}

const CardStyled = styled.div`
   position: relative;
   background-color: var(--color-bg);
   height: 100%;
   padding: 1.5rem;
   border-radius: 8px;
   border: 1px solid var(--color-border);
   transition: all 0.3s ease-in-out;
`;

export default Card;