import React, { Component } from 'react'

export class ListItemCard extends Component {
    render() {
        return (
            <div className='list_item_card' onClick={this.props.goItem}>
                <div className='list_item_card_description'>
                    {this.props.listItem.description}
                </div>
                <div className='list_item_card_assigned_to'>
                    Assigned To: <strong>{this.props.listItem.assigned_to}</strong>
                </div>
                <div className='list_item_card_due_date'>
                    {this.props.listItem.due_date}
                </div>
                
                <div className='list_item_card_completed'>
                    {this.props.listItem.completed ? "Completed" : ""}
                </div>

                <div className='list_item_card_not_completed'>
                {this.props.listItem.completed ? "" : "Pending"}
                </div>
                
            </div>
        )
    }
}

export default ListItemCard
