interface MenuRoute {
    id: number;
    path: string;
    name: string;
}

export const menuRoutes:MenuRoute[] = [
    {
        id: 1,
        name: 'О нас',
        path: '/about'
    },
    {
        id: 2,
        name: 'Спектакли',
        path: '/performances'
    },
    {
        id: 3,
        name: 'Контакты',
        path: '/contacts'
    }
];
