import { defineStore } from 'pinia';
import { reactive, ref } from 'vue';

import { allTasks, completeTask, createTask, deleteTask, updateTask } from '@/http/task-api';

export const useTaskStore = defineStore('taskStore', () => {
  const tasks = ref([]);
  const task = reactive({
    id: null,
    name: null,
    is_completed: false,
    date: ''
  });

  async function fetchTasks() {
    const response = (await allTasks()).data.data;
    tasks.value = response.map((task) => {
      return {
        ...task,
        date: new Date(task.date).toDateString(),
        id: task.id.toString()
      };
    });
  }
  return { tasks, task, fetchTasks };
});
