<!-- Its solely purpose of this component is to be used as custom component for nuxt-svgo plugin -->
<script setup lang="ts">
withDefaults(
  defineProps<{
    icon: object;
    isFilled?: boolean;
    asFont?: boolean;
    name?: string;
  }>(),
  {
    isFilled: false,
    asFont: true,
  },
);
</script>

<template>
  <component
    :is="icon"
    :class="{
      'h-[2.5em] w-[2.5em] align-middle inline-block': asFont,
      'fill-current *:fill-current': !isFilled,
    }"
    aria-hidden="true"
  />
</template>
