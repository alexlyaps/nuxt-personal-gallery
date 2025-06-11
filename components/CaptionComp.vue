<template>
  <figcaption class="">
    <h2 class="text-xl mb-4 tracking-widest"><slot name="title" /></h2>
    <div class="italic font-extralight tracking-widest">
      <h3><slot name="materials" /></h3>
      <h3><slot name="size" /></h3>
      <h3><slot name="year" /></h3>
    </div>
  </figcaption>
</template>
