<template>
  <div>
    <p>Calculate a cross-multiplication without picking up a pen.</p>

    <div class="max-w-xl mx-auto grid grid-cols-4 gap-4 justify-center mt-8">
      <div class="flex items-center justify-center">
        <input
          v-if="showUnitOne"
          v-model="unitOne"
          type="text"
          placeholder="People"
          @blur="showUnitOne = false"
        />
        <p class="text-right cursor-pointer" v-else @click="showUnitOne = true">
          {{ unitOne || "Unit" }} <PencilIcon class="inline ml-1 w-3 h-3" />
        </p>
      </div>
      <div class="flex items-center justify-center">
        <input
          v-if="showUnitTwo"
          v-model="unitTwo"
          type="text"
          placeholder="Apples"
          @blur="showUnitTwo = false"
        />
        <p class="text-right cursor-pointer" v-else @click="showUnitTwo = true">
          {{ unitTwo || "Unit" }} <PencilIcon class="inline ml-1 w-3 h-3" />
        </p>
      </div>
      <template v-for="(row, rowIndex) in matrix" :key="`row:${rowIndex}`">
        <template
          v-for="(cell, cellIndex) in row"
          :key="`cell:${rowIndex}-${cellIndex}`"
        >
          <div>
            <input type="text" v-model="matrix[rowIndex][cellIndex]" />
          </div>
        </template>
      </template>
      <div class="col-span-2 flex justify-center items-center space-x-4">
        <button
          @click="addRow()"
          class="border-2 border-indigo-600 dark:border-indigo-400 rounded-xl hover:bg-indigo-600 dark:hover:bg-indigo-400"
        >
          <PlusIcon class="w-12 h-12 p-2 fill-white" />
        </button>
        <button
          @click="removeRow()"
          class="border-2 border-indigo-600 dark:border-indigo-400 rounded-xl hover:bg-indigo-600 dark:hover:bg-indigo-400"
        >
          <MinusIcon class="w-12 h-12 p-2 fill-white" />
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { PlusIcon, MinusIcon, PencilIcon } from "@heroicons/vue/24/solid";

const unitOne = ref("People");
const unitTwo = ref("Apples");
const showUnitOne = ref(false);
const showUnitTwo = ref(false);

const matrix = ref([
  [4, 12],
  [3, null],
]);

const addRow = () => {
  matrix.value.push([0, 0]);
};
const removeRow = () => {
  matrix.value.pop();
};
</script>

<style scoped>
.grid {
  grid-template-columns: auto auto;
}
</style>
