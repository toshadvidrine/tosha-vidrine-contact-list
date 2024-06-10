import React from "react";
import { Link } from "react-router-dom";

export const Home = () => (
    <div className="text-center mt-5">
        <h1>Hello Rigo!</h1>
        <Link to="/add">
            <button className="btn btn-primary">Add New Contact</button>
        </Link>
        <Link to="/contacts">
            <button className="btn btn-secondary">View Contacts</button>
        </Link>
    </div>
);
