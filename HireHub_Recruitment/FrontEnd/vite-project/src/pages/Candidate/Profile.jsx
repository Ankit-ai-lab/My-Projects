import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import Navbar from '../../components/layout/Navbar'
import Sidebar from '../../components/layout/Sidebar'
import Input from '../../components/ui/Input'
import Button from '../../components/ui/Button'

const Profile = () => {
  const { user } = useSelector((state) => state.auth)
  const [isEditing, setIsEditing] = useState(false)

  const [profile, setProfile] = useState({
    firstName: 'John',
    lastName: 'Doe',
    email: 'john.doe@example.com',
    phone: '+1 (555) 123-4567',
    location: 'San Francisco, CA',
    title: 'Senior Frontend Developer',
    bio: 'Experienced frontend developer with 5+ years of expertise in React, JavaScript, and modern web technologies. Passionate about creating responsive and accessible web applications.',
    skills: ['React', 'JavaScript', 'TypeScript', 'CSS', 'HTML', 'Redux'],
    experience: [
      {
        id: 1,
        title: 'Senior Frontend Developer',
        company: 'TechCorp Inc.',
        period: '2020 - Present',
        description: 'Lead frontend development for multiple client projects using React and TypeScript.'
      },
      {
        id: 2,
        title: 'Frontend Developer',
        company: 'WebSolutions Ltd.',
        period: '2018 - 2020',
        description: 'Developed and maintained responsive web applications for various clients.'
      }
    ],
    education: [
      {
        id: 1,
        degree: 'Bachelor of Science in Computer Science',
        school: 'University of California',
        period: '2014 - 2018'
      }
    ]
  })

  const handleSave = () => {
    setIsEditing(false)
    // Here you would typically save the profile data to your backend
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <div className="flex">
        <Sidebar role="candidate" />
        <div className="ml-64 flex-1 p-8">
          <div className="mb-8 flex justify-between items-center">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">My Profile</h1>
              <p className="text-gray-600">Manage your professional information</p>
            </div>
            <Button
              variant={isEditing ? 'success' : 'primary'}
              onClick={() => isEditing ? handleSave() : setIsEditing(true)}
            >
              {isEditing ? 'Save Changes' : 'Edit Profile'}
            </Button>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Profile Info */}
            <div className="lg:col-span-2">
              <div className="bg-white p-6 rounded-lg shadow-md mb-6">
                <h2 className="text-xl font-semibold mb-4">Personal Information</h2>
                <div className="grid grid-cols-2 gap-4 mb-4">
                  <Input
                    label="First Name"
                    value={profile.firstName}
                    onChange={(e) => setProfile({...profile, firstName: e.target.value})}
                    disabled={!isEditing}
                  />
                  <Input
                    label="Last Name"
                    value={profile.lastName}
                    onChange={(e) => setProfile({...profile, lastName: e.target.value})}
                    disabled={!isEditing}
                  />
                </div>
                <div className="grid grid-cols-2 gap-4 mb-4">
                  <Input
                    label="Email"
                    type="email"
                    value={profile.email}
                    onChange={(e) => setProfile({...profile, email: e.target.value})}
                    disabled={!isEditing}
                  />
                  <Input
                    label="Phone"
                    value={profile.phone}
                    onChange={(e) => setProfile({...profile, phone: e.target.value})}
                    disabled={!isEditing}
                  />
                </div>
                <Input
                  label="Location"
                  value={profile.location}
                  onChange={(e) => setProfile({...profile, location: e.target.value})}
                  disabled={!isEditing}
                />
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md mb-6">
                <h2 className="text-xl font-semibold mb-4">Professional Summary</h2>
                <div className="mb-4">
                  <Input
                    label="Professional Title"
                    value={profile.title}
                    onChange={(e) => setProfile({...profile, title: e.target.value})}
                    disabled={!isEditing}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Bio</label>
                  <textarea
                    value={profile.bio}
                    onChange={(e) => setProfile({...profile, bio: e.target.value})}
                    disabled={!isEditing}
                    rows={4}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <h2 className="text-xl font-semibold mb-4">Work Experience</h2>
                {profile.experience.map((exp) => (
                  <div key={exp.id} className="mb-4 last:mb-0 p-4 border border-gray-200 rounded-md">
                    <div className="flex justify-between items-start">
                      <div>
                        <h3 className="font-semibold">{exp.title}</h3>
                        <p className="text-gray-600">{exp.company}</p>
                        <p className="text-sm text-gray-500">{exp.period}</p>
                      </div>
                      {isEditing && (
                        <Button variant="danger" size="sm">Remove</Button>
                      )}
                    </div>
                    <p className="mt-2 text-gray-700">{exp.description}</p>
                  </div>
                ))}
                {isEditing && (
                  <Button variant="outline" className="mt-4">+ Add Experience</Button>
                )}
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="bg-white p-6 rounded-lg shadow-md mb-6">
                <h2 className="text-xl font-semibold mb-4">Skills</h2>
                <div className="flex flex-wrap gap-2">
                  {profile.skills.map((skill, index) => (
                    <span
                      key={index}
                      className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
                {isEditing && (
                  <div className="mt-4">
                    <Input
                      placeholder="Add a skill and press Enter"
                      onKeyPress={(e) => {
                        if (e.key === 'Enter') {
                          e.preventDefault()
                          const newSkill = e.target.value.trim()
                          if (newSkill && !profile.skills.includes(newSkill)) {
                            setProfile({
                              ...profile,
                              skills: [...profile.skills, newSkill]
                            })
                            e.target.value = ''
                          }
                        }
                      }}
                    />
                  </div>
                )}
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <h2 className="text-xl font-semibold mb-4">Education</h2>
                {profile.education.map((edu) => (
                  <div key={edu.id} className="mb-4 last:mb-0">
                    <h3 className="font-semibold">{edu.degree}</h3>
                    <p className="text-gray-600">{edu.school}</p>
                    <p className="text-sm text-gray-500">{edu.period}</p>
                  </div>
                ))}
                {isEditing && (
                  <Button variant="outline" className="mt-4">+ Add Education</Button>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Profile