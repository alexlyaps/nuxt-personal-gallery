<template>
  <swiper-container
    init="false"
    ref="swiperEl"
    navigation="true"
    class="mt-12"
    slides-per-view="1"
    speed="1000"
    loop="true"
  >
    <swiper-slide v-for="img of caruselImages" lazy="true">
      <div class="flex flex-col justify-center items-center">
        <NuxtImg
          :src="`${img.path}.jpg`"
          width="1024"
          height="768"
          alt="Carusel"
        />
        <div
          class="hidden md:w-[1024px] text-gray-400 text-right text-xs italic"
        >
          {{ img.author }}
        </div>
        <div class="italic">{{ img.title }}</div>
      </div>
    </swiper-slide>
  </swiper-container>
</template>

<script setup lang="ts">
import { caruselImages } from "~/data/configCarusel";
import { register } from "swiper/element/bundle";
import "swiper/css";
register();

const swiperEl = ref<HTMLElement | null>(null);

onMounted(() => {
  if (swiperEl.value) {
    Object.assign(swiperEl.value, {
      injectStyles: [
        `
  .swiper-button-next {
  color: var(--color-gray-800);
  width: 20px;
  aspect-ratio: 1;
  margin-right: 12px;
  }

  .swiper-button-prev {
  color: var(--color-gray-800);
  width: 20px;
  aspect-ratio: 1;
  margin-left: 12px;
  }
  
  @media (max-width: 768px) {
    .swiper-button-next, .swiper-button-prev {
      display: none;
    }

  }

   
  `,
      ],
    });

    swiperEl.value.initialize();
  }
});

const images: string[] = new Array(2).fill("main");
</script>
