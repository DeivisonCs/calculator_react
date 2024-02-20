
import styled from 'styled-components';

export const ButtonStyle = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #0000007d;
    width: 100%; 
    min-width: 40px; 
    height: 60px;
    color: #fff;
    font-size: 1.3rem;
    border-radius: 9px;
    border: none;
    cursor: pointer;
    user-select: none;

    &.plus {
        height: 100%;
    }

    &:hover {
        box-shadow: 0px 0px 5px #444444;
    }
    
    &.clear, &.erase {
        background-color: #e55f5f;
    }
    
    &:active {
        box-shadow: none;
        opacity: .6;
    }
`