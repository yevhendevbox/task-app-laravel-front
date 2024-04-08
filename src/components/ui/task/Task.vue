<script setup>
import { Card, CardContent } from "@/components/ui/card";

import { Checkbox } from "@/components/ui/checkbox";

const props = defineProps({
  task: { type: Object, required: true },
});
</script>
<template>
  <Card class="w-full mb-2">
    <CardContent class="flex items-center gap-4 p-4">
      <Checkbox :id="props.task.id" @update:checked="$emit('update')" />
      <label
        :for="props.task.id"
        class="cursor-pointer"
        :class="{ 'line-through': props.task.completed }"
        >{{ props.task.title }}</label
      >
      <div class="ml-auto">{{ props.task.date }}</div>
    </CardContent>
  </Card>
</template>

<style lang="scss" scoped></style>
