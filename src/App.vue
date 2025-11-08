<template>
  <div class="min-h-screen flex bg-gradient-to-br from-slate-100 to-slate-200 text-slate-800 font-inter">
    <!-- Sidebar -->
    <aside class="w-72 bg-white/80 backdrop-blur-xl border-r border-slate-200 p-6 hidden md:flex flex-col justify-between shadow-sm">
      <div>
        <div class="text-3xl font-extrabold mb-10 bg-gradient-to-r from-indigo-500 to-blue-500 bg-clip-text text-transparent">
          Dashboard
        </div>
        <nav class="space-y-2">
          <a href="#" class="flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-indigo-50 transition">
            <span class="text-lg">🏠</span> <span>Overview</span>
          </a>
          <a href="#" class="flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-indigo-50 transition">
            <span class="text-lg">👥</span> <span>Users</span>
          </a>
          <a href="#" class="flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-indigo-50 transition">
            <span class="text-lg">📊</span> <span>Reports</span>
          </a>
          <a href="#" class="flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-indigo-50 transition">
            <span class="text-lg">⚙️</span> <span>Settings</span>
          </a>
        </nav>
      </div>

      <div class="border-t border-slate-200 pt-4 text-sm text-slate-500">
        © 2025 Sonnara Admin
      </div>
    </aside>

    <!-- Main content -->
    <div class="flex-1 flex flex-col overflow-hidden">
      <!-- Topbar -->
      <header class="bg-white/70 backdrop-blur-lg border-b border-slate-200 flex justify-between items-center px-8 py-5 shadow-sm">
        <h1 class="text-2xl font-semibold">Dashboard Overview</h1>
        <div class="flex items-center gap-6">
          <button class="p-3 rounded-full hover:bg-slate-100 transition text-xl">🔔</button>
          <div class="flex items-center gap-3">
            <img src="https://i.pravatar.cc/100" alt="avatar" class="w-10 h-10 rounded-full border border-slate-300" />
            <div>
              <p class="font-medium">Sonnara</p>
              <p class="text-sm text-slate-400">Admin</p>
            </div>
          </div>
        </div>
      </header>

      <!-- Content -->
      <main class="p-8 flex-1 overflow-y-auto space-y-10">
        <!-- Stats Cards -->
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div class="bg-white/80 backdrop-blur-lg p-6 rounded-2xl shadow-md border border-slate-100 hover:shadow-lg transition">
            <h3 class="text-slate-500 text-sm">Total Users</h3>
            <p class="text-4xl font-bold mt-3">1,254</p>
            <p class="text-green-600 text-sm mt-1">↑ 8% from last week</p>
          </div>
          <div class="bg-white/80 backdrop-blur-lg p-6 rounded-2xl shadow-md border border-slate-100 hover:shadow-lg transition">
            <h3 class="text-slate-500 text-sm">Revenue</h3>
            <p class="text-4xl font-bold mt-3">$12,340</p>
            <p class="text-green-600 text-sm mt-1">↑ 2% this month</p>
          </div>
          <div class="bg-white/80 backdrop-blur-lg p-6 rounded-2xl shadow-md border border-slate-100 hover:shadow-lg transition">
            <h3 class="text-slate-500 text-sm">Performance</h3>
            <p class="text-4xl font-bold mt-3">98.7%</p>
            <p class="text-slate-500 text-sm mt-1">Stable</p>
          </div>
        </div>

        <!-- Chart + Notifications -->
        <div class="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div class="bg-white/80 backdrop-blur-lg p-6 rounded-2xl shadow-md border border-slate-100 hover:shadow-lg transition lg:col-span-2">
            <h2 class="text-xl font-semibold mb-5">Activity Chart</h2>
            <div class="h-80 flex items-center justify-center text-slate-400 border border-dashed rounded-xl">
              (Chart Placeholder)
            </div>
          </div>

          <div class="bg-white/80 backdrop-blur-lg p-6 rounded-2xl shadow-md border border-slate-100 hover:shadow-lg transition">
            <h2 class="text-xl font-semibold mb-5">Notifications</h2>
            <ul class="space-y-3 text-slate-600 text-base">
              <li>• New user registered</li>
              <li>• Order #4321 completed</li>
              <li>• Server load normal</li>
            </ul>
          </div>
        </div>

        <p class="text-base leading-relaxed text-slate-600">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga sit beatae sequi dolores animi eveniet atque laudantium exercitationem
          at magnam libero non eum aut sed, explicabo laboriosam placeat facilis architecto!
        </p>
      </main>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Dashboard',
}
</script>

<style scoped>
body {
  font-family: 'Inter', sans-serif;
}
</style>
