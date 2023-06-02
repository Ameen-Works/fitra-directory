import React, { useState } from "react"
import { Link } from "react-router-dom";
import "./AddUser.css";

const AddUser = ({ addUser }) => {

    const initialUser = { id: null, name: "", address: "", type: "", member: "", amount: null };
    const [newUser, setNewUser] = useState(initialUser);
    const [complete, setComplete] = useState(false);


    const onInputChange = e => {
        const { name, value } = e.target;
        setNewUser({ ...newUser, [name]: value });
        return null;
    };

    const handleOnSubmit = e => {
        e.preventDefault();
        if (newUser.name) {
            onInputChange(e, addUser(newUser));
            setComplete(true);
        }
    };
    return (
        <div>
            <Link to={'/'}> <button > Back </button></Link>
            <form className="adduser-form" onSubmit={handleOnSubmit}>
                <label htmlFor="name">Name: </label>
                <input type="text" placeholder="Enter Name" name="name" onChange={onInputChange}></input>
                <label htmlFor="address">Address: </label>
                <input type="text" placeholder="Address Please..." name="address" onChange={onInputChange}></input>
                <label htmlFor="type">Type: </label>
                <input type="text" placeholder="Enter Type" name="type" onChange={onInputChange}></input>
                <label htmlFor="member">Members: </label>
                <input type="text" placeholder="How many members" name="member" onChange={onInputChange}></input>
                <label htmlFor="amount">Amount: </label>
                <input type="text" placeholder="Enter Amount" name="amount" onChange={onInputChange}></input>
                <button type="submit" > Submit</button>
                {complete ?
                    <span>User got added successfully!!!</span> : null
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

export default AddUser;
