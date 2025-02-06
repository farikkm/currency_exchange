import { useEffect, useState } from "react";
import RatesTable from "../components/home/RatesTable";
import Button from "../components/ui/Button";
import CurrencySelection from "../components/CurrencySelection";

const fetchData = async (currentCurrency) => {
    const res = await fetch(`https://v6.exchangerate-api.com/v6/a39e47460372f7242181cf03/latest/${currentCurrency ? currentCurrency : 'USD'}`)
    const data = await res.json()
    return data.conversion_rates
}

export default function Home() {
    const [rates, setRates] = useState(null)
    const [selectedCurrency, setSelectedCurrency] = useState("USD")

    async function showRates() {
        const currentRates = await fetchData(selectedCurrency);
        setRates(currentRates);
    }

    useEffect(() => {
        if (rates) console.log("Updated rates", rates);
    }, [rates])

    return (
        <main className="home main">
            <CurrencySelection
                selectedCurrency={selectedCurrency}
                setSelectedCurrency={setSelectedCurrency}
            />

            <Button onClick={showRates}> Show Rates </Button>

            {rates ? (
                <RatesTable rates={rates} />
            ) : (
                <p>No data yet!</p>
            )}
        </main>
    )
}