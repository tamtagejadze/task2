import { forwardRef, useImperativeHandle, useRef } from "react"

function Div(props,ref){
    const divRef = useRef()
    useImperativeHandle(ref, () =>({ 
       
    }))

    return(
        <div  {...props} ref= {divRef}/>
    )
}

export default forwardRef(Div)