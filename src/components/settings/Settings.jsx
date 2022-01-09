import React from 'react'
import styled from 'styled-components'

import SettingsTabs from './SettingsTabs'

function Settings() {
    return (
        <SettingsContainer>
            <SettingsHeader>
                <h2>Настройки</h2>
            </SettingsHeader>
            <SettingsTabs />
        </SettingsContainer>
    )
}

export default Settings


const SettingsContainer = styled.div`
    flex-grow: 1;
    overflow-y: scroll;
    margin-top: 82px;
    padding: 40px;
`

const SettingsHeader = styled.div`
    margin-bottom: 16px;
    h2 {
        font-family: BrixSansBlack;
        font-style: normal;
        font-weight: 900;
        font-size: 30px;
        line-height: 40px;
    }
`