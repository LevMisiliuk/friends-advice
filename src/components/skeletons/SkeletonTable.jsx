import React from 'react'
import styled from 'styled-components';
import Shimmer from './Shimmer';
import SkeletonElement from './SkeletonElement'

function SkeletonTable() {
    return (
        <SkeletonTableContainer>
            <div className="skeleton-wrapper">
                <table>
                        <thead>
                            <tr>
                                <th>№ заказа</th>
                                <th>Завод</th>
                                <th>Заказчик</th>
                                <th>Телефон</th>
                                <th>Дата создания</th>
                                <th>Адрес</th>
                                <th>Сумма(руб)</th>
                                <th>Статус</th>
                            </tr>
                        </thead>
                    <tbody>
                        {
                            [1,2,3,4,5,6,7,8].map(num => (
                            <tr key={num}>
                                <td>    
                                    <SkeletonElement type="text"/>
                                </td>
                                <td>
                                    <SkeletonElement type="text"/>
                                </td>
                                <td>
                                    <SkeletonElement type="text"/>
                                </td>
                                <td>
                                    <SkeletonElement type="text"/>
                                </td>
                                <td>
                                    <SkeletonElement type="text"/>
                                </td>
                                <td>
                                    <SkeletonElement type="text"/>
                                </td>
                                <td>
                                    <SkeletonElement type="text"/>
                                </td>
                                <td>
                                    <SkeletonElement type="text"/>
                                </td>
                                <td>
                                    <SkeletonElement type="icon"/>
                                </td>
                            </tr>
                            ))
                        }
                    </tbody>
                </table>
                <Shimmer />
            </div>
        </SkeletonTableContainer>
    )
}

export default SkeletonTable;

const SkeletonTableContainer = styled.div`
    .skeleton-wrapper {
        position: relative;
        overflow: hidden;
    }

    table {
        width: 100%;
        text-align: left;
        border-collapse: collapse;
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
                    padding: 16px;
                }
                :hover {
                    background-color: var(--primary-gray);
                }
            }
        }
    }
`
