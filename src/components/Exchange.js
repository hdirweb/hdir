export const fetchRate = async () =>  {
    try {
        const response = await fetch('https://api.ratesapi.io/api/latest?symbols=HRK');
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
    let formatted = parseFloat(value.split("€")[0]) * rate
    formatted = Math.round(formatted * 100) / 100
    formatted = formatted.toString().replace(".",",")
    formatted = !formatted.includes(",") ? formatted + ",00" : formatted
    formatted = formatted.split(',')[1] && formatted.split(',')[1].length === 1 ? formatted + "0" : formatted;
    return `${formatted} Kn `
}
