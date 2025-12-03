 const Button = ({disabled, children, onClick}) => { 
    return( 
        <span onClick={onClick} className={` rounded-2xl text-white px-25 py-3 cursor-pointer ${disabled ? "bg-[#8094ad]" : "bg-[#36c6c0]"}`}>
            {children}
        </span>
    )
}

export default Button;