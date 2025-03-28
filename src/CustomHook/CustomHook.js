import useComp from "./useComp"


const CustomHook = ()=>{
    const resultOutput = useComp("https://jsonplaceholder.typicode.com/todos")
return(<div>
    {resultOutput.map((item,index)=>{
        return <div key={index}>{item.id} : {item.title}</div>
    })}
</div>)
}
export default CustomHook