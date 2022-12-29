import PropTypes from 'prop-types';
import ContactItem from '../ContactItem/ContactItem';

export default function ContactList({ contacts }) {
    return (
        <ul>
            {contacts.map(({ id, name, number }) => (
                <ContactItem
                    key={id}
                    name={name}
                    number={number} 
                />
            ))}
        </ul>
    )
}

ContactList.propTypes = {
    contacts: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
        }).isRequired
    ).isRequired
}