"use client";

import Image from 'next/image';
import React, { useRef } from 'react';
import logo from '../../../public/images/logo.png';
import Button from '../Button/Button';
import Monkey from '../../../public/images/monkey.png';
import { styled } from 'styled-components';
import { FaRocket, FaWallet } from 'react-icons/fa';
import { Abril_Fatface } from 'next/font/google';
import hover3D from '../../utils/hover';
const abril = Abril_Fatface({
    subsets: ['latin'],
    weight: '400',
    display: 'swap',
});


function Header() {

    const hero = useRef<HTMLDivElement>(null);

    const hoverHero = hover3D(hero, {
        x: 30,
        y: -40,
        z: 30,
    });
    return (
        <HeaderStyled ref={hero}>
            <nav>
                <div className='logo'>
                    <Image src={logo} alt='' width={50} height={50} />
                </div>
                <div className='input'>
                    <input type='text' placeholder='Search' />
                </div>
                <ul className='nav-items'>
                    <li>
                        <a href='#'>Home</a>
                    </li>
                    <li>
                        <a href='#'>Auctions</a>
                    </li>
                    <li>
                        <a href='#'>Marketplace</a>
                    </li>
                    <li>
                        <a href='#'>About</a>
                    </li>
                    <Button name='Connect Wallet' icon={<FaWallet />} />
                </ul>
            </nav>
            <div className='header-content'>
                <div className='text-content'>
                    <h1 className={abril.className}>Buy, Collect, and sell extraordinary NFTs</h1>
                    <p>We're dedicated to providing you with the latest news, analysis, and trends in the exciting world of cryptocurrencies 
                    and blockchain technology. Whether you're a seasoned trader, a blockchain enthusiast, or just dipping your toes into the crypto waters, 
                    our goal is to be your go-to resource for all things crypto.</p>
                    <div className='buttons'>
                        <Button 
                        name='Get Started'
                        background='#f2994a'
                        color='#fff'
                        border='1px solid #f2994a'
                        icon={<FaRocket />}
                        />
                        <Button name='Learn More' />
                    </div>
                </div>
                <div className='image-content'>
                    <div className='image' style={{transform: hoverHero.transform}}>
                    <Image src={Monkey} width={600} height={600} alt=''/>
                    </div>
                </div>
            </div>
        </HeaderStyled>
    )
}


const HeaderStyled = styled.header`
   nav {
    padding: 0 4rem;
    min-height: 10vh;
    border-bottom: 1px solid var(--color-border);
    display: flex;
    justify-content: space-between;
    align-items: center;
    .logo{
        cursor: pointer;
    }

    .input{
        flex: 2;
        display: flex;
        justify-content: center;
        input {
            width: 55%;
            padding: 0%.6rem 0.8rem;
            border-radius: 8px;
            background-color: #161616;
            padding: 6px;
            border: 1px solid var(--color-border);
            &::placeholder {
                color: var(--color-border);
                font-weight: 500;
            }
        }
    }

    .nav-items {
        display: flex;
        align-items: center;
        gap: 2rem;
        li {
            transition: all 0.2s ease-in-out;
            &:hover{
                color: white;
                transform: scale(1.1);
            }
        }
    }
   } 

   .header-content{
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 4rem;
    min-height: calc(100vh - 10vh);
    padding: 0 10rem 5rem 10rem;

    .text-content{
        h1{
            font-size: clamp(2rem, 5vw, 5rem);
            color: #f2994a;
            transition: all 0.01s linear;
            padding-bottom: 1.5rem;
        }

        .buttons {
            display: flex;
            gap: 1rem;
            margin-top: 2.5rem;
        }
    }

    .image-content .image{
        padding: 1rem;
        border-radius: 8px;
        background-color: var(--color-bg);
        border: 1px solid var(--color-border);

         img {
            border-radius: 8px;
        }
    }
   }
`;

export default Header