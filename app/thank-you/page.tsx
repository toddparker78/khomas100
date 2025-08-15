export default function ThankYou() {
  return (
    <section className="container py-20">
      <div className="max-w-2xl mx-auto card text-center">
        <h1 className="text-3xl font-bold">Thanks for entering!</h1>
        <p className="mt-2 text-neutral-700">
          We’ve received your details. Keep an eye on your inbox for race updates.
        </p>
        <a className="btn mt-6" href="/">Back to Home</a>
      </div>
    </section>
  )
}
