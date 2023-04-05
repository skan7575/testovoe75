import styles from './Card.module.scss';
import {log} from "next/dist/server/typescript/utils";

const Product = ({image, title, brand, id}) => {
// я использую mockApi там нет бэйджиков, получил просто рандомные слова, определить бейдж new или top просто взял по четности id карточки чтобы показать, что ничего сложного нет:)
    //Также в задании написано фоновое изображение поэтому я сделал background image у div, но сам бы сделал <img>
    return (
        <li>
            <article className={styles.card}>
                <div className={styles.card__image} style={{backgroundImage: `url(${image})`}}></div>
                <h2 className={styles.card__title}>{title}</h2>
                <p className={styles.card__brand}>Бренд: {brand}</p>
                {<p className={styles.card__badge}
                    style={id % 2 === 0 ? {backgroundColor: `#059D27`} : {backgroundColor: `#D62D30`}}>{id % 2 === 0 ? 'new' : 'top'}</p>}
            </article>
        </li>
    );
};

export default Product;