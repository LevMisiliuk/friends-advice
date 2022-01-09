import React from 'react'
import styled from 'styled-components';

function SkeletonElement({type}) {
    const classes = `skeleton ${type}`;

    return (
        <SkeletonElementContainer>
            <div className={classes}>
            
            </div>
        </SkeletonElementContainer>
    )
}

export default SkeletonElement


const SkeletonElementContainer = styled.div`
    .skeleton {
        background-color: #ddd;
        border-radius: 2px;
    }

    .skeleton.text {
        width: 100%;
        height: 20px;
    }

    .skeleton.title {
        width: 50%;
        height: 20px;
    }

    .skeleton.avatar {
        width: 100px;
        height: 100px;
        border-radius: 50%;
    }

    .skeleton.icon {
        width: 32px;
        height: 32px;
        border-radius: 2px;
    }

    .skeleton.number {
        width: 20px;
        height: 20px;
        border-radius: 2px;
    }
`
