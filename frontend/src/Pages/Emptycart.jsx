import { Box, Button } from '@chakra-ui/react'
import React from 'react'
import {Navigate} from "react-router-dom"
const Emptycart = () => {
    const handleHome=()=>{
        return <Navigate to="/"/>
    }
  return (
    <Box width={'100%'} margin='auto'>
         <img src='https://media4.ppl-media.com/mediafiles/ecomm/webengage/1456403495_empty-bag-25022016.png' alt='empty cart'/> 
         <p>There is no items in this cart</p>  
         <Button bg={'#e40980'} borderRadius='0px' _hover={{ bg: '#e40980' }} onClick={handleHome}>CONTINUE SHOPPING</Button>
    </Box>
  )
}

export default Emptycart