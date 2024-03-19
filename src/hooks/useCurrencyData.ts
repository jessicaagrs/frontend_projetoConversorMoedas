import { useQuery } from "@tanstack/react-query";
import { CurrencyResponse } from "@/types/currency-response";
import axios, { AxiosPromise } from "axios";

const API_URL = "https://economia.awesomeapi.com.br/json/last/USD-BRL";
const fetchData = async () : AxiosPromise<CurrencyResponse> => {
  const response = await axios.get<CurrencyResponse>(API_URL);
  return response;
};

export function  useCurrencyData() {
    const query = useQuery({
      queryFn: fetchData,
      queryKey: ["currency"],
      refetchInterval: 60 * 5 * 1000
    });

  return {
    ...query,
    data: query.data?.data,
  };
}
