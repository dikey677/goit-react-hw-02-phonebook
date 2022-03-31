import React from "react";
import {Label,Ul,Input,Box,Button} from "../Contacts/Contacts.styled"

const Contacts = ({ contacts }) => {
    return (
            <Box>
                <Ul>
                    {contacts.map(contact => {
                        return (
                            <li key={contact.id}>
                                <Label>
                                    <Input type="checkbox" />
                                     <p>{`${contact.name}: ${contact.number}`}</p>
                                   
                                </Label>
                            </li>
                        )
                    })}
                </Ul>
                
                <Button type="button">Delete</Button>  
            </Box>
    );
}

export default Contacts

