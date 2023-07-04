<script setup lang="ts">
const { $client } = useNuxtApp();
const hello = await $client.hello.useQuery({ text: "client" });
const result = ref(hello.data);
</script>

<template>
  <div>
    <MyCard
        :items="[{ someProperty: 'how do you do' }]"
        :selected="{ someProperty: 'lol 🚀' }"
      />
      <p>{{ result.greeting }}</p>
  </div>
</template>
