export function DashboardPage() {
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold text-slate-900">Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-lg border border-slate-200 shadow-sm">
          <div className="text-sm text-slate-500 font-medium">Total Posts</div>
          <div className="text-3xl font-bold text-slate-900 mt-2">12</div>
        </div>
        <div className="bg-white p-6 rounded-lg border border-slate-200 shadow-sm">
          <div className="text-sm text-slate-500 font-medium">Total Views</div>
          <div className="text-3xl font-bold text-slate-900 mt-2">1,234</div>
        </div>
        <div className="bg-white p-6 rounded-lg border border-slate-200 shadow-sm">
          <div className="text-sm text-slate-500 font-medium">Status</div>
          <div className="text-3xl font-bold text-green-600 mt-2">Healthy</div>
        </div>
      </div>
    </div>
  );
}
