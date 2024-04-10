<script setup>
import { ref } from "vue";
import { Input } from "@/components/ui/input";
import { Plus } from "lucide-vue-next";
import { createTask } from "@/http/task-api";

const emits = defineEmits(["create"]);

const newName = ref("");
async function add() {
  if (!newName.value) return;

  const payload = {
    name: newName.value,
  };

  const response = (await createTask(payload)).data.data;
  const newTask = {
    ...response,
    date: new Date(response.date).toDateString(),
    id: response.id.toString(),
  };
  emits("create", newTask);
  newName.value = "";
}
</script>

<template>
  <div class="relative w-full max-w-sm items-center">
    <Input
      id="add"
      type="text"
      placeholder="Add new task. Please enter to save"
      class="pl-10"
      v-model="newName"
      @keyup.enter="add"
    />
    <span
      class="absolute start-0 inset-y-0 flex items-center justify-center px-2"
    >
      <Plus class="size-6 text-muted-foreground" />
    </span>
  </div>
</template>

<style lang="scss" scoped></style>
