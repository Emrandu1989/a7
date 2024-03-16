import { FaClock,FaFire } from "react-icons/fa";

const Recipe = ({recipe,handleCook}) => {
    // console.log(recipe)
    const {calories,ingredients, preparing_time,recipe_id,recipe_image,recipe_name,short_description } = recipe;
    
    return ( 
        <div>
             <div className="card  bg-base-100 shadow-xl">
  <figure><img className="w-full" src={recipe_image} alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">{recipe_name}</h2>
    <p>{short_description}</p>
    <hr />
    <div>
        <h2 className="text-lg font-bold">Ingredients: {ingredients.length} </h2>
        <ul className="text-gray-600">
            <li>1. {ingredients[0]}</li>
            <li>2. {ingredients[1]}</li>
            <li>3. {ingredients[2]}</li>
            <li>4. {ingredients[3]}</li>
        </ul>
    </div>
    <hr />
    <div className="flex justify-between">
        <div className="flex items-center gap-3 text-gray-700">
        <FaClock />   
          <h5>{preparing_time} min</h5>
        </div>
        <div className="flex items-center gap-3 text-slate-600">
        <FaFire />
        <h5>{calories} cal</h5>
        </div>
    </div>

    <div className="card-actions mt-5">
      <button onClick={()=>handleCook(recipe)} className="btn btn-outline">Want to Cook</button>
    </div>
  </div>
</div>
        </div>
    );
};

export default Recipe;