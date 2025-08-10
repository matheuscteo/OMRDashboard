<script lang="ts" setup></script>
<template>
  <div class="min-h-screen bg-slate-50 text-slate-800">
    <header class="border-b bg-white w-full">
      <div class="px-6 py-4 flex items-center justify-between">
        <h1 class="text-xl font-semibold">OMR Reviews — Vendor Intelligence</h1>
        <NavBar />
      </div>
    </header>

    <main class="mx-auto max-w-7xl px-6 py-8">
      <slot />
    </main>
  </div>
</template>
