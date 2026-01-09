import { use, useEffect, useState } from "react";

//custom hook to fetch currency info
function useCurrencyInfo(currency) {
    const [currencyInfo, setCurrencyInfo] = useState({});

    useEffect(() => {
        fetch(`https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json`)
            .then((res) => res.json())
            .then((result) => {
                setCurrencyInfo(result[currency]);
            })
            .catch((error) => {
                console.error("Error fetching currency data:", error);
            });
    }, [currency]);
    return currencyInfo;
}

export default useCurrencyInfo;