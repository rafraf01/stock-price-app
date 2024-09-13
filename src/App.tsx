import './App.css'
import Stocks from './components/stocks/Stocks'
import { AiOutlineStock } from 'react-icons/ai'
function App() {
  return (
    <main className='container mx-auto h-screen py-5'>
      <pre className='text-center mb-5 text-gray-200'>Tip: You can input several tickers separated by commas (,)
        <p>Example: <i>EUR/USD,TRP,ETH/BTC,AAPL</i></p>
        
      </pre>
      <div className='w-[80%] m-auto border p-5 bg-slate-50 rounded-md shadow-lg'>
        
        <h1 className='font-urbanist text-2xl font-semibold tracking-wide inline-flex gap-2 items-center mb-5'><AiOutlineStock /> Stock price tracker</h1>
        <Stocks />
      </div>
      <pre className='text-center text-gray-200 mt-5'>
        <p>Note: You can only search a total of 8 symbols per minute, you can wait for another 1 minute to request.</p>
      </pre>
    </main>
  )
}

export default App
