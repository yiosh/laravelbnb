<template>
  <div>
    <div v-if="loading">Fetching data...</div>
    <div v-else>
      <bookable-list-item
        v-for="(bookable, index) in bookables"
        :title="bookable.title"
        :content="bookable.content"
        :price="bookable.price"
        :key="index"
      ></bookable-list-item>
    </div>
  </div>
</template>

<script>
import BookableListItem from "./BookableListItem";

export default {
  components: {
    BookableListItem,
  },
  data: () => ({
    bookables: null,
    loading: true,
  }),
  created() {
    setTimeout(() => {
      this.bookables = [
        {
          title: "Cheap Villa",
          content: "A very cheap villa",
          price: 1000,
        },
        {
          title: "Cheap Villa2",
          content: "A very cheap villa2",
          price: 1500,
        },
      ];
      this.loading = false;
    }, 3000);
  },
};
</script>