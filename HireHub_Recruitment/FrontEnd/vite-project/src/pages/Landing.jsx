import React from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../components/layout/Navbar'
import Button from '../components/ui/Button'

const Landing = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <Navbar />
      
      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Find Your Dream Job with{' '}
            <span className="text-blue-600">HireHub</span>
          </h1>
          <p className="text-xl text-gray-600 mb-10 max-w-3xl mx-auto">
            Connect with top companies and discover opportunities that match your skills and aspirations. 
            Our AI-powered platform makes job hunting smarter and more efficient.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/signup">
              <Button size="lg" variant="primary">
                Get Started
              </Button>
            </Link>
            <Link to="/jobs">
              <Button size="lg" variant="outline">
                Browse Jobs
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Why Choose HireHub?
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🚀</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">Smart Matching</h3>
              <p className="text-gray-600">
                Our AI algorithm matches you with the perfect job based on your skills, experience, and preferences.
              </p>
            </div>
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">💼</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">Top Companies</h3>
              <p className="text-gray-600">
                Get access to exclusive job opportunities from leading companies across various industries.
              </p>
            </div>
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">📊</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">Career Insights</h3>
              <p className="text-gray-600">
                Track your application progress and get valuable insights to improve your job search strategy.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-blue-600 mb-2">50K+</div>
              <div className="text-gray-600">Active Jobs</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-green-600 mb-2">10K+</div>
              <div className="text-gray-600">Companies</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-purple-600 mb-2">1M+</div>
              <div className="text-gray-600">Candidates</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-orange-600 mb-2">95%</div>
              <div className="text-gray-600">Success Rate</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-600">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Ready to Transform Your Career?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Join thousands of professionals who have found their dream jobs through HireHub. 
            Start your journey today.
          </p>
          <Link to="/signup">
            <Button size="lg" variant="secondary">
              Create Free Account
            </Button>
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-4">HireHub</h3>
              <p className="text-gray-400">
                Connecting talent with opportunity through innovative recruitment solutions.
              </p>
            </div>
            <div>
              <h4 className="text-sm font-semibold uppercase tracking-wider mb-4">For Candidates</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-white">Browse Jobs</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Career Advice</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Resume Builder</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-sm font-semibold uppercase tracking-wider mb-4">For Employers</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-white">Post a Job</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Browse Candidates</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Recruiting Solutions</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-sm font-semibold uppercase tracking-wider mb-4">Company</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-white">About Us</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Contact</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Privacy Policy</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Terms of Service</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>© 2023 HireHub. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Landing