import styled from 'styled-components';


export const FilterWrapper = styled.div`
    border: 1px solid black;
    padding: 10px;
    max-width: 200px;
    width: 100%;
    text-align: left;
    margin-bottom: 15px;

    @media only screen
    and (max-width : 768px) {
        max-width: 100%;
    };

    .filterTitle{
        font-size: 20px;
        font-weight: 600;
        margin-bottom: 10px;
        text-transform: capitalize;
    }
    input{
        margin-bottom: 10px;
    }

`;