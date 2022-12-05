import React from 'react';
import ShoppingCartTwoToneIcon from '@mui/icons-material/ShoppingCartTwoTone';


export default function CartWidget({ cant }) {

return(
    <>
    <ShoppingCartTwoToneIcon />
    {cant}
    </>
)

}