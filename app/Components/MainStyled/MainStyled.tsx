"use client";

import React from 'react';
import styled from 'styled-components';
import SectionLayout from '../SectionLayout';
import Card from '../Card';
import {cards} from '../../utils/card';


export default function MainStyled() {
  return (
    <MainStyle>
        <SectionLayout>
            <div className='cards'>
                {cards.map((card, index) => {
                    return <Card 
                    key={index} 
                    title={card.title} 
                    description={card.description}
                    image={card.image}
                    />
                })}
            </div>
        </SectionLayout>
  </MainStyle>
  )
}

const MainStyle = styled.main`
  min-height: 100vh;
  width: 100%;
`
