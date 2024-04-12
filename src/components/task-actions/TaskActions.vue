<script setup>
import { Pencil, Trash2 } from 'lucide-vue-next';

import { Button } from '@/components/ui/button';

const emits = defineEmits(['edit', 'remove']);
</script>

<template>
  <div class="flex gap-2">
    <Button @click="($event) => emits('edit')" variant="outline" size="icon">
      <Pencil class="h-4 w-4" />
    </Button>
    <Button @click="($event) => emits('remove')" variant="destructive" size="icon">
      <Trash2 class="h-4 w-4" />
    </Button>
  </div>
</template>

<style lang="scss" scoped></style>
