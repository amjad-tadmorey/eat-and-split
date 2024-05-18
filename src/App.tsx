import React, { ReactElement, useState } from "react";
import FriendsList from "./components/FriendsList.tsx";
import FormAddFriend from "./components/FormAddFriend.tsx";
import Button from "./components/Button.tsx";
import FormSplitBill from "./components/FormSplitBill.tsx";

interface friends {
    id: number;
    name: string;
    image: string;
    balance: number
}


const initialFriends: friends[] = [
  {
    id: 118836,
    name: "Clark",
    image: "https://i.pravatar.cc/48?u=118836",
    balance: -7,
  },
  {
    id: 933372,
    name: "Sarah",
    image: "https://i.pravatar.cc/48?u=933372",
    balance: 20,
  },
  {
    id: 499476,
    name: "Anthony",
    image: "https://i.pravatar.cc/48?u=499476",
    balance: 0,
  },
];

export default function App (): ReactElement {

    const [friends, setFriends] = useState<friends[]>(initialFriends)
    const [showAddFriend, setShowAddFriend] = useState<boolean>(false)
    const [selectedFriend, setSelectedFriend] = useState<any>(null)

    function handleShowAddFriend (): void {
        setShowAddFriend(show => !show)
    }

    function handleAddFriend (friend): void {
        setFriends(friends => [...friends, friend])
        setShowAddFriend(false)
    }

    function handleSelection (friend: any): void {
        setSelectedFriend(cur => cur?.id === friend.id ? null: friend);
        setShowAddFriend(false)
    }

    function handleSplitBill (value) {  
              
        setFriends(friends => 
            friends.map(friend => 
                friend.id === selectedFriend.id ?
                 {...friend, balance: friend.balance + value}:
                  friend
        ))

        setSelectedFriend(null)
    }

    return (
        <div className="app">
            <div className="sidebar">
                <FriendsList 
                    friends={friends} 
                    selectedFriend={selectedFriend}
                    onSelection={handleSelection} 
                />
                {showAddFriend && <FormAddFriend onAddFriend={handleAddFriend}/>}
                <Button onClick={handleShowAddFriend}>{showAddFriend ? "close": "Add friend"}</Button>
            </div>
                {selectedFriend && <FormSplitBill selectedFriend={selectedFriend} onSplitBill={handleSplitBill} key={selectedFriend.id}/>}
        </div>
    )
}

