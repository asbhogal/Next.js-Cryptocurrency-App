'use client';

import { useGetCryptoFullListQuery } from "../services/cryptoApi.js";
import { Chart } from "react-chartjs-2";
import { Line } from "react-chartjs-2";

/* const CurrencyLineChart = () => {

    const   { data, isFetching } = useGetCryptoFullListQuery();
    const   lineData = data?.data?.coins.map((test) => (test.sparkline));

    const chartData = {
        datasets: []
    }

    console.log(lineData)
    
  return (
    <Line>CurrencyLineChart</Line>
  )
};

export default CurrencyLineChart; */