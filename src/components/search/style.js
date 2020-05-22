import styled from 'styled-components';

export const SearchWrapper = styled.div`

    .searchHeading{
        font-size: 20px;
        margin-bottom: 10px;
    }

    button {
        padding: 10px 15px;
        background: grey;
        color: white;
        font-size: 17px;
        border: 1px solid grey;
        border-left: none;
        cursor: pointer;
        display: inline-block;

        @media only screen
        and (max-width : 768px) {
            display: none;
        };
    }



    #myInput {
        box-sizing: border-box;
        font-size: 16px;
        padding: 12px 20px;
        min-width: 250px;
        border: none;
        border-bottom: 1px solid #ddd;
        
        @media only screen
        and (max-width : 768px) {
            max-width: 100%;
            width: 100%;
        };
      }
      
      #myInput:focus {
          outline: 3px solid #ddd;

          @media only screen
        and (max-width : 768px) {
                outline: 0;
            };
        }
      
      .dropdown-content {
        display: block;
        position: absolute;
        background-color: #f6f6f6;
        min-width: 230px;
        overflow: auto;
        border: 1px solid #ddd;
        z-index: 1;

        @media only screen
        and (max-width : 768px) {
            position: relative;
        };
      }
      
      .searchList {
        color: black;
        padding: 12px 16px;
        text-decoration: none;
        display: block;
        cursor: pointer;
      }
      
      .searchList:hover {background-color: #ddd;}

      .searchValue{
        max-height: 300px;
      }

`;