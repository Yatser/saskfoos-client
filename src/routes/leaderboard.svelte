<script>
    import { collectionData } from "rxfire/firestore";
    import { startWith } from "rxjs/operators";
    import { onMount } from "svelte";
  
    let db = null;
    let players = null;
  
    onMount(async () => {
      const module = await import("../firebase.js");
      db = module.db;
      players = collectionData(db.collection("players"), "id").pipe(
        startWith([])
      );
    });
  </script>
  
  <section class="section">
    <div class="container">
      <h1 class="title">Leaderboard</h1>
  
      {#if players }
      <ul>
        {#each $players as player}
        <li>
          <a>{player.name}</a>
        </li>
        {/each}
      </ul>
      {/if}
    </div>
  </section>
  