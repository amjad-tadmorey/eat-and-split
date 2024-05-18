import React, { ReactElement, useState } from 'react'
import Button from './Button.tsx'

export interface newFriend {
  name: string;
  image: string;
  balance: number;
  id: string
}

export default function FormAddFriend({onAddFriend}): ReactElement {

  const [name, setName] = useState<string>("")
  const [image, setImage] = useState<string>("https://i.pravatar.cc/48")

  function handleSubmit (e: any) {
    e.preventDefault()

    if (!name || !image) return

    const id = crypto.randomUUID() 
    const newFriend: newFriend = {
      id,
      name,
      image: `${image}?=${id}`,
      balance: 0,
    }

    setName("")
    setImage("https://i.pravatar.cc/48")

    onAddFriend(newFriend)
    
  }

  return (
    <form className='form-add-friend' onSubmit={handleSubmit}>
        <label>👱‍♂️Friend name</label>
        <input type="text" value={name} onChange={(e) => setName(e.target.value)}/>

        <label>🖼Image url</label>
        <input type="text" value={image} onChange={(e) => setImage(e.target.value)}/>

        <Button>Add</Button>
    </form>
  )
}
