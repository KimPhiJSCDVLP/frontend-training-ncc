import React from 'react'
import RingLoader from 'react-spinners/RingLoader'
import styled from 'styled-components'
const LoadingStyled = styled(RingLoader)`
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%); 
`

export default function Loading() {
    return (
        <>
            <LoadingStyled />
        </>

    )
}
