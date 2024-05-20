<script setup lang="ts">
// console.log(useNuxtApp(), "https://vueuse.org/");

// const { $sayHello } = useNuxtApp();
// $sayHello("Rahat");

definePageMeta({
  middleware: "auth",
});
</script>
<template>
  <div>
    <!-- <Alert /> -->
    <!-- <Profile /> -->
    <ProfileHeader />
    <h1>Home</h1>
  </div>
</template>

<style lang="scss" scoped></style>
