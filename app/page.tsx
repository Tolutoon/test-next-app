"use client";


import Header from './Components/Header/Header';
import SectionLayout from './Components/SectionLayout';
import MainStyled from './Components/MainStyled/MainStyled';
import FullPage from './Components/FullPage';
import TextSection from './TextSection';

export default function Home() {
  return (
    <>
    <Header />
    <MainStyled />
    <FullPage/>
    <SectionLayout>
      <TextSection/>
    </SectionLayout>
    </>
  )
}



