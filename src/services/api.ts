import axios from "axios";

const URL = "https://api.twelvedata.com/";
const API_KEY = "f7584ca9d4814bad81498624f1e25ea5";

export interface StockData {
  symbol: string;
  high: string;
  low: string;
  close: string;
  percent_change: string;
  name: string;
  status?: string;
}

type Entry = { [s: string]: unknown } | ArrayLike<unknown> | StockData;

/**
 * This function takes an object where each entry represents a stock. 
 * It produce an array of `StockData` objects and throws an error if a property contains `code`
 * 
 * @param {Entry} result - The input object where property is an entry that represents stock data
 * @returns {StockData[]} An array of `StockData` objects 
 * @throws {Error} Throws an error if any entry contains `code` property
 */
const formatResult = (result: Entry): StockData[] => {
  return Object.entries(result).map(([_, value]): StockData => {
    if (value.hasOwnProperty("code")) {
      throw new Error("Error");
    } else {
      return {
        ...value,
      };
    }
  });
};

export const getStockData = async (symbol: string) => {
  try {
    const response = await axios.get(
      `${URL}quote?symbol=${symbol}&apikey=${API_KEY}`
    );
    const result: StockData = response.data;

    if (response.status === 200) {
      if (result.hasOwnProperty("status")) {
        throw new Error("error");
      }

      const splittedSymbol = symbol.split(","); // splits the symbol into array
      if (splittedSymbol.length === 1) { //
        return [result];
      } else {
        return formatResult(result);
      }
    }
  } catch (e) {
    throw new Error((e as Error).message);
  }
};
