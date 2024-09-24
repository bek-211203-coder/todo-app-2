import React from 'react'
import img from '../assets/image/icons_delete.svg'

const Card = (props) => {
    let { input, id } = props.value
    let { delet } = props


    return (
        <div>
            <div className="flex p-6 bg-[#15101C] rounded-xl text-white justify-between mt-4">
                <h3 className='text-[#9E78CF]'>{input}</h3>
                <div className='flex gap-5'>
                    <button onClick={() => delet(id)}><img src={img} width={22} alt="dlete icon" /></button>
                </div>
            </div>
        </div>
    )
}

export default Card