export const fetchRate = async () =>  {
    try {
        const response = await fetch('https://api.exchangeratesapi.io/latest?symbols=HRK');
        const json = await response.json();
        return json.rates.HRK;
    }
    catch {
        return 7.5
    }
}

export const format = (value, rate) => {
    if (!value.includes("€"))
        return ""
    const cleanValue = parseFloat(value.split("€")[0]) * rate
    const formatted = cleanValue.toString().replace(".",",")
    return `${formatted} Kn `
}
