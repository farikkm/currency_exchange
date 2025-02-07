import { useState, useEffect } from "react"
import CurrencySelection from "../components/CurrencySelection"
import RatesTable from "../components/home/RatesTable"
import Button from "../components/ui/Button"

const emptyData = {
    currency1: 'USD',
    currency2: 'UZS',
    amount: 1
}

const fetchData = async (currency1, currency2, amount) => {
    const res = await fetch(`https://v6.exchangerate-api.com/v6/a39e47460372f7242181cf03/pair/${currency1}/${currency2}/${amount}`)
    const data = await res.json()
    return data.conversion_result
}


export default function CurrencyExchange() {
    const [rates, setRates] = useState(null)
    const [data, setData] = useState(emptyData)

    async function sendData(e) {
        e.preventDefault()
        const exchangeResult = await fetchData(data.currency1, data.currency2, data.amount)
        setRates(exchangeResult)
        setData(emptyData)
        console.log(data, rates);
    }

    useEffect(() => {
        if (rates) console.log("Updated rates", rates);
    }, [rates])

    return (
        <main className="exchange main">
            <div className="exchage__selections">
                <CurrencySelection selectedCurrency={data.currency1} setSelectedCurrency={setData} />
                <CurrencySelection selectedCurrency={data.currency2} setSelectedCurrency={setData} />
            </div>

            <div data-mdb-input-init className="form-outline" style={{
                width: '22rem',
                marginTop: '10px'
            }}>
                <label className="form-label" htmlFor="typeNumber">Number input</label>
                <input
                    min={emptyData.amount}
                    max="100000"
                    value={data.amount}
                    type="number"
                    id="typeNumber"
                    name="exchane-amount"
                    className="form-control"
                    onChange={e => {
                        const newValue = Math.max(1, Number(e.target.value)); // Запрещаем отрицательные и нулевые числа
                        setData(prev => ({ ...prev, amount: newValue }));
                    }}
                />

                <Button onClick={sendData}>Exchange</Button>
            </div>

            <table className="table " border="1" cellPadding="10">
                <thead>
                    <tr>
                        <th scope="col">Currency 1</th>
                        <th scope="col">Currency 2</th>
                        <th scope="col">Amount</th>
                        <th scope="col">Exchange Result</th>
                    </tr>
                </thead>
                <tbody>
                    <tr scope="row">
                        <td>{data.currency1}</td>
                        <td>{data.currency2}</td>
                        <td>{data.amount}</td>
                        <td>{rates ? rates : 'N/A'}</td>
                    </tr>
                </tbody>
            </table>
        </main>
    )
}