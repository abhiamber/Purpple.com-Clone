import React from 'react'
import "./Cartitem.css"
import BackendURL from '../BackendURL'
import { Text, Box, Divider } from "@chakra-ui/react"
const Cartitems = ({ image_link, name, quantity, price, product_Id }) => {

    const _id = localStorage.getItem("uproid")
    const handleDelete = (productId) => {
        window.location.reload()
        const payload = {
            productId:productId,
            _id:_id
        }
        return fetch(`${BackendURL}/cart/delete`, {
            method: "POST",
            body: JSON.stringify(payload),
            headers: {
                "Content-Type":'application/json',
                "token": localStorage.getItem("token")
            }
        }).then(res => res.json()).then(res => console.log('item deleted successfully')).catch(err => console.log(err))
    }
    return (
        <div className='cartitems'>
            <div>
                <img src={image_link} alt={name} />
            </div>
            <Box className='cartitemdet'>
                <Text fontSize={'xl'} color='black' fontWeight={'600'} textAlign='left'>{name}</Text>
                <Text marginTop='10px' fontSize={'18px'} textAlign='left' color='black' fontWeight={'600'}>{quantity} Items Left</Text>
                <Box marginTop='10px' display={'flex'} gap='10px'>
                    <button onClick={() => handleDelete(product_Id._id)}>Remove</button>
                    <Divider orientation='vertical' margin='auto' border='1px solid gray' h={'12px'} />
                    <button>Move to wishlist</button>
                </Box>
            </Box>
            <Text fontSize={'xl'} color='black' fontWeight={'600'}>₹{price * 75}</Text>
        </div>
    )
}

export default Cartitems