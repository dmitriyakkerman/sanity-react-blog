import {useState} from 'react'

export default function Contacts() {

    const [contacts] = useState([])

    return(
        <div className="rcb-contacts">
            <div className="container">
                <h2 className="title">Contacts</h2>
                <ul>
                    {
                        contacts.map(function (contact, index) {
                            return(
                                <li key={index}>
                                    <a href={contact.value}>{contact.source}</a>
                                </li>
                            )
                        })
                    }
                </ul>
            </div>
        </div>
    )
}