import { Activity, Package, ShoppingCart, User } from "react-feather";

const nav = [
    {
        'name': 'Dashboard',
        'link': '/',
        'icon': <Activity/>
    },
    {
        'name': 'Orders',
        'link': '/orders',
        'icon': <ShoppingCart/>,
    },
    {
        'name': 'Products',
        'link': '/products',
        'icon': <Package/>
    },
    {
        'name': 'Customers',
        'link': '/customers',
        'icon': <User/>
    },
]

export default nav;