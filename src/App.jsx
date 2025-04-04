import './App.css'
import ShoppingCart from './components/ShoppingCart'

export const THRESHOLD = 1000;
export const FREE_GIFT = { id: 99, name: "Wireless Mouse", price: 0 };

function App() {

  return (
    <div className='bg-gray-300 w-full h-full p-3 lg:p-5'>
      <ShoppingCart />
    </div>
  )
}

export default App
