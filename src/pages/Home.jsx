import { useFilter } from '../context/filterContext';
import data from './../data/data'
import findRates from '../util/findRates';
import Filter from '../components/Filter/Filter';
import Graph from '../components/graph/Graph';
import './Home.css';

export default function Home() {

  const { filterValues, setFilterValues } = useFilter();

  // Fetching the data of selected city from dataset
  const FilterByCity = data.filter((el) => el["Metro Cities"] === filterValues.city);

  // Fetching the data of selected fuel from selected city
  const FilterByFuel = FilterByCity?.filter((el) => el.Products === filterValues.fuel);

  // Fetching the data of selected year wtih selected fuel from selected city
  const FilterByYear = FilterByFuel?.filter((el) => el.Year.includes(filterValues.year));

  // Getting each month's RSP of selected year with matching fuel and city
  const jan = findRates(FilterByYear, 'January');
  const feb = findRates(FilterByYear, 'February');
  const mar = findRates(FilterByYear, 'March');
  const apr = findRates(FilterByYear, 'April');
  const may = findRates(FilterByYear, 'May');
  const jun = findRates(FilterByYear, 'June');
  const jul = findRates(FilterByYear, 'July');
  const aug = findRates(FilterByYear, 'August');
  const sep = findRates(FilterByYear, 'September');
  const oct = findRates(FilterByYear, 'October');
  const nov = findRates(FilterByYear, 'November');
  const dec = findRates(FilterByYear, 'December');

  // Storing each month's RSP in a single object to pass in a component
  const allMonths = {
    jan: jan,
    feb: feb,
    mar: mar,
    apr: apr,
    may: may,
    jun: jun,
    jul: jul,
    aug: aug,
    sep: sep,
    oct: oct,
    nov: nov,
    dec: dec
  }

  return (
    <div id='home-container'>
      <h1>Retail Selling Price (RSP) of Petrol and Diesel in Metro Cities</h1>
      <Filter />
      <main>
        <Graph allMonths={allMonths} />
        <h2>Monthly Average RSP</h2>
      </main>
    </div>
  )
}