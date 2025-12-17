import type{ ReactElement } from "react"

export function SideBarItem({Text, Icon}: { 
    Text: string,
    Icon: ReactElement
}){ 
    return<div className="flex w-fill rounded-lg gap-4 px-4 py-2 tranistion-all duration-0.9 hover:bg-gray-200">
        <div>{Icon}</div> 
        <div>{Text}</div>
        </div>
}