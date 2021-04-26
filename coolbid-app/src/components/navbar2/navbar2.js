import React,{useState} from 'react';
import { NavLink,BrowserRouter} from 'react-router-dom';
import styled from '@emotion/styled';
import './style.css';
import {  ThemeProvider } from '@emotion/react';

const NavContainer=styled.div`
    position:fixed;
    top:17.5rem;
    text-align:center;
    width:100%;
    z-index:1000;
    a{
        color:#ffffff;
        background-color: #c4c4c4;
        font-size:2.4rem;
        padding: 1rem 8rem;
        text-decoration: none;
        &:before,
        &:after {
            content: '';
            position: absolute;
            bottom: 2px;
            left: 0; right: 0;
            height: 2px;
            background-color: #F37272;
        }
        &:before {
            opacity: 0;
            transform: translateY(- 8px);
            transition: transform 0s cubic-bezier(0.175, 0.885, 0.320, 1.275), opacity 0s;
        }
        &:after {
            opacity: 0;
            transform: translateY(8px/2);
            transition: transform .2s cubic-bezier(0.175, 0.885, 0.320, 1.275), opacity .2s;
        }
        &:hover,
        &:focus {
            &:before,
            &:after {
                opacity: 1;
                transform: translateY(0);
            }
            &:before {
                transition: transform .2s cubic-bezier(0.175, 0.885, 0.320, 1.275), opacity .2s;
            }
            &:after {
                transition: transform 0s .2s cubic-bezier(0.175, 0.885, 0.320, 1.275), opacity 0s .2s;
            }
        }
    }
         
    }
    
      
      
`

export default function Navbar2(){
    return(
        // <BrowserRouter>
        // <NavContainer>
        //     <NavLink to="/Ahompage/鞋子">鞋子</NavLink>
        //     <NavLink to="/Ahompage/包包">包包</NavLink>
        //     <NavLink to="/Ahompage/手錶">手錶</NavLink>
        //     <NavLink to="/Ahompage/電動">電動</NavLink>
        // </NavContainer>
        // </BrowserRouter>
        <div class="container">
        <nav>
          <ul>
            <li><a href="#" class="underline"><span>home</span></a></li>
            <li><a href="#" class="underline"><span>about</span></a></li>
            <li><a href="#" class="underline"><span>service</span></a></li>
            <li><a href="#" class="underline"><span>contact</span></a></li>
          </ul>
        </nav>
        </div>
        
    )

}
