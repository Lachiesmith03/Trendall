import React, {
    useEffect,
    useState
} from "react";
import { Link } from "react-router-dom";
import {scrollToTop} from '../../index.js';
import ReactPaginate from 'react-paginate';
const articlesPerPage = 3;
export const articles = [
    {
        id: 1,
        image: 'https://i.pinimg.com/originals/9e/61/4f/9e614f36c80e903d63ec72cc2db851c0.gif',
        heading: "Lost Horizons: Exploring Ancient Mysteries Across the Mediterranean Realm",
        description:'Discover the enigmatic allure of the past with "Lost Horizons: Exploring Ancient Mysteries Across the Mediterranean Realm." This captivating journey transcends the boundaries of time and space, leading readers through the labyrinthine corridors of history. From the opulent streets of Byzantium to the sun-scorched ruins of Carthage, each chapter of this expedition unveils the secrets of lost civilizations, shrouded in the mists of time. " This enchanting odyssey unveils the hidden treasures of antiquity, scattered like jewels along the storied coastline. From the majesty of Minoan Crete to the glory of Phoenician Tyre, each chapter of this expedition delves into the heart of lost civilizations, revealing their triumphs and tragedies.',
        content: 'Discover the enigmatic allure of the past with "Lost Horizons: Exploring Ancient Mysteries Across the Mediterranean Realm." This captivating journey transcends the boundaries of time and space, leading readers through the labyrinthine corridors of history. From the opulent streets of Byzantium to the sun-scorched ruins of Carthage, each chapter of this expedition unveils the secrets of lost civilizations, shrouded in the mists of time. ',
        date: '04 Apr 2024'
    },
    {
        id: 2,
        image: 'https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExcGxxOHpzN2gxaXYycHkxZHFybzNzdGJxMzYzcHp6dXRqdzdxZWk4ZCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/ukf9Xx1HV9f3kXnAuw/giphy.gif',
        heading: "Lost Cities Rediscovered: Tales from the Ancient Mediterranean",
        description:'Delve into the captivating narrative of "Lost Cities Rediscovered: Tales from the Ancient Mediterranean" as it unravels the mysteries veiled by time in the vibrant tapestry of the Mediterranean region. This compelling exploration embarks on a journey through the annals of history, resurrecting ancient civilizations and their enigmatic urban landscapes that have long been obscured beneath layers of antiquity.',
        content: 'Step into the realm of ancient wonders with "Echoes of Antiquity: Unveiling Lost Civilizations in the Ancient Mediterranean." This immersive journey transcends the confines of time, guiding readers through the forgotten realms of antiquity scattered across the Mediterranean. From the majestic ruins of Alexandria to the sunken glory of Atlantis, each chapter of this exploration breathes life into the buried legacies of civilizations long past. Through vivid narratives and expert analysis, rediscover the allure of lost cities and the profound tales they hold, echoing through the corridors of history.',
        date: '04 Apr 2024'
    },
    {
        id: 3,
        image: 'https://i.pinimg.com/564x/ca/83/53/ca8353bd4de10dd84b467b1941107fe3.jpg',
        heading: "Echoes of Antiquity: Unveiling Lost Civilizations in the Ancient Mediterranean",
        description:'Step into the realm of ancient wonders with "Echoes of Antiquity: Unveiling Lost Civilizations in the Ancient Mediterranean." This immersive journey transcends the confines of time, guiding readers through the forgotten realms of antiquity scattered across the Mediterranean. From the majestic ruins of Alexandria to the sunken glory of Atlantis, each chapter of this exploration breathes life into the buried legacies of civilizations long past. Through vivid narratives and expert analysis, rediscover the allure of lost cities and the profound tales they hold, echoing through the corridors of history.',
        content: 'Step into the realm of ancient wonders with "Echoes of Antiquity: Unveiling Lost Civilizations in the Ancient Mediterranean." This immersive journey transcends the confines of time, guiding readers through the forgotten realms of antiquity scattered across the Mediterranean. From the majestic ruins of Alexandria to the sunken glory of Atlantis, each chapter of this exploration breathes life into the buried legacies of civilizations long past. Through vivid narratives and expert analysis, rediscover the allure of lost cities and the profound tales they hold, echoing through the corridors of history.',
        date: '05 Apr 2024'
    },
    {
        id: 4,
        image: "https://i.pinimg.com/564x/7d/f3/95/7df395de761533727e675576c9b9d428.jpg",
        heading: "Echoes of Antiquity: Unveiling Lost Civilizations in the Ancient Mediterranean",
        description:'Step into the realm of ancient wonders with "Echoes of Antiquity: Unveiling Lost Civilizations in the Ancient Mediterranean." This immersive journey transcends the confines of time, guiding readers through the forgotten realms of antiquity scattered across the Mediterranean. From the majestic ruins of Alexandria to the sunken glory of Atlantis, each chapter of this exploration breathes life into the buried legacies of civilizations long past. Through vivid narratives and expert analysis, rediscover the allure of lost cities and the profound tales they hold, echoing through the corridors of history.',
        content: 'Step into the realm of ancient wonders with "Echoes of Antiquity: Unveiling Lost Civilizations in the Ancient Mediterranean." This immersive journey transcends the confines of time, guiding readers through the forgotten realms of antiquity scattered across the Mediterranean. From the majestic ruins of Alexandria to the sunken glory of Atlantis, each chapter of this exploration breathes life into the buried legacies of civilizations long past. Through vivid narratives and expert analysis, rediscover the allure of lost cities and the profound tales they hold, echoing through the corridors of history.',
        date: '02 Apr 2024'
    },
    {
        id: 5,
        image: "https://i.pinimg.com/originals/8a/ec/33/8aec333afe30bd9948115a2b4f98363c.gif",
        heading: "Lost Cities Rediscovered: Tales from the Ancient Mediterranean",
        description:'Delve into the captivating narrative of "Lost Cities Rediscovered: Tales from the Ancient Mediterranean" as it unravels the mysteries veiled by time in the vibrant tapestry of the Mediterranean region. This compelling exploration embarks on a journey through the annals of history, resurrecting ancient civilizations and their enigmatic urban landscapes that have long been obscured beneath layers of antiquity.',
        content: 'Step into the realm of ancient wonders with "Echoes of Antiquity: Unveiling Lost Civilizations in the Ancient Mediterranean." This immersive journey transcends the confines of time, guiding readers through the forgotten realms of antiquity scattered across the Mediterranean. From the majestic ruins of Alexandria to the sunken glory of Atlantis, each chapter of this exploration breathes life into the buried legacies of civilizations long past. Through vivid narratives and expert analysis, rediscover the allure of lost cities and the profound tales they hold, echoing through the corridors of history.',
        date: '01 Apr 2024'
    },
    {
        id: 6,
        image: 'https://i.pinimg.com/564x/00/2b/65/002b65dd7ad56bdc8d4546bd9cd991eb.jpg',
        heading: "Forgotten Splendors: Resurrecting Ancient Marvels Along the Mediterranean Shores",
        description:'Embark on a voyage of rediscovery with "Forgotten Splendors: Resurrecting Ancient Marvels Along the Mediterranean Shores." This enchanting odyssey unveils the hidden treasures of antiquity, scattered like jewels along the storied coastline. From the majesty of Minoan Crete to the glory of Phoenician Tyre, each chapter of this expedition delves into the heart of lost civilizations, revealing their triumphs and tragedies.',
        content: 'Embark on a voyage of rediscovery with "Forgotten Splendors: Resurrecting Ancient Marvels Along the Mediterranean Shores." This enchanting odyssey unveils the hidden treasures of antiquity, scattered like jewels along the storied coastline. From the majesty of Minoan Crete to the glory of Phoenician Tyre, each chapter of this expedition delves into the heart of lost civilizations, revealing their triumphs and tragedies.',
        date: '03 Apr 2024'
    },
    {
        id: 7,
        image: 'https://i.pinimg.com/564x/83/40/6a/83406a5c984837304812bd2dcdc05f08.jpg',
        heading: "Forgotten Splendors: Resurrecting Ancient Marvels Along the Mediterranean Shores",
        description:'Embark on a voyage of rediscovery with "Forgotten Splendors: Resurrecting Ancient Marvels Along the Mediterranean Shores." This enchanting odyssey unveils the hidden treasures of antiquity, scattered like jewels along the storied coastline. From the majesty of Minoan Crete to the glory of Phoenician Tyre, each chapter of this expedition delves into the heart of lost civilizations, revealing their triumphs and tragedies.',
        content: 'Embark on a voyage of rediscovery with "Forgotten Splendors: Resurrecting Ancient Marvels Along the Mediterranean Shores." This enchanting odyssey unveils the hidden treasures of antiquity, scattered like jewels along the storied coastline. From the majesty of Minoan Crete to the glory of Phoenician Tyre, each chapter of this expedition delves into the heart of lost civilizations, revealing their triumphs and tragedies.',
        date: '06 Apr 2024'
    },
    {
        id: 8,
        image: 'https://i.pinimg.com/564x/2d/e4/7a/2de47a48ad0c351075a83057d0cd1dba.jpg',
        heading: "Lost Horizons: Exploring Ancient Mysteries Across the Mediterranean Realm",
        description:'Discover the enigmatic allure of the past with "Lost Horizons: Exploring Ancient Mysteries Across the Mediterranean Realm." This captivating journey transcends the boundaries of time and space, leading readers through the labyrinthine corridors of history. From the opulent streets of Byzantium to the sun-scorched ruins of Carthage, each chapter of this expedition unveils the secrets of lost civilizations, shrouded in the mists of time. " This enchanting odyssey unveils the hidden treasures of antiquity, scattered like jewels along the storied coastline. From the majesty of Minoan Crete to the glory of Phoenician Tyre, each chapter of this expedition delves into the heart of lost civilizations, revealing their triumphs and tragedies.',
        content: 'Discover the enigmatic allure of the past with "Lost Horizons: Exploring Ancient Mysteries Across the Mediterranean Realm." This captivating journey transcends the boundaries of time and space, leading readers through the labyrinthine corridors of history. From the opulent streets of Byzantium to the sun-scorched ruins of Carthage, each chapter of this expedition unveils the secrets of lost civilizations, shrouded in the mists of time. ',
        date: '07 Apr 2024'
    },
    {
        id: 9,
        image: 'https://i.pinimg.com/564x/6e/ff/57/6eff577439f8094ce020cb5d8b4e2710.jpg',
        heading: "Lost Horizons: Exploring Ancient Mysteries Across the Mediterranean Realm",
        description:'Discover the enigmatic allure of the past with "Lost Horizons: Exploring Ancient Mysteries Across the Mediterranean Realm." This captivating journey transcends the boundaries of time and space, leading readers through the labyrinthine corridors of history. From the opulent streets of Byzantium to the sun-scorched ruins of Carthage, each chapter of this expedition unveils the secrets of lost civilizations, shrouded in the mists of time. " This enchanting odyssey unveils the hidden treasures of antiquity, scattered like jewels along the storied coastline. From the majesty of Minoan Crete to the glory of Phoenician Tyre, each chapter of this expedition delves into the heart of lost civilizations, revealing their triumphs and tragedies.',
        content: 'Discover the enigmatic allure of the past with "Lost Horizons: Exploring Ancient Mysteries Across the Mediterranean Realm." This captivating journey transcends the boundaries of time and space, leading readers through the labyrinthine corridors of history. From the opulent streets of Byzantium to the sun-scorched ruins of Carthage, each chapter of this expedition unveils the secrets of lost civilizations, shrouded in the mists of time. ',
        date: '07 Apr 2024'
    },
    {
        id: 10,
        image: 'https://i.pinimg.com/564x/5c/bf/90/5cbf900cff87efff38179d9c09ce4ead.jpg',
        heading: "Lost Horizons: Exploring Ancient Mysteries Across the Mediterranean Realm",
        description:'Discover the enigmatic allure of the past with "Lost Horizons: Exploring Ancient Mysteries Across the Mediterranean Realm." This captivating journey transcends the boundaries of time and space, leading readers through the labyrinthine corridors of history. From the opulent streets of Byzantium to the sun-scorched ruins of Carthage, each chapter of this expedition unveils the secrets of lost civilizations, shrouded in the mists of time. " This enchanting odyssey unveils the hidden treasures of antiquity, scattered like jewels along the storied coastline. From the majesty of Minoan Crete to the glory of Phoenician Tyre, each chapter of this expedition delves into the heart of lost civilizations, revealing their triumphs and tragedies.',
        content: 'Discover the enigmatic allure of the past with "Lost Horizons: Exploring Ancient Mysteries Across the Mediterranean Realm." This captivating journey transcends the boundaries of time and space, leading readers through the labyrinthine corridors of history. From the opulent streets of Byzantium to the sun-scorched ruins of Carthage, each chapter of this expedition unveils the secrets of lost civilizations, shrouded in the mists of time. ',
        date: '07 Apr 2024'
    },
    {
        id: 11,
        image: 'https://i.pinimg.com/originals/65/f7/bb/65f7bb7e3bbcd30a9cf0347d631a4ed4.gif',
        heading: "Lost Horizons: Exploring Ancient Mysteries Across the Mediterranean Realm",
        description:'Discover the enigmatic allure of the past with "Lost Horizons: Exploring Ancient Mysteries Across the Mediterranean Realm." This captivating journey transcends the boundaries of time and space, leading readers through the labyrinthine corridors of history. From the opulent streets of Byzantium to the sun-scorched ruins of Carthage, each chapter of this expedition unveils the secrets of lost civilizations, shrouded in the mists of time. " This enchanting odyssey unveils the hidden treasures of antiquity, scattered like jewels along the storied coastline. From the majesty of Minoan Crete to the glory of Phoenician Tyre, each chapter of this expedition delves into the heart of lost civilizations, revealing their triumphs and tragedies.',
        content: 'Discover the enigmatic allure of the past with "Lost Horizons: Exploring Ancient Mysteries Across the Mediterranean Realm." This captivating journey transcends the boundaries of time and space, leading readers through the labyrinthine corridors of history. From the opulent streets of Byzantium to the sun-scorched ruins of Carthage, each chapter of this expedition unveils the secrets of lost civilizations, shrouded in the mists of time. ',
        date: '07 Apr 2024'
    },
    {
        id: 12,
        image: 'https://i.pinimg.com/564x/f9/98/d9/f998d9dba9477edf1c683b6b367cb2c3.jpg',
        heading: "Lost Horizons: Exploring Ancient Mysteries Across the Mediterranean Realm",
        description:'Discover the enigmatic allure of the past with "Lost Horizons: Exploring Ancient Mysteries Across the Mediterranean Realm." This captivating journey transcends the boundaries of time and space, leading readers through the labyrinthine corridors of history. From the opulent streets of Byzantium to the sun-scorched ruins of Carthage, each chapter of this expedition unveils the secrets of lost civilizations, shrouded in the mists of time. " This enchanting odyssey unveils the hidden treasures of antiquity, scattered like jewels along the storied coastline. From the majesty of Minoan Crete to the glory of Phoenician Tyre, each chapter of this expedition delves into the heart of lost civilizations, revealing their triumphs and tragedies.',
        content: 'Discover the enigmatic allure of the past with "Lost Horizons: Exploring Ancient Mysteries Across the Mediterranean Realm." This captivating journey transcends the boundaries of time and space, leading readers through the labyrinthine corridors of history. From the opulent streets of Byzantium to the sun-scorched ruins of Carthage, each chapter of this expedition unveils the secrets of lost civilizations, shrouded in the mists of time. ',
        date: '07 Apr 2024'
    },
    {
        id: 13,
        image: 'https://i.pinimg.com/originals/61/7e/51/617e5143fb7e54bbf12c460a04334637.gif',
        heading: "Lost Horizons: Exploring Ancient Mysteries Across the Mediterranean Realm",
        description:'Discover the enigmatic allure of the past with "Lost Horizons: Exploring Ancient Mysteries Across the Mediterranean Realm." This captivating journey transcends the boundaries of time and space, leading readers through the labyrinthine corridors of history. From the opulent streets of Byzantium to the sun-scorched ruins of Carthage, each chapter of this expedition unveils the secrets of lost civilizations, shrouded in the mists of time. " This enchanting odyssey unveils the hidden treasures of antiquity, scattered like jewels along the storied coastline. From the majesty of Minoan Crete to the glory of Phoenician Tyre, each chapter of this expedition delves into the heart of lost civilizations, revealing their triumphs and tragedies.',
        content: 'Discover the enigmatic allure of the past with "Lost Horizons: Exploring Ancient Mysteries Across the Mediterranean Realm." This captivating journey transcends the boundaries of time and space, leading readers through the labyrinthine corridors of history. From the opulent streets of Byzantium to the sun-scorched ruins of Carthage, each chapter of this expedition unveils the secrets of lost civilizations, shrouded in the mists of time. ',
        date: '07 Apr 2024'
    },
    {
        id: 14,
        image: 'https://i.pinimg.com/564x/b8/93/37/b893370d3c65ee4fefecb5145cd8d8fd.jpg',
        heading: "Lost Horizons: Exploring Ancient Mysteries Across the Mediterranean Realm",
        description:'Discover the enigmatic allure of the past with "Lost Horizons: Exploring Ancient Mysteries Across the Mediterranean Realm." This captivating journey transcends the boundaries of time and space, leading readers through the labyrinthine corridors of history. From the opulent streets of Byzantium to the sun-scorched ruins of Carthage, each chapter of this expedition unveils the secrets of lost civilizations, shrouded in the mists of time. " This enchanting odyssey unveils the hidden treasures of antiquity, scattered like jewels along the storied coastline. From the majesty of Minoan Crete to the glory of Phoenician Tyre, each chapter of this expedition delves into the heart of lost civilizations, revealing their triumphs and tragedies.',
        content: 'Discover the enigmatic allure of the past with "Lost Horizons: Exploring Ancient Mysteries Across the Mediterranean Realm." This captivating journey transcends the boundaries of time and space, leading readers through the labyrinthine corridors of history. From the opulent streets of Byzantium to the sun-scorched ruins of Carthage, each chapter of this expedition unveils the secrets of lost civilizations, shrouded in the mists of time. ',
        date: '07 Apr 2024'
    },
    {
        id: 15,
        image: 'https://i.pinimg.com/originals/8e/11/df/8e11df466d6026dea73c1a5ce6537e9e.gif',
        heading: "Lost Horizons: Exploring Ancient Mysteries Across the Mediterranean Realm",
        description:'Discover the enigmatic allure of the past with "Lost Horizons: Exploring Ancient Mysteries Across the Mediterranean Realm." This captivating journey transcends the boundaries of time and space, leading readers through the labyrinthine corridors of history. From the opulent streets of Byzantium to the sun-scorched ruins of Carthage, each chapter of this expedition unveils the secrets of lost civilizations, shrouded in the mists of time. " This enchanting odyssey unveils the hidden treasures of antiquity, scattered like jewels along the storied coastline. From the majesty of Minoan Crete to the glory of Phoenician Tyre, each chapter of this expedition delves into the heart of lost civilizations, revealing their triumphs and tragedies.',
        content: 'Discover the enigmatic allure of the past with "Lost Horizons: Exploring Ancient Mysteries Across the Mediterranean Realm." This captivating journey transcends the boundaries of time and space, leading readers through the labyrinthine corridors of history. From the opulent streets of Byzantium to the sun-scorched ruins of Carthage, each chapter of this expedition unveils the secrets of lost civilizations, shrouded in the mists of time. ',
        date: '07 Apr 2024'
    }
    

    
]
const Article = ({ heading, image, description, date }) => (
    <Link to="/article" onClick={scrollToTop} className="information">
        <div className="information-container">
            <div className="information__image-container">
                <img src={image} alt="" className="information__image" />
            </div>
            <div className="information-info">
                <div className="information-info__wrapper-heading">
                    <h3 className="information__heading">{heading}</h3>
                    <span className="information__date">{date}</span>
                </div>
                <p className="information__description">{description}</p>
            </div>
        </div>
    </Link>
);

function Information() {
    const [currentPage, setCurrentPage] = useState(0);

    const handlePageClick = ({ selected }) => {
        setCurrentPage(selected);
    };

    const slicedArticles = articles.slice(currentPage * articlesPerPage, (currentPage + 1) * articlesPerPage);

    return (
        <div className="information-section">
        {
            slicedArticles.map(article => (
                <Article
                    key={article.id}
                    heading={article.heading}
                    image={article.image}
                    description={article.description}
                    date={article.date}
                />
            ))
        }
            <ReactPaginate
                nextLabel="next >"
                onPageChange={handlePageClick}
                pageRangeDisplayed={3}
                marginPagesDisplayed={2}
                pageCount={Math.ceil(articles.length / articlesPerPage)}
                previousLabel="< previous"
                pageClassName="page-item"
                pageLinkClassName="page-link"
                previousClassName="page-item"
                previousLinkClassName="page-link"
                nextClassName="page-item"
                nextLinkClassName="page-link"
                breakLabel="..."
                breakClassName="page-item"
                breakLinkClassName="page-link"
                containerClassName="pagination"
                activeClassName="active"
                renderOnZeroPageCount={null}
            />
        </div>
        
    );
}
export function getArticleHeadings() {
    // Lấy ra tất cả các tiêu đề
    const allHeadings = articles.map(article => article.heading);
    
    // Sử dụng Set để loại bỏ các giá trị trùng lặp
    const uniqueHeadings = [...new Set(allHeadings)];
    
    return uniqueHeadings;
}

export default Information;
