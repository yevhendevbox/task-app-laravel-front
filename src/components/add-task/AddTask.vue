<script setup>
import { Input } from "@/components/ui/input";
import { Plus } from "lucide-vue-next";

const emits = defineEmits(["added"]);

async function add($event) {
  if (!$event.target.value) return;

  const payload = {
    name: $event.target.value.trim(),
  };
  $event.target.value = "";

  emits("added", payload);
}
</script>

<template>
  <div class="relative w-full max-w-sm items-center">
    <Input
      id="add"
      type="text"
      placeholder="Add new task. Please enter to save"
      class="pl-10"
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
