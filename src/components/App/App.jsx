import React from "react";
import { nanoid } from "nanoid";


import Title from "../Title/Title";
import Form from "../Form/Form";
import Contacts from "../Contacts/Contacts";
import Filter from "../Filter/Filter";



class App extends React.Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: ''
  }

  formSubmitHandler = data => {
    console.log(data)

    let currentContact = this.state.contacts.map(contact => contact.name.toLowerCase())
    
    let setNewContact = { id: nanoid(10), ...data }

    if (currentContact.includes(data.name.toLowerCase())) {
      alert(`${data.name} is already in your contacts`)
    } else {
      this.setState(({ contacts }) => ({
        contacts: [setNewContact, ...contacts],
      }))
    }
  }

  changeFilterHandler = event => {
    this.setState({ filter: event.currentTarget.value })
  }

  getVisibleFilter = () => {
    const { filter, contacts } = this.state
    const normalizedFilter = filter.toLowerCase()

    return contacts.filter(contact => (contact.name.toLowerCase().includes(normalizedFilter)))
  }

  getDeleteElement = (idElem) => {
    this.setState(prevState => ({
    contacts: prevState.contacts.filter(contact => contact.id !== idElem),
  }));
  } 
  

  render() {
    const { filter } = this.state
    const visibleFilter = this.getVisibleFilter()
    const deleteElement = this.getDeleteElement(idElem)

    return (
      <section>
        <Title title='Phonebook' />
        <Form onSubmit={this.formSubmitHandler} />
        <Title title='Contacts' />
        <Filter filter={filter} onChange={this.changeFilterHandler}/>
        <Contacts contacts={visibleFilter} deleteElement={deleteElement}/> 
      </section>
    )
  }
}

export default App;
