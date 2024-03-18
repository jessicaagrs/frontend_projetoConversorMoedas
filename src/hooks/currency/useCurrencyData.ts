import { queryOptions, useQuery } from "@tanstack/react-query";
import axios from "axios";
import { CurrencyReponse } from "@/types/currency-response";

const API_URL = "https://economia.awesomeapi.com.br/json/last/USD-BRL";
const fetchData = async () : Promise<CurrencyReponse>  => {
  const response = await axios.get<CurrencyReponse>(API_URL);
  return response.data;
};

export function useCurrencyData() {
  const query = useQuery({
    queryFn: fetchData,
    queryKey: ["currency"],
    refetchInterval: 60 * 5 * 1000
  });


  return query;
}
