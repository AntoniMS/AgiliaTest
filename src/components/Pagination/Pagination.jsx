import { useState } from "react";
import "./Pagination.scss";


export default function Pagination({
    getUsers,
    totalPages,
}) {
    const [currentPage, setCurrentPage] = useState(1);

    const pages = totalPages;

    const changePage = (currentPage) => {
        setCurrentPage(currentPage);
        if (getUsers) {
            getUsers(currentPage);
        }
    };
    return (
        <div className="c-pagination">
            {currentPage > 1 ? (
                <button className="p-button" onClick={() => changePage(currentPage - 1)}>
                    ⬅
                </button>
            ) : (
                <button hidden></button>
            )}

            <span> {currentPage} </span>
            {currentPage < pages ? (
                <button className="p-button" onClick={() => changePage(currentPage + 1)}>
                    ➡
                </button>
            ) : (
                <button hidden></button>
            )}
        </div>
    );
}
