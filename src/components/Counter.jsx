import { useState, useEffect } from 'react'

export default function Counter() {
    //useState hook returns state value and a function to set the value
    const [count, setCount] = useState(1)
    //example of having an object
    const [user] = useState({ name: 'Mariia' })

    useEffect(() => {
        console.log('after every rendercount')
        console.log(count)
        return () => {
            console.log('on every unmount')
        }
    })

    //you can have more than one useEffect hook!
    // useEffect(() => {
    //     console.log('i only go when user changes');
    // }, [user])



    //event handlers
    const handleIncreaseCount = () => {
        setCount(count + 1)
    }

    return(
        <div>
            <p>Hello Functional Components!</p>

            <h2>the count is {count}</h2>

            <h3>Hello {user.name}! Are you loving Functional Components?</h3>

            <button onClick={handleIncreaseCount}>Increase the Count!</button>
        </div>
    )
}
