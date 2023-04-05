import React, {useEffect, useState} from 'react';
import Card from '@/Components/Card/Card';
import API from '@/pages/api/Api';
import styles from './CardList.module.scss';
import Pagination from '@/Components/Pagination/Pagination';

function CardList(props) {
    //так как mockApi не умеет на стороне бэка делать пагинацию я ее сделал на фронте:)
    const [cards, setCards] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(0);

    useEffect(() => {
        async function fetchCards() {
            const cards = await API().getCards();
            setCards(cards);
            setTotalPages(Math.ceil(cards.length / 10));
        }

        fetchCards();
    }, []);

    const handlePageChange = (newPage) => {
        setCurrentPage(newPage);
    };

    const startIndex = (currentPage - 1) * 10;
    const endIndex = startIndex + 10;

    return (
        <section className={styles.cards}>
            <ul className={styles.cards__list}>
                {cards.slice(startIndex, endIndex).map((item) => {
                    return <Card key={item.id} image={item.Image} title={item.name} brand={item.Brend} id={item.id}/>;
                })}
            </ul>
            <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={handlePageChange}/>
        </section>
    );
}

export default CardList;