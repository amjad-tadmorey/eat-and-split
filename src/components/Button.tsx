import React, { ReactElement } from 'react'

export default function Button({children, onClick}): ReactElement {
  return (
    <button className="button" onClick={onClick}>{children}</button>
  )
}
