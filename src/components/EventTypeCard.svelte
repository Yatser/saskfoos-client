<script>
  export let event = null;
</script>

<style>
  .box {
    height: 100%;
  }

  .title {
    height: 60px;
  }
</style>

<a href="/event/create?type={event.id}">
  <div class="box">
    <p class="title is-4">{event.title}</p>
    <p class="subtitle is-6">{event.subtitle}</p>
    <p class="content">{event.description}</p>
  </div>
</a>
