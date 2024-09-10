import { onAuthStateChanged } from 'firebase/auth'
import React, { useEffect } from 'react'
import { auth } from '../Firebase'

function Home() {
    const [user, setUser] = React.useState(null)
    useEffect(() => {
        onAuthStateChanged(auth, (userGoogle) => {

            if (userGoogle) {
                setUser(userGoogle)
            }

        })


    }, [])

    return (
        <div style={{ textAlign: 'center', fontSize: '30px', marginTop: '100px' }}>Hoşgeldin {user?.displayName}</div>
    )
}

export default Home