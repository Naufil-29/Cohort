import { useState } from 'react'
import axios from 'axios'
import { CloseIcon } from './CloseIcon'
import { Button } from './Button'
import { Input } from './Input'
import { useRef } from 'react'
import { Backend_URL } from '../config'

type ContentType = "youtube" | "twitter"

export function CreateContentModal({open, onClose}){ 
    const titleRef = useRef<HTMLInputElement | null>(null);
    const linkRef = useRef<HTMLInputElement | null>(null);
    const [type, setType] = useState<ContentType>("youtube")

    async function addContent(){ 
        const title = titleRef.current?.value;
        const link = linkRef.current?.value;

        await axios.post(`${Backend_URL}/api/v1/content`, { 
                title,
                link,
                type
        },{ 
            headers:{
                "Authorization": localStorage.getItem("token")
            }
        })

        onClose()
    }
    return<div > 
        {open && <div className='fixed top-0 left-0 opacity-90 h-screen w-screen bg-black flex justify-center items-center '> 
            <div className='bg-white p-4 opacity-100 rounded-md '> 
                <div className="flex gap-5 justify-between items-center"> 
                    <p>Create content</p>
                    <div onClick={onClose}><CloseIcon/></div>
                    
                </div>

            <div> 
                <Input ref={titleRef} placeholder="type"/>
                <Input ref={linkRef} placeholder="link"/>

                <h1>Type</h1>
                <div className='flex p-4'>
                <Button text="Youtube" variant={type === "youtube" ? "primary" : "secondary"} onClick={() => { 
                    setType("youtube")
                }}/>
                <Button text="Twitter" variant={type === "twitter" ? "primary" : "secondary"} onClick={() => { 
                    setType("twitter")
                }}/>
                </div>
                <div className="flex justify-center items-center">
                <Button onClick={addContent}  size="md" variant="primary" text="submitt"/> 
                </div>
            </div>
            </div>
        </div>}
    </div>
}

