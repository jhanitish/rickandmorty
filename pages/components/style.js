import styled from 'styled-components';
import { Container, Row, Col } from 'reactstrap';

export const MainContainer = styled(Container)`
    max-width: 1380px;
`;

export const Main = styled(Row)`
    width: 100%;
    margin: 0 auto;
    overflow: hidden;
    margin-top: 30px;

    .clearfix {
        clear: both;
    }
`;

export const ColLeft = styled(Col)`
    padding: 0;

    .filtersHeading{
        font-size: 30px;
        color: black;
        font-weight: 600;
        margin-bottom: 15px;
        text-align: left;
    }
`;

export const ColRight = styled(Col)`
    padding: 0;
    .colRight{
        text-align: left;
    }
`;

export const RowTop = styled(Col)`
    padding-left: 12px;
    .selectedFiltersHeading{
        font-size: 20px;
        font-weight: 600;
        color: black;
        margin-bottom: 10px
    }

    .pillersDiv{
        padding: 0;
    }
    @media only screen
    and (max-width : 768px) {
        padding: 0;
        padding-left: 12px;
    };
`;

export const RowCard = styled(Col)`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    @media only screen
    and (max-width : 768px) {
        padding: 0;
    };
`;

export const SearchField = styled(Col)`
    padding: 10px;
    @media only screen
    and (max-width : 768px) {
        width: 100%;
        margin-bottom: 15px;
        padding: 0;
    };
    
`;
export const SortByField = styled(Col)`
    padding: 10px;
    float: right;
    text-align: right;
    @media only screen
    and (max-width : 768px) {
        width: 100%;
        margin-top: 15px;
        float: left;
        text-align: left;
        padding: 0;
    };
`;