<script setup>
import { Pencil, Trash2 } from "lucide-vue-next";
import { Button } from "@/components/ui/button";

const emits = defineEmits(["edit", "remove"]);
</script>

<template>
  <div class="flex gap-2">
    <Button variant="outline" size="icon" @click="($event) => emits('edit')">
      <Pencil class="w-4 h-4" />
    </Button>
    <Button
      variant="destructive"
      size="icon"
      @click="($event) => emits('remove')"
    >
      <Trash2 class="w-4 h-4" />
    </Button>
  </div>
</template>

<style lang="scss" scoped></style>
