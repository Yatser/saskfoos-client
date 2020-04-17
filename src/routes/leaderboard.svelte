<script>
  import { collectionData } from "rxfire/firestore";
  import { startWith } from "rxjs/operators";
  import { onMount } from "svelte";

  let db = null;
  let players = null;

  onMount(async () => {
    const module = await import("../firebase.js");
    db = module.db;
    players = collectionData(
      db.collection("players").orderBy("points", "desc"),
      "id"
    ).pipe(startWith([]));
  });
</script>

<section class="section">
  <div class="container">
    <h1 class="title">Leaderboard</h1>

    {#if players}
      <table class="table">

        <thead>
          <tr>
            <th>Name</th>
            <th>Rank</th>
            <th>Points</th>
          </tr>
        </thead>

        <tbody>
          {#each $players as player}
            <tr>
              <td>{player.name}</td>
              <td>{player.rank}</td>
              <td>{player.points}</td>
            </tr>
          {/each}
        </tbody>

      </table>
    {/if}
  </div>
</section>
