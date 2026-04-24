import {useParams} from 'react-router-dom';

export const TodolistPage = () => {
    const { filter, todoName } = useParams()


    return (
        <div style={{backgroundColor: 'white'}}>
            <h2>{todoName}</h2>
            <p>Filter: {filter}</p>
            {/* отрисовка задач этого тудулиста */}
        </div>
    )
}