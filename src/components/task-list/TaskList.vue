<script setup>
import { reactive, ref, onMounted } from "vue";
import { Input } from "@/components/ui/input";
import { Plus } from "lucide-vue-next";

import { Task } from "@/components/ui/task";
import { allTasks } from "@/http/task-api";

const data = reactive({
  tasks: [],
});
const newTask = ref("");
function add() {
  if (!newTask.value) return;

  data.tasks.push({
    id: Date.now().toString(),
    name: newTask.value,
    date: new Date().toDateString(),
    is_completed: false,
  });

  newTask.value = "";
}

onMounted(async () => {
  const response = (await allTasks()).data.data;

  data.tasks = response.map((task) => {
    return {
      ...task,
      date: new Date(task.date).toDateString(),
      id: task.id.toString(),
    };
  });
});
</script>

<template>
  <main class="container mx-auto py-[4rem]">
    <div class="relative w-full max-w-sm items-center">
      <Input
        id="add"
        type="text"
        placeholder="Add new task. Please enter to save"
        class="pl-10"
        v-model="newTask"
        @keyup.enter="add"
      />
      <span
        class="absolute start-0 inset-y-0 flex items-center justify-center px-2"
      >
        <Plus class="size-6 text-muted-foreground" />
      </span>
    </div>

    <div class="py-10 mx-auto">
      <Task
        v-for="task in data.tasks"
        :key="task.id"
        :task="task"
        @update="task.completed = !task.completed"
      />

      <p
        v-if="!data.tasks.length"
        class="text-center text-sm text-muted-foreground"
      >
        No tasks found.
      </p>
    </div>
  </main>
</template>

<style lang="scss" scoped></style>
