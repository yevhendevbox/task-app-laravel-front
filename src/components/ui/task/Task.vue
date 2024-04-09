<script setup>
import { Card, CardContent } from "@/components/ui/card";
import { Pencil, Trash2 } from "lucide-vue-next";
import { Button } from "@/components/ui/button";

import { Checkbox } from "@/components/ui/checkbox";

const props = defineProps({
  task: { type: Object, required: true },
});
</script>
<template>
  <Card class="w-full mb-2">
    <CardContent class="flex items-center gap-4 p-4">
      <Checkbox
        :id="props.task.id"
        :checked="props.task.is_completed"
        @update:checked="$emit('update')"
      />
      <label
        :for="props.task.id"
        class="cursor-pointer"
        :class="{ 'line-through': props.task.is_completed }"
        >{{ props.task.name }}</label
      >
      <div class="flex ml-auto items-center gap-4">
        <div>{{ props.task.date }}</div>
        <div class="flex gap-2">
          <Button variant="outline" size="icon">
            <Pencil class="w-4 h-4" />
          </Button>
          <Button variant="destructive" size="icon">
            <Trash2 class="w-4 h-4" />
          </Button>
        </div>
      </div>
    </CardContent>
  </Card>
</template>

<style lang="scss" scoped></style>
