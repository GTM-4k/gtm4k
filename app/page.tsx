export default function Home() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">

      <section className="max-w-7xl mx-auto px-8 py-24">

        <h1 className="text-6xl font-bold mb-6">
          Build a Revenue Engine That Scales
        </h1>

        <p className="text-xl text-slate-300 max-w-3xl mb-12">
          Enterprise Sales Leadership, Revenue Operations,
          and GTM Strategy for SaaS, Healthcare Technology,
          MSPs, and Founder-Led Companies.
        </p>

        <a
          href="#contact"
          className="bg-emerald-500 hover:bg-emerald-600 px-8 py-4 rounded-lg font-semibold"
        >
          Book a Strategy Session
        </a>

      </section>

      <section className="max-w-7xl mx-auto px-8 py-16">

        <div className="grid md:grid-cols-4 gap-6">

          <div className="border border-slate-700 p-6 rounded-xl">
            <h3 className="text-3xl font-bold">$14M</h3>
            <p>Net-New ARR Generated</p>
          </div>

          <div className="border border-slate-700 p-6 rounded-xl">
            <h3 className="text-3xl font-bold">$22M</h3>
            <p>Enterprise Churn Prevented</p>
          </div>

          <div className="border border-slate-700 p-6 rounded-xl">
            <h3 className="text-3xl font-bold">$0 → $5M</h3>
            <p>Revenue Built</p>
          </div>

          <div className="border border-slate-700 p-6 rounded-xl">
            <h3 className="text-3xl font-bold">18+</h3>
            <p>Years Revenue Leadership</p>
          </div>

        </div>

      </section>

      <section className="max-w-7xl mx-auto px-8 py-20">

        <h2 className="text-4xl font-bold mb-8">
          Services
        </h2>

        <div className="grid md:grid-cols-2 gap-8">

          <div className="bg-slate-900 p-8 rounded-xl">
            <h3 className="text-2xl font-semibold mb-4">
              Fractional CRO
            </h3>

            <p>
              Executive revenue leadership without
              the full-time executive cost.
            </p>
          </div>

          <div className="bg-slate-900 p-8 rounded-xl">
            <h3 className="text-2xl font-semibold mb-4">
              GTM Architecture
            </h3>

            <p>
              Sales process, forecasting,
              CRM design, and revenue operations.
            </p>
          </div>

        </div>

      </section>

      <section
        id="contact"
        className="max-w-7xl mx-auto px-8 py-20"
      >
        <h2 className="text-4xl font-bold mb-6">
          Contact
        </h2>

        <p>Evan McDonald</p>
        <p>evan4k@gmail.com</p>
        <p>(832) 769-1523</p>

      </section>

    </main>
  );
}