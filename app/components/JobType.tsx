import type { JobType } from "~/types";

const JobTypeComp = ({ type }: { type?: JobType }) => {
  switch (type) {
    case "Internship":
      return (
        <span className="rounded-md bg-green-100 px-1 py-0.5 text-green-700">
          {type}
        </span>
      );
    case "Job":
      return (
        <span className="rounded-md bg-purple-100 px-1 py-0.5 text-purple-700">
          {type}
        </span>
      );
    case "Student Job":
      return (
        <span className="rounded-md bg-blue-100 px-1 py-0.5 text-blue-700">
          {type}
        </span>
      );
  }
};

export default JobTypeComp;
