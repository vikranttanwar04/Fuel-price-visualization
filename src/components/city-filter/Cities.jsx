import { useFilter } from "../../context/filterContext";


export default function Cities() {

    const {filterValues, setFilterValues} = useFilter();

    const onCityChange = (event) => {
        setFilterValues((prev) => ({...prev, [event.target.name] : event.target.value}))
    }

    return (
        <div>
            <label htmlFor="city-select">metro city: </label>
            <select onChange={onCityChange} id="city-select" name="city" className="filter-spacing">
                <option value="Delhi">Delhi</option>
                <option value="Mumbai">Mumbai</option>
                <option value="Kolkata">Kolkata</option>
                <option value="Chennai">Chennai</option>
            </select>
        </div>
    )
}