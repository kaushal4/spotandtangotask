import React, { useState, useEffect } from 'react';
import style from './pagination.module.css';

export default function Pagination({
    itemsPerPage,
    totalItems,
    paginate,
    currentPage,
}) {
    const pageNumbers = [];

    for (let i = 1; i <= Math.ceil(totalItems / itemsPerPage); i++) {
        pageNumbers.push(i);
    }

    return (
        <nav className={style.pagination_container}>
            <ul className={style.pagination}>
                <li
                    className={`${style.page_item} ${
                        currentPage === 1 ? style.disabled : ""
                    }`}
                >
                    <button
                        onClick={() => paginate(currentPage - 1)}
                        disabled={currentPage === 1}
                        className={style.page_link}
                    >
                        Previous
                    </button>
                </li>

                {pageNumbers.map((number) => (
                    <li
                        key={number}
                        className={`${style.page_item} ${
                            currentPage === number ? style.active : ""
                        }`}
                    >
                        <button
                            onClick={() => paginate(number)}
                            className={style.page_link}
                        >
                            {number}
                        </button>
                    </li>
                ))}

                <li
                    className={`${style.page_item} ${
                        currentPage === pageNumbers.length ? style.disabled : ""
                    }`}
                >
                    <button
                        onClick={() => paginate(currentPage + 1)}
                        disabled={currentPage === pageNumbers.length}
                        className={style.page_link}
                    >
                        Next
                    </button>
                </li>
            </ul>
        </nav>
    );
};