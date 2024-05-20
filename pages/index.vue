<script setup>
// const counter = useState("counter", () => 1);
// const counter = useCounter();
import { useCounterStore } from "~/stores/myStore";
const store = useCounterStore();
console.log(store, "useCounterStore");
</script>

<template>
  <div>
    <div id="page-counter">
      Counter: {{ counter }}
      <button @click="counter++">+</button>
      <button @click="counter--">-</button>
    </div>
    <Counter id="counter" />
  </div>
</template>
