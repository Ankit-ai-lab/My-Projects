import React from 'react'
import { useParams, Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import Navbar from '../../components/layout/Navbar'
import Sidebar from '../../components/layout/Sidebar'
import Button from '../../components/ui/Button'

const JobDetails = () => {
  const { id } = useParams()
  const job = {
    id: 1,
    title: 'Senior Frontend Developer',
    company: 'Google',
    location: 'Mountain View, CA',
    type: 'full-time',
    salary: '$120,000 - $150,000',
    posted: '2 days ago',
    description: `We are looking for a skilled Frontend Developer to join our team. You will be responsible for building the 'client-side' of our web applications. You should be able to translate our company and customer needs into functional and appealing interactive applications.
    
    Responsibilities:
    - Develop user-facing features using React.js
    - Build reusable components and front-end libraries for future use
    - Translate designs and wireframes into high-quality code
    - Optimize components for maximum performance across a vast array of web-capable devices and browsers
    - Collaborate with back-end developers and web designers to improve usability
    - Get feedback from, and build solutions for, users and customers
    - Write functional requirement documents and guides
    - Help back-end developers with coding and troubleshooting
    - Stay up-to-date on emerging technologies`,
    
    requirements: `- 5+ years of experience with React.js
    - Strong proficiency in JavaScript, including DOM manipulation and the JavaScript object model
    - Thorough understanding of React.js and its core principles
    - Experience with popular React.js workflows (such as Flux or Redux)
    - Familiarity with newer specifications of EcmaScript
    - Experience with data structure libraries (e.g., Immutable.js)
    - Knowledge of isomorphic React is a plus
    - Familiarity with RESTful APIs
    - Knowledge of modern authorization mechanisms, such as JSON Web Token
    - Familiarity with modern front-end build pipelines and tools
    - Experience with common front-end development tools such as Babel, Webpack, NPM, etc.
    - Ability to understand business requirements and translate them into technical requirements
    - A knack for benchmarking and optimization
    - Familiarity with code versioning tools (such as Git)`,
    
    skills: ['React', 'JavaScript', 'CSS', 'HTML', 'Redux', 'TypeScript'],
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <div className="flex">
        <Sidebar role="candidate" />
        <div className="ml-64 flex-1 p-8">
          <Link to="/candidate/jobs" className="text-blue-600 hover:text-blue-500 mb-4 inline-block">
            ← Back to Jobs
          </Link>

          <div className="bg-white p-8 rounded-lg shadow-md">
            <div className="flex justify-between items-start mb-6">
              <div>
                <h1 className="text-3xl font-bold text-gray-900">{job.title}</h1>
                <p className="text-xl text-gray-600 mt-2">{job.company} • {job.location}</p>
                <div className="flex items-center mt-4 space-x-4">
                  <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full">
                    {job.type}
                  </span>
                  <span className="text-gray-600 font-medium">{job.salary}</span>
                  <span className="text-gray-500">{job.posted}</span>
                </div>
              </div>
              <Button variant="primary" size="lg">Apply Now</Button>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2">
                <div className="mb-8">
                  <h2 className="text-2xl font-semibold mb-4">Job Description</h2>
                  <p className="text-gray-700 whitespace-pre-line">{job.description}</p>
                </div>

                <div className="mb-8">
                  <h2 className="text-2xl font-semibold mb-4">Requirements</h2>
                  <p className="text-gray-700 whitespace-pre-line">{job.requirements}</p>
                </div>
              </div>

              <div className="lg:col-span-1">
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-lg font-semibold mb-4">About {job.company}</h3>
                  <p className="text-gray-600 mb-4">
                    Google is a multinational technology company that specializes in Internet-related services and products.
                  </p>
                  <div className="mb-6">
                    <h4 className="font-medium mb-2">Required Skills</h4>
                    <div className="flex flex-wrap gap-2">
                      {job.skills.map((skill, index) => (
                        <span
                          key={index}
                          className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                  <Button variant="outline" className="w-full">Save Job</Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default JobDetails