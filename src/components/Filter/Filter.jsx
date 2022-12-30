import { FilterLabel, FilterInput } from "./Filter.styled";

const Filter = ({ value, onChange }) => (
    <FilterLabel>
        Find contacts by name
        <FilterInput
            type="text"
            value={value}
            onChange={onChange}
        />
    </FilterLabel>
)

export default Filter;