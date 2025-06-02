<template>
  <div class="h-3 md:h-6 w-4 md:w-6 cursor-pointer">
    <span
      :class="[
        'block h-0.5  mt-3 md:h-0.75 md:mt-1.5 bg-gray-500 rounded transition-transform duration-300 ease-in-out',
        isOpened ? 'rotate-45 md:translate-y-1.75 translate-y-1' : '',
      ]"
    ></span>
    <span
      :class="[
        'block h-0.5  mt-0.5 md:h-0.75 md:mt-1 bg-gray-500 rounded transition-transform duration-300 ease-in-out',
        isOpened ? 'opacity-0' : '',
      ]"
    ></span>
    <span
      :class="[
        'block h-0.5  mt-0.5 md:h-0.75 md:mt-1 bg-gray-500 rounded transition-transform duration-300 ease-in-out',
        isOpened ? '-rotate-45 md:-translate-y-1.75 -translate-y-1' : '',
      ]"
    ></span>
  </div>
</template>

<script setup lang="ts">
type BurgerProps = {
  isOpened: boolean;
};

defineProps<BurgerProps>();
</script>
