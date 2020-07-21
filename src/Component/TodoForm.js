import React, { useState } from 'react'
import { FormWrap } from './style'

/**
* @author
* @function TodoForm
**/

const TodoForm = ({ addTodo, clearAll, editItems }) => {
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
            setCurrentItems({ text: '', key: '' });
        }

    }


    return (
        <FormWrap style={{
            margin: '30px 0',
        }} >
            <form onSubmit={formHandle}>
                <input type="text" placeholder='Enter your todo lists' value={currentItems.text || editItems.text || ''} onChange={inputHandle} />
                {editItems ? <button type='submit'>Edit Tasks</button> : <button type='submit'>Add Tasks</button>}
                <button type='submit' style={{ marginLeft: '5px' }} onClick={clearAll}>clear All</button>
            </form>
        </FormWrap >
    )

}

export default TodoForm