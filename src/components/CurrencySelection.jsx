export default function CurrencySelection({selectedCurrency, setSelectedCurrency}) {
    return (
        <select className="form-select" value={selectedCurrency} id="currency" onChange={e => setSelectedCurrency(e.target.value)}>
            <option value="USD">USD</option>
            <option value="EUR">EUR</option>
            <option value="UZS">UZS</option>
        </select>

    )
}