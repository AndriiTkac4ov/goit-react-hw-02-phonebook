import PropTypes from 'prop-types';
import ContactItem from '../ContactItem/ContactItem';

export default function ContactList({ contacts, onDelete }) {
    return (
        <ul>
            {contacts.map(({ id, name, number }) => (
                <ContactItem
                    key={id}
                    id={id}
                    name={name}
                    number={number}
                    onDelete={onDelete}
                />
            ))}
        </ul>
    )
}

ContactList.propTypes = {
    contacts: PropTypes.arrayOf(
        PropTypes.shape().isRequired
    ).isRequired
}