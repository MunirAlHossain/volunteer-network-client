import React, { useContext, useEffect } from 'react';
import { useState } from 'react';
import { UserContext } from '../../App';
import MyVolunteerWorks from '../MyVolunteerWorks/MyVolunteerWorks';
import Navbar from '../NavBar/Navbar';

const MyTask = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const [myTask, setMyTask] = useState([])
    useEffect(() => {
        fetch('https://immense-sands-86087.herokuapp.com/myTasks?email=' + loggedInUser.email, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                authorization: `Bearer ${sessionStorage.getItem('token')}`
            }
        })
            .then(res => res.json())
            .then(data => setMyTask(data))
    }, [])

    return (
        <div className="container">
            <Navbar></Navbar>
            <div className="row">
                {myTask.map(taskInfo => <MyVolunteerWorks key={taskInfo._id} taskInfo={taskInfo}></MyVolunteerWorks>)}
            </div>
        </div>
    );
};

export default MyTask;