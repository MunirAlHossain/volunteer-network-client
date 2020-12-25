import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { useParams } from "react-router-dom";
import { UserContext } from "../../App";
import './RegistrationForm.css'
import { Redirect } from 'react-router-dom'
import { useState } from "react";
import Navbar from "../NavBar/Navbar";

export default function App() {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext)
    const date = new Date();
    const { task } = useParams()

    const { register, handleSubmit, watch, errors } = useForm();
    const onSubmit = (data) => {
        data.role = "user"
        fetch('https://immense-sands-86087.herokuapp.com/addUsersTask', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(data => {
                // console.log(data)
            })
    };

    return (
        <div>
            <Navbar></Navbar>
            <form className="register-form container row d-flex justify-content-center align-items-center" onSubmit={handleSubmit(onSubmit)}>
                <h3 className="text-center mb-5">Register As Volunteer</h3>
                <input className="m-2" name="fullName" defaultValue={loggedInUser.name} ref={register({ required: true })} />
                <input className="m-2" name="email" defaultValue={loggedInUser.email} ref={register({ required: true })} />
                <input className="m-2" type='date' name="date" defaultValue={date.toDateString('dd/MM/yyyy')} ref={register({ required: true })} />
                <input className="m-2" name="description" defaultValue="Description" ref={register({ required: true })} />
                <input className="m-2" name="taskName" defaultValue={task} ref={register({ required: true })} />
                {errors.exampleRequired && <span>This field is required</span>}
                <input className="m-2" type="submit" value="Registration" />
            </form>
        </div>

    );
}