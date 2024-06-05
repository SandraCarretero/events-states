import styled from "styled-components";

const StyledSquare = styled.div`
    width: 200px;
    height: 200px;
    background-color: ${({ color }) => (color ? 'red' : 'blue')};
`

const StyledButton = styled.button`
    color: black;
    cursor: pointer;
`

export {StyledSquare, StyledButton}