<template>
  <div>
    <p>
      Calculate a
      <a href="https://en.wikipedia.org/wiki/Cross-multiplication"
        >cross-multiplication</a
      >
      without picking up a pen.
    </p>

    <ClientOnly>
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
          <p
            class="text-right cursor-pointer hover:bg-violet-200 py-1 px-3 rounded-md hover:dark:text-violet-900 -mb-2"
            v-else
            @click="showUnitOne = true"
          >
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
          <p
            class="text-right cursor-pointer hover:bg-violet-200 py-1 px-3 rounded-md hover:dark:text-violet-900 -mb-2"
            v-else
            @click="showUnitTwo = true"
          >
            {{ unitTwo || "Unit" }} <PencilIcon class="inline ml-1 w-3 h-3" />
          </p>
        </div>
        <template
          v-for="(row, rowIndex) in matrix.value"
          :key="`row:${rowIndex}`"
        >
          <template
            v-for="(cell, cellIndex) in row"
            :key="`cell:${rowIndex}-${cellIndex}`"
          >
            <div class="relative">
              <input
                type="text"
                v-model="matrix.value[rowIndex][cellIndex]"
                :class="
                  calculate(rowIndex, cellIndex) &&
                  calculate(rowIndex, cellIndex) !=
                    matrix.value[rowIndex][cellIndex]
                    ? 'text-indigo-400 dark:text-indigo-400'
                    : 'text-indigo-800 dark:text-indigo-800'
                "
              />
              <a
                @click="
                  matrix.value[rowIndex][cellIndex] = calculate(
                    rowIndex,
                    cellIndex
                  )
                "
                v-if="
                  calculate(rowIndex, cellIndex) &&
                  calculate(rowIndex, cellIndex) !=
                    matrix.value[rowIndex][cellIndex]
                "
                class="group absolute top-2 right-2 sm:p-1 border-2 rounded-lg cursor-pointer border-indigo-600 dark:border-indigo-400 hover:bg-indigo-600 dark:hover:bg-indigo-400"
              >
                <Bars2Icon
                  class="w-6 h-6 sm:w-7 sm:h-7 stroke-indigo-600 dark:stroke-indigo-400 group-hover:stroke-white"
                />
              </a>
            </div>
          </template>
        </template>
        <div class="mt-6 col-span-2 flex justify-center items-center space-x-4">
          <button
            @click="reset()"
            class="group border-2 rounded-xl border-indigo-600 dark:border-indigo-400 hover:bg-indigo-600 dark:hover:bg-indigo-400"
          >
            <TrashIcon
              class="w-12 h-12 p-2 stroke-indigo-600 dark:stroke-indigo-400 group-hover:stroke-white"
            />
          </button>
          <button
            @click="removeRow()"
            class="group border-2 border-indigo-600 dark:border-indigo-400 rounded-xl hover:bg-indigo-600 dark:hover:bg-indigo-400"
          >
            <MinusIcon
              class="w-12 h-12 p-2 stroke-indigo-600 dark:stroke-indigo-400 group-hover:stroke-white"
            />
          </button>
          <button
            @click="addRow()"
            class="group border-2 border-indigo-600 dark:border-indigo-400 rounded-xl hover:bg-indigo-600 dark:hover:bg-indigo-400"
          >
            <PlusIcon
              class="w-12 h-12 p-2 stroke-indigo-600 dark:stroke-indigo-400 group-hover:stroke-white"
            />
          </button>
        </div>
      </div>
    </ClientOnly>
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

const defaultUnitOne = "Width";
const defaultUnitTwo = "Height";
const defaultMatrix = [
  [4, 3],
  [1200, null],
];

const unitOne = ref(defaultUnitOne);
const unitTwo = ref(defaultUnitTwo);
const showUnitOne = ref(false);
const showUnitTwo = ref(false);
const resetDate = ref(new Date());

const matrix = reactive({
  value: [...defaultMatrix],
});

const addRow = () => {
  matrix.value.push([0, null]);
};
const removeRow = () => {
  matrix.value.pop();
};

const reset = () => {
  matrix.value = [...defaultMatrix];
  unitOne.value = defaultUnitOne;
  unitTwo.value = defaultUnitTwo;
  resetDate.value = new Date();
  clearLocalstorage();
};

const saveToLocalstorage = () => {
  if (process.client) {
    localStorage.setItem("matrix", JSON.stringify(matrix.value));
    localStorage.setItem("unitOne", JSON.stringify(unitOne.value));
    localStorage.setItem("unitTwo", JSON.stringify(unitTwo.value));
  }
};

const clearLocalstorage = () => {
  if (process.client) {
    localStorage.removeItem("matrix");
    localStorage.removeItem("unitOne");
    localStorage.removeItem("unitTwo");
  }
};

// Load from local storage on boot
if (process.client) {
  const savedMatrix = localStorage.getItem("matrix");
  if (savedMatrix) {
    resetDate.value = new Date(Date.now() - 10000);
    matrix.value = JSON.parse(savedMatrix);
  }
  const savedUnitOne = localStorage.getItem("unitOne");
  if (savedUnitOne) unitOne.value = JSON.parse(savedUnitOne);
  const savedUnitTwo = localStorage.getItem("unitTwo");
  if (savedUnitTwo) unitTwo.value = JSON.parse(savedUnitTwo);
}

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
  const value = parseFloat(d.toFixed(3).replace(/\.?0+$/, ""));

  // Only update cell when resetDate is newer than 500ms
  const isNull = matrix.value[rowIndex][cellIndex] === null;
  const isNotRecent = resetDate.value.getTime() + 500 < Date.now();
  if (isNull && isNotRecent) {
    matrix.value[rowIndex][cellIndex] = value;
  }

  return value;
};

watch(
  [matrix, unitOne, unitTwo],
  () => {
    saveToLocalstorage();
  },
  { deep: true }
);
</script>

<style scoped>
.grid {
  grid-template-columns: auto auto;
}
</style>
