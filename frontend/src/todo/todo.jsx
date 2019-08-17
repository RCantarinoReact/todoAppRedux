import React, { Component } from 'react'

//componentes
import PageHeader from '../template/pageHeader'
import TodoForm from './todoForm'
import TodoList from './todoList'

export default class Todo extends Component{
    render() {
        return (
            <div>
                <PageHeader name='tarefas' small='Cadastro'></PageHeader>
                <TodoForm />
                <TodoList />
            </div>
        );
    }
}
