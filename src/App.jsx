import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Firstitem from './component/First item'
import Seconditem from './component/Second item'
import Thirditem from './component/Third item'
function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="conteiner">
      <div className="first-item">
        <Firstitem/>
      </div>
      <div className="second-item">
        <Seconditem/>
      </div>
      <div className="third-item">
        <Thirditem/>
      </div>
      <div className="fourth-item"></div> 
    </div>
  )
}

export default App
