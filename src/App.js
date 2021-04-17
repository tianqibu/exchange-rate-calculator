import { useState, useEffect } from 'react'
import Header from './components/Header'
import Calculator from './components/Calculator'

const API_KEY = process.env.REACT_APP_API_KEY;

function App() {
  const [currencyOptions, setCurrencyOptions] = useState([]);
  const [toCurrency, setToCurrency] = useState('');
  const [fromCurrency, setFromCurrency] = useState('');
  const [amountToConvert, setAmountToConvert] = useState('');
  const [convertedAmount, setConvertedAmount] = useState('');
  const [exchangeRate, setExchangeRate] = useState('');

   useEffect(() => {
    // Fetch currency options
    const fetchCurrencyOptions = async () => {
    const res = await fetch(`https://v6.exchangerate-api.com/v6/${API_KEY}/latest/GBP`)
    const data = await res.json()
    setCurrencyOptions([...Object.keys(data.conversion_rates)])
    return data
    }

    fetchCurrencyOptions()

  }, [])

  const onSubmit = async (e) => {

    e.preventDefault()

    const convertCurrency = async () => {

    // Fetch exchange rates
    const response = await fetch(`https://v6.exchangerate-api.com/v6/${API_KEY}/latest/${fromCurrency}`)
    const data = await response.json()
    setExchangeRate(data.conversion_rates[toCurrency])
    console.log(`The exchange rate from ${fromCurrency} to ${toCurrency} is ${data.conversion_rates[toCurrency]}`)

    // Calculate converted amount
    const calculatedAmount = data.conversion_rates[toCurrency] * amountToConvert
    setConvertedAmount(calculatedAmount)
    return
    }

    convertCurrency()
  }

  return (
    <div className="container">
      <Header />
      <Calculator 
        currencyOptions={currencyOptions}
        onToCurrencyChange={value => setToCurrency(value)}
        onFromCurrencyChange={value => setFromCurrency(value)}
        onAmountToConvertChange={value => setAmountToConvert(value)}
        onSubmit={onSubmit}
        convertedAmount={convertedAmount}
        />
    </div>
  );
}

export default App;
