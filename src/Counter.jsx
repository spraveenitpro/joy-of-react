import React from 'react'

function Counter() {

    const [count, setCount] = React.useState(0)
    return (
        <>
            <h1>Counter</h1>
            <button onClick={() => setCount(count + 1)}>Value: {count}</button>
        </>
    )
}

export default Counter