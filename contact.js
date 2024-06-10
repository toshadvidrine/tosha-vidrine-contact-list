import React, { useContext, useEffect } from "react";
import { Context } from "../store/appContext";
import ContactCard from "../component/ContactCard";

export const Contact = () => {
    const { store, actions } = useContext(Context);

    useEffect(() => {
        actions.fetchContacts();
    }, [actions]);

    return (
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
    );
};
