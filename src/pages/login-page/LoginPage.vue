<script setup>
import { reactive } from 'vue';
import { useRouter } from 'vue-router';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { useAuthStore } from '@/stores/auth';

const store = useAuthStore();
const router = useRouter();
const form = reactive({
  email: '',
  password: ''
});

async function handleSignIn() {
  await store.handleLogin(form);
  router.push({ name: 'tasks' });
}
</script>

<template>
  <div class="container mx-auto py-[4rem]">
    <Card class="mx-auto mt-[10rem] max-w-md px-2 py-8">
      <CardHeader class="mb-6 flex justify-center">
        <h1 class="text-center text-4xl font-bold">Todo List App</h1>
        <p class="text-center">Please sign in</p>
      </CardHeader>
      <CardContent class="flex flex-col gap-2">
        <Input placeholder="Please enter your email" v-model="form.email" />
        <Input placeholder="Please enter your password" type="password" v-model="form.password" />

        <Button @click="handleSignIn" class="mt-4">Sign in</Button>
      </CardContent>
    </Card>
  </div>
</template>

<style lang="scss" scoped></style>
