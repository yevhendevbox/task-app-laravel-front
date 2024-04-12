<script setup>
import { storeToRefs } from 'pinia';
import { computed, ref } from 'vue';

import { AddTask } from '@/components/add-task';
import { TaskList } from '@/components/task-list';
import { Button } from '@/components/ui/button';
import { useTaskStore } from '@/stores/taskStore';

const store = useTaskStore();
const { fetchAll, update, remove, toggle } = store;
const { completed, uncompleted } = storeToRefs(store);

const showToggleBtn = computed(() => uncompleted.value.length && completed.value.length);

const isCompletedVisible = computed(() => uncompleted.value.length === 0 || completed.value.length > 0);
const showCompleted = ref(false);

async function init() {
  await fetchAll();
}

init();
</script>

<template>
  <main class="container mx-auto py-[4rem]">
    <AddTask />

    <TaskList @updated="update" @toggle="toggle" @remove="remove" :tasks="uncompleted" />

    <div v-show="showToggleBtn" class="my-3 text-center">
      <Button @click="showCompleted = !showCompleted">
        <span v-if="!showCompleted">Show completed</span>
        <span v-else>Hide completed</span>
      </Button>
    </div>

    <TaskList
      @updated="update"
      @toggle="toggle"
      @remove="remove"
      :tasks="completed"
      :show="isCompletedVisible && showCompleted"
    />
  </main>
</template>

<style lang="scss" scoped></style>
