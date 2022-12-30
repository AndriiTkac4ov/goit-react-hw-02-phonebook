import PropTypes from 'prop-types';
import { ContactsItem, ContactName, ButtonDeleting } from "./ContactItem.styled";

export default function ContactItem({ id, name, number, onDelete }) {
    return (
        <ContactsItem>
            <ContactName>{name}: {number}</ContactName>
            <ButtonDeleting type="button" onClick={() => {onDelete(id)}}>Delete</ButtonDeleting>
        </ContactsItem>
    )
}

ContactItem.propTypes = {
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
    onDelete: PropTypes.func.isRequired,
}