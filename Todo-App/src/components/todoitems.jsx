
export const Todoitem = ({title,status,id,handledelete}) => {
    return(
        <>
        <div>{title},{status},{id}</div>
        <button onClick={()=>handledelete(id)}>delete</button>
        </>
    )
};
