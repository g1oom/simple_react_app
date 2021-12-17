import React from 'react';
import styled from 'styled-components';
import { Routes, Route, Navigate } from 'react-router-dom';
import mountain from '../data/Mountain_images';
import beaches from '../data/Beaches_images';
import birds from '../data/Birds_images';
import food from '../data/Food_images';
import routes from '../constants/routes.json';

function Main() {
    return (
        <>
            <Routes>
                <Route path={routes.ROOT} element={<Navigate to={routes.MOUNTAIN} />} />
                <Route path={routes.MOUNTAIN} element={
                    <>
                        <HeadingWrapper>Mountain Pictures</HeadingWrapper>
                        <ImageWrapper>{mountain}</ImageWrapper>
                    </>
                } />
                <Route path={routes.BEACHES} element={
                    <>
                        <HeadingWrapper>Beaches Pictures</HeadingWrapper>
                        <ImageWrapper>{beaches}</ImageWrapper>
                    </>
                } />
                <Route path={routes.BIRDS} element={
                    <>
                        <HeadingWrapper>Birds Pictures</HeadingWrapper>
                        <ImageWrapper>{birds}</ImageWrapper>
                    </>
                } />
                <Route path={routes.FOOD} element={
                    <>
                        <HeadingWrapper>Food Pictures</HeadingWrapper>
                        <ImageWrapper>{food}</ImageWrapper>
                    </>
                } />
            </Routes>
        </>
    );
}

const HeadingWrapper = styled.h1`
    padding: 1rem;
    text-align: center;
    font-family: Helvetica;
    color: #082C5F;
`;

const ImageWrapper = styled.div`
    display: grid;
    grid-template-columns: repeat(4, minmax(0, 1fr));
    gap: 4rem;
    padding: 0 3rem 0;
`;

export default Main;