<template>
  <div
      @click="onClick"
  >
    <u-avatar
      :ui="{
               background: 'bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 cursor-pointer',
      }"
    >
      <span
        class="flex"
      >
        <icon
          name="ph:presentation-bold"
          size="20"
        />
      </span>
    </u-avatar>
  </div>
</template>
<script setup lang="ts">
const onClick = () => window.open('https://docs.google.com/presentation/d/10VzjN6X-O7ntR9cr-bpjErelVCFsr5GvF_GnYg0VfB8/edit#slide=id.p', '_blank');
</script>