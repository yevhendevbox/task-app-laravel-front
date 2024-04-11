<script setup>
import { Task } from "@/components/ui/task";

const props = defineProps({
  tasks: { type: Array, required: true },
  show: { type: Boolean, default: true },
});
</script>

<template>
  <div class="py-10 mx-auto" v-if="tasks.length && show">
    <Task
      v-for="task in props.tasks"
      :key="task.id"
      :task="task"
      @updated="$emit('updated', $event)"
    />

    <p
      v-if="!props.tasks.length"
      class="text-center text-sm text-muted-foreground"
    >
      No tasks found.
    </p>
  </div>
</template>

<style lang="scss" scoped></style>
