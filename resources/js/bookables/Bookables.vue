<template>
  <div>
    <div v-if="loading">Fetching data...</div>
    <div v-else>
      <div class="row mb-4" v-for="row in rows" :key="'row' + row">
        <div
          class="col"
          v-for="(bookable, column) in bookablesInRow(row)"
          :key="'row' + row + column"
        >
          <bookable-list-item
            :title="bookable.title"
            :content="bookable.content"
            :price="bookable.price"
            :key="index"
          ></bookable-list-item>
        </div>
        <div
          class="col"
          v-for="p in placeholdersInRow(row)"
          :key="'placeholder' + row + p"
        ></div>
      </div>
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
    columns: 3,
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
        {
          title: "Cheap Villa2",
          content: "A very cheap villa2",
          price: 1500,
        },
        {
          title: "Cheap Villa2",
          content: "A very cheap villa2",
          price: 1500,
        },
        {
          title: "Cheap Villa2",
          content: "A very cheap villa2",
          price: 1500,
        },
        {
          title: "Cheap Villa2",
          content: "A very cheap villa2",
          price: 1500,
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
  computed: {
    rows() {
      return this.bookables === null
        ? 0
        : Math.ceil(this.bookables.length / this.columns);
    },
  },
  methods: {
    bookablesInRow(row) {
      return this.bookables.slice((row - 1) * this.columns, row * this.columns);
    },
    placeholdersInRow(row) {
      return this.columns - this.bookablesInRow(row).length;
    },
  },
};
</script>