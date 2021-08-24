import React from 'react'
import { useDispatch,useSelector } from 'react-redux'
import { removeItem } from '../actions'

const ListTodo = () => {
    const todos = useSelector( state => state.todo )
    const dispatch = useDispatch()
    return (
        <div>
            {
                todos.map( (value ,index) => {
                    return (
                        <div> 
                        <h5>{value.title}</h5>
                        <button onClick= { () => {
                            dispatch(removeItem(index))
                        } }>Delete</button>

                        </div>
                    )

                } )
            }
            
        </div>
    )
}

export default ListTodo
