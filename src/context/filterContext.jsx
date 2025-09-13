import { createContext, useContext, useState } from "react";

const FilterContext = createContext();

const FilterProvider = ({ children }) => {

    // Starting(Default) Values for Filter
    const [filterValues, setFilterValues] = useState({
        city: "Delhi",
        fuel: "Petrol",
        year: "2025"
    })

    return (
        <FilterContext.Provider value={{filterValues, setFilterValues}}>
            { children }
        </FilterContext.Provider>
    )
}

const useFilter = () => useContext(FilterContext);

export { FilterProvider, useFilter };