import kitchen from '../assets/imgs/slides/kitchen.jpg';
import office from '../assets/imgs/slides/office.jpg';
import wardrobe from '../assets/imgs/slides/wardrobe.jpg';

export const slidesList = [
    {
        name: {
            ru: "Кухни",
            md: "Bucatarii"
        },
        text: {
            ru: "-10%",
            md: "Reduceri"
        },
        path: "/kitchens",
        img: kitchen
    },
    {
        name: {
            ru: "Шкафы",
            md: "Dulapuri"
        },
        text: {
            ru: "-15%",
            md: "Reduceri"
        },
        path: "/wardrobes",
        img: wardrobe
    },
    {
        name: {
            ru: "Офисы",
            md: "Birouri"
        },
        text: {
            ru: "-5%",
            md: "Reduceri"
        },
        path: "/offices",
        img: office
    }
]