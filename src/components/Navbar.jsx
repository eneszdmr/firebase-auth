import { signOut } from 'firebase/auth'
import React from 'react'
import { auth } from '../Firebase'
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

function Navbar() {
    const navigate = useNavigate()

    const handleSignOut = () => {
        signOut(auth)
        setTimeout(() => {
            toast.success('Cıkış Yapıldı');
            navigate('/auth');
        }, 3000);

    }
    return (
        <div className='navbar'>
            <div className='navbar-left'>Firebase</div>
            <div onClick={handleSignOut} className='navbar-right'>Çıkış</div>
        </div>
    )
}

export default Navbar