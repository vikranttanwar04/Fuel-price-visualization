import Cities from '../city-filter/Cities';
import FuelType from '../fuelType-filter/fuelType';
import Years from '../year-filter/Years';

export default function Filter() {

    // Styling for the filter-container that is containing all filters (City, Fuel, years)
    const style = {
        width: 'fit-content',       // so that the filter-container can come in center
        padding: '1rem',
        display: 'flex',
        alignItems: 'center',
        gap: '0.8rem',
        flexWrap: 'wrap',
        margin:'0 auto'
    }

    return (
        <div id="filter-container" style={style}>
            <Cities />
            <FuelType />
            <Years />
        </div>
    )
}