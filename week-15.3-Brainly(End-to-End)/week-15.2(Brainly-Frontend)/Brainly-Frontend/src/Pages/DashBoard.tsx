import { Button } from '../component/Button'
import axios from 'axios'
import { useEffect } from 'react'
import { PlusIcon } from '../icons/plusIcon'
import { ShareIcon } from '../icons/shareIcon'
import { Card } from '../component/Card'
import { useState } from 'react'
import { CreateContentModal } from '../component/CreateContentModal'
import { SideBar } from '../component/SideBar'
import { useContent } from '../hooks/useContent'
import { Backend_URL } from '../config'

export function Dashboard(){ 
     const [openModal, setOpenModal] = useState(false);
     const {contents, refresh} = useContent();

     useEffect(() => { 
      refresh()
     }, [openModal])

  return (
    <>
    <SideBar/>
    <CreateContentModal open={openModal} onClose={() => { 
      setOpenModal(false)
    }}/>
  <div className='bg-gray-100 min-h-screen'>
    <div className='flex justify-end items-center p-4 gap-2'>
        <Button onClick={() => { 
            setOpenModal(true)
           }} size="md" variant="primary" text="Add content" endIcon={<PlusIcon size="md"/>}/>
          <Button onClick={async() => { 
            const response = await axios.post(`${Backend_URL}/api/v1/brain/share`, { 
              share: true
            },{ 
              headers:{ 
                "Authorization": localStorage.getItem("token")
              }
            });
            const shareUrl = `http://localhost:5173/share/${response.data.hash}`
            alert(shareUrl)
          }} stratIcon={<ShareIcon size="md"/>} size="md" variant="secondary" text="Share Brain"/>
      </div>  

      <div className='flex gap-2 ml-72'>
        {contents.map(({type, title, link}) => <Card
          type={type}
           title={title}
            link={link}/>)}

      </div>
      </div>
    </>
  )
}