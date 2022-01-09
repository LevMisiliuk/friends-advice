import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
//libraries
import { CSSTransition } from 'react-transition-group';
import axios from 'axios';
import Dropdown from 'react-dropdown';
//components

//icons
import SearchIcon from '../../assets/search-icon.svg';
import CalendarIcon from '../../assets/calendar-icon.svg';
import FilterIcon from '../../assets/filter-icon.svg';
import PlusIcon from '../../assets/plus-icon.svg';
import SkeletonTable from '../skeletons/SkeletonTable';
import TemplateSelection from '../calculation/TemplateSelection';
import MainComponentsSelection from '../calculation/MainComponentsSelection';

function Main() {
    //options for select component
    const options = [
        { value: 'Копировать', label: 'Копировать' },
        { value: 'Скачать спецификацию', label: 'Скачать спецификацию' },
        { value: 'Отправить в производство', label: 'Отправить в производство' },
        { value: 'Удалить', label: 'Удалить' }
    ]
    const btns = document.querySelectorAll('button')

    btns.forEach(el => {
        el.addEventListener('click', function (e) {
            const
                size = Math.max(this.offsetWidth, this.offsetHeight),
                x = e.offsetX - size / 2,
                y = e.offsetY - size / 2,
                wave = document.createElement('span')

            // Create a new wave
            wave.className = 'wave'
            wave.style.cssText = `width:${size}px;height:${size}px;top:${y}px;left:${x}px`
            this.appendChild(wave)

            // Remove element after animation ends
            setTimeout(() => wave.remove(), 500)
        })
    })
    const [posts, setPosts] = useState(null)
    const [nextStep, setNextStep] = useState(false)
    //create new calculation
    const [showTemplateSelection, setShowTemplateSelection] = useState(false)
    //fetching data from json placeholder
    useEffect(() => {
        axios.get("https://jsonplaceholder.typicode.com/posts")
            .then(res => {
                setTimeout(() => {
                    setPosts(res.data)
                }, 1);
            })
            .catch(err => {
                console.log(err)
            })
    }, [])

    const proceedNextStep = (value) => {
        setNextStep(value)
        setShowTemplateSelection(!showTemplateSelection)
    }

    return (
        <MainContainer>
            <MainHeader>
                <h2>Заказы</h2>
            </MainHeader>
            <MainBlock>
                <MainBlockContainer>
                    <MainInputSearch>
                        <input type="search" placeholder="Поиск" />
                        <button>
                            <img src={SearchIcon} alt="Search Icon" />
                        </button>
                    </MainInputSearch>
                    <MainInputFilter>
                        <input type="search" placeholder="За всё время" />
                    </MainInputFilter>

                    <MainFilter>
                        <input type="search" placeholder="Фильтр" />
                    </MainFilter>

                    <MainButtonCalculation>
                        <button className='new-calculation waves-effect waves-teal' onClick={() => setShowTemplateSelection(!showTemplateSelection)}>
                            Новое задание
                        </button>
                    </MainButtonCalculation>
                </MainBlockContainer>
            </MainBlock>
            <MainTableContainer>
                {
                    showTemplateSelection && (
                        <TemplateSelection proceedNextStep={proceedNextStep} />
                    )
                }
                {
                    nextStep && (
                        <MainComponentsSelection />
                    )
                }
                {!posts && (
                    <SkeletonTable />
                )}
                {posts && (
                    <table>
                        <thead>
                            <tr>
                                <th>№ задания</th>
                                <th>Наименование</th>
                                <th>№ шаблона</th>
                                <th>Дата создания</th>
                                <th>Дата окончания</th>
                                <th>Колличество попыток</th>
                                <th>Колличество постов</th>
                                <th>Продажи на сумму</th>
                                <th>Статус</th>
                            </tr>
                        </thead>
                        <tbody>
                            {posts.map(post => (
                                <tr key={post.id}>
                                    <td>{post.id}</td>
                                    <td>Скидка к рождеству</td>
                                    <td>001</td>
                                    <td>25.11.2021</td>
                                    <td>07.01.2022</td>
                                    <td>579</td>
                                    <td>503</td>
                                    <td><span>51600 грн.</span></td>
                                    <td><span>Активно</span></td>
                                    <td>
                                        <Dropdown className="dropdown-select" options={options} />
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                )}
            </MainTableContainer>
        </MainContainer>
    )
}

export default Main


const MainContainer = styled.div`
   flex-grow: 1;
   overflow-y: scroll;
   margin-top: 82px;
   padding: 40px;
`
const MainHeader = styled.div`
    margin-bottom: 16px;
    h2 {
        font-family: BrixSansBlack;
        font-style: normal;
        font-weight: 900;
        font-size: 30px;
        line-height: 40px;
    }
`

const MainBlock = styled.div`
    display: flex;
    flex-direction: column;
`

const MainTableContainer = styled.div`
    table {
        width: 100%;
        text-align: left;
        border-collapse: collapse;
        animation: showBlock 0.5s linear forwards;
        td {
            padding: 16px;
        }
        thead {
            tr {
                th {
                    padding: 16px;
                }
            }
            height: 72px;
            border-bottom: 1px solid #000000;
        }
        tbody {
            tr {
                height: 72px;
                td {
                    img {
                        cursor: pointer;
                    }
                    :first-child {
                        color: var(--primary-pink);
                    }
                    :nth-child(9n) {
                        >span {
                            padding: 8px 8px;
                            background-color: #E5E5E5;
                        }
                    }
                }
                :hover {
                    background-color: var(--primary-gray);
                }
            }
        }
    }

    @keyframes showBlock {
        0% {
            opacity: 0;
        }
        100% {
            opacity: 1;
        }
    }
`

const MainInputSearch = styled.div`
    display: flex;
    flex: 0.35;
    margin-right: 16px;

    >input {
        height: 40px;
        border: 1px solid #A9A9A9;
        border-radius: 0;
        outline: none;
        flex: 1;
    }
    >button {
        padding: 0;
        border: none;
        font: inherit;
        color: inherit;
        background-color: transparent;
        cursor: pointer;
        height: 40px;
        width: 40px;
    }
`


const MainInputFilter = styled.div`
    display: flex;
    flex: 0.3;
    margin-right: 16px;
    >input {
        height: 40px;
        border: 1px solid #000000;
        border-radius: 0;
        outline: none;
        flex: 1;

        background-image: url(${CalendarIcon});
        background-size: 14px 14px;
        background-repeat: no-repeat;
        background-position-x: 96%;
        background-position-y: 50%;
        padding-right: 13px;
    }
`

const MainFilter = styled.div`
    display: flex;
    flex: 0.2;
    margin-right: 16px;
    >input {
        height: 40px;
        border: 1px solid #000000;
        border-radius: 0;
        outline: none;
        flex: 1;

        background-image: url(${FilterIcon});
        background-size: 16px 16px;
        background-repeat: no-repeat;
        background-position-x: 96%;
        background-position-y: 50%;
    }
`

const MainButtonCalculation = styled.div`
    display: flex;
    flex: 0.15;
    >button {
        flex: 1;
        font-size: 16px;
        line-height: 24px;

        text-align: center;
        padding: 8px 16px;

        background-color: #000;
        color: #fff;
        background-image: url(${PlusIcon});
        background-size: 16px 16px;
        background-repeat: no-repeat;
        background-position-x: 3%;
        background-position-y: 50%;

        border: none;
        cursor: pointer;
        height: 40px;
        min-width: 157px;
        transition: background .25s;
        user-select: none;
        cursor: pointer;
        outline: none;
        overflow: hidden;
        position: relative;
    }

    .wave {
        background: #479292;
        color: white;
        border-radius: 50%;
        transform: scale(0);
        animation: wave .5s linear;
        pointer-events: none;
        position: absolute;
    }

    @keyframes wave {
        100% {
            transform: scale(2);
            opacity: 0;
        }
    }
`

const MainBlockContainer = styled.div`
    display: flex;
`
