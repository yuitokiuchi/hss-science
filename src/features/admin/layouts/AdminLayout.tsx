import { Outlet } from 'react-router-dom';
import { LayoutDashboard, FileText, Settings, LogOut } from 'lucide-react';

export function AdminLayout() {
  return (
    <div className="min-h-screen flex bg-slate-50">
      {/* Sidebar */}
      <aside className="w-64 bg-slate-900 text-slate-300 flex-shrink-0 hidden md:flex flex-col">
        <div className="h-16 flex items-center px-6 font-bold text-white border-b border-slate-800">
          Science Admin
        </div>
        <nav className="flex-1 p-4 space-y-1">
          <a href="/admin" className="flex items-center gap-3 px-3 py-2 rounded-md bg-slate-800 text-white">
            <LayoutDashboard className="w-5 h-5" />
            Dashboard
          </a>
          <a href="/admin/posts" className="flex items-center gap-3 px-3 py-2 rounded-md hover:bg-slate-800 hover:text-white transition-colors">
            <FileText className="w-5 h-5" />
            Posts
          </a>
          <a href="/admin/settings" className="flex items-center gap-3 px-3 py-2 rounded-md hover:bg-slate-800 hover:text-white transition-colors">
            <Settings className="w-5 h-5" />
            Settings
          </a>
        </nav>
        <div className="p-4 border-t border-slate-800">
          <button className="flex items-center gap-3 px-3 py-2 w-full text-left hover:text-white transition-colors cursor-pointer">
            <LogOut className="w-5 h-5" />
            Sign Out
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        <header className="h-16 bg-white border-b border-slate-200 flex items-center justify-between px-6 md:hidden">
          <div className="font-bold text-slate-900">Science Admin</div>
          {/* Mobile menu trigger would go here */}
        </header>
        <main className="flex-1 p-6 overflow-auto">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
