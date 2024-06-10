const getState = ({ getStore, getActions, setStore }) => {
    return {
        store: {
            contacts: []
        },
        actions: {
            fetchContacts: async () => {
                try {
                    const response = await fetch('https://playground.4geeks.com/apis/fake/contact/');
                    const data = await response.json();
                    setStore({ contacts: data });
                } catch (error) {
                    console.error('Error fetching contacts:', error);
                }
            },
            addContact: async (contact, history) => {
                try {
                    await fetch('https://playground.4geeks.com/apis/fake/contact/', {
                        method: 'POST',
                        headers: { 'Content-Type': 'application/json' },
                        body: JSON.stringify(contact)
                    });
                    getActions().fetchContacts();
                    history.push('/');
                } catch (error) {
                    console.error('Error adding contact:', error);
                }
            },
            updateContact: async (contact, history) => {
                try {
                    await fetch(`https://playground.4geeks.com/apis/fake/contact/${contact.id}`, {
                        method: 'PUT',
                        headers: { 'Content-Type': 'application/json' },
                        body: JSON.stringify(contact)
                    });
                    getActions().fetchContacts();
                    history.push('/');
                } catch (error) {
                    console.error('Error updating contact:', error);
                }
            },
            deleteContact: async (id) => {
                try {
                    await fetch(`https://playground.4geeks.com/apis/fake/contact/${id}`, {
                        method: 'DELETE'
                    });
                    getActions().fetchContacts();
                } catch (error) {
                    console.error('Error deleting contact:', error);
                }
            },
            editContact: (id, history) => {
                history.push(`/edit/${id}`);
            }
        }
    };
};

export default getState;
