<template>
  <div class="flex flex-col justify-end items-end gap-8">
    <Burger :is-opened="isOpened" @click="toggleMenu" />

    <div
      :class="[
        'italic w-48 flex items-end flex-col overflow-hidden transition-all duration-1000 ease-in-out',
        isOpened ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0',
      ]"
    >
      <NavItem v-for="link of links" :path="link.path">{{
        link.label
      }}</NavItem>
    </div>
  </div>
</template>

<script setup lang="ts">
import { links } from "~/data/configLinks";

const isOpened = ref(false);

const toggleMenu: () => void = () => {
  isOpened.value = !isOpened.value;
};
</script>
