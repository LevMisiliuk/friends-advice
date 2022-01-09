import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';
//redux
import { chooseTemplateAction, chooseFactoryAction, mainInfoAction } from '../../store/orderReducer';
//icons
import CrossIcon from '../../assets/cross-icon.svg';
import Template1 from '../../assets/template-1.png';
import Modal from '../modal/Modal';
import axios from 'axios';

function TemplateSelection({ proceedNextStep }) {
    const [modalActive, setModalActive] = useState(false)
    const [factory, setFactory] = useState('');
    const [nextStep, setNextStep] = useState(true)
    const [templateData, setTemplateData] = useState([])
    const [winSpec, setWinSpec] = useState({})
    //redux work
    const dispatch = useDispatch()
    const order = useSelector(state => state.order)
    //http requests
    useEffect(() => {
        axios.post('https://rehauselected.baueffect.com/api/slider/getTemplates.php', {
            "user_id": "2223"
        })
            .then(function (response) {
                const templatesData = response.data.templates;
                setTemplateData(templatesData)
            })
            .catch(function (error) {
                console.log(error);
            });
    }, [])
    //methods
    const selectFactory = (factoryId) => {
        dispatch(chooseFactoryAction(factoryId))
        setModalActive(false)
        proceedNextStep(nextStep)
    }

    const selectTemplate = (template) => {
        dispatch(chooseTemplateAction(template))
        if (factoryArray.length > 1) {
            setModalActive(true)
        } else {
            proceedNextStep(nextStep)
            dispatch(chooseFactoryAction(factory))
        }
    }
    //factory array
    const factoryArray = ["Московские окна"];
    const defaultFactory = factoryArray[0];
    const templatesArray = [
        {
            id: 1,
            name: 'Шаблон 1',
            src: Template1
        },
        {
            id: 2,
            name: 'Шаблон 2',
            src: Template1
        },
        {
            id: 3,
            name: 'Шаблон 3',
            src: Template1
        },
        {
            id: 4,
            name: 'Шаблон 4',
            src: Template1
        }
    ]

    return (
        <TemplateSelectionContainer>
            <TemplateSelectionOrderCard>
                <TemplateSelectionNewTaskHeader>
                    Новое задание
                </TemplateSelectionNewTaskHeader>
                <TemplateSelectionNewTaskInstruction>
                    Видео инструкция
                </TemplateSelectionNewTaskInstruction>
            </TemplateSelectionOrderCard>
            <hr />
            <TemplateSelectionMain>
                <TemplateSelectionMainHeader>
                    <h4>Выберите шаблон для вашего рекламного ролика в Instagram Stories</h4>
                </TemplateSelectionMainHeader>
                <TemplateSelectionFirstBlock>
                    <TemplateSelectionSchemes>
                        {templatesArray.map((template) => {
                            return <img key={template.id} src={template.src} alt={template.name} onClick={() => selectTemplate(template)} />
                        })}
                    </TemplateSelectionSchemes>
                </TemplateSelectionFirstBlock>
                <Modal active={modalActive} setActive={setModalActive}>
                    <div className="modal-header">
                        <h4>На каком заводе рассчитать данную конструкцию?</h4>
                    </div>
                    <div className="modal-body">
                        <Dropdown className="dropdown-select" options={factoryArray} onChange={(event) => setFactory(event.value)} value={factory} placeholder="Выберите завод..." />
                        <button className="next-button" onClick={() => selectFactory(factory)}>
                            Подтвердить
                        </button>
                    </div>
                </Modal>
            </TemplateSelectionMain>
        </TemplateSelectionContainer>
    )
}

export default TemplateSelection;

const TemplateSelectionContainer = styled.div`
    width: 100%;
    padding-top: 24px;
    min-height: 477px;
    background-color: #F2F2F2;

    hr {
        color: #000;
    }
`

const TemplateSelectionOrderCard = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    align-self: center;

    margin: 0;

    padding: 0px 16px 0px 16px;

    color: #fff;
    width: auto;
    height: 44px;
    background-color: #000;
`

const TemplateSelectionNewTaskHeader = styled.div`

`

const TemplateSelectionNewTaskInstruction = styled.div`
    font-family: BrixSansBlack;
    font-weight: bold;
    background-color: #fff;
    padding: 8px 8px 8px 8px;
    color: #000;
    transition: 0.4s linear;

    cursor: pointer;

    :hover {
        background-color: #000;
        color: #fff;
    }
`

const TemplateSelectionMain = styled.div`
    padding: 24px 16px;

`

const TemplateSelectionMainHeader = styled.div`
    h4 {
        font-style: normal;
        font-weight: 900;
        font-size: 24px;
        line-height: 32px;
        margin-bottom: 16px;
    }
`
const TemplateSelectionSchemes = styled.div`
    display: flex;
    img {
        margin-right: 16px;
        transition: .4s;
        :hover {
            transform: scale(1.05);
        }
    }
`

const TemplateSelectionScheme = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    text-align: left;
    cursor: pointer;

    margin-right: 16px;

    .template-name {
        max-width: 150px;
    }
`

//FIRST BLOCK
const TemplateSelectionFirstBlock = styled.div`
    display: flex;
    flex-direction: column;
`

const TemplateSelectionFirstBlockHeader = styled.div`
    font-style: normal;
    font-weight: 500;
    font-size: 20px;
    line-height: 28px;

    margin: 16px 0 8px 0;
`

//SECOND BLOCK
const TemplateSelectionSecondBlock = styled.div`

`

const TemplateSelectionSecondBlockHeader = styled.div`
    font-style: normal;
    font-weight: 500;
    font-size: 20px;
    line-height: 28px;

    margin: 24px 0 8px 0;
`
