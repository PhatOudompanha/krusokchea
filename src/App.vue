<template>
  <div class="min-h-screen flex bg-linear-to-br from-slate-100 to-slate-200 text-slate-800 font-inter">
    <!-- Sidebar -->
    <aside class="w-72 bg-white/80 backdrop-blur-xl border-r border-slate-200 p-6 hidden md:flex flex-col justify-between shadow-sm">
      <div>
        <div class="text-3xl font-extrabold mb-10 bg-linear-to-r from-indigo-500 to-blue-500 bg-clip-text text-transparent">
          Dashboard
        </div>
        <nav class="space-y-2">
          <RouterLink to="/" class="nav-link" active-class="active">🏠 Overview</RouterLink>
          <RouterLink to="/users" class="nav-link" active-class="active">👥 Users</RouterLink>
          <RouterLink to="/reports" class="nav-link" active-class="active">📊 Reports</RouterLink>
          <RouterLink to="/settings" class="nav-link" active-class="active">⚙️ Settings</RouterLink>
        </nav>
      </div>

      <div class="border-t border-slate-200 pt-4 text-sm text-slate-500">
        © 2025 Mrr.Panha Admin
      </div>
    </aside>

    <!-- Main content -->
    <div class="flex-1 flex flex-col overflow-hidden">
      <header class="bg-white/70 backdrop-blur-lg border-b border-slate-200 flex justify-between items-center px-8 py-5 shadow-sm">
        <h1 class="text-2xl font-semibold">Dashboard</h1>
        <div class="flex items-center gap-6">
          <button class="p-3 rounded-full hover:bg-slate-100 transition text-xl">🔔</button>
          <div class="flex items-center gap-3">
            <img src="https://i.pravatar.cc/100" alt="avatar" class="w-10 h-10 rounded-full border border-slate-300" />
            <div>
              <p class="font-medium">Mrr.Panha</p>
              <p class="text-sm text-slate-400">Admin</p>
            </div>
          </div>
        </div>
      </header>

      <main class="p-8 flex-1 overflow-y-auto">
        <RouterView />
      </main>
    </div>
  </div>
</template>

<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>
