<template>
  <CaptionComp>
    <template #title>mother, father, brother</template>
    <template #materials>oil, canvas on canvas on mdf</template>
    <template #size>60*80cm each</template>
    <template #year>2020</template>
  </CaptionComp>

  <div class="mx-auto flex max-w-[700px] flex-row gap-5 justify-between">
    <img
      src="/family/family-mother.jpg"
      width="700"
      height="970"
      alt="mother"
      class="w-[calc((700px-5rem)/3)] object-cover"
      @mouseover="() => (member = 'mother')"
    />
    <img
      src="/family/family-father.jpg"
      width="700"
      height="970"
      alt="mother"
      class="w-[calc((700px-5rem)/3)] object-cover"
      @mouseover="() => (member = 'father')"
    />
    <img
      src="/family/family-brother.jpg"
      width="700"
      height="970"
      alt="mother"
      class="w-[calc((700px-5rem)/3)] object-cover"
      @mouseover="() => (member = 'brother')"
    />
  </div>
  <img
    :src="`/family/family-${member}.jpg`"
    width="700"
    height="970"
    alt="mother"
    class="mx-auto mt-5"
  />
</template>

<script setup lang="ts">
type Member = "father" | "mother" | "brother";
const member = ref<Member>("mother");
</script>

<style src="assets/css/global.css"></style>
