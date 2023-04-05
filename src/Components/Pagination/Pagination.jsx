import React from 'react';
import styles from './Pagination.module.scss'

function Pagination({currentPage = '', totalPages, onPageChange}) {
    const handlePageChange = (event) => {
        const newPage = Number(event.target.value);
        if (newPage <= totalPages) {
            onPageChange(newPage);
        }
    };

    return (
        <div className={styles.pagination}>
            <button onClick={() => onPageChange(currentPage - 1)} disabled={currentPage === 1}>Назад</button>
            <input type="number" value={currentPage} min="1" max={totalPages} onChange={handlePageChange}/>
            <button onClick={() => onPageChange(currentPage + 1)} disabled={currentPage === totalPages}>Вперед</button>
        </div>
    );
}

export default Pagination;