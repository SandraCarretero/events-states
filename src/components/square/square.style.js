import styled from "styled-components";

const StyledSquare = styled.div`
    width: 200px;
    height: 200px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: ${({ color }) => (color ? 'red' : 'blue')};
`

const StyledButton = styled.button`
    color: black;
    cursor: pointer;
`

export {StyledSquare, StyledButton}