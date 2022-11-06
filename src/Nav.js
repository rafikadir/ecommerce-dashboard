import { Headphones, Home, Package, ShoppingBag, User } from "react-feather";

const nav = [
    {
        'name': 'Dashboard',
        'to': '/',
        'icon': <Home/>
    },
    {
        'name': 'Orders',
        'to': '/',
        'icon': <ShoppingBag/>
    },
    {
        'name': 'Products',
        'to': '/',
        'icon': <Package/>
    },
    {
        'name': 'Users',
        'to': '/',
        'icon': <User/>
    },
    {
        'name': 'Support',
        'to': '/',
        'icon': <Headphones/>
    }
]

export default nav;