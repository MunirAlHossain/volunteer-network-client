import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../App';
import Navbar from '../NavBar/Navbar';
import VolunteerList from '../VolunteerList/VolunteerList'
import './AdminDashBoard.css'

const AdminDashBoard = () => {
    const [allUsersTask, setAllUsersTask] = useState([])
    const [admin, setAdmin] = useState([])
    const [loggedInUser, setLoggedInUser] = useContext(UserContext)

    useEffect(() => {
        if (loggedInUser.adminLogin) {
            fetch('https://immense-sands-86087.herokuapp.com/admin')
                .then(res => res.json())
                .then(data => {
                    setAdmin(data)
                })
        }
    }, [])

    const adminEmail = admin.find(email => email.email === loggedInUser.email)

    useEffect(() => {
        if (loggedInUser.adminLogin) {
            fetch('https://immense-sands-86087.herokuapp.com/allData')
                .then(res => res.json())
                .then(data => {
                    setAllUsersTask(data)
                })
        }
    }, [])

    return (
        <div className="container">
            <Navbar className="mb-5"></Navbar>
            {adminEmail &&
                <div>
                    <button className="btn btn-primary mt-5">Add Events</button>

                    <div className="row mb-3 mt-5 pt-5">
                        <div className="col-md-2">
                            <p>Name</p>
                        </div>
                        <div className="col-md-2">
                            <p>Email Id</p>
                        </div>
                        <div className="col-md-2">
                            <p className="ml-5">Registration Date</p>
                        </div>
                        <div className="col-md-2">
                            <p>Volunteer Works</p>
                        </div>
                        <div className="col-md-2">
                            <p>Role</p>
                        </div>
                        <div className="col-md-2">
                            <p>Action</p>
                        </div>
                    </div>
                </div>
            }
            {adminEmail && allUsersTask.map((user) =>
                <VolunteerList key={user._id} user={user}></VolunteerList>
            )}

        </div>
    );
};

export default AdminDashBoard;