import { Fragment } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import ChatPage from './ChatPage';
import Chats from './Chats';
import Header from './Header';
import Homepage from './Homepage';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/chats/:person' element={
              <Fragment>
                <Header backbutton = '/chats' />
                <ChatPage/>
              </Fragment>
            }>
            </Route>
            <Route path='/chats' element={
              <Fragment>
                <Header backbutton = '/' />
                <Chats/>
              </Fragment>
            }>
            </Route>
            <Route path='/' element={
              <Fragment>
                <Header/>
                <Homepage/>
              </Fragment>
            }>
            </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
