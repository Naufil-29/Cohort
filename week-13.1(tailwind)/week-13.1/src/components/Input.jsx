const Input = ({disabled, placeholder, }) => { 
    return( 
        <span  className={` rounded-2xl text-white px-25 py-3 cursor-pointer  ${disabled ? "bg-[#19406a]" : "bg-[#8094ad]"}`}>
            <input className="outline-none" type="text" placeholder={placeholder}></input>
        </span>
    )
}

export default Input;