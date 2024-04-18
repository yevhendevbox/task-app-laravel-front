<script setup>
import { Button } from '@/components/ui/button';
import { NavigationMenu, NavigationMenuLink, NavigationMenuList } from '@/components/ui/navigation-menu';
</script>

<template>
  <NavigationMenu class="min-w-full bg-gray-900">
    <div class="container py-[1rem]">
      <NavigationMenuList class="flex justify-between">
        <div class="flex items-center gap-6">
          <NavigationMenuLink @click="$router.push({ name: 'home' })" class="cursor-pointer text-xl">
            Todo List App
          </NavigationMenuLink>
          <NavigationMenuLink @click="$router.push({ name: 'tasks' })" class="cursor-pointer">
            Tasks
          </NavigationMenuLink>
          <NavigationMenuLink @click="$router.push({ name: 'summary' })" class="cursor-pointer">
            Summary
          </NavigationMenuLink>
        </div>

        <div class="flex gap-4">
          <Button @click="$router.push({ name: 'login' })" variant="outline"> Login </Button>
          <Button @click="$router.push({ name: 'register' })"> Register </Button>
          <Button variant="outline"> Logout </Button>
        </div>
      </NavigationMenuList>
    </div>
  </NavigationMenu>
</template>

<style lang="scss" scoped></style>
