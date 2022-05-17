import { useState } from "react";

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
        <div>
            {currentPage > 1 ? (
                <button onClick={() => changePage(currentPage - 1)}>
                    ⬅
                </button>
            ) : (
                <button hidden></button>
            )}

            <span> {currentPage} </span>
            {currentPage < pages ? (
                <button onClick={() => changePage(currentPage + 1)}>
                    ➡
                </button>
            ) : (
                <button hidden></button>
            )}
        </div>
    );
}
