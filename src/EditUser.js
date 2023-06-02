import React, { useEffect, useState } from "react"
import { Link } from "react-router-dom";

const EditUser = ({  currentUser,  updateUser }) => {

    const [newUser, setNewUser] = useState(currentUser);
    const [complete, setComplete] = useState(false);


    const onInputChange = e => {
        const { name, value } = e.target;
        setNewUser({ ...newUser, [name]: value });
        return null;
    };

    const handleOnSubmit = e => {
        e.preventDefault();
        if (newUser.name) {
            updateUser(newUser);
            setComplete(true);
        }
    };
    useEffect(() => {
        setNewUser(currentUser)
    }, [currentUser]);

    return (
        <div>
            <Link to={'/'}> <button > Back </button></Link>
            <form className="adduser-form" onSubmit={handleOnSubmit}>
                <label htmlFor="name">Name: </label>
                <input type="text" placeholder="Enter Name" name="name" value={newUser.name} onChange={onInputChange}></input>
                <label htmlFor="address">Address: </label>
                <input type="text" placeholder="Address Please..."value={newUser.address} name="address" onChange={onInputChange}></input>
                <label htmlFor="type">Type: </label>
                <input type="text" placeholder="Enter Type" name="type" value={newUser.type} onChange={onInputChange}></input>
                <label htmlFor="member">Members: </label>
                <input type="text" placeholder="How many members" name="member" value={newUser.member} onChange={onInputChange}></input>
                <label htmlFor="amount">Amount: </label>
                <input type="text" placeholder="Enter Amount" name="amount" value={newUser.amount} onChange={onInputChange}></input>
                <button type="submit" > Submit</button>
                {complete ?
                    <span>User got modified successfully!!!</span> : null
                }
            </form>
            <div>
                <span>Name: {newUser.name}</span><br />
                <span>Address: {newUser.address}</span><br />
                <span>Type: {newUser.type}</span><br />
                <span>Members: {newUser.member}</span><br />
                <span>Amount: {newUser.amount}</span><br />
            </div>
        </div>
    );
};

export default EditUser;
