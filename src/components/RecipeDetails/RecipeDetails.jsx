import { Navigate } from "react-router-dom";
import { useParams,useNavigate} from "react-router-dom";
import { useEffect, useState } from "react";
import '../RecipeDetails/recipeDetails.css'

export default function RecipeDetails(){
    const [recipeDetails,setrecipeDetails]=useState({})
    const API = 'http://localhost:3012';

    let navigate=useNavigate()
    let {id}=useParams()
    useEffect(()=>{
        console.log(API,id)
        fetch(`${API}/recipes/${id}`).then(res=>res.json()).then(res=>{setrecipeDetails(res)
            console.log(res)
        })

    },[id])


    return (<div className="recipedetails-container">
        <h2>{recipeDetails.name}</h2>
        <img src={recipeDetails.imageurl} alt="" />

        {/* {JSON.parse(recipeDetails.instructions).map(instruction=><div>{instruction}</div>)} */}

       

    </div>)
}