import React, { useRef, useState, useEffect } from 'react'

export const Sidebar = () => {
    const [open, setOpen] = useState(false)
    const sidebarRef = useRef(null)

    const handleClick = () => {
        setOpen(!open)
    }
    const back = () => {
        setOpen(!true)
    }

    const handleClickOutside = (event) => { 
        if (sidebarRef.current && !sidebarRef.current.contains(event.target)) { 
            setOpen(false) 
        } 
    } 
 
    useEffect(() => { 
        if (open) { 
            document.addEventListener('mousedown', handleClickOutside) 
        } else { 
            document.removeEventListener('mousedown', handleClickOutside) 
        } 
 
        return () => { 
            document.removeEventListener('mousedown', handleClickOutside) 
        } 
    }, [open])

  return (
    <div>
        <button onClick={handleClick}>{open ? 'close Yahyo' : 'open Yahyo'}</button>
        {
            open && 
            <div ref={sidebarRef} className='sideBar'>
                    <h1  onClick={back}>Close</h1>
                    <input placeholder='search' type="text" />
                    <input type="password" />
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta illo facere magni commodi architecto unde nisi deleniti 
                        dignissimos corrupti eius 
                        voluptates, ab ratione praesentium iure. Voluptates aperiam placeat reprehenderit iste!</p>
                    <button>Hello</button>
            </div>
        }
    </div>
  )
}
