import React from 'react'
import styled from 'styled-components'

function SidebarOption({ Icon, title }) {
    return (
        <SidebarOptionContainer>
            {Icon && <img src={Icon} fontSize='small' />}
            {title && <span>{title}</span>}
        </SidebarOptionContainer>
    )
}

export default SidebarOption

const SidebarOptionContainer = styled.div`
    display: flex;
    align-items: center;
    cursor: pointer;
    padding: 12px 24px 12px 24px;

    :hover {
        opacity: 0.8;
        background-color: var(--primary-gray);
    }
    >img {
        margin-right: 8px;
    }

    >span {
        font-size: 14px;
        line-height: 22px;
    }
`
