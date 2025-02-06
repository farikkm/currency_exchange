import RatesTableItem from "./RatesTableItem";

export default function RatesTable({rates}) {
    return (
        <table className="table " border="1" cellPadding="10">
            <thead>
                <tr>
                    <th scope="col">Currency</th>
                    <th scope="col">Exchange Rate</th>
                </tr>
            </thead>
            <tbody>
                {Object.entries(rates).map(([currency, rate]) => (
                    <RatesTableItem key={currency} currency={currency} rate={rate} />
                ))}
            </tbody>
        </table>
    )
}