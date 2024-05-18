import React, {ReactElement} from "react"
import Button from "./Button.tsx"

export default function Friend ({friend, selectedFriend, onSelection}): ReactElement {
    
    const isSelected = selectedFriend?.id === friend.id

    return <li className={isSelected? "selected": ""}>
        <img src={friend.image} alt={friend.name} />
        <h3>{friend.name}</h3>

        {friend.balance < 0 && (
            <p className="red">
                You Owe {friend.name} {Math.abs(friend.balance)}$
            </p>
        )}
        {friend.balance > 0 && (
            <p className="green">
                {friend.name} Owes You {Math.abs(friend.balance)}$
            </p>
        )}
        {friend.balance === 0 && (
            <p className="">
                You And {friend.name} Are even
            </p>
        )}

        <Button onClick={() => onSelection(friend)}>{isSelected ? "Close": "Select"}</Button>

    </li>
}