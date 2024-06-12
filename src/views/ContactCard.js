import React, { useContext } from 'react';
import { Context } from '../store/appContext';

const ContactCard = ({ contact }) => {
    const { actions } = useContext(Context);

    const handleDelete = () => {
        if (window.confirm('Are you sure you want to delete this contact?')) {
            actions.deleteContact(contact.id);
        }
    };

    return (
        <div className="card">
            <div className="card-body">
                <h5 className="card-title">{contact.full_name}</h5>
                <p className="card-text">{contact.email}</p>
                <p className="card-text">{contact.address}</p>
                <p className="card-text">{contact.phone}</p>
                <button className="btn btn-danger" onClick={handleDelete}>Delete</button>
                <button className="btn btn-primary" onClick={() => actions.editContact(contact.id)}>Edit</button>
            </div>
        </div>
    );
};

export default ContactCard;
