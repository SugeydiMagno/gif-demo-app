import CategoriesList from "./CategoriesList"
import CategoryInput from './CategoryInput'
import ClearListButton from "./ClearListButton"


const Categories = ({ categories = [], setCategories }) => {
    return (
      <div>
                <CategoryInput
        categories={categories}
        setCategories={setCategories}
      />
      <br />

      <div className="text-end">
        <ClearListButton
          setCategories={setCategories}
        />
      </div>

      <CategoriesList
        categories={categories}
        setCategories={setCategories}
      />
      </div>
    )
}

export default Categories