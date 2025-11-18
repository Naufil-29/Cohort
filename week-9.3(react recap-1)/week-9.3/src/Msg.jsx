import { use, useEffect, useState } from "react";

export function BellComponent(){ 
    const [count, setCount] = useState(1);

    function increaseCount(){ 
        setCount(currentValue => currentValue + 1);
    };

    useEffect(() => { 
      setInterval(increaseCount, 2000);  
    },[])
    useEffect(() => { 
      console.log(`Count is updated to ${count}`);  
    },[count])

    return( 
        <div style={{display: "flex"}}> 
            <div style={{background: "red", color:"white", borderRadius: 20, width: 20, height: 20, textAlign: "center", postion: "absolute"}}>{count}</div>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSR5NNT9-V31hriLzACMhtUW3Xh_b5USGlLkw&s" alt="bell" style={{height: 30, width:30, borderRadius: 50, position: "relative"}} onClick={increaseCount}/>
        </div>
    )
}