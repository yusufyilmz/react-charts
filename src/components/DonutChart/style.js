
import styled from 'styled-components';

export const Text = styled.text`
    text-anchor: middle;
    font-weight: bold;
    font-size: larger;
    fill: lightgray;
`;

Text.displayName = 'text'

export const ValueText = styled(Text)`
    font-size: larger;
    fill: black;
    font-size: x-large;
`;


ValueText.displayName = 'text'

