<template>
    <div class="container">
      <div> {{ words[0] }}</div>
      <br>
        <div class="inputbox">
          <el-row>
              <el-col :span="8" :offset="8">
                <el-input class="underlay"
                  :placeholder="words[0]"
                  autocomplete="off"
                  resize="both"
                  clearable>
                </el-input>
                <el-input class="overlay"
                  autocomplete="off"
                  v-model="inputword"
                  @input=" checkMatch()"
                  resize="both"
                  clearable>
                </el-input>
              </el-col>
            </el-row>
        </div>
      <p class="score-container">Score: <span id="score">{{ this.getScore }}</span></p>
    </div>
</template>

<script>
import axios from 'axios';
import { mapActions } from 'vuex';
import { mapGetters } from 'vuex';
export default {
    name: 'GameInterface',
    data() {
        return {
            inputword: "",
            words: [""],
        }
    },
    computed: {
        ...mapGetters([
            'getScore',
        ])
    },
    methods: {
        ...mapActions([
            'incrementTime',
            'incrementScore'
        ]),
        checkMatch() {
            if (this.inputword == this.words[0]) {
                this.inputword = "";
                this.incrementTime();
                this.incrementScore();
                this.changeWord();
            }
        },
        changeWord() {
            this.words[0] = this.words[1];
            axios.get("https://random-word-api.herokuapp.com/word?number=1")
            .then(res => {
                this.words[1] = res.data[0]
            })
            .catch(error => console.log(error));
        },
    },
    created () {
        axios.get("https://random-word-api.herokuapp.com/word?number=2")
        .then(res => {
            let wordstemp = [];
            wordstemp.push(res.data[0]);
            wordstemp.push(res.data[1]);
            this.words = wordstemp;
        });
    },
}
</script>

<style scoped>
.container{
  display: flex;
  flex-direction: column;
  align-content: center;
  justify-content: center;
  width: 800px;
}
.overlay{
  opacity: 0.5;
  position: relative;
  top: -45px;
  z-index: 1;
  width: 200px;
}
.underlay{
  width: 200px;
}
</style>