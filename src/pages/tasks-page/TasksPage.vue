<script setup>
import { reactive, ref, computed } from "vue";
import { allTasks, createTask, updateTask } from "@/http/task-api";

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
async function add(task) {
  const response = (await createTask(task)).data.data;

  const newTask = {
    ...response,
    date: new Date(response.date).toDateString(),
    id: response.id.toString(),
  };

  data.tasks.unshift(newTask);
}

async function update(task) {
  const response = (await updateTask(task.id, { name: task.name })).data.data;

  const taskToUpdate = data.tasks.find((t) => t.id === response.id.toString());
  taskToUpdate.name = response.name;
}

init();
</script>

<template>
  <main class="container mx-auto py-[4rem]">
    <AddTask @added="add" />

    <TaskList :tasks="uncompletedTasks" @updated="update" />

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
