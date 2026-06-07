import React, { useEffect } from 'react'

const Navbar = ({ color }) => {

    // Case 1: Run on every render , yani jab bhi aapke page mai kuchh bhi change hoga toh yeh chalega 
    useEffect(() => {
        alert("Hey I will run on every render")
    })

    // Case 2: Run only on first render , yani ye jab pahli bar page reload hoga toh ye chalega 
    useEffect(() => {
        alert("Hey welcome to my page. This is the first render")
    }, [])

    // Case 3: Run only when certain values change , yani color changed huaa hai toh ye chalega 
    useEffect(() => {
        alert("Hey I am running because color was changed")
    }, [color])

    // Example of Cleanup function
    // useEffect(() => {
    //     alert("Hey welcome to my page. This is the first render of app.jsx")

    //     return () => {
    //         alert("components was unmounted")
    //     }
    // },[])


    return (
        <div>
            I am Navbar of {color} color heee...
        </div>
    )
}

export default Navbar
