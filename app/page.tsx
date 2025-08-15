export default function Home() {
  return (
    <>
      <section className="container py-20">
        <div className="grid gap-8 lg:grid-cols-2 items-center">
          <div>
            <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight">
              Khomas 100 Gravel Race
            </h1>
            <p className="mt-4 text-lg text-neutral-700">
              Namibia’s signature gravel challenge across the Khomas Hochland. Fast sectors,
              punchy climbs (~2000 m total), and a finish at Gross Barmen Resort.
            </p>
            <div className="mt-6 flex gap-3">
              <a className="btn" href="/register">Enter the Race</a>
              <a className="btn" href="#about">Learn More</a>
            </div>
          </div>
          <div className="card">
            <ul className="grid sm:grid-cols-2 gap-4">
              <li>
                <div className="text-3xl font-bold">23 Aug 2025</div>
                <div className="text-neutral-600">Race Day</div>
              </li>
              <li>
                <div className="text-3xl font-bold">~2000 m</div>
                <div className="text-neutral-600">Elevation Gain</div>
              </li>
              <li>
                <div className="text-3xl font-bold">100 km</div>
                <div className="text-neutral-600">Main Distance</div>
              </li>
              <li>
                <div className="text-3xl font-bold">Windhoek</div>
                <div className="text-neutral-600">Start</div>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section id="about" className="container py-16">
        <div className="card">
          <h2 className="text-2xl font-bold">About the Event</h2>
          <p className="mt-3 text-neutral-700">
            The Khomas 100 welcomes cyclists of all skill levels. Tackle the full course,
            half distance, or a shorter scenic ride—on gravel, MTB, or e-bikes.
            Expect fast rolling terrain mixed with short climbs in the first half of the route.
          </p>
        </div>
      </section>

      <section id="route" className="container py-16">
        <div className="card">
          <h2 className="text-2xl font-bold">Route & Terrain</h2>
          <p className="mt-3 text-neutral-700">
            The course features five notable climbs early on, with gradients averaging 3–4%.
            The longest ascent begins around 8 km (≈9 km at 3.4% average), before the route
            opens into fast gravel and district roads.
          </p>
          <div className="mt-4 text-sm text-neutral-600">
            Tip: Add a GPX map or elevation profile image here.
          </div>
        </div>
      </section>

      <section id="schedule" className="container py-16">
        <div className="card">
          <h2 className="text-2xl font-bold">Schedule</h2>
          <ul className="mt-3 list-disc list-inside text-neutral-700 space-y-1">
            <li>06:00 — Registration & Number Collection</li>
            <li>07:00 — Start</li>
            <li>12:00–15:00 — Expected Finish Window</li>
            <li>15:30 — Podium & Awards</li>
          </ul>
        </div>
      </section>
    </>
  );
}
