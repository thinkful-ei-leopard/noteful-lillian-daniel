import React from 'react';
import './App.css';
import MainFolderList from './components/Main/MainFolderList';
import MainNoteList from './components/Main/MainNoteList';
import {Route, Link} from 'react-router-dom';



class App extends React.Component {

  render(){
  return (
    <main>
      <header>
        <h1>Noteful</h1>
      </header>
      <Route path="/" component={MainFolderList}/>
        {/* <Route path="/folder" component={FolderFolderList}/> */}
      <Route path="/" component={MainNoteList}/>
    </main>
  );
}
}

export default App;
