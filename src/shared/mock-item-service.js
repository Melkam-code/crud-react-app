/* Handling asynchronous process can require using promises */

class ItemService {
    constructor(){
        this.items = [
            {link:1, name:"Melkam Mekonnen", summary:"Summary-1", year:"2001", country: "Ethiopia", price: "1000", description: "Desc-1"},
            {link:1, name:"Josh Connely", summary:"Summary-2", year:"2002", country: "US", price: "2000", description: "Desc-2"},
            {link:1, name:"Yoseph Birhanu", summary:"Summary-3", year:"2003", country: "Canada", price: "3000", description: "Desc-3"},
            {link:1, name:"Helani Mack", summary:"Summary-4", year:"2004", country: "China", price: "4000", description: "Desc-4"}
        ]
    }

    async retrieveItems(){
      return Promise.resolve(this.items);
    }

    async getItem(itemLink){
      for(var i = 0; i <= this.items.length; i++){
          if(this.items[i].link == itemLink){
              return Promise.resolve(this.items[i]);
          }
      }
      return null;
    }

    async createItem(item){
      console.log("ItemServie.createItem(): ");
      console.log(item);
      return Promise.resolve(item);
    }

    async deleteItem(itemId){
      console.log("ItemService.deleteItem(): ");
      console.log("item ID: " + itemId);
    }

    async updateItem(item){
      console.log("ItemService.updateItem(): ");
      console.log(item);
    }
}

export default ItemService;