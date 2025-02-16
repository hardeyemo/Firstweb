import plus from "../assets/plus.png"
import React from 'react'

const Write = () => {
    return (
        <div className="flex justify-center">
            <div className="flex bg-slate-400 p-3">
                <img className="h-10" src={plus} alt="" />
                <input className="w-[60vw] pl-4 outline-none" type="text" name="" id="" placeholder="input" />
            </div>
        </div>
    )
}

export default Write
