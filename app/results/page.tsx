export default function ResultsPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white p-12">
      <h1 className="text-5xl font-bold mb-10">
        Results
      </h1>

      <div className="space-y-8">

        <div className="border border-slate-700 rounded-xl p-8">
          <h2 className="text-2xl font-bold">IT Framework</h2>
          <p>$0 → $5M Revenue</p>
        </div>

        <div className="border border-slate-700 rounded-xl p-8">
          <h2 className="text-2xl font-bold">NCR</h2>
          <p>$14M Net-New ARR</p>
          <p>$22M Churn Prevented</p>
        </div>

      </div>
    </main>
  );
}