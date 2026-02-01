import { jobs } from './jobs'

function App() {
  return (
    <div>
      <h1>Job Board Test</h1>

      {jobs.map(job => (
        <div key={job.id}>
          <h2>{job.title}</h2>
          <p>{job.company}</p>
          <p>{job.location} · {job.type}</p>
        </div>
      ))}
    </div>
  )
}

export default App
