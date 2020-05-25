import React, { useState } from 'react';
import { SortWrapper } from './style';

const SortBy = ({sortByClick}) => {

    const[selectValue, setSelectValue] = useState('ascending');

    const onHandleClose = () => {
        const element = document.getElementById('sortBy');
        setSelectValue(element.value)
        sortByClick(element.value);
    }

    return(
        <SortWrapper>
                <select id="sortBy" defaultValue='ascending' onChange={ onHandleClose }>
                    <option value={selectValue}>Sort by ID</option>
                    <option value ='ascending'>Ascending</option>
                    <option value ='descending' >Descending</option>
                </select>

                <svg viewBox="0 0 24 24"><path d="M4 8l8 8 8-8z"></path></svg>
        </SortWrapper>
    );
};

export default SortBy;