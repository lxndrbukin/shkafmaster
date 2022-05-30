import drill from '../assets/imgs/delivery/drill.png';
import tapeMeasure from '../assets/imgs/delivery/tape-measure.png';
import delivery from '../assets/imgs/delivery/fast-delivery.png';
import phone from '../assets/imgs/delivery/smartphone.png';
import agreement from '../assets/imgs/delivery/agreement.png';
import wardrobe from '../assets/imgs/delivery/wardrobe.png';

export const deliveryHeaders = 
    {
        name: {
            ru: "Как мы работаем",
            md: "Process"
        }
    }


export const deliverySteps = [
    {
        name: {
            ru: "Заявка"
        },
        text: {
            ru: "Заявка на сайте или по телефону"
        },
        icon: phone
    },
    {
        name: {
            ru: "Замеры"
        },
        text: {
            ru: "Выезд специалиста на замер мебели"
        },
        icon: tapeMeasure
    },
    {
        name: {
            ru: "Контракт"
        },
        text: {
            ru: "Подписание контракта"
        },
        icon: agreement
    },
    {
        name: {
            ru: "Изготовление"
        },
        text: {
            ru: "Изготовление продукта"
        },
        icon: wardrobe
    },
    {
        name: {
            ru: "Доставка"
        },
        text: {
            ru: "Транспортировка мебели и материалов"
        },
        icon: delivery
    },
    {
        name: {
            ru: "Установка"
        },
        text: {
            ru: "Сборка и монтаж мебели"
        },
        icon: drill
    }
]