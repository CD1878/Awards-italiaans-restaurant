import menuData from '../data/menu.json';

export interface MenuItem {
    name: string;
    description: string;
    price: string;
}

export interface WineItem {
    name: string;
    region: string;
    description: string;
    glass?: string;
    bottle: string;
}

export interface DrinkItem {
    name: string;
    price: string;
    description?: string;
}

export interface MenuData {
    lunch: {
        antipasti: MenuItem[];
        pasta: MenuItem[];
        insalate: MenuItem[];
        dolci: MenuItem[];
    };
    diner: {
        antipasti: MenuItem[];
        primi: MenuItem[];
        secondi: MenuItem[];
        contorni: MenuItem[];
        dolci: MenuItem[];
    };
    wines: {
        white: WineItem[];
        red: WineItem[];
        rose_spumante: WineItem[];
    };
    drinks: {
        soft_drinks: DrinkItem[];
        beer: DrinkItem[];
        coffee_tea: DrinkItem[];
        digesti: DrinkItem[];
    };
}

export const getMenuData = (): MenuData => {
    return menuData as MenuData;
};
