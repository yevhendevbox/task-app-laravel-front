<script setup></script>

<template>
  <div class="container mx-auto py-[4rem]">
    <h1 class="text-center text-2xl font-bold">404</h1>
    <p class="text-center text-lg font-bold">
      Ooops, the page <code>{{ $route.params.pathMatch[0] }}</code> you are looking for, not found
    </p>

    <RouterLink :to="{ name: 'tasks' }">Return to tasks</RouterLink>
  </div>
</template>

<style lang="scss" scoped></style>
