"use client";
import { useState } from "react";

export default function RegisterPage() {
  const [pending, setPending] = useState(false);
  const [ok, setOk] = useState<string | null>(null);
  const [err, setErr] = useState<string | null>(null);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setPending(true); setErr(null); setOk(null);
    const form = e.currentTarget;
    const formData = new FormData(form);
    const res = await fetch("/api/register", {
      method: "POST",
      body: formData,
    });
    if (res.ok) {
      setOk("Registration received. Check your email for event info.");
      form.reset();
    } else {
      setErr("Something went wrong. Please try again.");
    }
    setPending(false);
  }

  return (
    <section className="container py-12">
      <div className="max-w-3xl mx-auto card">
        <h1 className="text-3xl font-bold">Enter the Race</h1>
        <p className="mt-2 text-neutral-700">
          Fill in your details below. Your entry will appear in the admin dashboard.
        </p>

        <form onSubmit={onSubmit} className="mt-6 grid gap-4">
          <div className="grid sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium">Full Name</label>
              <input name="fullName" required className="w-full border p-2 rounded-lg" />
            </div>
            <div>
              <label className="block text-sm font-medium">Email</label>
              <input type="email" name="email" required className="w-full border p-2 rounded-lg" />
            </div>
          </div>
          <div className="grid sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium">Phone</label>
              <input name="phone" className="w-full border p-2 rounded-lg" />
            </div>
            <div>
              <label className="block text-sm font-medium">Category</label>
              <select name="category" required className="w-full border p-2 rounded-lg">
                <option value="">Select a category</option>
                <option>Elite</option>
                <option>U23</option>
                <option>Veteran</option>
                <option>Open</option>
                <option>E-bike</option>
                <option>Half Distance</option>
                <option>Short Ride</option>
              </select>
            </div>
          </div>
          <div className="grid sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium">Club / Team (optional)</label>
              <input name="clubTeam" className="w-full border p-2 rounded-lg" />
            </div>
            <div>
              <label className="block text-sm font-medium">Emergency Contact Name</label>
              <input name="emergencyName" className="w-full border p-2 rounded-lg" />
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium">Emergency Contact Phone</label>
            <input name="emergencyPhone" className="w-full border p-2 rounded-lg" />
          </div>
          <div className="flex items-start gap-2">
            <input type="checkbox" name="consent" value="on" className="mt-1" required />
            <p className="text-sm text-neutral-700">
              I agree to the race waiver and data policy.
            </p>
          </div>

          <button disabled={pending} className="btn mt-2">
            {pending ? "Submitting..." : "Submit Entry"}
          </button>

          {ok && <p className="text-green-700">{ok}</p>}
          {err && <p className="text-red-700">{err}</p>}
        </form>
      </div>
    </section>
  );
}
