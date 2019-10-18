import React, { Component } from 'react'
import PropTypes from 'prop-types';

export class ItemScreen extends Component {
    submit = () => {

        this.props.loadList(this.props.todoList);
    }

    cancel = () => {
        
        this.props.loadList(this.props.todoList);
    }
    render() {
        return (
            <div id="todo_item" class="item_info">
            <div id="list_item">
                    <span id="list_item">Item: </span>
                    <span id="list_item_index"></span>
            </div>
            <div id="list_description_container">
                <div id="list_item_card_description" class="text_toolbar">
                    <span id="LIST_ITEM_CARD_DESCRIPTION" class="info">Description:</span>
                    <input type="text" id="list_description_textfield" value={this.props.todoItem.description} class="textBox"/>
                </div>
                <div id="list_assigned_to_container" class="text_toolbar">
                        <span id="LIST_ITEM_CARD_ASSIGNED_TO" class="info">Assigned to:</span>
                        <input type="text" id="list_assigned_to_textfield" value={this.props.todoItem.assigned_to} class="textBox"/>
                        
                </div>
                <div id="list_date_container" class="text_toolbar">
                        <span id="list_item_due_date" class="info">Due Date:</span>
                        <input type="date" id="list_date_picker" value={this.props.todoItem.due_date} class="textBox"/>
                        
                </div>
                <div id="list_completed_container" class="text_toolbar">
                        <span id="list_item_completed" class="info">Completed:</span>
                        <input type="checkbox" id="list_checkbox" checked={this.props.todoItem.completed ? "checked" : ""}/>
                        
                </div>
                <div id="buttons_container">
                        <button id="submit" onClick={this.submit}>Submit</button>
                        <button id="cancel" onClick={this.cancel}>Cancel</button>
                </div>
                
            </div>
            <div id="list_items_container">
            </div>
        </div>
        )
    }
}

ItemScreen.propTypes = {
    currentScreen: PropTypes.string.isRequired,
    todoItem: PropTypes.object.isRequired
}

export default ItemScreen
