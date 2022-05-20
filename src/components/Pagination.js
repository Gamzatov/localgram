import React from 'react';

const Pagination = ({ photosPerPage, totalPhotos }) => {
    const pageNumbers = [];
    for (let i = 1; i < (totalPhotos / photosPerPage); i++) {
        pageNumbers.push(i);
    }
    return (
        <ul>
            {
                pageNumbers.map((num)=><li key={num}>
                 <a href="!#"> {num}</a>  
                </li>)
            }
            
        </ul>
    );
}

export default Pagination;
