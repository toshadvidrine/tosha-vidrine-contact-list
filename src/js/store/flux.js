const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: {
      contacts: [],
    },
    actions: {
      fetchContacts: async () => {
        try {
          const response = await fetch(
            "https://playground.4geeks.com/contact/agendas/tosha_vidrine"
          );
          const data = await response.json();
          setStore({ contacts: data });
        } catch (error) {
          console.error("Error fetching contacts:", error);
        }
      },
      addContact: async (contact, navigate) => {
        try {
          await fetch(
            "https://playground.4geeks.com/contact/agendas/tosha_vidrine",
            {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify(contact),
            }
          );
          getActions().fetchContacts();
          navigate.push("/");
        } catch (error) {
          console.error("Error adding contact:", error);
        }
      },
      updateContact: async (contact, navigate) => {
        try {
          await fetch(
            `https://playground.4geeks.com/contact/agendas/tosha_vidrine'${contact.id}`,
            {
              method: "PUT",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify(contact),
            }
          );
          getActions().fetchContacts();
          navigate.push("/");
        } catch (error) {
          console.error("Error updating contact:", error);
        }
      },
      deleteContact: async (id) => {
        try {
          await fetch(
            `https://playground.4geeks.com/contact/agendas/tosha_vidrine'${id}`,
            {
              method: "DELETE",
            }
          );
          getActions().fetchContacts();
        } catch (error) {
          console.error("Error deleting contact:", error);
        }
      },
      editContact: (id, navigate) => {
        navigate.push(`/edit/${id}`);
      },
    },
  };
};

export default getState;
