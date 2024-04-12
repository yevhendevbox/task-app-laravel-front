<script setup>
import { ref } from 'vue';

import { TaskActions } from '@/components/task-actions';
import { Card, CardContent } from '@/components/ui/card';
import { Checkbox } from '@/components/ui/checkbox';
import { Input } from '@/components/ui/input';

const emits = defineEmits(['updated', 'toggle', 'remove']);

const props = defineProps({
  task: { type: Object, required: true }
});
const editName = ref(props.task.name);
const isEdit = ref(false);

function edit() {
  if (editName.value === props.task.name) return;
  const updatedTask = {
    ...props.task,
    name: editName.value
  };

  emits('updated', updatedTask);
  isEdit.value = false;
}

function toggleComplition() {
  const updatedTask = {
    ...props.task,
    is_completed: !props.task.is_completed
  };
  emits('toggle', updatedTask);
}

function undo() {
  editName.value = props.task.name;
  isEdit.value = false;
}

function handleRemove() {
  if (confirm('Are you sure you want to delete this task?')) {
    emits('remove', props.task);
  }
}

const vFocus = {
  mounted: (el) => el.focus()
};
</script>
<template>
  <Card class="mb-2 w-full">
    <CardContent class="flex items-center gap-4 p-4">
      <Checkbox @update:checked="toggleComplition" :id="props.task.id" :checked="props.task.is_completed" />

      <Input v-if="isEdit" @keyup.enter="edit" @keyup.escape="undo" v-model="editName" v-focus class="w-full" />
      <label v-else :for="props.task.id" class="cursor-pointer" :class="{ 'line-through': props.task.is_completed }">{{
        props.task.name
      }}</label>

      <div class="ml-auto flex items-center gap-4">
        <div>{{ props.task.date }}</div>

        <TaskActions v-if="!isEdit" @edit="isEdit = true" @remove="handleRemove" />
      </div>
    </CardContent>
  </Card>
</template>

<style lang="scss" scoped></style>
