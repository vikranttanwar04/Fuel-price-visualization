import { useFilter } from "../../context/filterContext";


export default function Years() {

    const {filterValues, setFilterValues} = useFilter();

    const onYearChange = (event) => {
        setFilterValues((prev) => ({...prev, [event.target.name] : event.target.value}))
    }

    return (
        <div>
            <label htmlFor="year-filter">year: </label>
            <select onChange={onYearChange} id="year-filter" name="year" className="filter-spacing">
                <option value="2025">2025</option>
                <option value="2024">2024</option>
                <option value="2023">2023</option>
                <option value="2022">2022</option>
                <option value="2021">2021</option>
                <option value="2020">2020</option>
                <option value="2019">2019</option>
                <option value="2018">2018</option>
                <option value="2017">2017</option>
            </select>
        </div>
    )
}