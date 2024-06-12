import React, { useContext, useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Context } from '../store/appContext';

export const AddContact = () => {
    const { store, actions } = useContext(Context);
    const [contact, setContact] = useState({ full_name: '', email: '', agenda_slug: 'my_agenda', address: '', phone: '' });
    const navigate = useNavigate();
    const { id } = useParams();

    useEffect(() => {
        if (id) {
            const contactToEdit = store.contacts.find(c => c.id === parseInt(id));
            if (contactToEdit) {
                setContact(contactToEdit);
            }
        }
    }, [id, store.contacts]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setContact({ ...contact, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (id) {
            actions.updateContact(contact, navigate);
        } else {
            actions.addContact(contact, navigate);
        }
    };

    return (
        <div className="container">
            <h1>{id ? 'Edit' : 'Add'} Contact</h1>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label>Full Name</label>
                    <input type="text" name="full_name" value={contact.full_name} onChange={handleChange} className="form-control" required />
                </div>
                <div className="form-group">
                    <label>Email</label>
                    <input type="email" name="email" value={contact.email} onChange={handleChange} className="form-control" required />
                </div>
                <div className="form-group">
                    <label>Address</label>
                    <input type="text" name="address" value={contact.address} onChange={handleChange} className="form-control" required />
                </div>
                <div className="form-group">
                    <label>Phone</label>
                    <input type="tel" name="phone" value={contact.phone} onChange={handleChange} className="form-control" required />
                </div>
                <button type="submit" className="btn btn-primary">{id ? 'Update' : 'Add'} Contact</button>
            </form>
        </div>
    );
};
