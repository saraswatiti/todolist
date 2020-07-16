import React, { useState } from 'react'
import { FormWrap } from './style'

/**
* @author
* @function TodoForm
**/

const TodoForm = ({ addTodo }) => {
    const [currentItems, setCurrentItems] = useState({ text: '', key: '' });

    const inputHandle = (evt) => {

        setCurrentItems({
            text: evt.target.value,
            key: Date.now()
        });
    }

    const formHandle = (evt) => {
        evt.preventDefault();
        if (currentItems.text !== '') {
            addTodo(currentItems);
            setCurrentItems({ text: '', key: '' })
        }

    }
    return (
        <FormWrap style={{
            margin: '30px 0',
        }} >
            <form onSubmit={formHandle}>
                <input type="text" placeholder='Enter your todo lists' value={currentItems.text} onChange={inputHandle} />
                <button type='submit'>Add Tasks</button>
            </form>

        </FormWrap >
    )

}

export default TodoForm