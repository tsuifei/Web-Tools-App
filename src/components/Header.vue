<script setup>
import { ref } from 'vue'

defineProps({
  // msg: String
})


</script>

<template>
<header class="bg-green-400 text-blue-900">
  <nav class="py-4">
    <div class="container mx-auto flex justify-between items-center">
      <img class="rounded h-8" src="../assets/logo.png" alt="logo">
      <ul class="flex text-xl">
        <li class="ml-4">TodoList</li>
        <li class="ml-4">Flash card</li>
        <li class="ml-4">Goodies</li>
      </ul>
    </div>
  </nav>
</header>
</template>

<style scoped>

</style>
