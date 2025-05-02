import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

export default function Protected({ children, authentication = true }) {
    const navigate = useNavigate()
    const [loader, setLoader] = useState(true)
    const authStatus = useSelector(state => state.auth.status)

    useEffect(() => {
        // Check authentication status and navigate accordingly
        if (authentication && authStatus !== authentication) {
            navigate("/login")
        } else if (!authentication && authStatus !== authentication) {
            navigate("/")
        }
        // Disable loader once the navigation logic is processed
        setLoader(false)
    }, [authStatus, navigate, authentication]) // Add dependencies

    // Display loading text if still processing, otherwise render the children
    return loader ? <h1>Loading...</h1> : <>{children}</>
}
