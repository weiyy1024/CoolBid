import React from 'react';
import Drawer from '@material-ui/core/Drawer';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import Ps5Pic from'../images/product/Ps5.jpeg';
import styled from '@emotion/styled';
import Tooltip from '@material-ui/core/Tooltip';

//styled Components
const ProductDiv=styled.div`
    display:flex;
`
const ProductImg=styled.div`
    width:22rem;
    height:22rem;
`
const ProductInfo=styled.div`
    .productName{
    font-size: 2rem;  
    }
`
const Totle=styled.div`
    border-top:solid .3rem rgb(17, 17, 120);
    border-bottom:solid .3rem rgb(17, 17, 120);
    height:5rem;
    font-size:2.5rem;
    line-height: 5rem;        
    color:rgb(17, 17, 49);
    display:flex;
    position: relative;
    div{
        position:absolute;
        right:2rem;
    }    
`
const CartNum=styled.span`
  background-color:red;
  border-radius:50%;
  padding:.1rem .6rem;
  position: absolute;
  right:1rem;
  bottom:3.2rem;
  color:white;
`

//styled Components--End


export default function ShoppingCart() {
  const [state, setState] = React.useState({
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    setState({ ...state, [anchor]: open });
  };

//Shopping Cart List
  const myProduct=[
    {
        img:Ps5Pic,
        productName:"Sony PS5",
        price:50000,
        selleId:"hi_weiyy",
        time:"剩下6天6時59分59秒結束"
    },
    {
        img:Ps5Pic,
        productName:"Sony PS5",
        price:50000,
        selleId:"hi_weiyy",
        time:"剩下6天6時59分59秒結束"
    },{
      img:Ps5Pic,
      productName:"Sony PS5",
      price:50000,
      selleId:"hi_weiyy",
      time:"剩下6天6時59分59秒結束"
  }
  ]
//Shopping Cart List--End

  const list = (anchor) => (
    <div style={{width: '40rem'}}
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
          <h1>&nbsp;&nbsp;Shopping Cart&nbsp;&nbsp;
          <ShoppingCartIcon style={{fontSize:"3rem"}}/>
          </h1>
          <Divider/>
        {myProduct.map((item, index) => (
          <ProductDiv>
              <ProductImg>
                  <img src={item.img}></img>
              </ProductImg>
              <ProductInfo>
                  <p className="productName">{item.productName}</p>
                  <p>$NT.{item.price}</p>
                  <span>賣家：<a>{item.selleId}</a></span>
                  <p>{item.time}</p>
              </ProductInfo>
          </ProductDiv>
        ))}
      </List>
    </div>
  );

  //cart tot price
    let tot=0;
    myProduct.map((item)=>{
        tot+=item.price;
        console.log(tot);
    })
    let itemAmount=0
    myProduct.map((item)=>{
      itemAmount+=1
  })

  //cart tot price--End
  return (
        <React.Fragment key='right'>
          <div>
          <CartNum>{itemAmount}</CartNum>
          <Tooltip title="ShoppingCart" arrow>
            <ShoppingCartIcon onClick={toggleDrawer('right', true)} style={{fontSize:"3.5rem",paddingBottom: ".5rem",paddingRight:"2rem"}}/>
          </Tooltip>
          </div>
          <Drawer anchor='right' open={state['right']} onClose={toggleDrawer('right', false)}>
            {list('right')}
            <Totle>&nbsp;Totle:<div>$NT.{tot}</div></Totle>
            <Button style={{fontSize:"3rem"}}>Check Out</Button>
          </Drawer>
        </React.Fragment>
  );
}