<script setup>
import {
  NavigationMenu,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import { Button } from "@/components/ui/button";
</script>

<template>
  <NavigationMenu class="bg-zinc-900 min-w-full">
    <div class="container py-[1rem]">
      <NavigationMenuList class="flex justify-between">
        <div class="flex gap-6 items-center">
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
