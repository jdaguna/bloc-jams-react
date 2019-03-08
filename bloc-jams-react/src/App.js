import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import './App.css';
import Landing from './components/Landing';
import Library from './components/Library';

class App extends Component {
  render() {
    return (
      <div className="App">
       <header>
	<nav>
	 <Link to='/'>Landing</Link>
	 <Link to='/library'>Library</Link>
	
	</nav>
	<h1>chau.z music</h1>
       </header>
       <main>
	<Route exact path="/" component={Landing} />
	<Route path="/library" component={Library} />
       </main>
      </div>
    );
  }
}

export default App;
<<<<<<< HEAD

=======
>>>>>>> 407464fbcff805ea3c0cf2f9e87ae2346ad4b5fb