import React,{useState} from 'react';
import { NavLink,BrowserRouter} from 'react-router-dom';
import styled from '@emotion/styled';
import {  ThemeProvider } from '@emotion/react';
//icons
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import WbSunnyIcon from '@material-ui/icons/WbSunny';
import Brightness2Icon from '@material-ui/icons/Brightness2';
import SearchBar1 from "material-ui-search-bar";
import Tooltip from '@material-ui/core/Tooltip';
import GavelIcon from '@material-ui/icons/Gavel';

//country
import DialogSelect from './components/country'
//bidding
import Bidding from './components/bidding'
//cart
import ShoppingCart from './components/cart'
//notification
import Notification from './components/notification'
//dorp down
import DropDown from './components/dropdown'

//Theme switch
const theme={
  light:{
    backgroundColor: 'rgb(255, 255, 255)',
    textColor: 'rgb(17, 17, 49)',
    searchBorder:"solid rgba(28, 28, 51, 0.548) .3rem",
    ball:"0.5rem",
    bg:'#eeeeee',
    toggle:'rgb(17, 17, 49)',
    icon:'goldenrod',
  },
  dark:{
    backgroundColor: 'rgb(0, 0, 0)',
    textColor: 'aliceblue',
    searchBorder:"none",
    ball:"3.5rem",
    bg:'#1e1f26',
    toggle:'#ffc400',
    icon:'#c27e00;',
  }
}
let ToggleItem=styled.div`
  position: absolute;
  top: 1rem;
  right: .5rem;
  position: fixed;
  img{
    width: 2.7rem;
    height: 2.7rem;
    border-radius: 50%;
    top: 1rem;
    right: 8rem;
    position: fixed;
    cursor:pointer;
  }
`
let Toggle=styled.div`
  background:${({theme})=>theme.toggle} ;
  color: ${({theme})=>theme.icon};
  border-radius: 50px;
  padding: 1px 5px;
  position: relative;
  cursor: pointer;
  margin-bottom: 2rem;
  width: 5rem;
  height: 2.5rem;
  display: inline-block;
  `
let MoonIcon=styled(Brightness2Icon)`
  position: absolute;
  left: .5rem;
  top: .6rem;
`
let SunnyIcon=styled(WbSunnyIcon)`
  position: absolute;
  right: .5rem;
  top: .6rem;
  
`
let Ball =styled.div`
    height: 2rem;
    width: 2rem;
    position: absolute;
    background-color: #fafafa;
    border-radius: 50%;
    top: 0.3rem;
    -webkit-transition: all 300ms linear;
	  transition: all 300ms linear;
    left:${({theme})=>theme.ball}
    
`
//Theme switch--End

//Navbar
let Navbar=styled.div`
  box-shadow: 0 1rem 1rem -1rem rgba(17, 17, 49, 0.171);
  background-color: ${({theme})=>{return(theme.backgroundColor)}};
  top: 4.5rem;
  width: 100%;
  height: 12rem;
  display: flex;
  position: fixed;
`;

let Logo=styled(NavLink)`
  font-size: 4rem;
  color: ${({theme})=>theme.textColor};
  margin-top: 2rem;
  text-decoration: none;

`
let NavLeft =styled.div`
  margin: 6rem 0rem 6rem 3rem;
  display:flex;
`
let Title=styled(NavLink)`
  font-size: 2.5rem;
  color: ${({theme})=>theme.textColor};
  padding: 1.5rem;
  text-decoration: none;
  &:hover{
    color: #ffae19;
    dl{
      visibility:visible;
    }

}
`

//SearchBar
let SearchDiv=styled.div`
  margin: 5rem auto;
  width: 40rem;
  transform: translateX(-20rem);
`
let SearchBar=styled(SearchBar1)`
  width: 50rem;
  height:3rem;
  background-color:white;
  border: ${({theme})=>theme.searchBorder};
  input{
    font-size: 2rem;
  }
`
//SearchBar--End

let ThreeIcons=styled.div`
  display:flex;
  position: absolute;
  bottom: .5rem;
  right: .5rem;
  color: ${({theme})=>theme.textColor};
  cursor:pointer;
`
//Navbar--End



export default function  NavBar(props) {
  const [currentTheme,setCurrentTheme]=useState('dark');
  const{setData}=props;
  // Dark Mode function
  const toggleTheme = () => {
    if(currentTheme==='dark'){
      setCurrentTheme('light');
      document.body.style.backgroundColor=theme.light.bg;
    }else{
      setCurrentTheme('dark');
      document.body.style.backgroundColor=theme.dark.bg;
    }
  }
  //search data
  const [search,setSearch]=useState("");
  // const [product,setProduct]=useState([])
  const handleSearch=()=>{  
    // setSearch(''); 
    // axios({
    //   method: 'get',
    //   baseURL: 'http://localhost:3001',
    //   url: '/search/'+search,
    //   'Content-Type': 'application/json',
    // })
    //   .then((res) => {return(setProduct(res.data),setData(product))});
      
    window.location.href='http://localhost:3000/Ahompage/search/'+search
        
        
    
    // axios({
    //     method: 'post',
    //     baseURL: 'http://localhost:3001',
    //     url: '/search',
    //     data:{test:search},
    //   })
    //     .then((res) => setProduct(res.data))
}

const iconStye={fontSize:"3.5rem",paddingBottom:".5rem",paddingRight:"2rem"}

  return (
    <BrowserRouter>
    <ThemeProvider theme={theme[currentTheme]}>
        <ToggleItem>
          <DialogSelect/>
          <Toggle  onClick={toggleTheme}>
            <SunnyIcon/>
              <MoonIcon/>
              <Ball />
          </Toggle>
        </ToggleItem>
    <Navbar style={{zIndex:"1000"}}>
        <Logo to="/" className="logo">CooolBid</Logo>&nbsp;&nbsp;
        <NavLeft>
        <Title to="/Ahompage">競標區<DropDown/></Title>&nbsp;&nbsp;
        <Title to="/Chompage">拍賣會</Title>&nbsp;&nbsp;
        </NavLeft>
      <SearchDiv>
       <SearchBar value={search} onChange={(e)=>{setSearch(e)}} onRequestSearch={handleSearch}></SearchBar>
      </SearchDiv>
      <ThreeIcons>
        <Notification />
        <Tooltip title="Account" arrow>
          <AccountCircleIcon style={iconStye}/>
        </Tooltip>
        <Bidding/>
      <ShoppingCart/>      
      </ThreeIcons>
    </Navbar>
    </ThemeProvider>
    </BrowserRouter>
  );
}

