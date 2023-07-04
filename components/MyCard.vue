<template>
    <div>Wow, generics on component is so cool!</div>
    <div v-for="(item, index) in items" :key="index">
      <span>{{ item.someProperty }}</span>
      <span>{{ index }}</span>
  </div>
</template>

<script setup lang="ts" generic="T extends CardProps">
const props = defineProps<{
  items: T[];
  selected: T;
}>();
</script>
