<template>
  <div class="container">
    <img src="../assets/typinglogo.png" alt="">
    <el-select
      class="box"
      v-model="options.value"
      @change="changeDifficulty(options.value)"
      placeholder="Select Difficulty"
      >
      <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value"></el-option>
    </el-select>
    <el-input class="box" placeholder="Please input username" v-model="username"></el-input>
    <el-button class="box button" type="" plain @click="startGame()">Start Game</el-button>
    <el-button class="box button" type="" plain @click="goToLeaderboard()">Leaderboards</el-button>
  </div>
</template>

<script>
import { mapActions } from 'vuex';
export default {
  name: "Launcher",
  data() {
    return {
      difficulty: "",
      username: "",
      options: [
        {
          value: "easy",
          label: "easy"
        },
        {
          value: "medium",
          label: "medium"
        },
        {
          value: "hard",
          label: "hard"
        }
      ],
      value: "easy"
    };
  },
  methods: {
    startGame() {
      if (this.difficulty != "" && this.username != "") {
        this.setDifficulty(this.difficulty);
        this.setUsername(this.username);
        this.$router.push({ name: "Game" });
      }
    },
    goToLeaderboard() {
      this.$router.push({ name: "Leaderboard" });
    },
    changeDifficulty(value) {
      this.difficulty = value;
    },
    ...mapActions([
      'setDifficulty',
      'setUsername',
    ])
  }
};
</script>

<style scoped>
.container {
  height: 80vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.box {
  margin: 10px;
  width: 300px;
  
}
.button {
  background-color: #E67F53;
  color: white;
}
</style>