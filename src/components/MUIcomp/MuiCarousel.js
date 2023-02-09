import React from 'react';
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { CircularProgress } from '@mui/material';
import { UseMuiContext } from '../../Context/MuiContextProvider';
import uuid from 'react-uuid';
import { useNavigate } from 'react-router-dom';
import {  CaretLeftFill, CaretRightFill } from 'react-bootstrap-icons';
import Slider from "react-slick";
// import "~slick-carousel/slick/slick.css"; 
// import "~slick-carousel/slick/slick-theme.css";

const MuiCarousel = (itemArr ) => {
    const theme = useTheme();
    const [activeStep, setActiveStep] = React.useState(0);
    const {loading , setLoading ,handleClick} = UseMuiContext();
    const navigate = useNavigate();
    const images = itemArr;
    const settings = {
      dots: true,
      lazyLoad: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      initialSlide: 0,
      autoplay: true,
      autoplaySpeed: 2000,
      cssEase: "linear"
    };

     function handleClickAndTiming(item){
        handleClick(item);

        setTimeout(()=>{
            setLoading({});
            navigate('/order');
        },1000)
     }

    return (
        <Box  className="center"  sx={{ maxWidth: 600, flexGrow: 2 }} key={uuid()}>
          <Paper
            square
            elevation={0}
            sx={{
              display: "flex",
              alignItems: "center",
              height: 50,
              pl: 2,
              bgcolor: "background.default"
            }}
          >
            <Typography>{images.itemArr[activeStep].title}</Typography>
          </Paper>
          <Slider
           {...settings}
           className='bg-white'
           >
          {images.itemArr.map((step, index) => (
              <div key={uuid()}>
                  <div>
                    {step.userName ? (
                        <>
                    <div style={{padding:'15px'}}>
                    <p  className='bg-white title'>{step.userName}</p>
                    <p  className='bg-white'>{step.description}</p>
                    </div>

                        </>
                    ) : (
                        <>
                         <Box
                      component="img"
                      sx={{
                        height: 255,
                        display: "block",
                        maxWidth: 600,
                        overflow: "hidden",
                        width: "100%"
                      }}
                      src={`/icons_assets/${step.imgUrl}`}
                      alt='img'
                    />
                    <div style={{padding:'15px'}}>
                    <p  className='bg-white'>{step.description}</p>
                    <p  className='bg-white'> ${step.price}</p>
                    <button onClick={() => handleClickAndTiming(step)}  className='primaryButton menuBtn w-100'>
       {loading.description === step.description ? <CircularProgress   size={30}/>  : <p>Order for Delivery</p>}
                </button>
                    </div>
                 
                        </>
                    )}
                   </div> 
              </div>
            ))}
          </Slider>
        </Box>
      );
}

export default MuiCarousel