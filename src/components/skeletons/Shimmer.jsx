import React from 'react'
import styled from 'styled-components'

function Shimmer() {
    return (
        <ShimmerContainer>
            <div className="shimmer-wrapper">
                <div className="shimmer">

                </div>
            </div>
        </ShimmerContainer>
    )
}

export default Shimmer

const ShimmerContainer = styled.div`
    .shimmer-wrapper {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        animation: loading 2.5s infinite;
    }
    .shimmer {
        width: 50%;
        height: 100%;
        background-color: rgba(255, 255,255,0.25);
        transform: skewX(-20deg);
        box-shadow: 0 0 30px 30px rgba(255, 255, 255, 0.05);
    }

    @keyframes loading {
        0% {
            transform: translateX(-150%);
        }
        50% {
            transform: translateX(-60%);
        }
        100% {
            transform: translateX(150%);
        }
    }
`
