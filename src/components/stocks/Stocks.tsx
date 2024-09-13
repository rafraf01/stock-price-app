import { useState } from "react";
import { getStockData, StockData } from "../../services/api";
import { useQuery } from "@tanstack/react-query";
import SearchFilter from "../search-filter/SearchFilter";
import { useDebounce } from "../../hooks/useDebounce";
import ErrorPage from "../error/ErrorPage";
import classNames from "classnames";
import { FaCaretDown, FaCaretUp } from "react-icons/fa6";

const Stocks = () => {
  const [searchString, setSearchString] = useState("");
  const debounceSearch = useDebounce(searchString, 800);
  const {
    data: stocks = [],
    error,
    isLoading,
  } = useQuery({
    queryKey: ["stocks", debounceSearch],
    queryFn: () => getStockData(debounceSearch),
    enabled: !!debounceSearch,
  });

  /**
   * This function handles input change and sets the state based on the input value
   * @param value - the value of the search input
   */
  const handleInputChange = (value: string) => {
    setSearchString(value.toUpperCase());
  };

  /**
   * This function takes a string input and checks if the parameter passed is a negative number
   * @param value - The string input to be converted to a number
   * @returns A boolean value true or false
   */
  const isNegative = (value: string) => {
    return Number(value) < 0;
  };

  /**
   * This function takes a string input, parse to float number and format to two decimal places
   * @param value - The string to be converted and formatted.
   * @returns A string with float number formatted to two decimal places.
   */
  const floatValue = (value: string) => {
    return parseFloat(value).toFixed(2);
  };

  return (
    <section>
      <SearchFilter onchange={handleInputChange} value={searchString} />
      {isLoading && (
        <div className="text-sm font-urbanist text-center">Loading...</div>
      )}
      {error && <ErrorPage />}
      {stocks &&
        stocks.map((p: StockData, index) => {
          return (
            <article
              key={`${index}-${p.name}`}
              className="flex gap-8 md:gap-0 border py-2 px-5 mt-5 rounded-md items-center font-urbanist shadow-md"
            >
              <div className="flex flex-col items-start flex-1 w-full">
                <p className="font-bold text-lg">{p.symbol}</p>
                <span className="text-xs text-gray-600">{p.name}</span>
              </div>
              <div className="flex flex-col basis-1/12 items-center">
                <p className="text-sm">{parseFloat(p.high).toFixed(2)}</p>
                <span className="text-xs text-gray-600 flex items-center gap-0.5">
                  <FaCaretUp />
                  high
                </span>
              </div>
              <div className="flex flex-col basis-1/12 items-center">
                <p className="text-sm">{parseFloat(p.low).toFixed(2)}</p>
                <span className="text-xs text-gray-600 flex gap-0.5 items-center">
                  <FaCaretDown />
                  low
                </span>
              </div>
              <div className="flex flex-col text-center basis-1/12">
                <p
                  className={classNames("text-sm", {
                    "bg-red-500 text-white rounded-md": isNegative(
                      p.percent_change
                    ),
                    "bg-green-600 text-white rounded-md": !isNegative(
                      p.percent_change
                    ),
                  })}
                >
                  {isNegative(p.percent_change)
                    ? floatValue(p.percent_change)
                    : `+${floatValue(p.percent_change)}`}
                </p>
                <span className="text-xs text-gray-600">pct. change</span>
              </div>
              <div className="flex flex-col basis-1/12 w-36 text-end">
                <p className="font-semibold text-sm">
                  {parseFloat(p.close).toFixed(2)}
                </p>
                <span className="text-xs text-gray-600">price</span>
              </div>
            </article>
          );
        })}
    </section>
  );
};

export default Stocks;
