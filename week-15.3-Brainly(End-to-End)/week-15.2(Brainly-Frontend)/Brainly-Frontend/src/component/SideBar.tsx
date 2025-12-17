import { SideBarItem } from "./SideBarItem"
import { YoutubeIcon } from "../icons/youtubeIcon"
import { TwitterIcon } from "../icons/twitterIcon"
import { BrainIcon } from "../icons/BrainIcon"
export function SideBar(){ 
    return<div className="h-screen bg-slate-300 w-72 border-r-white fixed top-0 left-0"> 
        <div className="flex items-end gap-2 text-2xl p-3 font-bold"> 
            Brainly <BrainIcon/>
        </div>
            <SideBarItem Text="youtube" Icon={<YoutubeIcon/>}/>
            <SideBarItem Text="Twitter" Icon={<TwitterIcon/>}/>
    </div>
}