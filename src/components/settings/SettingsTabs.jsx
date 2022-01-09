import React, { useState } from 'react'
import styled from 'styled-components'

function SettingsTabs() {
    const [toggleState, setToggleState] = useState(1);

    const toggleTab = (index) => {
        setToggleState(index)
    }

    return (
        <SettingsContainer>
            <SettingsBlockTabs>
                {/* TABS */}
                <SettingsTab className={toggleState === 1 ? "tabs active-tabs" : "tabs"}
                    onClick={() => toggleTab(1)}>
                    Данные и наценки
                </SettingsTab>
                <SettingsTab className={toggleState === 2 ? "tabs active-tabs" : "tabs"}
                    onClick={() => toggleTab(2)}>
                    Профильные и фурнитурные системы
                </SettingsTab>
                <SettingsTab className={toggleState === 3 ? "tabs active-tabs" : "tabs"}
                    onClick={() => toggleTab(3)}>
                    Активные стеклопакеты
                </SettingsTab>
                <SettingsTab className={toggleState === 4 ? "tabs active-tabs" : "tabs"}
                    onClick={() => toggleTab(4)}>
                    Список элементов
                </SettingsTab>
            </SettingsBlockTabs>
            {/* CONTENT */}
            <SettingsContentTabs>
                <SettingsContent className={toggleState === 1 ? "content active-content" : "content"}>
                    <SettingsBlock>
                        <h4>Контактные данные</h4>
                        <SettingInnerBlock>
                            <SettingInnerLine>
                                <span className='field-name'>Название</span>
                                <span className='field-value'>Московские Окна</span>
                            </SettingInnerLine>
                            <SettingInnerLine>
                                <span className='field-name'>Телефон</span>
                                <span className='field-value'>+ 7 (555) 258 55 55</span>
                            </SettingInnerLine>
                            <SettingInnerLine>
                                <span className='field-name'>Email</span>
                                <span className='field-value'>moskovskieokna@mail.ru</span>
                            </SettingInnerLine>
                        </SettingInnerBlock>
                        <h4>Задать наценку на материалы</h4>
                        <SettingInnerBlock>
                            <SettingsExtraChargeTitle>
                                Наценка
                            </SettingsExtraChargeTitle>
                            <input type="text" id='extraCharge' placeholder='5%' />
                        </SettingInnerBlock>
                    </SettingsBlock>

                    <SettingsBlock>
                        <h4>Адрес</h4>
                        <SettingInnerBlock>
                            <SettingInnerLine>
                                <span className='field-name'>Город</span>
                                <span className='field-value'>Москва</span>
                            </SettingInnerLine>
                            <SettingInnerLine>
                                <span className='field-name'>Адрес</span>
                                <span className='field-value'>Косиора, 56</span>
                            </SettingInnerLine>
                        </SettingInnerBlock>
                    </SettingsBlock>
                </SettingsContent>
                <SettingsContent className={toggleState === 2 ? "content active-content" : "content"}>
                    <h4>Lorem, ipsum dolor. TAB  22222222222</h4>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sequi veritatis accusamus praesentium ipsa? Deleniti odio, enim rem iure quidem ut dolor optio veniam tempore, mollitia cum obcaecati labore nemo corporis.</p>
                </SettingsContent>
                <SettingsContent className={toggleState === 3 ? "content active-content" : "content"}>
                    <h4>Lorem, ipsum dolor. TAB  3333333333333</h4>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sequi veritatis accusamus praesentium ipsa? Deleniti odio, enim rem iure quidem ut dolor optio veniam tempore, mollitia cum obcaecati labore nemo corporis.</p>
                </SettingsContent>
                <SettingsContent className={toggleState === 4 ? "content active-content" : "content"}>
                    <h4>Lorem, ipsum dolor. TAB  4444444444444</h4>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sequi veritatis accusamus praesentium ipsa? Deleniti odio, enim rem iure quidem ut dolor optio veniam tempore, mollitia cum obcaecati labore nemo corporis.</p>
                </SettingsContent>
            </SettingsContentTabs>
        </SettingsContainer>
    )
}

export default SettingsTabs;

//TABS
const SettingsContainer = styled.div`
    display: flex;
    flex-direction: column;
`
const SettingsBlockTabs = styled.div`
    display: flex;
    justify-content: space-between;
    width: 80%;
    flex-wrap: wrap;
`
const SettingsTab = styled.div`
    font-size: 16px;
    line-height: 24px;
    cursor: pointer;
    white-space: nowrap;
    margin-right: 32px;

    margin-bottom: 40px;

    color: #000;


    &.active-tabs {
        border-bottom: 4px solid #000000;
    }

`
//CONTENT
const SettingsContentTabs = styled.div`

`
const SettingsContent = styled.div`
    h4 {
        font-weight: 900;
        font-size: 24px;
        line-height: 32px;

        margin-bottom: 40px;
    }
    &.content {
        background-color: #555555;
        width: 100%;
        height: 100%;
        display: none;
    }
    &.active-content {
        width: 100%;
        display: flex;
        flex-wrap: wrap;
        /* justify-content: space-between; */
        background-color: #fff;
    }
`

const SettingsBlock = styled.div`
    flex: 1;
`

const SettingInnerBlock = styled.div`
    flex: 0.5;
    margin-bottom: 40px;
    input {
        width: 90%;
    }
`

const SettingInnerLine = styled.div`
    display: flex;
    margin-bottom: 8px;
    .field-name {
        font-weight: 300;
        font-size: 16px;
        line-height: 24px;

        opacity: 0.4;
    }
    .field-value {
        font-weight: 500;
        font-size: 16px;
        line-height: 24px;
    }
    span {
        flex: 0.4;
    }
    
`

const SettingsExtraChargeTitle = styled.div`
    font-size: 14px;
    line-height: 22px;

    margin-bottom: 4px;

    color: #989898;
`