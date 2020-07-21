import React, { Fragment } from 'react';
import { FaTrashAlt } from "react-icons/fa";
import { ListWrap, ListBox, IconWrap } from './style';
import { MdEdit } from "react-icons/md";
/**
* @author
* @function TodoList
**/

const TodoList = ({ items, handleDelete, updateHandle }) => {
    return (
        <Fragment>
            {
                items.length ? (<div>{items.map(item => {
                    return (
                        <ListWrap key={item.key} style={{
                            marginBottom: '15px',
                        }}>
                            <ListBox>

                                {/* <input type="text" value={item.text} id={item.key} onChange={(e) => updateHandle(e.target.value, item.key)} /> */}
                                <p>{item.text}</p>
                                <IconWrap>
                                    <MdEdit onClick={() => updateHandle(item.key)} />
                                    <FaTrashAlt onClick={() => handleDelete(item.key)} />
                                </IconWrap>
                            </ListBox>

                        </ListWrap>
                    )
                })}</div >) : <div style={{ color: '#fff', fontSize: '18px' }}>No Tasks </div>
            }
        </Fragment>
    )


}

export default TodoList