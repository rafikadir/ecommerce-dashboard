import {Box, DollarSign, HardDrive, ShoppingBag, TrendingDown, TrendingUp } from 'react-feather';

const dashboardData = [
    {
        'title': 'New Order',
        'growth': '+23.5%',
        'ammount': 10,
        'icon': <ShoppingBag/>,
        'arrow': <TrendingUp/>
    },
    {
        'title': 'Total Order',
        'growth': '+30.5%',
        'ammount': 255,
        'icon': <HardDrive/>,
        'arrow': <TrendingUp/>
    },
    {
        'title': 'Total Sales',
        'growth': '-10.5%',
        'ammount': '$25,000',
        'icon': <DollarSign/>,
        'arrow': <TrendingDown/>
    },
    {
        'title': 'Products',
        'ammount': 35,
        'icon': <Box/>,
    }
];


export default dashboardData;