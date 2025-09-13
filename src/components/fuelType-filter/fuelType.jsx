import { useFilter } from "../../context/filterContext";


export default function FuelType() {

    const {filterValues, setFilterValues} = useFilter();

    const onFuelChange = (event) => {
        setFilterValues((prev) => ({...prev, [event.target.name] : event.target.value}))
    }

    return (
        <div>
            <label htmlFor="fuel-select">fuel: </label>
            <select onChange={onFuelChange} id="fuel-select" name="fuel" className="filter-spacing">
                <option value="Petrol">Petrol</option>
                <option value="Diesel">Diesel</option>
            </select>
        </div>
    )
}