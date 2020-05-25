import styled from 'styled-components';

export const CardWrapper = styled.div`
    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
    transition: 0.3s;
    max-width: 22%;
    background-color: #3e3c3c;
    border-radius: 10px;
    display: inline-block;
    margin: 10px;

    @media only screen and (min-width : 768px)
    and (max-width : 1084px) {
        max-width: 30%;
    };
    @media only screen
    and (max-width : 768px) {
        max-width: 42%;
    };

    .imageContainer{
        position: relative;
    }

    img{
        width : 100%;
        max-height: 250px;
    }
    
    &:hover {
        box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
    }

    .nameContainer{
        position: absolute;
        bottom: 0;
        background: #0e0d0d6e;
        width: 100%;
        text-align: left;
    }

    .nameField{
        font-size: 20px;
        color: white;
        margin: 10px;
    }

    .idField{
        font-size: 14px;
        color: white;
        margin: 10px;
    }
    
    .detailsContainer {
        padding: 30px 15px;
    }
    .detailsField{
        border-bottom: 1px solid grey;
        padding: 10px 5px;
        font-size: 12px;
        overflow: auto;
        overflow-wrap: break-word;
    }
    .detailsField:nth-last-child(1) {
        border: 0;
      }
    .detailsLeft{
        display: inline-block;
        width: 30%;
        text-align: left;
        float: left;
        color: grey;
    }
    .detailsRight{
        display: inline-block;
        width: 65%;
        text-align: right;
        float: right;
        color: #d88f07;
    }
`;