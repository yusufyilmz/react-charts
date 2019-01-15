import React from 'react';
import ChartList from '../ChartList';
import ResultBox from '../ResultBox';
import { Container, Main } from './style';

export const App = () => {
    return (
        <Container>
            <Main>
                <ChartList />
                <ResultBox />
            </Main>
        </Container>
    );
}
