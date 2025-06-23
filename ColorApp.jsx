import React,{useState} from "react";
function ColorApp(){
    const [color,setColor] = useState("#FFFFFF");

    function handleColorChange(event){
        setColor(event.target.value);
    }
    return(
        <>
        <div className = "color-picker-container">
            <h1>Color Picker</h1>
        <div className = "color-display" style = {{backgroundColor : color}}>
            <p>Color Picked : {color}</p>
        </div>
        <label>
            Select a Color
        </label>
        <input type="color" value = {color} onChange={handleColorChange}></input>

        </div>
        
        </>
    );
}
export default ColorApp