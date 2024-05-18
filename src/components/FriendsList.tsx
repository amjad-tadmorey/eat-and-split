import React, { ReactElement } from 'react'
import Friend from './Friend.tsx';

export default function FriendsList({friends, onSelection, selectedFriend}): ReactElement {  

  return (
    <ul>
        {
            friends.map((friend) => (
             <Friend 
              friend={friend} 
              key={friend.id} 
              selectedFriend={selectedFriend}
              onSelection={onSelection} 
             />
             ))
        }
    </ul>
  )
}
