import { Job } from "@/data/jobs";

type JobCardProps = {
  job: Job;
};

export default function JobCard({ job }: JobCardProps) {
  return (
    <div className="rounded-lg border p-4 hover:shadow-sm transition">
      <h2 className="text-lg font-semibold">{job.title}</h2>
      <p className="text-sm text-gray-600">{job.company}</p>
      <p className="text-sm text-gray-500">{job.location}</p>

      <div className="mt-2 flex gap-2 flex-wrap">
        {job.tags.map((tag) => (
          <span
            key={tag}
            className="rounded bg-gray-100 px-2 py-1 text-xs text-gray-700"
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
}
