import { useState } from 'react';
import './App.css';
import Home from './Home';
import Directory from './Directory';
import { Route, Routes } from 'react-router-dom';
import AddUser from './AddUser';
import Data from './Data';
import EditUser from './EditUser';
// import adminData from './AdminData';

function App() {
  // const adminList= adminData;
  // const loginUser= adminList[adminList.length-1];
  const [user, setUser] = useState();
  const [list, setList] = useState(Data);
  const initialUser = { id: null, name: "", address: "", type: "", member: "", amount: null };
  const [currentUser, setCurrentUser] = useState(initialUser);
  // const [publicUser, setPublicUser] = useState(null);
  // const [adminUser, setAdminUser] = useState(null);

  const addUser = user => {
    user.id = list[list.length - 1].id + 1;
    setList([...list, user]);
  }

  const updateUser = (newUser) => {
    setList(list.map(oldUser => (oldUser.id === currentUser.id) ? newUser : oldUser));
  }
  return (
    <div className='container'>
      {!(user)?
        <Routes>
          <Route
            exact
            path='/'
            element={<Home user={user} setUser={setUser} 
            // adminList={adminList} setPublicUser={setPublicUser} setAdminUser={setAdminUser}
            />}>
          </Route>
        </Routes> :
        <Routes>
          <Route
            exact
            path='/'
            element={<Directory
              user={user}
              setUser={setUser}
              List={list}
              setCurrentUser={setCurrentUser}
              setList={setList} />}>
          </Route>
          <Route
            exact
            path='/AddUser'
            element={<AddUser addUser={addUser}></AddUser>}>
          </Route>
          <Route
            exact
            path='/EditUser'
            element={<EditUser
              currentUser={currentUser}
              updateUser={updateUser}></EditUser>}>
          </Route>
        </Routes>
      }
    </div>
  );
}

export default App;
