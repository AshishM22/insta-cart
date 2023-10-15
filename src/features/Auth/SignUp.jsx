import React, { useState } from "react"
import TextField from "@mui/material/TextField"
import Paper from "@mui/material/Paper"
import { Link } from "react-router-dom"

const SignUp = () => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault()

    // We will perform our Sign up logic here once we set upour backend
  }

  const paperStyle = {
    padding: "20px",
    width: "400px",
    margin: "0 auto",
    background: "rgba(0, 0, 0, 0.01)", // Slightly darker background color
  }

  const containerStyle = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    minHeight: "100vh",
  }

  return (
    <div style={containerStyle}>
      <Paper elevation={3} style={paperStyle}>
        {/* Apply Paper component with elevation */}
        <h1 className="text-center mb-3 text-2xl">Sign Up</h1>
        <form className="space-y-6" method="POST" onSubmit={handleSubmit}>
          <TextField
            label="Email address"
            variant="outlined"
            fullWidth
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email address"
          />
          <TextField
            label="Password"
            variant="outlined"
            type="password"
            fullWidth
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter your password"
          />
          <TextField
            label="Confirm Password"
            variant="outlined"
            type="password"
            fullWidth
            required
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            placeholder="Confirm password"
          />
          {/* ... Your button ... */}
          <button
            type="submit"
            disabled={email && password && confirmPassword}
            className={`flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600
            ${
              !(email && password && confirmPassword)
                ? "cursor-not-allowed opacity-50"
                : ""
            }
            `}
          >
            Sign in
          </button>
        </form>
        <p className="mt-10 text-center text-sm text-gray-500">
          Already have an account?{" "}
          <Link
            to="/login"
            className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500"
          >
            Sign in
          </Link>
        </p>
      </Paper>
    </div>
  )
}

export default SignUp
