import React from 'react'
import styled from 'styled-components'
// Components
import SidebarOption from '../sidebarOption/SidebarOption';
//libraries 
import { Link } from 'react-router-dom';
// Icons
import homeIcon from '../../assets/home-icon.svg';
import teamIcon from '../../assets/team-icon.svg';
import settingsIcon from '../../assets/settings-icon.svg';

function Sidebar() {
    return (
        <SidebarContainer>
            <Link className="linkStyle" to="/">
                <SidebarOption Icon={homeIcon} title="Главная" />
            </Link>
            <Link className="linkStyle" to="/network">
                <SidebarOption Icon={teamIcon} title="Аналитика" />
            </Link>
            <Link className="linkStyle" to="/settings">
                <SidebarOption Icon={settingsIcon} title="Настройки" />
            </Link>
        </SidebarContainer>
    )
}

export default Sidebar

const SidebarContainer = styled.div`
    background-color: #fff;
    flex: 0.5;
    border-right: 1px solid #E5E5E5;

    min-width: 190px;
    max-width: 190px;
    margin-top: 81px;

    .linkStyle {
        color: #000;
        text-decoration: none;
    }
`
