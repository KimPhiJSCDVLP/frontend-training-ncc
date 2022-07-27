import React from 'react'
import Button from '@atlaskit/button'
import styled, { css } from 'styled-components'
import CheckIcon from '@atlaskit/icon/glyph/check'

const ButtonStyled = styled(Button)`
    margin-top: 5px;
    text-align: left;

    &:hover {
        .check-icon {
            display: inline-block;
        }
    }

    .check-icon {
        display: none;
        &:hover {
            background-color: #C0C0C0;
            border-radius: 5px; 
            transition: .3s;
        }
    }   
`;

export default function Todo({ todo, deleteTodo }) {
    return <ButtonStyled
        shouldFitContainer
        iconAfter={
            <span className='check-icon' onClick={
                () => { deleteTodo(todo.id) }}>
                <CheckIcon primaryColor='#00CC00' />
            </span>
        }
        key={todo.id}>{todo.name}</ButtonStyled>
}
