import React from 'react'

function Counter() {

    const [count, setCount] = React.useState(1)
    return (
        <>
            <h1>Counter</h1>
            <button
                onClick={() => {
                    setCount(count + 1);
                    console.log(count);

                }}>Value: {count}</button>
        </>
    )
}

export default Counter