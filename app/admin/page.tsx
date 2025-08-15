import { prisma } from "@/lib/prisma";

export const dynamic = "force-dynamic";

export default async function AdminPage() {
  const entrants = await prisma.entrant.findMany({
    orderBy: { createdAt: "desc" }
  });

  function toCSV(rows: any[]) {
    const headers = ["id","createdAt","fullName","email","phone","category","clubTeam","emergencyName","emergencyPhone","consent","notes"];
const esc = (v: any) => {
  if (v === null || v === undefined) return "";
  const s = String(v).replace(/"/g, '""');
  return /[",\n]/.test(s) ? `"${s}"` : s;
};
    const data = [headers.join(",")].concat(rows.map(r => headers.map(h => esc(r[h as keyof typeof r])).join(",")));
    return data.join("\n");
  }

  const csv = toCSV(entrants);

  return (
    <section className="container py-12">
      <h1 className="text-3xl font-bold">Admin — Entrants</h1>
      <p className="mt-2 text-neutral-700">Total: {entrants.length}</p>

      <div className="mt-6 overflow-x-auto">
        <table className="min-w-full text-sm">
          <thead>
            <tr className="text-left border-b">
              <th className="py-2 pr-4">Date</th>
              <th className="py-2 pr-4">Name</th>
              <th className="py-2 pr-4">Email</th>
              <th className="py-2 pr-4">Phone</th>
              <th className="py-2 pr-4">Category</th>
              <th className="py-2 pr-4">Club</th>
              <th className="py-2 pr-4">Emergency</th>
              <th className="py-2 pr-4">Notes</th>
            </tr>
          </thead>
          <tbody>
            {entrants.map(e => (
              <tr key={e.id} className="border-b">
                <td className="py-2 pr-4">{new Date(e.createdAt).toLocaleString()}</td>
                <td className="py-2 pr-4">{e.fullName}</td>
                <td className="py-2 pr-4">{e.email}</td>
                <td className="py-2 pr-4">{e.phone}</td>
                <td className="py-2 pr-4">{e.category}</td>
                <td className="py-2 pr-4">{e.clubTeam}</td>
                <td className="py-2 pr-4">
                  {e.emergencyName} {e.emergencyPhone ? `(${e.emergencyPhone})` : ""}
                </td>
                <td className="py-2 pr-4">{e.notes}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <a
        className="btn mt-6"
        href={`data:text/csv;charset=utf-8,${encodeURIComponent(csv)}`}
        download="entrants.csv"
      >
        Download CSV
      </a>
    </section>
  );
}
