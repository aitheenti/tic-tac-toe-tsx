import * as React from 'react';
import styled from 'styled-components';

type LayoutProps = {
    gap: number,
}

const Row = styled.div<LayoutProps>`
    display:flex;
    flex-direction: row;
    gap: ${(props) => props.gap}px;
`;

const Column = styled.div<LayoutProps>`
    display:flex;
    flex-direction: column;
    gap: ${(props) => props.gap}px;
`;

function Game() {
    return(
        <div className="App">
<Column gap={20}>
            <div>Flexbox</div>
            <div> Column</div>
            <div> testing</div>
        </Column>

        <Row gap={20}>
            <div> Test1 </div>
            <div> Test2 </div>
            <div> Test3 </div>
        </Row>
        </div>
        
    )
}

function Board() {
    return(
        <div> TODO board</div>
    )
}

function Log() {
    return(
        <ol>
            <li><button> Go to move</button></li>
        </ol>
    )
}

export default Game;