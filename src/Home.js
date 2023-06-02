import React, { useState } from "react"
import "./Home.css";

const Home = ({ user, setUser, adminList, setAdminUser, setPublicUser }) => {
    const [selected, setselected] = useState(false);

    // const onInputChange = e => {
    //     const { name, value } = e.target;
    //     return setUser({ ...user, [name]: value });
    // };

    const toggle = e => {
        setselected(!selected);
        // return setUser(e.target.value);
        return null;
    };

    // const isAdmin = (userToCheck) => {
    //     let adminFlag =false;
    //     adminList.map((admins) =>
    //         (admins.username === userToCheck.username) && (admins.password === userToCheck.password) && (admins.isAdmin) ? adminFlag=true : null)
    // return adminFlag;
    //     };

    const onHandleSubmit = e => {
        // const userToCheck = e.target.value
        // if (isAdmin(userToCheck)) {
        //     userToCheck.isloggedIn =true;
        //     return setUser(userToCheck);
        // }
        return setUser("admin");
        };
    const onPublicSubmit = e => {
        
       return setUser("public");
    };

    return (
        <div className="container-home">
            <div className="form">
                <div className="title">Welcome!</div>
                <div className="subtitle">Kindly login to see directory!</div>
                <button className="submit" type="submit" value={"admin"} onClick={toggle}>Admin</button>

                <div className={`credentials${selected ? "-active" : ""}`}>
                    <div className="input-container ic1">
                        <input
                            id="username"
                            className="input" type="text"
                            name="username" placeholder=" "
                            // onChange={onInputChange} 
                            />
                        <div className="cut"></div>
                        <label htmlFor="username" className="placeholder">User Name</label>
                    </div>
                    <div className="input-container ic2">
                        <input
                            id="password"
                            className="input" type="password"
                            name="password" placeholder=" "
                            // onChange={onInputChange} 
                            />
                        <div className="cut"></div>
                        <label htmlFor="password" className="placeholder">Password</label>
                    </div>
                    <button type="text" className="admin-submit" value={user} onClick={onHandleSubmit}>submit</button>
                </div>

                <button className={`public${selected ? "-inactive" : ""}`} type="submit" name="username" value="public" onClick={onPublicSubmit}>Public</button>
            </div>
        </div>
    );
};
// (e)=>(setUser(e.target.value))
export default Home;
