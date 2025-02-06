import { useEffect, useState } from "react";
import Header from "./components/Header";

const fetchData = async () => {
  const res = await fetch('https://v6.exchangerate-api.com/v6/a39e47460372f7242181cf03/latest/USD')
  const data = await res.json()
  return data
}

export default function App() {
  const [rates, setRates] = useState(null)

  async function showCurrency() {
    const currency = await fetchData();
    setRates(currency);
  }

  useEffect(() => {
    if (rates) console.log("Updated rates", rates);
  }, [rates])

  return (
    <>
      <div className="wrapper">
        <div className="page__container">
          <Header />

          <button onClick={showCurrency}>Show Currency Exchange</button>

          {rates ? (
            <pre>{JSON.stringify(rates, null, 2)}</pre>
          ) : (
            <p>No data yet!</p>
          )}
        </div>
      </div>
    </>
  );
}
