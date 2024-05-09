<script setup>
import { useRouter } from 'vue-router';

import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger
} from '@/components/ui/dropdown-menu';
import { NavigationMenu, NavigationMenuLink, NavigationMenuList } from '@/components/ui/navigation-menu';
import { useAuthStore } from '@/stores/auth';

const router = useRouter();
const store = useAuthStore();

async function logout() {
  await store.handleLogout();
  router.push({ name: 'login' });
}
</script>

<template>
  <NavigationMenu class="min-w-full bg-gray-900">
    <div class="container py-[1rem]">
      <NavigationMenuList class="flex justify-between">
        <div class="flex items-center gap-6">
          <NavigationMenuLink class="cursor-pointer text-xl">
            <RouterLink :to="{ name: 'home' }">Todo List App</RouterLink>
          </NavigationMenuLink>
          <template v-if="store.isLoggedIn">
            <NavigationMenuLink class="cursor-pointer">
              <RouterLink :to="{ name: 'tasks' }">Tasks</RouterLink>
            </NavigationMenuLink>
            <NavigationMenuLink class="cursor-pointer">
              <RouterLink :to="{ name: 'summary' }">Summary</RouterLink>
            </NavigationMenuLink>
          </template>
        </div>

        <div class="flex gap-4">
          <template v-if="!store.isLoggedIn">
            <Button @click="$router.push({ name: 'login' })" variant="outline"> Login </Button>
            <Button @click="$router.push({ name: 'register' })"> Register </Button>
          </template>

          <DropdownMenu v-else>
            <DropdownMenuTrigger>{{ store.user?.name }}</DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuItem @click.prevent="logout">Logout</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </NavigationMenuList>
    </div>
  </NavigationMenu>
</template>

<style lang="scss" scoped></style>
