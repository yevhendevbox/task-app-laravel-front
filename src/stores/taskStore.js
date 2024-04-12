import { defineStore } from 'pinia';
import {  ref, computed } from 'vue';

import { allTasks, completeTask, createTask, deleteTask, updateTask } from '@/http/task-api';

export const useTaskStore = defineStore('taskStore', () => {
  const tasks = ref([]);

  const completed = computed(() => tasks.value.filter((task) => task.is_completed));
  const uncompleted = computed(() => tasks.value.filter((task) => !task.is_completed));

  async function fetchAll() {
    const response = (await allTasks()).data.data;
    tasks.value = response.map((task) => {
      return {
        ...task,
        date: new Date(task.date).toDateString(),
        id: task.id.toString()
      };
    });
  }

  async function create(task) {
    const response = (await createTask(task)).data.data;
    tasks.value.unshift({
      ...response,
      date: new Date(response.date).toDateString(),
      id: response.id.toString()
    });
  }

  async function update(task) {
    const response = (await updateTask(task.id, { name: task.name })).data.data;
    const taskToUpdate = tasks.value.find((t) => t.id === response.id.toString());
    taskToUpdate.name = response.name;
  }

  async function remove(task) {
    await deleteTask(task.id);
    const index = tasks.value.findIndex((t) => t.id === task.id);
    tasks.value.splice(index, 1);
  }

  async function toggle(task) {
    const response = (await completeTask(task.id, { is_completed: task.is_completed })).data.data;
    const taskToUpdate = tasks.value.find((t) => t.id === response.id.toString());
    taskToUpdate.is_completed = response.is_completed;
  }

  return { tasks, fetchAll, create, update, remove, toggle, completed, uncompleted };
});
