import React from "react";
import _ from "lodash";
import PropType from "prop-types";

const Pagination = props => {
    const { itemCount, pageSize, onPageChange, currentPage } = props;
    const pageCount = Math.ceil(itemCount / pageSize);

    const pages = _.range(1, pageCount + 1);

    return (
        <nav>
            <ul className="pagination">
                {pages.map(page => (
                    <li
                        className={
                            page === currentPage
                                ? "page-item active"
                                : "page-item"
                        }
                        key={page}
                    >
                        <a
                            className="page-link"
                            onClick={() => {
                                onPageChange(page);
                            }}
                        >
                            {page}
                        </a>
                    </li>
                ))}
            </ul>
        </nav>
    );
};

Pagination.propTypes = {
    itemCount: PropType.number.isRequired,
    pageSize: PropType.number.isRequired,
    onPageChange: PropType.func.isRequired,
    currentPage: PropType.number.isRequired
};

export default Pagination;
