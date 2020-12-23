import React, { Component } from 'react';
import './App.css';
import ItemService from './shared/mock-item-service';

class App extends Component {
  constructor(props){
    super(props);
    this.itemService = new ItemService();
    this.onSelect = this.onSelect.bind(this);
    this.onNewItem = this.onNewItem.bind(this);
    this.onEditItem = this.onEditItem.bind(this);
    this.onCancel = this.onCancel.bind(this);
    this.onCancelEdit = this.onCancelEdit.bind(this);
    this.onCreateItem = this.onCreateItem.bind(this);
    this.onUpdateItem = this.onUpdateItem.bind(this);
    this.onDeleteItem = this.onDeleteItem.bind(this);

    this.state = {
      showDetails: false,
      editItem: false,
      selectedItem: null,
      newItem: null
    }
  }
  
  getItems(){
    this.itemService.retrieveItems().then(items => {
      this.setState({ items: items });
    });
  }

  componentDidMount(){
    this.getItems();
  }


  render(){
    const items = this.state.items;
    if(!items) return null;

    const showDetails = this.state.showDetails;
    const editItem = this.state.editItem;
    const selectedItem = this.state.selectedItem;
    const newItem = this.state.newItem;

    const listItems = items.map((item) => <li key={item.link} onClick = {() => this.onSelect(item.link)}>
      <span className="item-name">{item.name}</span> | {item.summary} </li> );

    return(
      <div className="App">

          <ul className="items">
            {listItems}
          </ul>

          <br/>

          <button type="button" name="button" onClick={() => this.onNewItem()}>New Item</button>

          <br/>

            {newItem && <NewItem onSubmit={this.onCreateItem} onCancel={this.onCancel}></NewItem>}

            {showDetails && selectedItem && <ItemDetails item={selectedItem} onEdit={this.onEditItem}  onDelete={this.onDeleteItem} ></ItemDetails>}

            {editItem && selectedItem && <EditItem onSubmit={this.onUpdateItem} onCancel={this.onCancelEdit} item={selectedItem} ></EditItem>}

      </div>
    );

  }
}

export default App;
