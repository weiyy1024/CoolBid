import React,{useState, useEffect} from 'react';
import styled from '@emotion/styled';
import Ps5Pic from'./images/Ps5.jpeg';
import Favorite from '@material-ui/icons/Favorite';
import axios from 'axios';


const Products=styled.div`
    margin-top:30rem;
    width:110rem;
    display:flex;
    float:right;
    flex-wrap: wrap;
`
const ProductContainer=styled.div`
    margin: 2rem;
    width: 22.5rem;
    border-radius: 4px;
    background: #dbdbdb;
    box-shadow:  -4px 4px 20px 0px #eeeeee, 49px -9px 98px #f2f2f2bf;
`

const ProductImgDiv=styled.div`
    position: relative;
    height: 22.5rem;
    width: 22.5rem;
    top:0
`
const FavoriteIcon=styled(Favorite)`
    position: absolute;
    bottom: 1rem;
    right: 1rem;
    cursor: pointer;
    &:hover{
        color:rgb(254 63 29);
    }
`
const Infomation = styled.div`
    text-align: center;
    p{
        font-size:2rem;
        margin-top:0;
        margin-bottom:.8rem;
    }
`

export default function Product(props){
    let myData=[
        { id:1,
          productName:"Sony PS5 PlayStation 5 Blu-ray Edition Console 3005718 White",
          directPrice:40000,
          like:0
        },
        { id:2,
            productName:"Sony PS5 PlayStation 5 Blu-ray Edition Console 3005718 White",
            directPrice:40000,
            like:0
          },
        { id:3,
            productName:"Sony PS5 PlayStation 5 Blu-ray Edition Console 3005718 White",
            directPrice:40000,
            like:0
          },
        { id:4,
            productName:"Sony PS5 PlayStation 5 Blu-ray Edition Console 3005718 White",
            directPrice:40000,
            like:0
          },
          { id:5,
            productName:"Sony PS5 PlayStation 5 Blu-ray Edition Console 3005718 White",
            directPrice:40000,
            like:0
          },
          { id:6,
            productName:"Sony PS5 PlayStation 5 Blu-ray Edition Console 3005718 White",
            directPrice:40000,
            like:0
          },
          { id:7,
            productName:"Sony PS5 PlayStation 5 Blu-ray Edition Console 3005718 White",
            directPrice:40000,
            like:0
          },
          { id:8,
            productName:"Sony PS5 PlayStation 5 Blu-ray Edition Console 3005718 White",
            directPrice:40000,
            like:0
          },

      ]
    const [info,setInfo]=useState("");
    const [productData,setProductData]=useState(myData);
    

    useEffect(()=>{
                axios({
                    method: 'get',
                    baseURL: 'http://localhost:3001',
                    url: '/search/'+props.match.params.keyword,
                    'Content-Type': 'application/json',
                  }).then((res)=>setProductData(res.data))
    },[]);
    const handlelike=(e,index)=>{
        let newData=productData.map((item)=>item)
        if(productData[index].like===0){
            newData[index].like=1
            setProductData(newData)
        }else{
            newData[index].like=0
            setProductData(newData)
        }
    }
    // count how many like
    // 
    let totLike=0
    productData.map(
        (item)=>{
          let s=item.like
          totLike +=s;        
        })
    console.log(totLike);
    
    return(
    <Products>
        {
            productData.map((item,index)=>{
                return(
                <ProductContainer>
                    <ProductImgDiv>
                        <img src={Ps5Pic}></img>
                        <FavoriteIcon onClick={(e)=>handlelike(e,index)} style={{fontSize: "3.5rem",color:(item.like===0)?"":"rgb(254 63 29)"}} color="disabled" ></FavoriteIcon>
                    </ProductImgDiv>
                    <Infomation>
                        <h1>{item.productName}</h1>
                        <p>NT.<span>{item.directPrice}</span></p>
                    </Infomation>
                </ProductContainer>
                )
            })
        }
    </Products>
    )
}
