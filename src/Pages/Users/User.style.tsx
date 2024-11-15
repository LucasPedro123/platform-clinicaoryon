import styled from "styled-components";
import { STYLE_GUIDE } from "../../assets/Style/global";

export const UserContainer = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    @media (min-width: 1024px) {
        margin-left: 223px;
    }
`;

export const Table = styled.table`
    width: 100%;
    max-width: 1000px; 
    margin: 0 auto; 
    align-self: center;

    @media (max-width: 1023px) {
        width: 90%; 
    }
  

    @media (min-width: 1024px) {
        width: 70%;
    }
`;


export const UsersWrapper = styled.div`
    margin-block: 40px;
    margin-left: 0px; 
    padding: 0 20px; 
    display: flex;
    flex-direction: column;
    gap: 30px;

    
`;

export const UserLabel = styled.p`
    width: 108px;
    height: 14px;
    font-family: 'Roboto';
    font-weight: 600;
    font-size: 15px;
    line-height: 18px;
    text-align: center;
    letter-spacing: 0.15px;
    color: #C4C4C4;
`
export const UserDiv = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`
export const MetricsDiv = styled.div`
    display: flex;
    justify-content: center;
    gap: 30px;
`

export const UserLength = styled.h1`
    font-family: 'Roboto';
    font-weight: 500;
    font-size: 64px;
    line-height: 75px;
    text-align: center;
    color: #343434;
`;

export const Column = styled.tr`

    @media screen and (max-width: 768px){
        display: none;
    }
`;

export const ColumnName = styled.th`
    text-align: start;
    padding-bottom: 30px;
    font-family: 'Roboto';
    font-weight: 600;
    font-size: 14px;
    color: #7D7D7D;

    @media (max-width: 768px) {
        font-size: 12px;
    }

    @media (max-width: 480px) {
        display: none; 
    }
`;

export const Value = styled.td`
    padding-block: 8px;
    font-family: 'Roboto';
    font-weight: 400;
    font-size: 12px;
    color: #7D7D7D;
    
    span{
        display: none;
        font-weight: 700;
        font-size: 10px;
    }
    @media (max-width: 768px) {
        display: flex;
        gap: 10px;
        span{
            display: contents;
        }
    }
`;


export const Line = styled.tr`
    @media screen and (max-width: 768px){
        position: relative;
        display: grid;
        grid-template-columns: auto;
        gap: 15px;
        
    }
`;

export const LineProfile = styled.td`
    padding-block: 8px;
    display: flex;
    align-items: center;
    gap: 12px;
    p {
        font-family: 'Roboto';
        font-weight: 500;
        font-size: 15px;
        letter-spacing: 0.01em;
        color: #323C47;
    }
`;

export const Body = styled.tbody`
    width: 100%;
    @media screen and (max-width: 768px){
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
        grid-gap: 16px; 
    }
`;

export const Head = styled.thead`
    position: relative; 
    width: 100%;
  
    &::after {
        content: "";
        position: absolute;
        bottom: 0; 
        left: 0; 
        width: 100%; 
        height: 1px; 
        background: #e1e1e1; 
    }
`;

export const Actions = styled.td`
    position: relative;
    
    button {
        background: none;
        border: none;
        font-size: 24px;
        cursor: pointer;

        &:hover {
            color: ${STYLE_GUIDE.color.secondary}; 
        }
    }
    @media screen and (max-width: 768px){
        position: absolute;
        top: 5%;
        left: 250px;
    }
`;
export const ModalTitle = styled.h2`
    
`

export const ButtonCancel = styled.button`
    border: none;
    cursor: pointer;
    height: 38px;
    border-radius: 6px;
    padding-inline: 15px;
    color: ${STYLE_GUIDE.color.white};
    background: #7D7D7D;
    align-self: end;
    transition: 0.3s;

    &:hover{
        background: #636363;
    }
    
`

export const ButtonConfirm = styled.button`
    border: none;
    height: 38px;
    border-radius: 6px;
    cursor: pointer;
    
    background-color: ${STYLE_GUIDE.color.secondary};
    color: ${STYLE_GUIDE.color.white};
    width: 85px;
    transition: 0.3s;

    &:hover{
        background: #6A5490;
    }
`

export const ButtonWrapper = styled.div`
    display: flex;  
    justify-content: end;
    gap: 12px;
    margin-top: 20px;
`

export const ModalText = styled.p`
    font-family: 'Roboto';
    font-weight: 500;
    font-size: 15px;
    letter-spacing: 0.01em;
    color: #323C47;
    margin-top: 15px;
`


export const ModalOptions = styled.div`
    position: absolute;
    bottom: 20px;
    right: 10px;
    background: #F1F1F1;
    box-shadow: 5px 5px 4px rgba(0, 0, 0, 0.25);
    text-align: center;
    display: flex;
    flex-direction: column;
    justify-content: space-around;

    overflow: 'auto';
`


export const ButtonText = styled.p`
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 16px;
    text-align: center;
    &:hover{
        background-color: #e4e4e4;
    }
`

export const TextBackground = styled.div`
    padding-block: 10px;
    padding-inline: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
    cursor: pointer;
    
    &:hover{
        background-color: #e4e4e4;
    }
`
export const SearchInput = styled.div`
    border: 1px solid #C4C4C4;
    border-radius: 8px;
    width: 300px;
    height: 40px;
    display: flex;
    align-items: center;
    gap: 13px;
    padding-left: 22px;
`

export const Input = styled.input`
    outline: none;
    border: none;
    width: 90%;
    
    
`

export const Divider = styled.div`
    width: 100%;
    height: 1px;
    background: #EBEFF2;
    align-self: stretch;
    flex-grow: 1;

`
export const Icon = styled.i`
    color: #C4C4C4;
`

export const ModalContent = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 20px;
`

export const ModalUserWrapper = styled.div`
    display: flex;
    align-items: center;
    gap: 20px;
`
export const ModelUserName = styled.h3`

`