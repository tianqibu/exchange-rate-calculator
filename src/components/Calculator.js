const Calculator = ({ 
    currencyOptions, 
    onToCurrencyChange,
    onFromCurrencyChange,
    onAmountToConvertChange,
    onSubmit,
    convertedAmount
    }) => {

    return (
        <div>
            <form className="calculator-form" onSubmit={onSubmit}>
            <div className='form-control'>
                    <label>From</label>
                    <select 
                        onChange={(e) => onFromCurrencyChange(e.target.value)}>
                            <option></option>
                            { currencyOptions.map(option => (
                                <option key={option} value={option}>{ option }</option>
                            ))}
                    </select>
                </div>
                <div className='form-control'>
                    <label>Enter amount to convert</label>
                    <input 
                        type='number'
                        onChange={(e) => onAmountToConvertChange(e.target.value)}
                    />
                </div>
                <div className='form-control'>
                    <label>To</label>
                    <select 
                        onChange={(e) => onToCurrencyChange(e.target.value)}>
                            <option></option>
                            { currencyOptions.map((option) => (
                                <option key={option} value={option}>{ option }</option>
                            ))}
                    </select>
                </div>
                <div className='form-control'>
                    <label>Converted amount</label>
                    <input 
                        readOnly
                        type='number' 
                        value={convertedAmount}
                    />
                </div>
                <input type='submit' value='Convert' className='btn btn-block' />
            </form>
        </div>
    )
}

export default Calculator
