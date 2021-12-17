import React from 'react';
import styled from 'styled-components';

const Format = ({ image_link }) => {
    return (
        <ImageContainer>
            <Image src={image_link} alt='' />
        </ImageContainer>
    );
}

const ImageContainer = styled.div`
    display: flex;
    flex-direction: column;
    margin: 0 auto;
`;

const Image = styled.img`
    height: 100%;
    width: 100%;
`;

export default Format;