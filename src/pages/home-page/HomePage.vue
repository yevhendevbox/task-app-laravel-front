<script setup>
import { Button } from '@/components/ui/button';
</script>

<template>
  <div class="container mx-auto py-[4rem] pt-40 text-center">
    <h1 class="my-8 text-8xl font-bold">Stay Organized, be productive</h1>
    <p class="text-2xl tracking-wider">Organize your ideas, and be productive every day</p>

    <div class="my-[4rem] flex justify-center gap-4">
      <Button @click="$router.push({ name: 'register' })" class="px-8 py-6 text-xl">Sign up</Button>
      <Button @click="$router.push({ name: 'login' })" variant="outline" class="px-8 py-6 text-xl">Sign in</Button>
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
