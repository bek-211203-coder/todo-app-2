import React, { useState } from 'react'
import Card from './Card'

const Form = () => {
    const [value, setValue] = useState([])
    const [counter, setCounter] = useState(0)
    const [input, setInput] = useState('')
    
    function hendelDelet(id) {
        setCounter(counter - 1)
        let cope = [...value]
        cope = cope.filter(function (value) {
            return value.id != id
        })
        setValue(cope)
    }

    function hendelClick(event) {
        event.preventDefault()
        setCounter(counter + 1)
        let valueFrom = {
            id: Date.now(),
            input
        }
        let copeid = [...value]
        copeid.push(valueFrom)
        setValue(copeid)
        setInput('')
    }



    return (
        <div>
            <div className='mt-10  flex gap-4 justify-center'>
                <input onChange={(e) => setInput(e.target.value)} value={input} type="text"
                    className='text-[#4e2880] max-w-[450px] w-full border border-[#4d2286] bg-[#0D0714] p-2 rounded-[0.625rem] placeholder:text-sm px-5'
                    placeholder='Add a new task' />
                <button onClick={hendelClick} className='bg-[#492479] w-11 text-white text-2xl rounded-xl'>+</button>
            </div>
            <div className="m-auto max-w-[500px] w-full mt-20">
                {
                    value.length > 0 && <h1 className='text-white text-xl'>BAJARILADIGA ISHLAR - {counter}</h1>
                }
                <div className="mb-4">
                    {
                        value.length > 0 && value.map(function (value, index) {
                            return <Card  delet={hendelDelet} value={value} key={index} />
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default Form