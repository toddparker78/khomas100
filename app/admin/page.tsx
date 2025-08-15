import { prisma } from "../../lib/prisma";
import type { Entrant } from "@prisma/client";

export default async function AdminPage() {
  // Fetch all entrants from the database
  const entrants: Entrant[] = await prisma.entrant.findMany({
    orderBy: { createdAt: "desc" },
  });

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Admin Dashboard</h1>
      <p className="mb-6 text-neutral-700">
        Here you can see all the entries submitted.
      </p>

      <div className="overflow-x-auto">
        <table className="min-w-full border border-neutral-300">
          <thead className="bg-neutral-100">
            <tr>
              <th className="py-2 px-4 text-left">Submitted At</th>
              <th className="py-2 px-4 text-left">Full Name</th>
              <th className="py-2 px-4 text-left">Email</th>
              <th className="py-2 px-4 text-left">Phone</th>
              <th className="py-2 px-4 text-left">Category</th>
              <th className="py-2 px-4 text-left">Club / Team</th>
              <th className="py-2 px-4 text-left">Emergency Name</th>
              <th className="py-2 px-4 text-left">Emergency Phone</th>
            </tr>
          </thead>
          <tbody>
            {entrants.map((e: Entrant) => (
              <tr key={e.id} className="border-b">
                <td className="py-2 px-4">{new Date(e.createdAt).toLocaleString()}</td>
                <td className="py-2 px-4">{e.fullName}</td>
                <td className="py-2 px-4">{e.email}</td>
                <td className="py-2 px-4">{e.phone ?? "-"}</td>
                <td className="py-2 px-4">{e.category}</td>
                <td className="py-2 px-4">{e.clubTeam ?? "-"}</td>
                <td className="py-2 px-4">{e.emergencyName}</td>
                <td className="py-2 px-4">{e.emergencyPhone}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

