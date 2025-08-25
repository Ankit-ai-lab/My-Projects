import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { logOut } from '../../store/slices/authSlice'
import Button from '../ui/Button'

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const { user, role } = useSelector((state) => state.auth)
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const handleLogout = () => {
    dispatch(logOut())
    navigate('/')
  }

  const getDashboardPath = () => {
    if (role === 'candidate') return '/candidate/dashboard'
    if (role === 'recruiter') return '/recruiter/dashboard'
    if (role === 'admin') return '/admin/dashboard'
    return '/'
  }

  return (
    <nav className="bg-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0 flex items-center">
              <img src="/src/assets/logo.svg" alt="HireHub" className="h-8 w-8" />
              <span className="ml-2 text-xl font-bold text-gray-800">HireHub</span>
            </Link>
            <div className="hidden md:ml-6 md:flex md:space-x-8">
              <Link to="/" className="text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium">
                Home
              </Link>
              <Link to="/jobs" className="text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium">
                Jobs
              </Link>
              <Link to="/about" className="text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium">
                About
              </Link>
              <Link to="/contact" className="text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium">
                Contact
              </Link>
            </div>
          </div>

          <div className="hidden md:flex items-center space-x-4">
            {user ? (
              <>
                <Link to={getDashboardPath()} className="text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium">
                  Dashboard
                </Link>
                <Button variant="outline" size="sm" onClick={handleLogout}>
                  Logout
                </Button>
              </>
            ) : (
              <>
                <Link to="/login" className="text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium">
                  Login
                </Link>
                <Link to="/signup">
                  <Button variant="primary" size="sm">
                    Sign Up
                  </Button>
                </Link>
              </>
            )}
          </div>

          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-blue-600 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500"
            >
              <span className="sr-only">Open main menu</span>
              {!isMenuOpen ? (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              ) : (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link to="/" className="text-gray-700 hover:text-blue-600 block px-3 py-2 text-base font-medium">
              Home
            </Link>
            <Link to="/jobs" className="text-gray-700 hover:text-blue-600 block px-3 py-2 text-base font-medium">
              Jobs
            </Link>
            <Link to="/about" className="text-gray-700 hover:text-blue-600 block px-3 py-2 text-base font-medium">
              About
            </Link>
            <Link to="/contact" className="text-gray-700 hover:text-blue-600 block px-3 py-2 text-base font-medium">
              Contact
            </Link>
            {user ? (
              <>
                <Link to={getDashboardPath()} className="text-gray-700 hover:text-blue-600 block px-3 py-2 text-base font-medium">
                  Dashboard
                </Link>
                <button onClick={handleLogout} className="text-gray-700 hover:text-blue-600 block px-3 py-2 text-base font-medium w-full text-left">
                  Logout
                </button>
              </>
            ) : (
              <>
                <Link to="/login" className="text-gray-700 hover:text-blue-600 block px-3 py-2 text-base font-medium">
                  Login
                </Link>
                <Link to="/signup" className="text-gray-700 hover:text-blue-600 block px-3 py-2 text-base font-medium">
                  Sign Up
                </Link>
              </>
            )}
          </div>
        </div>
      )}
    </nav>
  )
}

export default Navbar