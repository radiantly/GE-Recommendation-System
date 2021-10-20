import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import Button from '@mui/material/Button';
export const MenuItems = [
    {
        title: <Button variant="contained" color="success">LOGIN</Button>,
        url: '#',
        cName: 'nav-links'
    },
    {
        title: 'Home',
        url: '#',
        cName: 'nav-links',
        icons: <HomeOutlinedIcon />
    },
    
    {
        title: 'Cart',
        url: '#',
        cName: 'nav-links',
        icons: <ShoppingCartOutlinedIcon />
    },

]