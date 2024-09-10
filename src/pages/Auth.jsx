import React from 'react'
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup } from 'firebase/auth'
import { ToastContainer, toast } from 'react-toastify';
import { auth } from '../Firebase';
import { useNavigate } from 'react-router-dom';

const provider = new GoogleAuthProvider();

function Auth() {

    const [email, setEmail] = React.useState('')
    const [password, setPassword] = React.useState('')
    const navigate = useNavigate();

    const loginGoogle = async () => {
        try {
            const response = await signInWithPopup(auth, provider);
            console.log("response", response)

            const credential = GoogleAuthProvider.credentialFromResult(response);
            console.log("credential", credential)

            const user = response.user;
            console.log("user", user)

            if (user) {
                toast.success("giriş Google ile başarılı" + user.displayName);
                navigate("/")
            }

        } catch (error) {

            toast.error(error.message)
        }
    }

    async function handleRegister() {
        try {
            const res = await createUserWithEmailAndPassword(auth, email, password);
            const user = res.user;
            if (user) {
                toast.success("kayıt başarılı");
                setEmail("");
                setPassword("");
            }

        } catch (error) {
            toast.error(error.message)
        }
    }

    const handleLogin = async () => {
        try {
            const res = await signInWithEmailAndPassword(auth, email, password);
            const user = res.user;
            if (user) {
                toast.success("giriş başarılı");
                navigate("/");
            }

        } catch (error) {
            toast.error(error.message)

        }
    }

    return (
        <div className='auth'>
            <h3 className='auth-header'>Giriş Yap / Kaydol</h3>
            <div className='input-div'>
                <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} placeholder='email adresi giriniz' />
                <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder='sifre giriniz' />
            </div>
            <div>
                <button onClick={handleLogin} className='button-custom'>Giriş Yap</button>
                <button onClick={handleRegister} className='button-custom'>Kayıt ol</button>
            </div>
            <div>
                <button onClick={loginGoogle} className='button-google'>Google ile Giriş Yap</button>
            </div>
        </div>
    )
}

export default Auth