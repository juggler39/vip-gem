<template>
  <h1>Events for Good</h1>
  <div class="events">
    <EventCard v-for="event in events" :key="event.id" :event="event" />
    <button
      @click="
        addEvent({
          id: 1,
          category: 'asdf',
          title: 'asdf',
          description: 'asdf',
          location: 'asdf',
          date: 'asdf',
          time: 'asdf',
          organizer: 'asdf'
        })
      "
    >
      Click me
    </button>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { EventItem } from '@/types/EventItem';
import EventCard from '@/components/training/EventCard.vue';
import EventService from '@/services/EventService';
export default defineComponent({
  name: 'EventList',
  components: {
    EventCard
  },
  data() {
    return {
      events: [] as EventItem[]
    };
  },
  created() {
    EventService.getEvents()
      .then((response) => {
        this.events = response.data;
      })
      .catch((error) => {
        console.log(error);
      });
  },
  methods: {
    addEvent(newEvent: EventItem) {
      this.events.push(newEvent);
    },
    secondEvent(): EventItem {
      return this.events[1];
    }
  }
});
</script>

<style scoped>
.events {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
