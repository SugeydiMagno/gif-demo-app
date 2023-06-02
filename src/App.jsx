import { useState } from 'react'
import Categories from './components/Categories'
import GifsExpo from './components/GifsExpo'

function App() {
  const [categories, setCategories] = useState(["Robotech", "Mazinger Z"])

  return (
    <div className='m-5'>
      <h3>Gif Demo App</h3>
      <hr />

      <Categories
        categories={categories}
        setCategories={setCategories}
      />

      {
        categories.length === 0 && (
          <div>
            <h3>Your gif gallery is empty...</h3>
            Please add a new gif to start
          </div>
        )
      }

      <hr />
      <GifsExpo categories={categories} />


    </div>
  )
}

export default App