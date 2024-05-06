<template>
  <v-container class="squares-container">
    <v-row class="size-inputs">
      <v-col cols="12" md="auto">
        <v-text-field
          v-model="sizeX"
          label="Size X"
          type="number"
          outlined
          dense
          @input="drawSquares"
        ></v-text-field>
      </v-col>
      <v-col cols="12" md="auto">
        <v-text-field
          v-model="sizeY"
          label="Size Y"
          type="number"
          outlined
          dense
          @input="drawSquares"
        ></v-text-field>
      </v-col>
    </v-row>

    <v-row class="squares-grid">
      <v-col v-for="(row, rowIndex) in grid" :key="rowIndex" cols="auto">
        <v-row>
          <v-col
            v-for="(square, columnIndex) in row"
            :key="columnIndex"
            cols="auto"
          >
            <div
              class="square"
              :class="{
                'blue-square': square.color === 'blue',
                'white-square': square.color === 'white',
              }"
            ></div>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
import { ref, reactive } from "vue";

const sizeX = ref(8);
const sizeY = ref(8);
const grid = reactive([]);

const drawSquares = () => {
  grid.length = 0;
  for (let i = 0; i < sizeY.value; i++) {
    const row = [];
    for (let j = 0; j < sizeX.value; j++) {
      row.push({ color: (i + j) % 2 === 0 ? "white" : "blue" });
    }
    grid.push(row);
  }
};

drawSquares();
</script>

<style lang="scss" scoped>
.squares-container {
  display: flex;
  flex-direction: column;
  align-items: center;

  .size-inputs {
    margin-bottom: 20px;
  }

  .squares-grid {
    display: flex;
    flex-direction: column;
    background-color: #333;
    padding: 5px;

    .square {
      width: 36px;
      height: 36px;
      cursor: pointer;

      &.blue-square {
        background-color: blue;
      }

      &.white-square {
        background-color: white;
      }

      &:hover {
        &.blue-square {
          background-color: white;
        }

        &.white-square {
          background-color: blue;
        }
      }
    }
  }
}
</style>
