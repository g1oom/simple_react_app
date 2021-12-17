import React from 'react';
import styled from 'styled-components';

const Button = ({ content }) => {
    return (
        <ButtonWrapper>
            {content}
        </ButtonWrapper>
    );
}

const ButtonWrapper = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    background-color: #082C5F;
    height: 3rem;
    width: 10rem;
    padding: 2rem;
    border-radius: 5px;
    font-weight: bold;
`;

export default Button;