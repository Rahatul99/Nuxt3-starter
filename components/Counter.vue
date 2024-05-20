<script setup>
// const counter = useState("counter", () => 1);
const counter = useCounter();
</script>

<template>
  <div>
    Counter: {{ counter }}
    <button @click="counter++">+</button>
    <button @click="counter--">-</button>
  </div>
</template>
