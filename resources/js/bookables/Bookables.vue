<template>
  <div>
    <bookable-list-item title="Cheap Villa" content=" Very cheap villa" :price="1000"></bookable-list-item>
    <bookable-list-item title="Cheap Villa2" content=" Very cheap villa2" :price="1500"></bookable-list-item>
  </div>
</template>

<script>
import BookableListItem from "./BookableListItem";

export default {
  components: {
    BookableListItem,
  },
};
</script>