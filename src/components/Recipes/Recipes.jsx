import { useEffect } from "react";
import { useState } from "react";
import Recipe from "../Recipe/Recipe";
import Cook from "../Cook/Cook";
import { ToastContainer, toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";


const Recipes = () => {
    const [recipes, setRecipes] = useState([]);
    const [cookings, setCookings] = useState([]);
   
    useEffect(()=>{
           fetch('./data.json')
           .then(res=>res.json())
           .then(data=>setRecipes(data))
    },[])
    // console.log(recipes);

    const handleCook = (foods) =>{
        const isExist = cookings.find(c=>c.recipe_id === foods.recipe_id)
        if(isExist){
           return toast.error("Already Exist")
        }
        else{
            const newCookings = [...cookings, foods]

            setCookings(newCookings);
            return toast.success("Food Added Successfully")
        }
       
    }
    return (
        <div className="my-9">
                <div className="text-center ">
                     <h2 className="text-xl font-bold text-gray-400">Our Recipes</h2>
                     <p className="text-sm text-gray-600 mb-5">We have a lot of recipes of different Countries. You Can order Our delicious   food which recipes <br /> you choose.And We also have several unique recipe</p>
                </div>
                <div className="grid grid-cols-12">

                    <div className="col-span-8 grid grid-cols-2 gap-5 mx-4">
                          {
                            recipes.map(recipe => <Recipe
                            recipe={recipe}
                            key={recipe.id}
                            handleCook={handleCook}
                            ></Recipe>)
                          }
                    </div>
                    <div className="col-span-4 ">
                        <Cook
                          cookings={cookings}
                          ></Cook>
                        
                         
                    </div>

                </div>
                <ToastContainer />
        </div>
    );
};

export default Recipes;