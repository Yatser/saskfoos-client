<script>
  import { collectionData } from "rxfire/firestore";
  import { startWith } from "rxjs/operators";
  import { onMount } from "svelte";

  let db = null;
  let tournaments = null;

  onMount(async () => {
    const module = await import("../../firebase.js");
    db = module.db;
    tournaments = collectionData(db.collection("tournaments"), "id").pipe(
      startWith([])
    );
  });
</script>

<section class="section">
  <div class="container">
    <h1 class="title">Events</h1>

    {#if tournaments }
    <ul>
      {#each $tournaments as event}
      <li>
        <a href="/event/{event.id}">{event.name}</a>
      </li>
      {/each}
    </ul>
    {/if}
  </div>
</section>
