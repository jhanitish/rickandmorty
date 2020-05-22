import React, {useEffect, useState, useRef} from 'react';
import { FilterWrapper } from './style';

const Filter = ({data, filterOptions, handleClick, chipsClose}) => {

    const [JSONdata, setJSONData] = useState(data);
    const [filter, setFilter] = useState([]);

    useEffect(() => {
        if (JSON.stringify(data) !== JSON.stringify(JSONdata)) {
            setJSONData(data);
        }
    }, [data]); // eslint-disable-line react-hooks/exhaustive-deps

    useEffect(() => {
        if(chipsClose){
            const element = document.getElementById(chipsClose.split(' ').join('_'));
            element.checked = false;
        }
    }, [chipsClose]);

    const nameRef = useRef();
    const handleCBClick = (event) => {
        const name = nameRef.current;
        let checkedVal = '';
        const checkboxes = name.getElementsByTagName('input');
        for (var i = 0; i < checkboxes.length; i++) {
            if(checkboxes[i].id !== event.target.id){
                if(checkboxes[i].checked) {
                    checkedVal = checkboxes[i].value;
                }
                checkboxes[i].checked = false;
            } else {
                if(checkboxes[i].checked){
                    checkboxes[i].checked = true;
                } else{
                    checkboxes[i].checked = false;
                }
            }
        }
        handleClick(event, checkedVal);
    };

    useEffect(() => {
        let filterVal = JSONdata[0].results;
        let arr = [];
        filterVal.map((filterData) => {
            if(filterOptions === "origin"){
                if(arr.indexOf(filterData[filterOptions].name) < 0){
                    arr.push(filterData[filterOptions].name);
                }
            }else {
                if(arr.indexOf(filterData[filterOptions]) < 0){
                    arr.push(filterData[filterOptions]);
                }
            }

            return arr;
        });
        setFilter(arr);
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

    return(
        <FilterWrapper ref={nameRef}>
            <div className="filterTitle"> {filterOptions} </div>
            {
            filter.length > 0 && filter.map((jsondata) => {
                    return(
                        <div key={jsondata.split(' ').join('_')}>
                            <input type="checkbox" id={jsondata.split(' ').join('_')} name={jsondata} value={ jsondata }
                                data-filter={ filterOptions } onChange={ handleCBClick }
                            />
                            <label htmlFor={jsondata.split(' ').join('_')}>{ jsondata }</label> <br />
                        </div>
                    );    
                })
            }
        </FilterWrapper>
    );
}

export default Filter;