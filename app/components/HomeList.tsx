import React from "react";
import { Link } from "react-router";
import type { MarkdownEntry } from "~/routes/Home";

const HomeList = ({ list }: { list: MarkdownEntry[] }) => {
  return (
    <table className="w-full [&_td]:px-1 [&_td]:py-0 [&_th]:px-1 [&_th]:py-0">
      <thead>
        <tr className="bg-gray-50">
          <th>Title</th>
          <th>Description</th>
          <th>Date</th>
        </tr>
      </thead>
      <tbody>
        {list.map((entry) => (
          <tr key={entry.slug} className="">
            <td>
              <Link to={`/md/${entry.slug}`}>{entry.title}</Link>
            </td>
            <td>{entry.desc}</td>
            <td>{entry.date}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default HomeList;
