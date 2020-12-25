import React, { useEffect } from 'react';
import { useState } from 'react';
import Navbar from '../NavBar/Navbar';
import SingleTask from '../SingleTask/SingleTask';

const Home = () => {
    const [tasks, setTasks] = useState([])
    useEffect(() => {
        fetch('https://immense-sands-86087.herokuapp.com/volunteerTasks')
            .then(res => res.json())
            .then(data => setTasks(data))
    }, [])
    return (
        <div className="container">
            <Navbar></Navbar>
            <h2 className="text-center mt-4 mb-5">I grow by helping people in need</h2>
            <div>
                <form className="form-inline d-flex justify-content-center mb-3">
                    <div className="form-group mx-sm-3 mb-2">
                        <input type="text" className="form-control" id="search" placeholder="Search..."></input>
                    </div>
                    <button type="submit" className="btn btn-primary mb-2">Search</button>
                </form>
            </div>
            <div className="row mt-5">
                {tasks.map(task => <SingleTask key={task._id} task={task}></SingleTask>)}
            </div>
        </div>
    );
};

export default Home;