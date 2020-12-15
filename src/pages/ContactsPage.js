import {useState} from 'react'

export default function Contacts() {

    const [contacts] = useState([
        {
            source: 'GitHub', value: 'https://github.com/dmitriyakkerman'
        },
        {
            source: 'Telegram', value: 'https://t.me/mickyholbrook'
        },
        {
            source: 'Instagram', value: 'https://www.instagram.com/michaelholbrook'
        },
        {
            source: 'dmitriyakkerman@gmail.com', value: 'mailto:dmitriyakkerman@gmail.com'
        }
    ])

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