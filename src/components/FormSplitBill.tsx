import React, { ReactElement, useState } from 'react'
import Button from './Button.tsx'

export default function FormSplitBill({selectedFriend, onSplitBill}): ReactElement {
  const [bill, setBill] = useState<string | number>("")
  const [paidByUser, setPaidByUser] = useState<string | number>("")
  const [whoIsPaying, setWhoIsPaying] = useState<string>("user")

  const paidByFriend = +bill ? +bill - +paidByUser: ''


  function handleSubmit (e: any) {
    e.preventDefault()
    if (!bill || !paidByUser) return


    onSplitBill(whoIsPaying === 'user' ? paidByFriend : -paidByUser)
  }

  return (
    <form className='form-split-bill'>
        <h2>Split a bill with {selectedFriend.name}</h2>

        <label>💰Bill value</label>
        <input type="text" value={bill} onChange={(e) => setBill(+e.target.value)}/>

        <label>😀your expence</label>
        <input type="text" value={paidByUser} onChange={(e) => {
          setPaidByUser(+e.target.value > +bill? +paidByUser: +e.target.value)
        }}/>

        <label>🙃{selectedFriend.name}'s expence</label>
        <input type="text" disabled value={paidByFriend}/>

        <label>🤑Who is paying the bill</label>
        <select value={whoIsPaying} onChange={(e) => setWhoIsPaying(e.target.value)}>
            <option value="user">You</option>
            <option value="friend">{selectedFriend.name}</option>
        </select>

        <Button onClick={handleSubmit}>Split bill</Button>

    </form>
  ) 
}
