<script setup lang="ts">
const { $client } = useNuxtApp();
const example = ref({ fff: "ahoj" });

const hello = await $client.hello.useQuery({ text: "client" });
console.log("result: ", hello.data.value);
const result = ref(hello.data);
</script>

<template>
  <div>
    <MyCard
      :items="[{ someProperty: 'ahoj' }]"
      :selected="{ someProperty: 'dsada' }"
    />
      <p>{{ result.greeting }}</p>
      <p>{{ example.fff }}</p>
  </div>
</template>
