<script setup>
import { Button } from '@/components/ui/button';
import { NavigationMenu, NavigationMenuLink, NavigationMenuList } from '@/components/ui/navigation-menu';
</script>

<template>
  <NavigationMenu class="min-w-full bg-zinc-900">
    <div class="container py-[1rem]">
      <NavigationMenuList class="flex justify-between">
        <div class="flex items-center gap-6">
          <NavigationMenuLink class="text-xl">Todo List App</NavigationMenuLink>
          <NavigationMenuLink>Tasks</NavigationMenuLink>
          <NavigationMenuLink>Summary</NavigationMenuLink>
        </div>
        <div class="flex gap-4">
          <Button variant="outline"> Login </Button>
          <Button>Register</Button>
          <Button variant="outline"> Logout </Button>
        </div>
      </NavigationMenuList>
    </div>
  </NavigationMenu>
</template>

<style lang="scss" scoped></style>
