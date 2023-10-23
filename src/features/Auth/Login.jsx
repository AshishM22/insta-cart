import { useState } from "react"
import { Link } from "react-router-dom"

const Login = () => {
  return (
    <div className="flex h-screen w-screen mx-auto flex-1 flex-col justify-center items-center px-6 py-12 lg:px-8 bg-black">
      <div className="flex justify-center items-center text-white mb-5 ">
        <img
          className=" h-10 w-10"
          src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
          alt="Your Company"
        />
        <h2 className="text-2xl font-bold m-2">InstaCart</h2>
      </div>

      <LoginContainer />
    </div>
  )
}

const LoginContainer = () => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault()

    // We will process with authorization with backend
  }
  return (
    <div className="flex flex-col items-centers md:max-w-lg p-4 justify-center  bg-custom-blue text-white  rounded-lg   sm:leading-6">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight">
          Sign in to your account
        </h2>
      </div>

      <div className="mt-3 sm:mx-auto sm:w-full sm:max-w-sm">
        <form
          className="space-y-6"
          action="#"
          method="POST"
          onSubmit={handleSubmit}
        >
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium leading-6"
            >
              Email address
            </label>
            <div className="mt-2">
              <input
                id="email"
                name="email"
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          <div>
            <div className="flex items-center justify-between">
              <label
                htmlFor="password"
                className="block text-sm font-medium leading-6 "
              >
                Password
              </label>
            </div>
            <div className="mt-2">
              <input
                id="password"
                name="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
            <div className="text-sm mt-1">
              <a
                href="#"
                className="font-semibold text-indigo-600 hover:text-indigo-500 "
              >
                Forgot password?
              </a>
            </div>
          </div>

          <div>
            <button
              disabled={email && password}
              type="submit"
              className={`flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600
                ${
                  !(email && password)
                    ? "cursor-not-allowed opacity-50"
                    : "cursor-pointer"
                }`}
            >
              Sign in
            </button>
          </div>
        </form>

        <p className="mt-10 text-center text-sm text-gray-500">
          Dont't have an account yet?{" "}
          <Link
            to="/signup"
            className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500"
          >
            Sign Up
          </Link>
        </p>
      </div>
    </div>
  )
}

export default Login
