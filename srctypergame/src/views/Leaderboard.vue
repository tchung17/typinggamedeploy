<template>
  <div class="container">
    <div class="table">
      <div class="header">
        <el-button type class="button" plain @click="goHome">Home</el-button>
      </div>
      <h1 id="heading">Leaderboard</h1>
      <el-table
        :data="tableData"
        :stripe="true"
        :max-height="600"
        :default-sort="{prop: 'score', order: 'descending'}"
        style="width: 100%"
      >
        <el-table-column prop="thedate" label="Date" width="180"></el-table-column>
        <el-table-column prop="username" label="Username" width="180"></el-table-column>
        <el-table-column prop="score" label="Score" sortable width="180"></el-table-column>
        <el-table-column
          prop="difficulty"
          label="Difficulty"
          width="90"
          :filters="[{ text: 'Easy', value: 'easy' }, { text: 'Medium', value: 'medium' }, { text: 'Hard', value: 'hard' }]"
          :filter-method="filterDifficulty"
        >
          <template slot-scope="scope">
            <el-tag
              :type="difficultyDisplay(scope.row.difficulty)"
              disable-transitions
            >{{ scope.row.difficulty }}</el-tag>
          </template>
        </el-table-column>
      </el-table>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tableData: []
    };
  },
  methods: {
    filterDifficulty(value, row) {
      return value === row.difficulty;
    },
    difficultyDisplay(difficulty) {
      if (difficulty == "easy") {
        return "primary";
      } else if (difficulty == "medium") {
        return "success";
      } else {
        return "danger";
      }
    },
    goHome() {
      this.$router.push({ name: "Launcher" });
    }
  },
  created() {
    fetch("http://localhost:3000")
      .then(res => res.json())
      .then(data => {
        const table = Object.values(data);
        this.tableData = table;
        console.log(this.tableData);
      });
  }
};
</script>

<style scoped>
.container {
  display: flex;
  flex-direction: row;
  justify-content: center;
}
.table {
  width: 630px;
}
#heading {
  border-bottom: solid 2px grey;
}
.button {
  background-color: #e67f53;
  color: white;
  width: 100%;
}
</style>