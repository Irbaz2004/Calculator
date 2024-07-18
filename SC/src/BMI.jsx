import React from 'react'
import { useState } from 'react'
export default function BMI() {

  const[height,sethieght]=useState("");
  const[wieght,setwieght]=useState("");
  const[bmi,setbmi]=useState("");
  const [category,setcategory]=useState("");

const calcBMI=()=>{
  if(height && wieght){
    const H_in_M =height/100;
    const BMI_Value = wieght/(H_in_M*H_in_M);
    setbmi(BMI_Value.toFixed(2));
    
    if(BMI_Value < 18.5){
      setcategory("Underweight");
    }else if(BMI_Value >= 18.5 && BMI_Value <= 24.9){
      setcategory("Normal");
    }else if(BMI_Value >= 25 && BMI_Value <= 29.9){
      setcategory("Overweight");
    }else{
      setcategory("Obese");
    }
    }else{
      setcategory("");
    }
  }

  const handleHeightChange=(e)=>{
    sethieght(e.target.value);
  }
  const handleWeightChange=(e)=>{
    setwieght(e.target.value);
  }



  return (
    <>
     <div className="container d-flex flex-column">
        <div className="Name fs-2 text-light text-center">
        BMI Calculator
        </div>
        <div className="input-field">
          <input type="text" className="result" placeholder="Enter weight (kg)" value={wieght} onChange={handleWeightChange} />
        </div>
        <div className="input-field">
          <input type="text" className="result" placeholder="Enter height (m)" value={height} onChange={handleHeightChange}/>
        </div>
        <div className="buttons">
          <button onClick={calcBMI}>Calculate</button>
        </div>
        <div className="result">
          <h3 className="fs-5 text-light p-4">Your BMI is: <span className='ps-2 fw-bold'>{bmi}</span></h3>
        </div>
        <div className="result">
          <h3 className="fs-5 text-light ">Your category is: <span className='ps-2 fw-bold'>{category}</span></h3>
        </div>
       
        </div>
    </>
  )
}
