import React from 'react';
import { Link } from 'react-router-dom';
import './SingleTask.css'

const SingleTask = ({ task }) => {
    return (
        <div className="col-md-3 singleCard">
            <div className="card" style={{ width: '18rem' }}>
                <Link to={`/registration/${task.taskName}`}>
                    <img src={require(`../../assests/images/${task.imageName}`)} className="card-img-top" alt="..."></img>
                </Link>
                <div className="card-footer">
                    <h5>{task.taskName}</h5>
                </div>
            </div>
        </div>
    );
};

export default SingleTask;