<template>
  <div class="min-h-screen flex bg-slate-50">
    <!-- Sidebar -->
    <aside class="w-64 bg-white border-r border-slate-200 p-4 hidden md:block">
      <div class="text-2xl font-bold mb-8">Dashboard</div>
      <nav class="space-y-2">
        <a href="#" class="block px-3 py-2 rounded-lg hover:bg-slate-100">Overview</a>
        <a href="#" class="block px-3 py-2 rounded-lg hover:bg-slate-100">Users</a>
        <a href="#" class="block px-3 py-2 rounded-lg hover:bg-slate-100">Reports</a>
        <a href="#" class="block px-3 py-2 rounded-lg hover:bg-slate-100">Settings</a>
      </nav>
    </aside>

    <!-- Main content -->
    <div class="flex-1 flex flex-col">
      <!-- Topbar -->
      <header class="bg-white border-b border-slate-200 flex justify-between items-center p-4">
        <h1 class="text-xl font-semibold">Dashboard Overview</h1>
        <div class="flex items-center gap-4">
          <button class="p-2 rounded-md hover:bg-slate-100">🔔</button>
          <div class="flex items-center gap-2">
            <div class="w-8 h-8 rounded-full bg-slate-300"></div>
            <div>
              <p class="text-sm font-medium">Phat Oudompanha</p>
              <p class="text-xs text-slate-400">Admin</p>
            </div>
          </div>
        </div>
      </header>

      <!-- Stats Cards -->
      <main class="p-6 flex-1 overflow-y-auto">
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div class="bg-white p-5 rounded-xl shadow-sm border border-slate-100">
            <h3 class="text-sm text-slate-500">Total Users</h3>
            <p class="text-3xl font-bold mt-2">1,254</p>
            <p class="text-xs text-green-600">↑ 8% from last week</p>
          </div>
          <div class="bg-white p-5 rounded-xl shadow-sm border border-slate-100">
            <h3 class="text-sm text-slate-500">Revenue</h3>
            <p class="text-3xl font-bold mt-2">$12,340</p>
            <p class="text-xs text-green-600">↑ 2% this month</p>
          </div>
          <div class="bg-white p-5 rounded-xl shadow-sm border border-slate-100">
            <h3 class="text-sm text-slate-500">Performance</h3>
            <p class="text-3xl font-bold mt-2">98.7%</p>
            <p class="text-xs text-slate-400">Stable</p>
          </div>
        </div>

        <!-- Charts Section -->
        <div class="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div class="bg-white p-5 rounded-xl shadow-sm border border-slate-100 lg:col-span-2">
            <h2 class="text-lg font-semibold mb-4">Activity Chart</h2>
            <div class="h-64 flex items-center justify-center text-slate-400 border border-dashed rounded-lg">(Chart Placeholder)</div>
          </div>

          <div class="bg-white p-5 rounded-xl shadow-sm border border-slate-100">
            <h2 class="text-lg font-semibold mb-4">Notifications</h2>
            <ul class="space-y-3 text-sm text-slate-600">
              <li>• New user registered</li>
              <li>• Order #4321 completed</li>
              <li>• Server load normal</li>
            </ul>
          </div>
        </div>

        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fuga sit beatae sequi dolores animi eveniet atque laudantium exercitationem at magnam libero non eum aut sed, explicabo laboriosam placeat facilis architecto!</p>
      </main>

      <!-- Footer -->
      <footer class="p-4 text-center text-sm text-slate-500 border-t border-slate-200 bg-white">
        © 2025 Sonnara
        
        Dashboard. All rights reserved.
      </footer>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Dashboard'


  
}
</script>

<style scoped>
body {
  font-family: 'Inter', sans-serif;
}
</style>