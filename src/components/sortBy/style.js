import styled from 'styled-components';

export const SortWrapper = styled.div`
    position: relative;
    max-width: 200px;
    display: inline-block;
    select{
        appearance: none;
        padding: 5px;
        width: 200px;
        font-size: 15px;
        border-radius: 0;
        @media only screen
        and (max-width : 768px) {
            width: 100%;
        };
    }

    @media only screen
        and (max-width : 768px) {
            max-width: 100%;
            display: block;
            margin-bottom: 15px;
    };

    svg{
        position: absolute;
        top: 7px;
        right: 7px;
        width: 1rem;
        height: 1rem;
        fill: rgba(0,0,0,0.54);
        pointer-events: none;
    }
`;