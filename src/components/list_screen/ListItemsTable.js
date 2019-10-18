import React, { Component } from 'react'
import ListItemCard from './ListItemCard'

export class ListItemsTable extends Component {
    newItem = () => {
        let item = {}
        item.description = "unknown";
        item.assigned_to = "unknown";
        item.due_date = "unknown";
        item.completed = "false";
        item.key = this.props.todoList.items.length;
        this.props.todoList.items.push(item);

        this.props.goItem(item.key);
    }
    render() {
        return (
            <div id="list_items_container" className="list_item_header_card">
                <div className="list_item_header_card"></div>
                <div className="list_item_task_header">Task</div>
                <div className="list_item_due_date_header">Due Date</div>
                <div className="list_item_status_header">Status</div>
                {
                    this.props.todoList.items.map((todoItem)=>(
                        <ListItemCard 
                            goItem={this.props.goItem}
                            key={todoItem.key}
                            listItem={todoItem}
                            todoList={this.props.todoList}
                            loadList={this.props.loadList} />
                    ))
                }
                <div id="new_item" className= "new_item" onClick={this.newItem}>
                    +
                </div>
            </div>
            
        )
    }
}

export default ListItemsTable
