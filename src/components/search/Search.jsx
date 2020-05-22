import React, {useEffect, useState} from 'react';
import { SearchWrapper } from './style';

const Search = ({data, searchOption}) => {
    const [JSONdata, setJSONData] = useState(data);
    const [inputValue, setInputValue] = useState('');

    useEffect(() => {
        if (JSON.stringify(data) !== JSON.stringify(JSONdata)) {
            setJSONData(data);
        }
    }, [data]); // eslint-disable-line react-hooks/exhaustive-deps
    const searchClick = () => {
        searchOption(document.getElementById('myInput').value);
        setInputValue('');
    };
    const searchInput = (event) => {
        if(event.target.value.length > 0 && event.target.value !== " "){
            setInputValue(event.target.value);
            const inputArray = JSONdata.filter((json) => json.name.toLowerCase().includes(event.target.value.toLowerCase()) );
            setJSONData(inputArray);
        } else {
            setInputValue('');
        }
    }
    return(
        <SearchWrapper>
            <div className="searchHeading">Search by Name</div>
            <div className="dropdown">
                <div id="myDropdown" className="dropdown-content">
                    <input type="text" id="myInput" onChange={ searchInput }/>
                    <button type="submit" onClick={ searchClick }>Search</button>
                    {
                        inputValue.length > 0 ?
                        <div className="searchValue"> 
                            {
                                JSONdata.map((json, index) =>
                                    <div key={`${json.name}${index}`} className="searchList" onClick={ searchClick } >{ json.name }</div>
                                )
                            }
                        </div> : ''
                    }    
                </div>
            </div>
        </SearchWrapper>
    );
};

export default Search;