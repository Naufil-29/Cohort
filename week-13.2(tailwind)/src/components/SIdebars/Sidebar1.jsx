export function Sidebar1 () { 


    return( 
        <div className="flex h-screen"> 
            <div className="hidden md:block bg-red-500 w-[300px] "> 
                <p>Sidebar1</p>
            </div>
            <div className="bg-green-500 w-full"> 
                Sidebar2
            </div>
        </div>
    )
}