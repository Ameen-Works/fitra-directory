import React, { useState } from "react"
import "./Directory.css";
import { Link } from "react-router-dom";

const Directory = ({ user, setUser, List, setList,setCurrentUser }) => {
    const [selected, setSelected] = useState(null);
    const [search, setSearch] = useState("");
    


    const toggle = (i) => {
        if (selected === i) {
            return setSelected(null);
        }
        setSelected(i);
    };

    const handleDelete=userId=>{
        
        return setList(List.filter(item=>item.id!==userId));

    };

    const handleEdit=user=>{
        
        return setCurrentUser(user);
    }

    return (
        <div className="body">
            <div className="btn-flex">
                <Link to={"/"}>
                <button onClick={()=>setUser(null)} className="home-btn">Home</button>
                </Link>
                <span className="directory-header">FITRA DIRECTORY</span>
                <Link to={"/AddUser"}>
                <button className="addUser-btn">Add User</button>
                </Link>
            </div>
            <h1 className="invite" key={"invite"}> Hi {user}</h1>
            <div className=" searchbar">
                <input  key={"searchbar"} type="text" placeholder="Enter for search" onChange={(e) => setSearch(e.target.value)}></input>
            </div>
            <div className="header">
                <table>
                    <thead>
                        <tr key={"header"}>
                            <th>Sl.No</th>
                            <th>ID</th>
                            <th>Name</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                </table>
                {
                    List.filter((item) => { 
                        return search.toLowerCase() === "" ? item : item.name.toLowerCase().includes(search) 
                    }
                    ).map((user, i) => {
                        return (
                            <div key={`table_data_${user.id}`}>
                                <table>
                                    <tbody>

                                        <tr key={user.id}>
                                            <td>{i + 1}</td>
                                            <td>{user.id}</td>
                                            <td>{user.name}</td>
                                            <td><button value={[user, i]} onClick={() => toggle(i)}>...</button></td>
                                        </tr>


                                    </tbody>
                                </table>

                                {selected === i ?
                                    <div key={`Details_of_${user.id}`}>
                                            <header >Details</header>
                                            <div key={`Details_of_${user.id}_View`}>
                                                <span>Address: {user.address}</span><br/>
                                                <span>Type: {user.type}</span><br/>
                                                <span>Members: {user.member}</span><br/>
                                                <span>Amount: {user.amount}</span><br/>
                                                <button onClick={()=>handleDelete(user.id)}>Delete</button>
                                                <Link to={"/EditUser"}><button onClick={()=>handleEdit(user)}>Edit</button></Link>
                                            </div>
                                    </div> : null
                                }

                            </div>
                        );
                    })
                }

            </div>

        </div>
    );
};

export default Directory;
