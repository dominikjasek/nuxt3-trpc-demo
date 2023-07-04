<template>
  <div>Ahoj z kartičky</div>
  <div v-for="(item, index) in items" :key="index">
    <span>{{ item.someProperty }}</span>
    <span> wufft {{ index }}</span>
  </div>
</template>

<script setup lang="ts" generic="T extends CardProps">
const props = defineProps<{
  items: T[];
  selected: T;
}>();
</script>
