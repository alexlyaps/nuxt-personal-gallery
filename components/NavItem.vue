<template>
  <NuxtLink class="block w-full text-right" :to="path">
    <slot />
  </NuxtLink>
</template>

<script setup lang="ts">
type NavItemProps = {
  path: string;
};

defineProps<NavItemProps>();
</script>
