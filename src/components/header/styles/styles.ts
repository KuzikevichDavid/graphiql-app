import { SxProps, Theme, keyframes } from '@mui/material';

const logoAnimation = keyframes`
    0% {
        transform: rotate(0deg)
    }
    20% {
        transform: rotate(170deg)
    }
    25% {
        transform: rotate(140deg) ;
    }
    30% {
        transform: rotate(170deg) ;
    }
    

    45% {
        transform: rotate(0deg) ;
    }
    55% {
        transform: rotate(0deg) ;
    }


    60% {
        transform: rotate(-30deg) 
    }
    70% {
        transform: rotate(0deg) 
    }
    80% {
        transform: rotate(-30deg) 
    }
    90% {
        transform: rotate(0deg) 
    }
    100% {
        transform: rotate(-30deg) 
    }
    `;

const logoStyle: SxProps<Theme> = {
  transformOrigin: 'center',
  animation: `${logoAnimation}  5s infinite`,
};

export default logoStyle;
