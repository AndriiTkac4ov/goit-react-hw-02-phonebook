// import {} from "./Filter.styled";

const Filter = ({ value, onChange }) => (
    <label>
        Find contacts by name
        <input
            type="text"
            value={value}
            onChange={onChange}
        />
    </label>
)

export default Filter;