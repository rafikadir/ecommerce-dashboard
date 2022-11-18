import { Activity, Bell, MessageSquare, Package, ShoppingCart, User } from "react-feather";

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
    {
        'name': 'Notifications',
        'link': '/notification',
        'icon': <Bell/>
    },
    {
        'name': 'Messages',
        'link': '/messages',
        'icon': <MessageSquare/>
    }
]

export default nav;