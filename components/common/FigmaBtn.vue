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
          name="solar:figma-bold"
          size="20"
        />
      </span>
    </u-avatar>
  </div>
</template>
<script setup lang="ts">
const onClick = () => window.open('https://www.figma.com/file/ZCRR5aK5dJGxyjAORBFhAy/%EB%8F%84%EC%9E%A5%EC%88%98%EC%B2%A9?type=design&node-id=23-139&mode=design&t=QTku7amuxJmlGOpc-0', '_blank');
</script>