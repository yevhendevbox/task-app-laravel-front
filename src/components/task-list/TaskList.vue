<script setup>
import { Task } from '@/components/ui/task';

const props = defineProps({
  tasks: { type: Array, required: true },
  show: { type: Boolean, default: true }
});
</script>

<template>
  <div v-if="tasks.length && show" class="mx-auto py-10">
    <Task
      v-for="task in props.tasks"
      @updated="$emit('updated', $event)"
      @toggle="$emit('toggle', $event)"
      @remove="$emit('remove', $event)"
      :task="task"
      :key="task.id"
    />

    <p v-if="!props.tasks.length" class="text-center text-sm text-muted-foreground">No tasks found.</p>
  </div>
</template>

<style lang="scss" scoped></style>
