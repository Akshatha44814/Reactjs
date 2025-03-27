import React, { useEffect, useRef } from "react"



const ChildComp = ({},ref)=>{


    return(<div>
        <input type="text" name="first" ref={ref}/>      
    </div>)
}

export default React.forwardRef(ChildComp)