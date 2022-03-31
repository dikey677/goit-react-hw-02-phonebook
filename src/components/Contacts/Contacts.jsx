import React from "react";

const Contacts = ({ contacts, deleteElement }) => {
    return (
            <div>
                <ul>
                    {contacts.map(contact => {
                        return (
                            <li key={contact.id}>
                                <p>{`${contact.name}: ${contact.number}`}</p>
                                <button type="button" onClick={deleteElement(contact.id)}>Delete</button>
                            </li>
                        )
                    })}
                </ul>
            </div>
    );
}

export default Contacts

