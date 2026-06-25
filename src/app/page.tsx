export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-12 bg-forge-black text-forge-text">
      <div className="text-center space-y-6">
        <h1 className="text-6xl font-extrabold tracking-tighter">
          IRON<span className="text-forge-accent">LOG</span>
        </h1>
        <p className="text-forge-textMuted text-xl max-w-md mx-auto">
          The technical instrument for elite progression.
        </p>
        <div className="flex gap-4 justify-center">
          <button className="btn-forge-primary">Start Session</button>
          <button className="btn-forge-secondary">View History</button>
        </div>
      </div>
      <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-5xl">
        <div className="card-forge">
          <h3 className="text-lg font-bold mb-2">Zero-Latency</h3>
          <p className="text-forge-textMuted text-sm">Log sets in milliseconds. No fluff, just data.</p>
        </div>
        <div className="card-forge">
          <h3 className="text-lg font-bold mb-2">Precision Tracking</h3>
          <p className="text-forge-textMuted text-sm">Automatic E1RM and volume calculations.</p>
        </div>
        <div className="card-forge">
          <h3 className="text-lg font-bold mb-2">Digital Forge</h3>
          <p className="text-forge-textMuted text-sm">High-contrast UI designed for the gym floor.</p>
        </div>
      </div>
    </main>
  );
}
