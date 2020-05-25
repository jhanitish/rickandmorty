import styled from 'styled-components';

export const PillerWrapper = styled.div`
    border-radius: 50px;
    border: 1px solid rgba(0,0,0,0.26);
    height: 38px;
    width: -webkit-max-content;
    width: -moz-max-content;
    width: max-content;
    display: inline-block;
    margin-right: 15px;
    margin-bottom: 15px;

    .pillerContainer{
        display: block;
        padding: 5px 12px;
    }
`;

export const SVGWrapper = styled.svg`
    color: rgb(0,0,0);
    opacity: 26%;
    position: relative;
    left: 5px;
    cursor: pointer;
    width: 1rem;
    height: 1rem;
`;