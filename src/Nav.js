import { Activity, Headphones, Home, Package, ShoppingCart, User } from "react-feather";

const nav = [
    {
        'name': 'Dashboard',
        'to': '/',
        'icon': <Activity/>
    },
    {
        'name': 'Orders',
        'to': '/',
        'icon': <ShoppingCart/>,
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