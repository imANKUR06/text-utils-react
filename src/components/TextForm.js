import React,{useState} from 'react'



export default function TextForm(props) {

  
  const toLower = ()=>{
    console.log('ToLower Button was clicked')
    let ntext = text.toUpperCase();
    setText(ntext)
  }

  const tocolor = ()=>{
    console.log("tocolor button was called ");
    setText(' ');
  }

  const oncolor =(event) =>{
    console.log('This is for oncolor for clearing');
    setText(event.target.value);
  }

  // const onLower = (event)=>{
  //   console.log('onLower is called here !!!');
  //   setText(event.target.value);
  // }

  const onchange =(event)=>{
    console.log('On Change was called in Text Area');
    setText(event.target.value);
  }
  const [text,setText] = useState("Enter you  Text Here");
  // in the above line 'text' is the variable/storing the value of state.
  // 'setText' is the variable for changing the value in state
  // setText('Write the text for change'); 

  return (
    <div>
      <div className="container my-5">
        <h1>{props.heading}</h1>
        <div className="mb-3">
        
        <textarea className="form-control" id="box" value={text} rows="8" onChange={onchange}  onClick={oncolor}></textarea>
        </div>
        <button className="btn btn-primary" onClick={toLower}>Upper to Lower</button>
        <button className="btn btn-danger" onClick={tocolor}>Clear Text</button>
      </div>
    </div>
  )
}
