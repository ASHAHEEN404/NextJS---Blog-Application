import React from "react";
import Image from "next/image";
function Login() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md p-8 bg-white rounded-lg shadow-lg">
        {/* Heading */}
        <h1 className="mb-6 text-3xl font-bold text-center text-gray-800">
          Login to Your Account
        </h1>

        {/* Login Form */}
        <form className="space-y-6">
          {/* Email Input */}
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Email Address
            </label>
            <input
              type="email"
              name="email"
              required
              className="block w-full px-3 py-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:ring focus:ring-blue-500 focus:border-blue-500"
              placeholder="you@example.com"
            />
          </div>

          {/* Password Input */}
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Password
            </label>
            <input
              type="password"
              name="password"
              required
              className="block w-full px-3 py-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:ring focus:ring-blue-500 focus:border-blue-500"
              placeholder="••••••••"
            />
          </div>

          {/* Remember Me */}
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <input
                type="checkbox"
                id="remember_me"
                name="remember_me"
                className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
              />
              <label
                htmlFor="remember_me"
                className="block ml-2 text-sm text-gray-900"
              >
                Remember me
              </label>
            </div>
            <div className="text-sm">
              <a
                href="#"
                className="font-medium text-blue-600 hover:text-blue-500"
              >
                Forgot your password?
              </a>
            </div>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="flex justify-center w-full px-4 py-2 text-sm font-medium text-white transition duration-150 bg-blue-600 border border-transparent rounded-md hover:bg-blue-700 focus:ring focus:ring-blue-500"
          >
            Sign In
          </button>
        </form>

        {/* Divider */}
        <div className="relative mt-6">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-gray-300"></div>
          </div>
          <div className="relative flex justify-center text-sm">
            <span className="px-2 text-gray-500 bg-white">
              Or continue with
            </span>
          </div>
        </div>

        {/* Social Login */}
        <div className="grid grid-cols-3 gap-3 mt-6">
          <div>
            <a
              href="#"
              className="inline-flex justify-center w-full px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm hover:bg-gray-50"
            >
              <span className="sr-only">Sign in with Facebook</span>
              <Image
                alt="Description"
                width={500}
                height={300}
                priority={true}
                src="/facebook-icon.svg"
                className="w-5 h-5"
              />
            </a>
          </div>

          <div>
            <a
              href="#"
              className="inline-flex justify-center w-full px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm hover:bg-gray-50"
            >
              <span className="sr-only">Sign in with Google</span>
              <Image
                alt="Description"
                width={500}
                height={300}
                priority={true}
                src="/google.svg"
                className="w-5 h-5"
              />
            </a>
          </div>

          <div>
            <a
              href="#"
              className="inline-flex justify-center w-full px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm hover:bg-gray-50"
            >
              <span className="sr-only">Sign in with Twitter</span>
              <Image
                alt="Description"
                width={500}
                height={300}
                priority={true}
                src="/twitterx-icon.svg"
                className="w-5 h-5"
              />
            </a>
          </div>
        </div>

        {/* Signup Link */}
        <p className="mt-6 text-sm text-center text-gray-600">
          Don't have an account?{" "}
          <a href="#" className="font-medium text-blue-600 hover:text-blue-500">
            Sign up
          </a>
        </p>
      </div>
    </div>
  );
}

export default Login;
