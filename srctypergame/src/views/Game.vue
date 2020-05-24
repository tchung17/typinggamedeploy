<template>
  <div class="box">
    <div class="container">
      <div class="lose" v-if="getLose">
          <h1>You ran out of time...</h1>
          <p>You ended with a final score of {{ getScore }}</p>
          <el-button type="primary" class="button" plain @click="restart">Try Again</el-button>
          <el-button type="primary" class="button" plain @click="viewLeaderboard">View Leaderboards</el-button>
      </div>
      <div class="win" v-else-if="getWin">
          <h1>You won!</h1>
          <p>You achieved a final score of {{ getScore }}</p>
          <el-button type="" class="button" plain @click="submitToLeaderboard">Submit to Leaderboard</el-button>
      </div>
      <div class="gameInterfaceScore" v-else>
        <Indicator/>
        <game-interface/>
      </div>
    </div>
  </div>
</template>

<script>
import GameInterface from "../components/GameInterface.vue";
import Indicator from "../components/Indicator";
import axios from 'axios';
import { mapActions } from 'vuex';
import { mapGetters } from 'vuex';
export default {
  name: "Game",
  data() {
    return {
      interval: null,
    };
  },
  computed: {
    ...mapGetters([
      'getWin',
      'getLose',
      'getUsername',
      'getScore',
      'getDifficulty'
    ])
  },
  watch: {
    getWin: function() {
      clearInterval(this.interval);
    },
    getLose: function() {
      clearInterval(this.interval);
    }
  },
  methods: {
    restart() {
      this.$router.push({ name: 'Launcher' });
      this.restartGame();
    },
    submitToLeaderboard() {
      if (this.getUsername != null && this.getDifficulty != null) {
        let d = new Date();
      axios.post('http://localhost:3000/submit', 
      { 
        username: this.getUsername, 
        score: this.getScore, 
        difficulty: this.getDifficulty, 
        date: d.getMonth() + 1 + '/' + d.getDate() + '/' + d.getFullYear()
      })
      .then(res => {
        console.log(res);
        this.$router.push({ name: 'Leaderboard' });
      })
      }
    },
    viewLeaderboard() {
      this.$router.push({ name: 'Leaderboard' });
    },
    ...mapActions([
      'restartGame',
      'timerTick',
    ])
  },
  components: {
    GameInterface,
    Indicator
  },
  created() {
    this.interval = setInterval(
      this.timerTick
      , 1000);
  },
  beforeDestroy() {
    if (this.interval != null) {
      clearInterval(this.interval);
    }
    this.restartGame();
  }
};
</script>

<style scoped>
.container {
  display: flex;
  justify-content: center;
}
.gameInterfaceScore {
  margin-top: 120px;
}
.button {
  background-color: #E67F53;
  color: white;
}
</style>