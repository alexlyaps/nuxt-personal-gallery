<template>
  <div class="flex flex-col justify-between h-full">
    <TopBar />
    <main class="mt-10">
      <slot />
    </main>
    <FooterComp />
  </div>
</template>
