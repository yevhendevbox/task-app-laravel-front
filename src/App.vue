<script setup>
import { ref, onMounted } from "vue";
import { columns } from "@/components/ui/data-table/columns";
import DataTable from "@/components/ui/data-table/DataTable.vue";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Plus } from "lucide-vue-next";
import {
  NavigationMenu,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";

const data = ref([]);

async function getData() {
  // Fetch data from your API here.
  return [
    {
      id: "728ed52f",
      amount: 100,
      status: "pending",
      email: "m@example.com",
    },
    // ...
  ];
}

onMounted(async () => {
  data.value = await getData();
});
</script>

<template>
  <NavigationMenu class="bg-zinc-900 min-w-full">
    <div class="container py-[2rem]">
      <NavigationMenuList class="flex justify-between">
        <NavigationMenuLink class="text-xl">Todo List App</NavigationMenuLink>
        <div class="flex gap-4">
          <Button variant="outline"> Login </Button>
          <Button>Register</Button>
          <Button variant="outline"> Logout </Button>
        </div>
      </NavigationMenuList>
    </div>
  </NavigationMenu>

  <main class="container mx-auto py-[4rem]">
    <div class="relative w-full max-w-sm items-center">
      <Input
        id="add"
        type="text"
        placeholder="Add new task. Please enter to save"
        class="pl-10"
      />
      <span
        class="absolute start-0 inset-y-0 flex items-center justify-center px-2"
      >
        <Plus class="size-6 text-muted-foreground" />
      </span>
    </div>

    <div class="py-10 mx-auto">
      <DataTable :columns="columns" :data="data" />
    </div>
  </main>
</template>

<style scoped></style>
