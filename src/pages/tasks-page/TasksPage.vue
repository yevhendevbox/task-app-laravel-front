<script setup>
import { reactive, ref, computed } from "vue";
import { allTasks } from "@/http/task-api";

import { TaskList } from "@/components/task-list";
import { Button } from "@/components/ui/button";
import { AddTask } from "@/components/add-task";

const data = reactive({
  tasks: [],
});

const completedTasks = computed(() => {
  return data.tasks.filter((task) => task.is_completed);
});

const uncompletedTasks = computed(() => {
  return data.tasks.filter((task) => !task.is_completed);
});
const showToggleBtn = computed(
  () => uncompletedTasks.value.length && completedTasks.value.length
);

const isCompletedVisible = computed(
  () => uncompletedTasks.value.length === 0 || completedTasks.value.length > 0
);
const showCompleted = ref(false);

async function init() {
  const response = (await allTasks()).data.data;

  data.tasks = response.map((task) => {
    return {
      ...task,
      date: new Date(task.date).toDateString(),
      id: task.id.toString(),
    };
  });
}
function add(task) {
  data.tasks.push(task);
}

init();
</script>

<template>
  <main class="container mx-auto py-[4rem]">
    <AddTask @create="add" />

    <TaskList :tasks="uncompletedTasks" />

    <div class="text-center my-3" v-show="showToggleBtn">
      <Button @click="showCompleted = !showCompleted">
        <span v-if="!showCompleted">Show completed</span>
        <span v-else>Hide completed</span>
      </Button>
    </div>

    <TaskList
      :tasks="completedTasks"
      :show="isCompletedVisible && showCompleted"
    />
  </main>
</template>

<style lang="scss" scoped></style>
