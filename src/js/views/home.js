import React from "react";
import { Link } from "react-router-dom";

export const Home = () => (
    <div className="text-center mt-5">
     
        <Link to="/add">
            <button className="btn btn-primary">Add New Contact</button>
        </Link>
        <div className="container">
            <h1>Contact List</h1>
            <div className="row">
                {store.contacts.map((contact) => (
                    <div className="col-md-4" key={contact.id}>
                        <ContactCard contact={contact} />
                    </div>
                ))}
            </div>
        </div> 
    </div>
);
