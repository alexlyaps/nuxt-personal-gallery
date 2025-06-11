<template>
  <figure>
    <CaptionComp>
      <template #title>snow leopards</template>
      <template #materials>canvas, black ink, watercolours</template>
      <template #size>160*95</template>
      <template #year>2021</template>
    </CaptionComp>
    <div class="flex flex-col gap-10">
      <img
        src="/snow-leo/snow-leo-1.jpg"
        width="1300"
        height="785"
        alt="snow leopards kids playing"
      />
      <div>
        <img
          src="/snow-leo/snow-leo-2.jpg"
          width="1300"
          height="785"
          loading="lazy"
          alt="snow leopards fragment tail"
        />
        <div class="text-xs italic font-extralight tracking-wide">
          snow leopards, fragment
        </div>
      </div>
      <div>
        <img
          src="/snow-leo/snow-leo-3.jpg"
          loading="lazy"
          width="1300"
          height="785"
          alt="snow leopards fragment paw"
        />
        <div class="text-xs italic font-extralight tracking-wide">
          snow leopards, fragment
        </div>
      </div>
      <div>
        <img
          src="/snow-leo/snow-leo-4.jpg"
          alt="snow leopards fragment faces"
          width="1300"
          height="785"
          loading="lazy"
        />
        <div class="text-xs italic font-extralight tracking-wide">
          snow leopards, fragment
        </div>
        <div
          class="text-xs text-gray-500 text-right italic font-extralight tracking-wide"
        >
          photographs by Alevtina Lyapunova
        </div>
      </div>
    </div>
  </figure>
</template>

<style src="assets/css/global.css"></style>
