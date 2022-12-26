<template>
  <div class="mx-auto mt-10 max-w-7xl px-4 sm:px-6 lg:px-8">
    <Html>
      <Head>
        <Link rel="icon" type="image/svg+xml" href="/favicon.svg" />
        <Link rel="icon" type="image/png" href="/favicon.png" />
        <!-- 100% privacy friendly analytics -->
        <Script
          async
          defer
          src="https://scripts.simpleanalyticscdn.com/latest.js"
        ></Script>
      </Head>
    </Html>

    <div class="flex justify-center">
      <Heart class="w-20 mb-2 fill-indigo-300" />
    </div>

    <h1 class="text-center text-3xl font-bold text-indigo-400">
      cross your he<span class="text-indigo-300">art</span>
    </h1>

    <main class="mt-6 text-center">
      <NuxtPage />
    </main>
  </div>
</template>

<script setup>
import Heart from "@/components/Heart.vue";
</script>
