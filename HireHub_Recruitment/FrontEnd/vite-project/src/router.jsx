import Landing from './pages/Landing'
import Login from './pages/Auth/Login'
import Signup from './pages/Auth/Signup'
import CandidateDashboard from './pages/Candidate/Dashboard'
import Jobs from './pages/Candidate/Jobs'
import JobDetails from './pages/Candidate/JobDetails'
import MyApplications from './pages/Candidate/MyApplications'
import Interviews from './pages/Candidate/Interviews'
import Assessments from './pages/Candidate/Assessments'
import Profile from './pages/Candidate/Profile'
import RecruiterDashboard from './pages/Recruiter/Dashboard'
import PostJob from './pages/Recruiter/PostJob'
import MyJobs from './pages/Recruiter/MyJobs'
import Applications from './pages/Recruiter/Applications'
import RecruiterInterviews from './pages/Recruiter/Interviews'
import RecruiterAssessments from './pages/Recruiter/Assessments'
import Referrals from './pages/Recruiter/Referrals'
import Analytics from './pages/Recruiter/Analytics'
import RecruiterProfile from './pages/Recruiter/Profile'
import AdminDashboard from './pages/Admin/Dashboard'
import Users from './pages/Admin/Users'
import AdminJobs from './pages/Admin/Jobs'
import Settings from './pages/Admin/Settings'
import NotFound from './pages/NotFound'
import Protected from './components/layout/Protected'
import RoleGate from './components/layout/RoleGate'

const router = [
  {
    path: '/',
    element: <Landing />,
  },
  {
    path: '/login',
    element: <Login />,
  },
  {
    path: '/signup',
    element: <Signup />,
  },
  {
    path: '/candidate/dashboard',
    element: (
      <Protected>
        <RoleGate allowedRoles={['candidate']}>
          <CandidateDashboard />
        </RoleGate>
      </Protected>
    ),
  },
  {
    path: '/candidate/jobs',
    element: (
      <Protected>
        <RoleGate allowedRoles={['candidate']}>
          <Jobs />
        </RoleGate>
      </Protected>
    ),
  },
  {
    path: '/candidate/jobs/:id',
    element: (
      <Protected>
        <RoleGate allowedRoles={['candidate']}>
          <JobDetails />
        </RoleGate>
      </Protected>
    ),
  },
  {
    path: '/candidate/applications',
    element: (
      <Protected>
        <RoleGate allowedRoles={['candidate']}>
          <MyApplications />
        </RoleGate>
      </Protected>
    ),
  },
  {
    path: '/candidate/interviews',
    element: (
      <Protected>
        <RoleGate allowedRoles={['candidate']}>
          <Interviews />
        </RoleGate>
      </Protected>
    ),
  },
  {
    path: '/candidate/assessments',
    element: (
      <Protected>
        <RoleGate allowedRoles={['candidate']}>
          <Assessments />
        </RoleGate>
      </Protected>
    ),
  },
  {
    path: '/candidate/profile',
    element: (
      <Protected>
        <RoleGate allowedRoles={['candidate']}>
          <Profile />
        </RoleGate>
      </Protected>
    ),
  },
  {
    path: '/recruiter/dashboard',
    element: (
      <Protected>
        <RoleGate allowedRoles={['recruiter']}>
          <RecruiterDashboard />
        </RoleGate>
      </Protected>
    ),
  },
  {
    path: '/recruiter/post-job',
    element: (
      <Protected>
        <RoleGate allowedRoles={['recruiter']}>
          <PostJob />
        </RoleGate>
      </Protected>
    ),
  },
  {
    path: '/recruiter/my-jobs',
    element: (
      <Protected>
        <RoleGate allowedRoles={['recruiter']}>
          <MyJobs />
        </RoleGate>
      </Protected>
    ),
  },
  {
    path: '/recruiter/applications',
    element: (
      <Protected>
        <RoleGate allowedRoles={['recruiter']}>
          <Applications />
        </RoleGate>
      </Protected>
    ),
  },
  {
    path: '/recruiter/interviews',
    element: (
      <Protected>
        <RoleGate allowedRoles={['recruiter']}>
          <RecruiterInterviews />
        </RoleGate>
      </Protected>
    ),
  },
  {
    path: '/recruiter/assessments',
    element: (
      <Protected>
        <RoleGate allowedRoles={['recruiter']}>
          <RecruiterAssessments />
        </RoleGate>
      </Protected>
    ),
  },
  {
    path: '/recruiter/referrals',
    element: (
      <Protected>
        <RoleGate allowedRoles={['recruiter']}>
          <Referrals />
        </RoleGate>
      </Protected>
    ),
  },
  {
    path: '/recruiter/analytics',
    element: (
      <Protected>
        <RoleGate allowedRoles={['recruiter']}>
          <Analytics />
        </RoleGate>
      </Protected>
    ),
  },
  {
    path: '/recruiter/profile',
    element: (
      <Protected>
        <RoleGate allowedRoles={['recruiter']}>
          <RecruiterProfile />
        </RoleGate>
      </Protected>
    ),
  },
  {
    path: '/admin/dashboard',
    element: (
      <Protected>
        <RoleGate allowedRoles={['admin']}>
          <AdminDashboard />
        </RoleGate>
      </Protected>
    ),
  },
  {
    path: '/admin/users',
    element: (
      <Protected>
        <RoleGate allowedRoles={['admin']}>
          <Users />
        </RoleGate>
      </Protected>
    ),
  },
  {
    path: '/admin/jobs',
    element: (
      <Protected>
        <RoleGate allowedRoles={['admin']}>
          <AdminJobs />
        </RoleGate>
      </Protected>
    ),
  },
  {
    path: '/admin/settings',
    element: (
      <Protected>
        <RoleGate allowedRoles={['admin']}>
          <Settings />
        </RoleGate>
      </Protected>
    ),
  },
  {
    path: '*',
    element: <NotFound />,
  },
]

export default router