import React from 'react'

export default function About(props) {
    // const myFun=()=>{
    //     if(style.color==="black")
    //     {
    //         document.body.style='background:black;color:white';
    //         document.getElementsByTagName("textarea").style='background:black;color:white';
    //         setStyle({color:'white',backgroundColor:'black',border:'1px solid white'});
    //         document.getElementsByClassName('navbar')[0].classList.add('navbar-dark');
    //         document.getElementsByClassName('navbar')[0].classList.add('bg-dark');
    //         setBtnName("Enable Light Mode");
    //     }
    //     else
    //     {
    //         document.body.style='background:white;color:black';
    //         setStyle({color:'black',backgroundColor:'white'});
    //         document.getElementsByClassName('navbar')[0].classList.remove('navbar-dark');
    //         document.getElementsByClassName('navbar')[0].classList.remove('bg-dark');
    //         setBtnName("Enable Dark Mode");
    //     }
    // }
    // const [style,setStyle]=useState({
    //     color:'black',
    //     backgroundColor:'white'
    // })
    // const[btnName,setBtnName]=useState("Enable Dark Mode");
    return (
        
        <div>
            <div className="accordion" id="accordionPanelsStayOpenExample">
                <div className={`accordion-item border border-light`} style={{backgroundColor:props.mode==="dark"?"#042743":"white"}}>
                    <h2 className="accordion-header" id="panelsStayOpen-headingOne">
                    <button style={{backgroundColor:props.mode==="dark"?"#042743":"white"}} className={`border border-light accordion-button text-${props.mode==="dark"?"light":"dark"}`}  type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseOne" aria-expanded="true" aria-controls="panelsStayOpen-collapseOne">
                        Accordion Item #1
                    </button>
                    </h2>
                    <div id="panelsStayOpen-collapseOne" className="accordion-collapse collapse show" aria-labelledby="panelsStayOpen-headingOne">
                    <div className="accordion-body">
                        <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classNamees that we use to style each element. These classNamees control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                    </div>
                    </div>
                </div>
                <div style={{backgroundColor:props.mode==="dark"?"#042743":"white"}} className={`accordion-item border border-light`}>
                    <h2 className="accordion-header" id="panelsStayOpen-headingTwo">
                    <button style={{backgroundColor:props.mode==="dark"?"#042743":"white"}} className={`accordion-button border border-light collapsed text-${props.mode==="dark"?"light":"dark"}`} type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseTwo" aria-expanded="false" aria-controls="panelsStayOpen-collapseTwo">
                        Accordion Item #2
                    </button>
                    </h2>
                    <div id="panelsStayOpen-collapseTwo" className="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingTwo">
                    <div className="accordion-body">
                        <strong>This is the second item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classNamees that we use to style each element. These classNamees control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                    </div>
                    </div>
                </div>
                <div style={{backgroundColor:props.mode==="dark"?"#042743":"white"}} className={`accordion-item border border-light`}>
                    <h2 className="accordion-header" id="panelsStayOpen-headingThree">
                    <button style={{backgroundColor:props.mode==="dark"?"#042743":"white"}} className={`accordion-button border border-light collapsed text-${props.mode==="dark"?"light":"dark"}`} type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseThree" aria-expanded="false" aria-controls="panelsStayOpen-collapseThree">
                        Accordion Item #3
                    </button>
                    </h2>
                    <div id="panelsStayOpen-collapseThree" className="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingThree">
                    <div className="accordion-body">
                        <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classNamees that we use to style each element. These classNamees control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                    </div>
                    </div>
                </div>
                </div>
            
        
        </div>
    )
}
