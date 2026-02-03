import { useEffect, useState } from "react";
import { jobs as jobData } from "@/data/jobs";
import JobCard from "@/components/JobCard";
import Input from "@/components/Input";

export default function Home() {
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 800);

    return () => clearTimeout(timer);
  }, []);

  const filteredJobs = jobData.filter(
    (job) =>
      job.title.toLowerCase().includes(search.toLowerCase()) ||
      job.company.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <main className="mx-auto max-w-3xl p-6">
      <h1 className="mb-6 text-2xl font-bold">Dawn Jobs</h1>

      <div className="mb-6">
        <Input
          value={search}
          onChange={setSearch}
          placeholder="Search by role or company"
        />
      </div>

      {loading ? (
        <p className="text-sm text-gray-500">Loading jobs…</p>
      ) : filteredJobs.length === 0 ? (
        <p className="text-sm text-gray-500">No jobs found.</p>
      ) : (
        <div className="space-y-4">
          {filteredJobs.map((job) => (
            <JobCard key={job.id} job={job} />
          ))}
        </div>
      )}
    </main>
  );
}
