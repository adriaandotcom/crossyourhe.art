<template>
  <div
    class="min-h-screen mx-auto pt-10 pb-6 max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col"
  >
    <Html>
      <Head class="min-h-full">
        <Title>Cross your heart</Title>
        <Meta
          name="description"
          content="Calculate a cross-multiplication without picking up a pen."
        />
        <Link rel="icon" type="image/svg+xml" href="/favicon.svg" />
        <Link rel="icon" type="image/png" href="/favicon.png" />
        <!-- 100% privacy friendly analytics -->
        <Script async src="https://scripts.simpleanalyticscdn.com/latest.js" />
        <Script
          async
          src="https://do6emxrowcwyr.cloudfront.net/instametrics-script.min.js"
          data-instametrics-server-url="https://use.instametrics.app"
          data-instametrics-script-id="dba3bac9-44ed-4aeb-b70a-938a6947f617"
        />
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

    <p class="mt-auto pt-4 text-center text-sm text-indigo-400 space-x-5">
      <a href="https://x.com/adriaandotcom"
        ><ChatBubbleBottomCenterTextIcon
          class="inline mr-1 w-4 h-4"
        />X</a
      >
      <a href="https://adriaan.io/?utm_source=crossyourhe.art"
        ><UserIcon class="inline mr-1 w-4 h-4" />Adriaan</a
      >
      <a
        v-if="GITHUB_SHA"
        :href="`https://github.com/adriaandotcom/crossyourhe.art/commit/${GITHUB_SHA}`"
        ><CodeBracketIcon class="inline mr-1 w-4 h-4" /><code>{{
          GITHUB_SHA.slice(0, 8)
        }}</code></a
      >
      <a v-else href="https://github.com/adriaandotcom/crossyourhe.art"
        ><CodeBracketIcon class="inline mr-1 w-4 h-4" />GitHub</a
      >
      <a
        href="https://simpleanalytics.com/crossyourhe.art?utm_source=crossyourhe.art&amp;utm_content=badge"
        referrerpolicy="origin"
        rel="follow"
        ><ArrowTrendingUpIcon class="inline mr-1 w-4 h-4" />Public Analytics</a
      >
    </p>
  </div>
</template>

<script setup>
import Heart from "@/components/Heart.vue";
import {
  CodeBracketIcon,
  UserIcon,
  ArrowTrendingUpIcon,
  ChatBubbleBottomCenterTextIcon,
} from "@heroicons/vue/24/outline";

const config = useRuntimeConfig();
const { GITHUB_SHA } = config.public;

const theme = ref("neutral");

if (process.client) {
  if (
    window.matchMedia &&
    window.matchMedia("(prefers-color-scheme: dark)").matches
  ) {
    theme.value = "dark";
  }
  window
    .matchMedia("(prefers-color-scheme: dark)")
    .addEventListener("change", (event) => {
      theme.value = event.matches ? "dark" : "neutral";
    });
}
</script>
