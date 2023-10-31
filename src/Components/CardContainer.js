import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { groupTickets, selectAllTickets, selectGroupedTickets } from '../features/ticketSlice';
import CardGroup from './CardGroup';
import "./CardContainer.css"

const CardContainer = () => {

    const tickets = useSelector(selectAllTickets);
    console.log(tickets);
    const dispatch = useDispatch();
    const grouped = useSelector(selectGroupedTickets);
    console.log(grouped);

    useEffect(() => {
        dispatch(groupTickets());
    }, [tickets, dispatch]);

    return (
        <div className='card-group-container'>
            {grouped.map((group, index) => {
                return <CardGroup group={group} key={index} />
            })}
        </div>
    )
}

export default CardContainer