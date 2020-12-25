import React, { useContext } from 'react';
import './VolunteerList.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTable, faTrash } from '@fortawesome/free-solid-svg-icons'
import { UserContext } from '../../App';

const AllUsersData = ({ user }) => {

    const [loggedInUser, setLoggedInUser] = useContext(UserContext)

    const handleAdminDelete = (id) => {
        fetch(`https://immense-sands-86087.herokuapp.com/delete/${user._id}`, {
            method: 'DELETE',
        })
            .then(res => res.json)
            .then(result => {
                
            })
    }

    return (
        <div>
            <div className="row">
                <div className="col-md-2">
                    <p>{user.fullName}</p>
                </div>
                <div className="col-md-2">
                    <p>{user.email}</p>
                </div>
                <div className="col-md-2">
                    <p className="ml-5">{user.date}</p>
                </div>
                <div className="col-md-2">
                    <p>{user.taskName}</p>
                </div>
                <div className="col-md-2">
                    <p>{user.role}</p>
                </div>
                <div className="col-md-2">
                    <button onClick={() => handleAdminDelete(`${user._id}`)}>
                        <FontAwesomeIcon icon={faTrash} />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default AllUsersData;