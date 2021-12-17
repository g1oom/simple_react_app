import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Button from './Button';
import routes from '../constants/routes.json';

function Navbar() {
    return (
        <NavWrapper>
            <Link to={routes.MOUNTAIN}>
                <Button content="Mountain" />
            </Link>
            <Link to={routes.BEACHES}>
                <Button content="Beaches" />
            </Link>
            <Link to={routes.BIRDS}>
                <Button content="Birds" />
            </Link>
            <Link to={routes.FOOD}>
                <Button content="Food" />
            </Link>
        </NavWrapper>
    );
}

const NavWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 2rem;
    margin: 0 auto;
    padding: 2rem;
`;

export default Navbar;
