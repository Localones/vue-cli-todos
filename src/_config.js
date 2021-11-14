export const precess = {
    dev: true,
}

export const site = {
    home: precess.dev ? 'http://localhost:8080/' : 'https://todoapp.ru',
}

export const app = {
    title: 'Todo app',
}

export const links = [
    {
        title: 'Home',
        alias: 'home',
        url: '/',
    },
    {
        title: 'About',
        alias: 'about',
        url: '/about',
    },
];

