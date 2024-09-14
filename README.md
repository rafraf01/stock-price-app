# Stock Market Price Application
The application allow the users to search for the current stock price in realtime.
This is a mobile-first application build using React.JS + Tailwind CSS + Vite.


# Links
API - https://twelvedata.com/docs#getting-started <br />
Vercel - https://stock-price-app-rafaeldc.vercel.app/ <br />
Code base - https://github.com/rafraf01/stock-price-app


## Packages & Libraries
- [TanStack Query](https://tanstack.com/query/v4/docs/framework/react/reference/useQuery)
- [Axios API](https://axios-http.com/docs/api_intro)
- [classnames](https://www.npmjs.com/package/classnames)
- [react-icons](https://react-icons.github.io/react-icons/)

## Installation
To install the dependencies.
Go to the project folder then run:

```bash
npm install
```
## Pull branch
```bash
git pull origin main / git pull
```

## Run project
```bash
npm run dev
```

> [!TIP]
> Sample search string:
> 1. AAPL - display AAPL stock price detail
> 2. AAPL,TRP - display `[AAPL,TRP]` details
> 3. AAPL, 123 - display error
> 4. ^^^^ - display error message
