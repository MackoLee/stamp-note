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
          name="fa:github"
          size="20"
        />
      </span>
    </u-avatar>
  </div>
</template>
<script setup lang="ts">
const onClick = () => window.open('https://github.com/MackoLee/stamp-note', '_blank');
</script>