import React, {useEffect, useState} from 'react';
import Drawer from '@material-ui/core/Drawer';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import Ps5Pic from'../images/product/Ps5.jpeg';
import styled from '@emotion/styled';
import Tooltip from '@material-ui/core/Tooltip';
import GavelIcon from '@material-ui/icons/Gavel';
import TextField from '@material-ui/core/TextField';
import AccessAlarmIcon from '@material-ui/icons/AccessAlarm';


//styled Components
const ProductDiv=styled.div`
    display:flex;
`
const ProductImg=styled.div`
    width:22rem;
    height:22rem;
`
const ProductInfo=styled.div`
    padding:1rem;
    .productName{
    font-size: 2.2rem;
    margin-top: 1rem;
    margin-bottom: 0rem;
    font-weight: bold;
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
  right:6.5rem;
  bottom:3.2rem;
  color:white;
`

//styled Components--End

function ProductDiv1(props){
    const [time,setTime]=useState('剩下0天0時0分0秒結束');
    const{data}=props;

    const getRestTime =(deadline)=>{
      let item =deadline;
      item=item.split("/");
       setInterval(function(){
           // nowTime
           var time = new Date();
           var nowTime = time.getTime();// 獲取當前毫秒數
        //console.log(item)


           //nedTime
           time.setMonth(parseInt(item[1])-1); //月份 (從 '0' 開始算)
           time.setDate(parseInt(item[2]));
           time.setHours(0);
           time.setMinutes(0);
           time.setSeconds(0);
           var nedTime=time.getTime();
   
           // 倒數計時: 差值
           var offsetTime = (nedTime-nowTime)/1000; // ** 以秒為單位
           var day =parseInt(offsetTime/ 60 / 60 /24);
           var hr = parseInt((offsetTime/ 60 / 60)-day*24);
           var min = parseInt((offsetTime / 60) % 60);
           var sec =parseInt(offsetTime%60);
           
           setTime(`剩下${day}天${hr}時${min}分${sec}秒`)
           
       },1000)
    return time
    }
       
    return(
        <ProductDiv>
              <ProductImg>
                  <img src={data.img}></img>
              </ProductImg>
              <ProductInfo>
                  <p className="productName">{data.productName}</p>
                  <p>最高出價：<span>$NT.</span>{data.price}</p>
                  <p>目前出價：<span>$NT.</span>{data.price}</p>
                  <TextField
                    id="standard-number"
                    label="Price"
                    type="number"
                    InputLabelProps={{
                        shrink: true,
                    }}/>
                    <Button style={{margin:"1rem .5rem .5rem 0"}} variant="contained" size="small" color="primary">直接購買</Button>
                    <Button style={{margin:"1rem 0 .5rem 0"}} variant="contained" size="small" color="primary">確認出價</Button>
                    <p id="countdown"><AccessAlarmIcon style={{}}/>{getRestTime(data.deadline)}</p>
              </ProductInfo>
        </ProductDiv>
    )
}

export default function Bidding() {
  const [state, setState] = React.useState({
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    setState({ ...state, [anchor]: open });
  };

//Bidding Cart List
  const myProduct=[
    {
        img:Ps5Pic,
        productName:"Sony PS5",
        price:50000,
        selleId:"hi_weiyy",
        time:"剩下6天6時59分59秒結束",
        deadline:"2021/4/27",
    },
    {
        img:Ps5Pic,
        productName:"Sony PS5",
        price:50000,
        selleId:"hi_weiyy",
        time:"剩下6天6時59分59秒結束",
        deadline:"2021/5/4",
    }
  ]
//Bidding List--End
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
    //timer
 
  const list = (anchor) => (
    <div style={{width: '40rem'}}
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
          <h1 style={{fontSize:"3rem"}}>&nbsp;&nbsp;Bidding&nbsp;&nbsp;
          <GavelIcon style={{fontSize:"3rem"}}/>
          </h1>
          <Divider/>
        {myProduct.map((item) => (
          <ProductDiv1 data={item}/>
        ))}
      </List>
    </div>
  );

  return (
        <React.Fragment key='right'>
          <div>
          <CartNum>{itemAmount}</CartNum>
          <Tooltip title="Bidding" arrow>
            <GavelIcon onClick={toggleDrawer('right', true)} style={{fontSize:"3.5rem",paddingBottom: ".5rem",paddingRight:"2rem"}}/>
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