<script setup>
import { Button } from '@/components/ui/button';
import { NavigationMenu, NavigationMenuLink, NavigationMenuList } from '@/components/ui/navigation-menu';
</script>

<template>
  <NavigationMenu class="min-w-full bg-gray-900">
    <div class="container py-[1rem]">
      <NavigationMenuList class="flex justify-between">
        <div class="flex items-center gap-6">
          <NavigationMenuLink class="cursor-pointer text-xl">
            <RouterLink :to="{ name: 'home' }">Todo List App</RouterLink>
          </NavigationMenuLink>
          <NavigationMenuLink class="cursor-pointer">
            <RouterLink :to="{ name: 'tasks' }">Tasks</RouterLink>
          </NavigationMenuLink>
          <NavigationMenuLink class="cursor-pointer">
            <RouterLink :to="{ name: 'summary' }">Summary</RouterLink>
          </NavigationMenuLink>
        </div>

        <div class="flex gap-4">
          <Button v-if="!$route.meta.auth" @click="$router.push({ name: 'login' })" variant="outline"> Login </Button>
          <Button v-if="!$route.meta.auth" @click="$router.push({ name: 'register' })"> Register </Button>
          <Button v-if="$route.meta.auth" variant="outline"> Logout </Button>
        </div>
      </NavigationMenuList>
    </div>
  </NavigationMenu>
</template>

<style lang="scss" scoped></style>
