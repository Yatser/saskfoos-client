<script>
  import { collectionData } from "rxfire/firestore";
  import { startWith } from "rxjs/operators";
  import { onMount } from "svelte";

  let matches = null;
  let teams = null;
  let db = null;

  onMount(async () => {
    const module = await import("../../firebase.js");
    db = module.db;
    matches = collectionData(db.collection("matches"), "id").pipe(
      startWith([])
    );
    teams = collectionData(db.collection("teams"), "id").pipe(startWith([]));
  });

  function enterResult() {
    db.collection("matches").add({ teams: "Brent vs Jeremy" });
  }
</script>

<h1>KOH</h1>

{#if teams}
<table data-testid="teams">
  <tr>
    {#each $teams as team}
    <td data-testid="team">{team}</td>
    {/each}
  </tr>
</table>
{/if} {#if matches}
<table data-testid="matches">
  <tr>
    {#each $matches as match}
    <td data-testid="match">
      {match.teams}
      <button data-testid="enter-result" on:click="{enterResult}">
        Enter Result
      </button>
    </td>
    {/each}
  </tr>
</table>
{/if}
