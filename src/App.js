import React, { Component } from 'react';
import testTodoListData from './TestTodoListData.json'
import HomeScreen from './components/home_screen/HomeScreen'
import ItemScreen from './components/item_screen/ItemScreen'
import ListScreen from './components/list_screen/ListScreen'

const AppScreen = {
  HOME_SCREEN: "HOME_SCREEN",
  LIST_SCREEN: "LIST_SCREEN",
  ITEM_SCREEN: "ITEM_SCREEN"
}

class App extends Component {
  state = {
    currentScreen: AppScreen.HOME_SCREEN,
    todoLists: testTodoListData.todoLists,
    currentList: null
  }

  goHome = () => {
    this.setState({currentScreen: AppScreen.HOME_SCREEN});
    this.setState({currentList: null});
  }

  // Item screen
  goItem = (index) => {
    this.setState({currentScreen: AppScreen.ITEM_SCREEN});
    this.setState({key: index});
    //this.setState({currentList: todoListToLoad});
  }

  newList = () => {
    
  }

  removeList = () => {
    console.log(this.state.currentList.items);
    document.getElementById("delete_popup").setAttribute("class", "onscreen");
  }

  removed = () => {
    document.getElementById("delete_popup").setAttribute("class", "offscreen");
    let index = 0;
    while(index < this.state.todoLists.length){
      if(this.state.todoLists[index] === this.state.currentList){
        //let tempArray = new Array[this.state.todoLists.length-1];
        if (index >= 0)
            this.state.todoLists.splice(index, 1);
      }
      index++;
    }
    
    this.goHome();
  }

  notRemoved = () => {
    console.log(this.state.todoLists.items);
    document.getElementById("delete_popup").setAttribute("class", "offscreen");
  }

  loadList = (todoListToLoad) => {
    this.setState({currentScreen: AppScreen.LIST_SCREEN});
    this.setState({currentList: todoListToLoad});
    console.log("currentList: " + this.state.currentList);
    console.log("currentScreen: " + this.state.currentScreen);
  }

  render() {
    switch(this.state.currentScreen) {
      case AppScreen.HOME_SCREEN:
        return <HomeScreen 
        loadList={this.loadList.bind(this)} 
        todoLists={this.state.todoLists}
        newList={this.newList.bind(this)} />;
      case AppScreen.LIST_SCREEN:            
        return <ListScreen
          goHome={this.goHome.bind(this)}
          goItem={this.goItem.bind(this)}
          todoList={this.state.currentList}
          removeList={this.removeList.bind(this)}
          removed={this.removed.bind(this)} 
          notRemoved={this.notRemoved.bind(this)} />;
      case AppScreen.ITEM_SCREEN:
        return <ItemScreen 
        todoItem={this.state.currentList.items[this.state.key]}

        />;
      default:
        return <div>ERROR</div>;
    }
  }
}

export default App;