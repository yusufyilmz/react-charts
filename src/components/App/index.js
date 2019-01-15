import React from 'react';
import ChartList from '../ChartList';
import { Container, Main } from './style';

export const App = () => {
    return (
        <Container>
            <Main>
                <ChartList />
            </Main>
        </Container>
    );
}
