<template>
  <div>
    <p>
      Calculate a
      <a href="https://en.wikipedia.org/wiki/Cross-multiplication"
        >cross-multiplication</a
      >
      without picking up a pen.
    </p>

    <div
      class="max-w-xl mx-auto grid grid-cols-4 gap-4 justify-center mt-8 mb-8"
    >
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
          <div class="relative">
            <input type="text" v-model="matrix[rowIndex][cellIndex]" />
            <a
              @click="
                matrix[rowIndex][cellIndex] = calculate(rowIndex, cellIndex)
              "
              v-if="calculate(rowIndex, cellIndex)"
              class="absolute top-2 right-2 sm:p-1 border-2 border-violet-500 rounded cursor-pointer"
            >
              <Bars2Icon class="fill-violet-600 w-6 h-6 sm:w-7 sm:h-7" />
            </a>
          </div>
        </template>
      </template>
      <div class="mt-6 col-span-2 flex justify-center items-center space-x-4">
        <button
          @click="reset()"
          class="border-2 border-indigo-600 dark:border-indigo-400 rounded-xl hover:bg-indigo-600 dark:hover:bg-indigo-400"
        >
          <TrashIcon class="w-12 h-12 p-2 stroke-white" />
        </button>
        <button
          @click="removeRow()"
          class="border-2 border-indigo-600 dark:border-indigo-400 rounded-xl hover:bg-indigo-600 dark:hover:bg-indigo-400"
        >
          <MinusIcon class="w-12 h-12 p-2 stroke-white" />
        </button>
        <button
          @click="addRow()"
          class="border-2 border-indigo-600 dark:border-indigo-400 rounded-xl hover:bg-indigo-600 dark:hover:bg-indigo-400"
        >
          <PlusIcon class="w-12 h-12 p-2 stroke-white" />
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import {
  PlusIcon,
  MinusIcon,
  PencilIcon,
  Bars2Icon,
  TrashIcon,
} from "@heroicons/vue/24/outline";

const unitOne = ref("People");
const unitTwo = ref("Apples");
const showUnitOne = ref(false);
const showUnitTwo = ref(false);
const resetDate = ref(new Date());

const matrix = ref([
  [4, 12],
  [3, null],
]);

const addRow = () => {
  matrix.value.push([0, null]);
};
const removeRow = () => {
  matrix.value.pop();
};

const reset = () => {
  matrix.value = [
    [4, 12],
    [3, null],
  ];
  unitOne.value = "People";
  unitTwo.value = "Apples";
  resetDate.value = new Date();
};

// Do Cross-multiplication with the given row and column
const calculate = (rowIndex, cellIndex) => {
  // d = (b * c) / a
  const isLeft = cellIndex === 0;

  const row = matrix.value[rowIndex];
  const b = row[isLeft ? 1 : 0];

  if (!b) return;

  const firstRow = matrix.value
    .filter((_, index) => index !== rowIndex)
    .find((row) => row[0] && row[1]);

  if (!firstRow) return;

  const [a, c] = firstRow;

  const d = isLeft ? (b * a) / c : (b * c) / a;
  const value = d.toFixed(3).replace(/\.?0+$/, "");

  // only update cell when resetDate is newer than 200ms
  const isNull = matrix.value[rowIndex][cellIndex] === null;
  const isNotRecent = resetDate.value.getTime() + 200 < Date.now();
  if (isNull && isNotRecent) {
    matrix.value[rowIndex][cellIndex] = value;
  }

  return value;
};
</script>

<style scoped>
.grid {
  grid-template-columns: auto auto;
}
</style>
