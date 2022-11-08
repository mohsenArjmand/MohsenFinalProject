import React from 'react'
//import Todo from './Todo'
//mport AddTodo from './AddTodo'
import { useState } from 'react'

export default function Todos() {
    const [todos, setTodos] = useState([{ id: 1, name: 'todo1', change: true }])
    const [todo, setTodo] = useState([{ id: null, name: '', change: false }])


    function handleEventAddTodo() {
        let newtodos = [...todos, ...todo]
        console.log(newtodos)
        setTodos(newtodos)
    }

    const findArrayElementById = (array, id) => {
        return array.find(
            (element) => {
                return element.id === id;
            })
    }
    function filterItems(arr, id) {
        return arr.filter((el) => el.id !== id);
    }
    function handleEventDelTodo(todoId) {
        console.log('todoId', todoId)
        let arrayTemp = [...todos];
        var index = arrayTemp.find(
            (element) => {
                return element.id === todoId;
            })
        console.log('index', index)
        if (index !== -1) {

            let newtemp = filterItems(arrayTemp, todoId)
            console.log(newtemp)
            setTodos([...newtemp])
            setTodo('')
        }
    }

    function retMaxId() {
        var maxId = 1;
        todos.map((t) => {
            if (t.id >= maxId)
                maxId = t.id;
        })
        return maxId + 1;
    }
    const handleEventOnChangeInput = (event) => {
        console.log(' todo ', todo)
        console.log(' event.target.value ', event.target.value)
        let newId = retMaxId();//todos.length + 1;
        let newName = event.target.value;
        setTodo([{ id: newId, name: newName, change: false }])
    }
    const handleEventOnDoubleClick = (todoId) => {
        console.log('double')
        console.log('Todos - todoId :', todoId, 'handleEventOnDoubleClickTodos')
        console.log('1', findArrayElementById(todos, todoId).change)
        setTodos([...todos], findArrayElementById(todos, todoId).change = !findArrayElementById(todos, todoId).change)
        console.log('2', findArrayElementById(todos, todoId).change)
    }
    const handleEventOnChangeInputSpan = (event, todoId) => {
        console.log('changeInputSpan')
        console.log('Todos - todoId :', todoId, event.target.value, 'handleEventOnChangeInputSpan')
        console.log('1', findArrayElementById(todos, todoId).change)
        setTodos([...todos], findArrayElementById(todos, todoId).name = event.target.value)
        console.log('2', findArrayElementById(todos, todoId).change)
    }


    return (
        <div>
            {/* <p>TodoS</p>
            <hr></hr>
            {todos.map(
                (todoElement) => {
                    return (<Todo todoprops={todoElement} key={todoElement.id}
                        propshandleEventAdd={handleEventAddTodo}
                        propshandleEventDel={(todoId) => { handleEventDelTodo(todoElement.id) }}
                        propshandleEventDouble={(todoId) => { handleEventOnDoubleClick(todoElement.id) }}
                        propshandleEventInputSpan={(todoId, event) => { handleEventOnChangeInputSpan(todoElement.id) }}
                    />)
                })} */}

            {/* <ol>
                {todos.map((todoEl) => (<li key={todoEl.id}> {todoEl.name}</li>))}
            </ol>
            <hr></hr> */}
            <h4>Without Redux Todo Components</h4>
            {todos.map(
                (todoElement) => {
                    return (<div> {todoElement.change === true ?
                        <input key={'todo1' + todoElement.id}
                            onDoubleClick={(todoId) => { handleEventOnDoubleClick(todoElement.id) }} value={todoElement.name}
                            onChange={(e) => handleEventOnChangeInputSpan(e, todoElement.id)} />
                        :
                        <span key={'todo2' + todoElement.id} style={{
                            color: 'red'
                        }} className="strike"
                            onDoubleClick={(todoId) => { handleEventOnDoubleClick(todoElement.id) }}
                        //onClick={handleToggle()}
                        >{todoElement.id} - {todoElement.name} </span>
                    }            <button onClick={(todoId) => { handleEventDelTodo(todoElement.id) }}> - del </button>
                    </div>)
                })}
            <div>
                <input type='text' placeholder='insert todo' key={todo.key} onChange={handleEventOnChangeInput}>{todo.name}</input>
                <button onClick={handleEventAddTodo}>Add Todo</button>
            </div>
        </div>
    )
}
