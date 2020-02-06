import React, {Component} from 'react';
import { CardList } from './components/card-list/card-list.component'
import SearchBox from './components/search-box/search-box.component'
import './App.css';

class App extends Component {

  constructor() {
    super(); // BELOGS TO COMPONENT CLASS

    this.state = {
      message: 'Hello Ashish.',
      monsters: [],
      searchFeild: ''
    }

    this.handleChange = this.handleChange.bind(this);
  }
 
  // #### COMPONENT LIFECYCLE WORKS
  componentDidMount() {
    try{
      fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(users => this.setState({monsters: users}))
    }   
    catch(err) {
      console.log('Error comes : ', err)
    }
  }

  handleChange(e) {
    this.setState({searchFeild: e.target.value})
  }

  // handleChange = (e) => {
  //   this.setState({searchFeild: e.target.value})
  // }

  render() {

    // #### DECONSTRUCTING
    const { monsters, searchFeild } = this.state;
    const filterMonsters = monsters.filter(monster => {
      return monster.name.toLowerCase().includes(searchFeild.toLowerCase())
    })  
    return (
      <div className="App">

        <h1>Monsters Rolodex</h1>
        <SearchBox 
          placeholder="Search monsters" 
          handleChange={this.handleChange} 
        />

        <CardList monsters={filterMonsters}></CardList>        
      </div>
    )
  }
}
 
export default App;
