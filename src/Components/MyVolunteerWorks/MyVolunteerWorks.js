import React from 'react';
import './MyVolunteerWorks.css'

const MyVolunteerWorks = ({ taskInfo }) => {
    const handleDelete = (id) => {
        fetch(`https://immense-sands-86087.herokuapp.com/delete/${taskInfo._id}`,{
            method: 'DELETE',
        })
        .then(res => res.json)
        .then(result => {
            // console.log('deleted successfully');
        })
    }
    return (
        <div className="col-md-6">
            <div className="card" style={{width: "18rem"}}>
                <img src={require(`../../assests/images/refuseShelter.png`)} className="card-img-top" alt="..."></img>
                <div className="card-body">
                    <h5 className="card-title">{taskInfo.taskName}</h5>
                    <p className="card-text">{taskInfo.date}</p>
                    <img className="w-25" src="../../assests/logos/trash-2 9.png" alt=""></img>
                    <button onClick={()=>handleDelete(`${taskInfo._id}`)}>Delete</button>
                </div>
            </div>
        </div>
    );
};

export default MyVolunteerWorks;