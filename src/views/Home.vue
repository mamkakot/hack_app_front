<template>
  <div class="home">
    <el-row :gutter="20">
      <el-col :offset="4" :span="12">
        <PostForm />
        <PostCard
          v-for="post in posts"
          :key="post.id"
          :post="post"
          @updatePosts="fetchPosts"
        />
      </el-col>
      <el-col :offset="1" :span="6">
        <div class="v1">
          <div style="margin-left: 50px">
          </div>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import PostCard from "@/components/PostCard.vue";
import EventService from "@/services/EventService.js";
import PostForm from "@/components/PostForm.vue";

export default {
  name: "Home",
  components: {
    PostCard,
    PostForm
  },
  data() {
    return {
      posts: [],
    };
  },
  methods: {
    fetchPosts() {
      EventService.getPosts()
        .then((response) => {
          this.posts = response.data;
        })
        .catch((error) => {
          console.log("There was an error: " + error.response);
        });
    },
  },
  created() {
    this.fetchPosts();
  },
};
</script>

<style scoped>
.title {
  text-align: center;
  margin-bottom: 50px;
}

.v1 {
  border-left: 2px solid #dfdfdf;
  height: 500px;
}
</style>
