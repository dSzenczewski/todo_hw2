import React, { Component } from 'react'
import ListHeading from './ListHeading'
import ListItemsTable from './ListItemsTable'
import ListTrash from './ListTrash'
import PropTypes from 'prop-types';

export class ListScreen extends Component {
    getListName() {
        if (this.props.todoList) {
            let name = this.props.todoList.name;
            return this.props.todoList.name;
        }
        else
            return "";
    }
    getListOwner() {
        if (this.props.todoList) {
            let owner = this.props.todoList.owner;
            return this.props.todoList.owner;
        }
    }

    setListName(text){
        if (this.props.todoList) {
            let name = this.props.todoList.name;
            this.props.todoList.name = text;
        }
        else
            return "";
    }

    setListOwner(text){
        if (this.props.todoList) {
            let owner = this.props.todoList.owner;
            this.props.todoList.owner = text;
        }
        else
            return "";
    }

    constructor(props) {
        super(props);
        this.state = {value: ''};
    
        this.handleChangeName = this.handleChangeName.bind(this);
        this.handleChangeOwner = this.handleChangeOwner.bind(this);
      }
    
      handleChangeName(event) {
        this.setListName(event.target.value);
      }

      handleChangeOwner(event) {
        this.setListOwner(event.target.value);
      }

    
    render() {
        return (
            <div id="todo_list">
                <ListHeading goHome={this.props.goHome} />
                <ListTrash removeList={this.props.removeList}/>
                <div id="list_details_container">
                    <div id="list_details_name_container" className="text_toolbar">
                        <span id="list_name_prompt">Name:</span>
                        <input 
                            defaultValue={this.getListName()} 
                            type="text" 
                            id="list_name_textfield" 
                            onChange = {this.handleChangeName}/>
                    </div>
                    <div id="list_details_owner_container" className="text_toolbar">
                        <span id="list_owner_prompt">Owner:</span>
                        <input 
                            defaultValue={this.getListOwner()}
                            type="text" 
                            id="list_owner_textfield" 
                            onChange = {this.handleChangeOwner}/>
                    </div>
                </div>
                <div id="delete_popup" className="offscreen">
                        <p>Delete list?
                            <br></br>
                            <br></br>
                            <br></br>
                            Are you sure you want to delete this list?
                        </p>

                        <button id="yes_delete" onClick={this.props.removed}>Yes</button>
                        <button id="no_delete" onClick={this.props.notRemoved}>No</button>
                        <p>The list will not be retreivable.</p>
                    </div>
                <ListItemsTable goItem={this.props.goItem} todoList={this.props.todoList} loadList={this.props.loadList}/>
        
            </div>
        )
    }
}

export default ListScreen
