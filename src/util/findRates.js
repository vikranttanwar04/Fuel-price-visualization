export default function findRates(data, month) {

    // data of each date of that month
    const monthData = data.filter((el) => el.Month.includes(month));

    // average of the month (sum of the rate of each date of the month / total days)
    const averageRate = monthData?.reduce((acc, el, index, array) => {
        acc += el['Retail Selling Price (Rsp) Of Petrol And Diesel (UOM:INR/L(IndianRupeesperLitre)), Scaling Factor:1'];
        if (index === array.length - 1) {
            return acc / array.length;
        }
        return acc;
    }, 0);

    if (averageRate) {
        return averageRate
    } else {
        return 0
    }
}