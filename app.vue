<template>
  <NuxtLayout >
    <NuxtLoadingIndicator />
    <NuxtPage />
    <Modal />
  </NuxtLayout>
</template>
<script setup lang="ts">
const { loadTheme } = useTheme();
const nuxtApp = useNuxtApp()

onMounted(() => {
  loadTheme();
})

function emitWindowResize() {
  if(nuxtApp.$windowResize) {
    nuxtApp.$windowResize();
  }
}
onMounted(() =>{
  window.addEventListener('resize', emitWindowResize)
})
onUnmounted(() => {
  window.removeEventListener('resize', emitWindowResize)
})
</script>
