import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
import backgroundImage from '../assets/images/login-background.jpg'

function Signup() {

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [error, setError] = useState('')
    const navigate = useNavigate()


    function handleSignup(event) {
        event.preventDefault()

        setError('')

        if (name === '') {
            setError('Please enter your full name')
            return
        }

        if (email === '') {
            setError('Please enter your email')
            return
        }

        if (!email.includes('@')) {
            setError('Please enter a valid email')
            return
        }

        if (password === '') {
            setError('Please enter a password')
            return
        }

        if (password.length < 6) {
            setError('Password must be at least 6 characters')
            return
        }

        if (confirmPassword === '') {
            setError('Please confirm your password')
            return
        }

        if (password !== confirmPassword) {
            setError('Passwords do not match')
            return
        }

        axios.post('http://localhost:5000/signup', {
            name: name,
            email: email,
            password: password
        })
            .then((response) => {
                if (response.data.success === true) {
                    navigate('/')
                }
            })
            .catch(() => {
                setError('Unable to connect to the server')
            })
    }

    return (
        <div
            className="min-h-screen bg-cover bg-no-repeat bg-center flex items-center justify-center p-5"
            style={{
                backgroundImage: `url(${backgroundImage})`,
                backgroundPosition: '20% center'
            }}
        >

            <div className="w-full max-w-md bg-[#FFFDFC] rounded-2xl p-8 ml-auto md:mr-20 lg:mr-72">

                <div className="mb-6">
                    <h1 className="font-serif text-3xl font-semibold text-[#382522]">
                        Create Your Account
                    </h1>

                    <p className="text-[#8B7B76] mt-2">
                        Join us and bring your dream dress to life
                    </p>
                </div>


                <div className="mb-4">
                    <p className="text-[#382522] mb-2">
                        Full Name
                    </p>

                    <input
                        type="text"
                        placeholder="Enter your full name"
                        value={name}
                        onChange={(event) => setName(event.target.value)}
                        className="w-full border border-[#E9DDD6] rounded-lg p-3 outline-none"
                    />
                </div>


                <div className="mb-4">
                    <p className="text-[#382522] mb-2">
                        Email Address
                    </p>

                    <input
                        type="email"
                        placeholder="Enter your email"
                        value={email}
                        onChange={(event) => setEmail(event.target.value)}
                        className="w-full border border-[#E9DDD6] rounded-lg p-3 outline-none"
                    />
                </div>


                <div className="mb-4">
                    <p className="text-[#382522] mb-2">
                        Password
                    </p>

                    <input
                        type="password"
                        placeholder="Enter your password"
                        value={password}
                        onChange={(event) => setPassword(event.target.value)}
                        className="w-full border border-[#E9DDD6] rounded-lg p-3 outline-none"
                    />
                </div>


                <div className="mb-5">
                    <p className="text-[#382522] mb-2">
                        Confirm Password
                    </p>

                    <input
                        type="password"
                        placeholder="Confirm your password"
                        value={confirmPassword}
                        onChange={(event) => setConfirmPassword(event.target.value)}
                        className="w-full border border-[#E9DDD6] rounded-lg p-3 outline-none"
                    />
                </div>

                {error && (
                    <p className="text-red-600 text-sm mb-4">
                        {error}
                    </p>
                )}

                <button
                    type="button"
                    onClick={handleSignup}
                    className="w-full bg-[#98676A] hover:bg-[#805255] text-white py-3 rounded-full"
                >
                    Create Account
                </button>


                <p className="text-center text-sm text-[#8B7B76] mt-6">
                    Already have an account?

                    <Link
                        to="/"
                        className="ml-2 text-[#805255] font-semibold hover:underline"
                    >
                        Login
                    </Link>
                </p>

            </div>

        </div>
    )
}

export default Signup

