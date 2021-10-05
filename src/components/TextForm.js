import React,{useState} from "react";

export default function TextForm(props) {
    const handleUpClick=()=>{
        if(text.length>0)
        {
            let newText=text.toUpperCase();
            setText(newText);
            props.showAlert("Converted to Uppercase!","success")
        }
        else
        {
            props.showAlert("Please enter some text for conversion","warning")
        }
    }
    const onChangeClick=(event)=>{
        setText(event.target.value);
    }
    const handleLowClick=()=>{
        if(text.length>0)
        {
            let newText=text.toLowerCase();
            setText(newText);
            props.showAlert("Converted to Lowercase!","success")
        }
        else
        {
            props.showAlert("Please enter some text for conversion","warning")
        }
        
    }
    const handleCamClick=()=>{
        if(text.length>0)
        {
            let newText=text.toLowerCase();
            newText=newText.replace(newText[0],newText[0].toUpperCase());
            setText(newText);
            props.showAlert("Text Capatilized!","success")
        }
        else
        {
            props.showAlert("Please enter some text for conversion","warning")
        }
        
    }
    const [text,setText]=useState("");
    // let wordcount;
    // if(text.split(" ")[text.split(" ").length-1]==="")
    // {
    //     wordcount=text.split(" ").length-1
    // }
    // else
    // {
    //     wordcount=text.split(" ").length
    // };
    return (
        <>
        <div>
            <div className="mb-3">
                <h1>{props.heading}</h1>
                <textarea style={{backgroundColor:props.mode==="dark"?"#042743":"white"}} className={`form-control text-${props.mode==="dark"?"light":"dark"}`} id="exampleFormControlTextarea1" value={text} onChange={onChangeClick} rows="8"></textarea>
            </div>
            <button className="btn btn-warning m-2" onClick={handleUpClick}>Convert to UpperCase</button>
            <button className="btn btn-danger m-2" onClick={handleLowClick}>Convert to LowerCase</button>
            <button className="btn btn-info m-2" onClick={handleCamClick}>Convert to Capitaized</button>
        </div>
        <div className="mb-3">
            <h1>Your Text Summary</h1>
            {/* way to use the if else using ternary operator */}
            <p>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length} word(s) and {text.length} character(s)</p>
            {/* <p>{text.split(" ")[text.split(" ").length-1]===""?text.split(" ").length-1:text.split(" ").length} word(s) and {text.length} character(s)</p> */}
        </div>
        </>
    );
}
