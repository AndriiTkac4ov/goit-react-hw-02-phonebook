import styled from 'styled-components';

export const FilterLabel = styled.label`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 400px;
    margin-right: auto;
    margin-left: auto;
    margin-bottom: 8px;
    font-size: ${props => props.theme.spacing(2)};
    font-weight: 500;
    line-height: 1.2;
`;

export const FilterInput = styled.input`
    padding: 8px;
    font-size: ${props => props.theme.spacing(2)};
    line-height: 1.2;
    border: 1px solid chocolate;
    border-radius: ${props => props.theme.spacing(1)};
    width: 196px;
    cursor: pointer;
`;