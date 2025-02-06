export default function RatesTableItem({ currency, rate }) {
    return (
        <tr scope="row">
            <td>{currency}</td>
            <td>{typeof rate == 'number' ? rate.toFixed(3) : "N/A"}</td>
        </tr>
    )
}