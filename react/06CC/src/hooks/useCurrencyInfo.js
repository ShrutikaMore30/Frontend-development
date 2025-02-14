import { useEffect, useState } from "react";

function useCurrencyInfo(currency) {
    const [data, setData] = useState({});
    
    useEffect(() => {
        async function fetchData() {
            try {
                const response = await fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json`)


                
                if (!response.ok) {
                    throw new Error(`Failed to fetch: ${response.status}`);
                }
                const result = await response.json();
                setData(result[currency]);
            } catch (error) {
                console.error("Error fetching currency data:", error);
                setData({});
            }
        }

        fetchData();
    }, [currency]);

    useEffect(() => {
        console.log("Updated Currency Data:", data);
    }, [data]); // Logs whenever `data` updates

    return data;
}

export default useCurrencyInfo;
