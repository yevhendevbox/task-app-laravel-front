<script setup>
import { Plus } from 'lucide-vue-next';

import { Input } from '@/components/ui/input';
import { useTaskStore } from '@/stores/taskStore';

const store = useTaskStore();
const { create } = store;

async function add($event) {
  if (!$event.target.value) return;

  const payload = {
    name: $event.target.value.trim()
  };
  $event.target.value = '';

  await create(payload);
}
</script>

<template>
  <div class="relative w-full max-w-sm items-center">
    <Input @keyup.enter="add" id="add" type="text" placeholder="Add new task. Please enter to save" class="pl-10" />
    <span class="absolute inset-y-0 start-0 flex items-center justify-center px-2">
      <Plus class="size-6 text-muted-foreground" />
    </span>
  </div>
</template>

<style lang="scss" scoped></style>
