import { useEffect } from "react";
import { useState } from "react";
import Recipe from "../Recipe/Recipe";


const Recipes = () => {
    const [recipes, setRecipes] = useState([])
    useEffect(()=>{
           fetch('./data.json')
           .then(res=>res.json())
           .then(data=>setRecipes(data))
    },[])
    console.log(recipes);
    return (
        <div className="my-9">
                <div className="text-center ">
                     <h2 className="text-xl font-bold text-gray-400">Our Recipes</h2>
                     <p className="text-sm text-gray-600 mb-5">We have a lot of recipes of different Countries. You Can order Our delicious   food which recipes <br /> you choose.And We also have several unique recipe</p>
                </div>
                <div className="grid grid-cols-12">

                    <div className="col-span-8 grid grid-cols-2 gap-5 ml-4">
                          {
                            recipes.map(recipe => <Recipe
                            recipe={recipe}
                            key={recipe.id}
                            ></Recipe>)
                          }
                    </div>
                    <div className="col-span-4">
                            <h2 className="text-center font-bold text-base-800 text-2xl">Want To Cook:</h2>
                    </div>

                </div>
        </div>
    );
};

export default Recipes;