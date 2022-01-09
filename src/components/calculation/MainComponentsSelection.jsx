import React, { useEffect, useState } from 'react'
import CrossIcon from '../../assets/cross-icon.svg'
import styled from 'styled-components'
import { useDispatch, useSelector } from 'react-redux'
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';
import ReactTooltip from 'react-tooltip';
import DatePicker from "react-datepicker";
import QrCode from '../../assets/qrcode.png';
import "react-datepicker/dist/react-datepicker.css";
//icons
import BlackRightArrow from '../../assets/arrow-right-black-background-icon.svg'
import InfoIcon from '../../assets/info-icon.svg'
import DownloadFile from '../../assets/downloadFile.jpg';
import axios from 'axios';
import Modal from '../modal/Modal';
import { chooseLaminationInsideAction, chooseLaminationOutsideAction, chooseGlazingAction, chooseBeadAction, chooseHardwareAction, chooseReinforcmentAction, chooseSealantAction, mainInfoAction } from '../../store/orderReducer';

function MainComponentsSelection() {
  const orderData = useSelector(state => state.order);
  console.log(orderData, 'orderData')
  //main temoplate info
  const [templateComposition, setTemplateComposition] = useState(false)
  const [startDate, setStartDate] = useState(new Date());
  //laminattion
  //last step
  const [lastStep, setLastStep] = useState(false)
  const [saveAndGetLink, setSaveAndGetLink] = useState(false)
  //state for modals
  const [laminationModalActive, setLaminationModalActive] = useState(false)
  const [glazingModalActive, setGlazingModalActive] = useState(false)
  const [glazingBeadModalActive, setGlazingBeadModalActive] = useState(false)
  const [hardwareModalActive, setHardwareModalActive] = useState(false)
  const [reinforcementModalActive, setReinforcementModalActive] = useState(false)
  const [addElementsModalActive, setAddElementsModalActive] = useState(false)
  const [sealantModalActive, setSealantModalActive] = useState(false)


  //redux
  const dispatch = useDispatch();
  const order = useSelector(state => state.order)
  //methods
  //lamination setting
  const chooseLaminationInside = (value) => {
    setLaminationInside(value)
  }
  const chooseConstructionCount = (event) => {
    setConstructionCount(event.target.value)
  }
  const chooseLaminationOutside = (value) => {
    setLaminationOutside(value)
  }
  const confirmLamination = () => {
    dispatch(chooseLaminationOutsideAction(laminationOutside))
    dispatch(chooseLaminationInsideAction(laminationInside))
    setLaminationModalActive(!laminationModalActive)
  }
  //glazing setting
  const chooseGlazingType = (value) => {
    setGlazingType(value)
  }

  const chooseHardware = (value) => {
    setActiveHardware(value)
  }

  const chooseSoftClose = (value) => {
    setActiveSoftClose(value)
  }

  const chooseHandle = (value) => {
    setActiveHandle(value)
  }

  const chooseSashWeight = (value) => {
    setActiveSashWeight(value)
  }

  const chooseGlazing = (value) => {
    setGlazing(value)
  }

  const confirmGlazing = () => {
    dispatch(chooseGlazingAction(glazing))
    setGlazingModalActive(!glazingModalActive)
  }

  const confirmBead = () => {
    dispatch(chooseBeadAction(activeBead))
    setGlazingBeadModalActive(false)
  }

  const confirmHardware = () => {
    dispatch(chooseHardwareAction(activeHardware))
    setHardwareModalActive(false)
  }

  const confirmReinforcment = () => {
    dispatch(chooseReinforcmentAction(activeReinforcement))
    setReinforcementModalActive(false)
  }

  const confirmSealant = () => {
    dispatch(chooseSealantAction(activeSealant))
    setSealantModalActive(false)
  }

  //Data arrays
  const templateWidth = templateWidthPart1 + templateWidthPart2 + templateWidthPart3 + templateWidthPart4;
  const templateWidthPart1 = 1200;
  const templateWidthPart2 = 1200;
  const templateWidthPart3 = 1200;
  const templateWidthPart4 = 1200;
  //lamination
  const laminationArray = []
  const defaultLamination = "Без ламинации"
  //glazing
  const glazingTypeArray = [
    'Однокамерные',
    'Двухкамерные',
    'Противовзломные'
  ]
  const glazingSingleArray = [];
  const glazingDubleArray = [];
  const glazingBurglarProofArray = [];
  const beadsArray = [];
  const hardwareArray = [];
  const reinforcementArray = [];


  return (
    <MainComponentsSelectionContainer>
      {/* HEADER */}
      <MainComponentsSelectionOrderCard>
        <MainComponentsSelectionNewTaskHeader>
          Новое задание
        </MainComponentsSelectionNewTaskHeader>
        <MainComponentsnNewTaskInstruction>
          Видео инструкция
        </MainComponentsnNewTaskInstruction>
      </MainComponentsSelectionOrderCard>
      <hr />
      {/* BODY */}
      <MainComponentsSelectionBody>
        <MainComponentsSelectionTemplateSection>
          {/* TEMPLATE */}
          <MainComponentsSelectionTemplate>
            <MainComponentsSelectionTemplateTitle>
              {order.template.name}
            </MainComponentsSelectionTemplateTitle>
            <img className="template-img" src={order.template.src} alt={order.template.name} />
          </MainComponentsSelectionTemplate>
          {/* BUTTONS */}
          <MainComponentsSelectionTemplateButtons>
            <MainComponentsSelectionTemplateRemove>
              <button>
                Удалить шаблон
              </button>
            </MainComponentsSelectionTemplateRemove>
            <MainComponentsSelectionTemplateChangeTemplate>
              <button>
                Изменить шаблон
              </button>
            </MainComponentsSelectionTemplateChangeTemplate>
          </MainComponentsSelectionTemplateButtons>
        </MainComponentsSelectionTemplateSection>
        <MainComponentsSelectionFillingSection>
          <MainComponentsSelectionFillingLamination>
            <MainComponentsSelectionFillingLaminationTitle>
              Загрузите ваше рекламное фото
            </MainComponentsSelectionFillingLaminationTitle>
            <input name="file" type="file" name="file" id="input__file" className="input input__file" multiple></input>
            <label htmlFor="input__file" className="input__file-button">
              <span className="input__file-icon-wrapper"><img className="input__file-icon" src={DownloadFile} alt="Выбрать файл" width="25" /></span>
              <span className="input__file-button-text">Выберите файл</span>
            </label>
          </MainComponentsSelectionFillingLamination>
          <MainComponentsSelectionFillingGlazing>
            <MainComponentsSelectionFillingGlazingTitle>
              Загрузите пример селфи для клиента
            </MainComponentsSelectionFillingGlazingTitle>
            <input name="file" type="file" name="file" id="input__file" className="input input__file" multiple></input>
            <label htmlFor="input__file" className="input__file-button">
              <span className="input__file-icon-wrapper"><img className="input__file-icon" src={DownloadFile} alt="Выбрать файл" width="25" /></span>
              <span className="input__file-button-text">Выберите файл</span>
            </label>
          </MainComponentsSelectionFillingGlazing>
          <MainComponentsSelectionFillingGlazingBead>
            <MainComponentsSelectionFillingGlazingBeadTitle>
              Опишите требования к селфи<br /> и размер вознагрождения за пост
            </MainComponentsSelectionFillingGlazingBeadTitle>
            <textarea type="text" className='text-area-default' />
          </MainComponentsSelectionFillingGlazingBead>
          <MainComponentsSelectionFillingFittings>
            <MainComponentsSelectionFillingFittingsTitle>
              Опишите как клиент будет использовать<br />
              полученный промокод, при необходимости<br />
              укажите срок действия данной акции
            </MainComponentsSelectionFillingFittingsTitle>
            <textarea type="text" className='text-area-default' />
          </MainComponentsSelectionFillingFittings>
          <MainComponentsSelectionFillingGetConstructionPrice>
            <button className="video-preview" onClick={() => setLaminationModalActive(true)}>
              Предпросмотр видео для Stories
            </button>
            <button className="next-step" onClick={() => setLastStep(!lastStep)}>
              Всё ОК, двигаемся дальше
            </button>
          </MainComponentsSelectionFillingGetConstructionPrice>
        </MainComponentsSelectionFillingSection>
        {lastStep ?
          <MainComponentsSelectionConstructionInfoActive>
            <MainComponentsSelectionConstructionInfoTitle>
              Наименование задания
              <textarea type="text" className='text-area-default' />
            </MainComponentsSelectionConstructionInfoTitle>
            <MainComponentsSelectionConstructionStartEndInputs>
              <MainComponentsSelectionConstructionStart>
                Дата начала
                <DatePicker selected={startDate} onChange={(date) => setStartDate(date)} />
              </MainComponentsSelectionConstructionStart>
              <MainComponentsSelectionConstructionEnd>
                Дата окончания
                <DatePicker selected={startDate} onChange={(date) => setStartDate(date)} />
              </MainComponentsSelectionConstructionEnd>
            </MainComponentsSelectionConstructionStartEndInputs>
            <MainComponentsSelectionSave>
              <button className='save-and-get-link' onClick={() => setSaveAndGetLink(!saveAndGetLink)}>Сохранить и получить ссылку</button>
            </MainComponentsSelectionSave>
            {saveAndGetLink ?
              <MainComponentsSelectionLastInfo>
                <MainComponentsSelectionLastInfoHeader>
                  Разместите эту ссылку на вашем сайте,<br />
                  на страницах ваших соцсетей или сделайте рассылку вашим клиентам
                </MainComponentsSelectionLastInfoHeader>
                <MainComponentsSelectionLastInfoLink>
                  <input type="text" defaultValue='https://www.npmjs.com/package/react-datepicker' />
                </MainComponentsSelectionLastInfoLink>
                <MainComponentsSelectionQrHeader>
                  Разместите этот QRcode в легко-
                  доступном для клиента месте
                  Клиент может приступить к
                  выполнению задания просто наведя
                  камеру на этот QRcode
                </MainComponentsSelectionQrHeader>
                <MainComponentsSelectionQr>
                  <img src={QrCode} alt="" />
                </MainComponentsSelectionQr>
              </MainComponentsSelectionLastInfo>
              : null}
          </MainComponentsSelectionConstructionInfoActive> : null}
      </MainComponentsSelectionBody>

      {/* MODALS */}
      <Modal active={laminationModalActive} setActive={setLaminationModalActive}>
        <div className="modal-header">
          <h4>Тип ламинации</h4>
        </div>
        <div className="modal-body">
          <div className="modal-few-elements">
            <div className="modal-block">
              <div className="modal-subtitle">
                Внутри
              </div>
              {!templateComposition ? null : <Dropdown className="dropdown-select" value={defaultLamination} options={templateComposition.lamination_in.map((element) => element.name)} onChange={(event) => chooseLaminationInside(event.value)} />}
            </div>
            <div className="modal-block">
              <div className="modal-subtitle">
                Снаружи
              </div>
              {!templateComposition ? null : <Dropdown className="dropdown-select" value={defaultLamination} options={templateComposition.lamination_out.map((element) => element.name)} onChange={(event) => chooseLaminationOutside(event.value)} />}
            </div>
          </div>
          <button className="next-button" onClick={() => confirmLamination()}>
            Подтвердить
          </button>
        </div>
      </Modal>
      <Modal active={glazingModalActive} setActive={setGlazingModalActive}>
        <div className="modal-header">
          <h4>Стеклопакет</h4>
        </div>
        <div className="modal-body">
          <div className="modal-elements">
            <div className="modal-block">
              <div className="modal-subtitle">
                Выбор группы стеклопакета
              </div>
              <div className="modal-few-elements">

              </div>
            </div>
          </div>
          <button className="next-button" onClick={() => confirmGlazing()}>
            Подтвердить
          </button>
        </div>
      </Modal>
      <Modal active={glazingBeadModalActive} setActive={setGlazingBeadModalActive}>
        <div className="modal-header">
          <h4>Конфигурация штапика</h4>
        </div>
        <div className="modal-body">
          <div className="modal-elements">
            <div className="modal-block">
              <div className="modal-subtitle">
                Выбор штапика
              </div>
              {beadsArray.map((elem, index) => {
                return (
                  <label className="checkbox-btn" key={index}>
                    <input type="checkbox" checked={elem.name === activeBead} onChange={() => setActiveBead(elem.name)} />
                    <span>{elem.name}</span>
                  </label>
                )
              })}
            </div>
          </div>
          <button className="next-button" onClick={() => confirmBead()}>
            Подтвердить
          </button>
        </div>
      </Modal>
      <Modal active={hardwareModalActive} setActive={setHardwareModalActive}>
        <div className="modal-header">
          <h4>Фурнитура</h4>
        </div>
        <div className="modal-body">
          <div className="modal-subtitle">
            Выбор фурнитуры
          </div>
          <div className="modal-few-elements">
            <Dropdown className="dropdown-select" options={hardwareArray.map((element) => element.name)} onChange={(event) => chooseHardware(event.value)} placeholder="Не выбрано" />
          </div>
          <button className="next-button" onClick={() => confirmHardware()}>
            Подтвердить
          </button>
        </div>
      </Modal>
      <Modal active={reinforcementModalActive} setActive={setReinforcementModalActive}>
        <div className="modal-header">
          <h4>Армирование</h4>
        </div>
        <div className="modal-body">
          <div className="modal-elements">
            <div className="modal-block">
              <div className="modal-subtitle">
                Выбор армирования
              </div>
              {reinforcementArray.map((elem, index) => {
                return (
                  <label className="checkbox-btn" key={index}>
                    <input type="checkbox" checked={elem.name === activeReinforcement} onChange={() => setActiveReinforcement(elem.name)} />
                    <span>{elem.name}</span>
                  </label>
                )
              })}
            </div>
          </div>
          <button className="next-button" onClick={() => confirmReinforcment()}>
            Подтвердить
          </button>
        </div>
      </Modal>

      <Modal active={addElementsModalActive} setActive={setAddElementsModalActive}>
        <div className="modal-header">
          <h4>Дополнительные элементы</h4>
        </div>
        <div className="modal-body">
          <button className="next-button" onClick={() => setAddElementsModalActive(!addElementsModalActive)}>
            Подтвердить
          </button>
        </div>
      </Modal>

      <Modal active={sealantModalActive} setActive={setSealantModalActive}>
        <div className="modal-header">
          <h4>Уплотнитель</h4>
        </div>
        <div className="modal-body">
          <div className="modal-elements">
            <div className="modal-block">
              <div className="modal-subtitle">
                Выбор уплотнителя
              </div>
            </div>
          </div>
          <button className="next-button" onClick={() => confirmSealant()}>
            Подтвердить
          </button>
        </div>
      </Modal>
    </MainComponentsSelectionContainer >
  )
}

export default MainComponentsSelection;


const MainComponentsSelectionContainer = styled.div`
  width: 100%;
  padding-top: 24px;
  height: auto;
  background-color: #F2F2F2;

  
  hr {
      color: #000;
  }

  .element-button {
    width: 280px;
    padding: 8px 16px;
    text-align: left;
    border: 1px solid #C3C3C3;
    overflow: hidden;
    text-overflow: ellipsis;
    
    span {
      display: block;
      max-width: 210px;
      overflow: hidden;
      text-overflow: ellipsis;  
      white-space: nowrap;
    }

    background-image: url(${BlackRightArrow});
    background-repeat: no-repeat;
    background-position: right;

    transition: .4s all;

    :hover {
      background-color: #E5E5E5;
    }

    :active {
      background-color: #E5E5E5;
    }
  }

  .element-button-disabled {
    cursor: default;
    width: 280px;
    padding: 8px 16px;
    text-align: left;
    border: 1px solid #C3C3C3;
    overflow: hidden;
    text-overflow: ellipsis;
    opacity: 0.3;
    
    span {
      display: block;
      max-width: 210px;
      overflow: hidden;
      text-overflow: ellipsis;  
      white-space: nowrap;
    }
    background-image: url(${BlackRightArrow});
    background-repeat: no-repeat;
    background-position: right;
  }
`

const MainComponentsSelectionOrderCard = styled.div`
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

const MainComponentsSelectionNewTaskHeader = styled.div`

`

const MainComponentsnNewTaskInstruction = styled.div`
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

const MainComponentsSelectionTemplateSection = styled.div`
  width: 33%;
`

const MainComponentsSelectionBody = styled.div`
  display: flex;
  padding: 25px 16px;
  min-height: 657px;
  height: auto;
  position: relative;
`

const MainComponentsSelectionTemplate = styled.div`
  margin-bottom: 16px;

  img {
    width: 280px;
    height: auto;
  }
`

const MainComponentsSelectionTemplateTitle = styled.div`
  font-size: 14px;
  line-height: 22px;

  margin-bottom: 4px;

  color: #989898;
`

// BUTTONS
const MainComponentsSelectionTemplateButtons = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  bottom: 25px;

`
const MainComponentsSelectionTemplateRemove = styled.div`
  text-align: center;
  width: 280px;
  color: #fff;
  margin-bottom: 16px;

  background-color: var(--primary-pink);
`
const MainComponentsSelectionTemplateChangeTemplate = styled.div`
  text-align: center;
  width: 280px;
  color: #fff;

  background-color: var(--primary-green);
`
// FILLING

const MainComponentsSelectionFillingSection = styled.div`
  width: 33%;
`

const MainComponentsSelectionFillingLamination = styled.div`
  margin-bottom: 16px;
  .input__wrapper {
    width: 100%;
    position: relative;
    margin: 15px 0;
    text-align: center;
  }
 
  .input__file {
    opacity: 0;
    visibility: hidden;
    position: absolute;
  }
  
  .input__file-icon-wrapper {
    height: 40px;
    width: 40px;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
        -ms-flex-align: center;
            align-items: center;
    -webkit-box-pack: center;
        -ms-flex-pack: center;
            justify-content: center;
    border-right: 1px solid #fff;
  }
  
  .input__file-button-text {
    line-height: 1;
    padding: 8px;
  }
  
  .input__file-button {
    width: 100%;
    max-width: 290px;
    height: 40px;
    background: #55555542;
    color: #fff;
    font-size: 1.125rem;
    font-weight: 700;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
        -ms-flex-align: center;
            align-items: center;
    -webkit-box-pack: start;
        -ms-flex-pack: start;
            justify-content: flex-start;
    cursor: pointer;
  }
`

const MainComponentsSelectionFillingLaminationTitle = styled.div`
  font-size: 14px;
  line-height: 22px;

  margin-bottom: 4px;

  color: #989898;
`

const MainComponentsSelectionFillingGlazing = styled.div`
  margin-bottom: 16px;
  .input__wrapper {
    width: 100%;
    position: relative;
    margin: 15px 0;
    text-align: center;
  }
 
  .input__file {
    opacity: 0;
    visibility: hidden;
    position: absolute;
  }
  
  .input__file-icon-wrapper {
    height: 40px;
    width: 40px;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
        -ms-flex-align: center;
            align-items: center;
    -webkit-box-pack: center;
        -ms-flex-pack: center;
            justify-content: center;
    border-right: 1px solid #fff;
  }
  
  .input__file-button-text {
    line-height: 1;
    padding: 8px;
  }
  
  .input__file-button {
    width: 100%;
    max-width: 290px;
    height: 40px;
    background: #55555542;
    color: #fff;
    font-size: 1.125rem;
    font-weight: 700;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
        -ms-flex-align: center;
            align-items: center;
    -webkit-box-pack: start;
        -ms-flex-pack: start;
            justify-content: flex-start;
    cursor: pointer;
  }
`

const MainComponentsSelectionFillingGlazingTitle = styled.div`
  font-size: 14px;
  line-height: 22px;

  margin-bottom: 4px;

  color: #989898;
`

const MainComponentsSelectionFillingGlazingBead = styled.div`
  margin-bottom: 16px;

  .text-area-default {
    height: 80px;
    width: 290px;
    outline: none;
    resize: none;

    font-size: 16px;
  }
`

const MainComponentsSelectionFillingGlazingBeadTitle = styled.div`
  font-size: 14px;
  line-height: 22px;

  margin-bottom: 4px;

  color: #989898;
`

const MainComponentsSelectionFillingFittings = styled.div`
  margin-bottom: 16px;

  .text-area-default {
    height: 80px;
    width: 290px;
    outline: none;
    resize: none;

    font-size: 16px;
  }
`

const MainComponentsSelectionConstructionStartEndInputs = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;

  margin-bottom: 16px;
`

const MainComponentsSelectionConstructionStart = styled.div`
  display: flex;
  flex-direction: column;
`

const MainComponentsSelectionConstructionEnd = styled.div`
  display: flex;
  flex-direction: column;
`

const MainComponentsSelectionFillingFittingsTitle = styled.div`
  font-size: 14px;
  line-height: 22px;

  margin-bottom: 4px;

  color: #989898;
`
//BUTTON

const MainComponentsSelectionFillingGetConstructionPrice = styled.div`
  .video-preview {
    background-color: #000;
    color: #fff;
    width: 280px;
    position: absolute;
    bottom: 25px
  }

  .next-step {
    background-color: #000;
    color: #fff;
    width: 280px;
    position: absolute;
    bottom: 105px
  }
`
//CONSTRUCTION INFO

const MainComponentsSelectionConstructionInfoActive = styled.div`
  width: 33%;
  opacity: 1;
`
const MainComponentsSelectionConstructionInfoTitle = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 14px;
  line-height: 22px;
  margin-bottom: 16px;

  color: #989898;

  .text-area-default {
    height: 80px;
    width: 100%;
    outline: none;
    resize: none;

    font-size: 16px;
  }
`
const MainComponentsSelectionSave = styled.div`
  text-align: center;
  width: 100%;
  background-color: #000;
  color: #fff;

  margin-bottom: 16px;
`

const MainComponentsSelectionLastInfo = styled.div`

`

const MainComponentsSelectionLastInfoHeader = styled.div`
  font-size: 14px;
  line-height: 22px;

  margin-bottom: 4px;

  color: #989898;
  margin-bottom: 16px;
`

const MainComponentsSelectionLastInfoLink = styled.div`
  margin-bottom: 16px;
  input {
    width: 100%;
  }
`

const MainComponentsSelectionQrHeader = styled.div`
  font-size: 14px;
  line-height: 22px;

  margin-bottom: 4px;

  color: #989898;
  margin-bottom: 16px;
`

const MainComponentsSelectionQr = styled.div`
  text-align: center;
`