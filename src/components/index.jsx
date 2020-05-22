import React, { useState, useEffect } from 'react';
import { MainContainer, Main, ColLeft, ColRight, RowTop, RowCard, SearchField, SortByField } from './style';
import data from '../data';
import Card from './card/Card';
import Filter from './filter/Filter';
import Piller from './piller/Piller';
import Search from './search/Search';
import SortBy from './sortBy/SortBy';

const Components = () => {
    // const [mutatedData, setMutatedData] = useState(data[0].results);
    const [cardData, setCardData] = useState(data[0].results);
    const [sortEvent, setSortEvent] = useState('ascending');
    const [chipsClose, setChipsClose] = useState('');
    const [cardArray, setCardArray] = useState([]);

    const pillersClick = (event) => {
        const localFilter = Array.from(cardArray);
        const filterVal = event.target.getAttribute('value');
        const filterIndex = localFilter.indexOf(filterVal);
        if (filterIndex !== -1) localFilter.splice(filterIndex, 1);
        setCardArray(localFilter);
        setChipsClose(event.target.getAttribute('value'));
    }

    const handleClick = (event, checkedVal) => {
        let filterArray = [];
        const filterVal = event.target.value;

        const filterIndex = cardArray.indexOf(checkedVal);
        if (filterIndex !== -1) cardArray.splice(filterIndex, 1);

        if(!cardArray.includes(filterVal)){
            filterArray.push(filterVal);
        }
        setCardArray(cardArray => cardArray.concat(filterArray));
    }
    const sortByClick = (event) => {
        setSortEvent(event);
    };

    useEffect(() => {
        if(sortEvent === 'descending'){
            const sortArray = [].concat(cardData).sort((a , b ) => b.id - a.id);
            setCardData(sortArray);
        } else if(sortEvent === 'ascending'){
            const sortArray = [].concat(cardData).sort((a , b ) => a.id - b.id);
            setCardData(sortArray);
        }
    }, [sortEvent]); // eslint-disable-line react-hooks/exhaustive-deps


    const searchOption = (search) => {
        const searchData = cardData.filter((json) => json.name.toLowerCase().includes(search.toLowerCase()) );
        setCardData(searchData);
    }
    useEffect(() => {
        if(cardArray.length > 0){
            let filterCardData = cardData.filter(
                (cards) => cardArray.includes(cards.species)
                    || cardArray.includes(cards.origin.name)
                    || cardArray.includes(cards.gender) 
                );
            setCardData(filterCardData);
        } else{
            setCardData(data[0].results);
        }
    }, [cardArray]); // eslint-disable-line react-hooks/exhaustive-deps

    return (
        <MainContainer>
            <Main>
                    <ColLeft xs="12" md="2">
                        <div>
                            <div className="filtersHeading">Filters</div>
                            <Filter data={ data } filterOptions = "species" handleClick = { handleClick } chipsClose = { chipsClose } />
                            <Filter data={ data } filterOptions = "gender" handleClick = { handleClick } chipsClose = { chipsClose }/>
                            <Filter data={ data } filterOptions = "origin" handleClick = { handleClick } chipsClose = { chipsClose } />
                        </div>
                    </ColLeft>
                    <ColRight xs="12" md="10">
                        <div className="colRight">
                            <RowTop xs="12">
                                {
                                    cardArray.length > 0 ?
                                    <div className="selectedFilters">
                                        <div className="selectedFiltersHeading">Selected Filters</div>
                                        <ul className="pillersDiv">
                                            {
                                                cardArray.map((pillers) => 
                                                    <Piller key={pillers.split(' ').join('_')} data={ pillers } pillersClick= { pillersClick } />
                                                )
                                            }
                                        </ul>
                                    </div> : ''
                                }
                                <div>
                                    <SearchField xs="12" md="8">
                                        <Search data = { cardData } searchOption = { searchOption }/>
                                    </SearchField>
                                    <SortByField xs="12" md="4">
                                        <SortBy sortByClick = {sortByClick} />
                                    </SortByField>
                                </div>
                            </RowTop>
                            <RowCard xs="12">
                                <Card data = { cardData }/>
                            </RowCard>
                        </div>
                    </ColRight>
                </Main>    
        </MainContainer>
    );
  }
  
  export default Components;