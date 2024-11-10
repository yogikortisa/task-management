import { useState } from 'react'
// import Button from './components/button'
import Card from './components/card'
// import { HeaderOne, HeaderThree, HeaderTwo } from './components/heading'
// import Breadcrumb from './components/breadcrumb'

function App() {
  const [count, setCount] = useState(0)
// 2 type
// components => button, input, modal, etc
//pages =. home, about, contact, etc

  return (
    <>
      {/* <h1>Hello world</h1>
      <Button text="Ini button" /> */}
      <Card title="Barang 1" description="ini barang bagus" image="https://picsum.photos/200/300" price={100} discount={20} caption="caption1" />
      <Card title="Barang 2" description="lagi diskon" image="https://picsum.photos/300/200" price={200} discount={30} caption="caption2" />
      {/* <HeaderOne />
      <HeaderTwo />
      <HeaderThree />
      <Breadcrumb /> */}

      {/* <nav id="navbar" className="bg-blue-500 text-white">
        <ul className="flex items-center justify-between">
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">Contact</a>
          </li>
          <li>
            <button onClick={() => setCount(count + 1)}>Clicked {count} times</button>
          </li>
        </ul>
      </nav>
      <div className='table-fruit'>
        <FilteredTableProducts />
      </div> */}
    </>
  )
}

export default App
