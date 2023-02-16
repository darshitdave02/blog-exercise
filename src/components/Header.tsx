import * as React from 'react'

export default function Header():JSX.Element {
  return (
    <div className="header main">

        <div className="title">
            The Artifact
        </div>
        <div className="subtitle">
            Culture & Art blog
        </div>

        <ul className="nav">
            <li>Blog</li>
            <li >About</li>
            <li>Contact</li>
        </ul>

    </div>
  )
}