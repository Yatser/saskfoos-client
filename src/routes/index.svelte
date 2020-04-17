<script>
    import EventTypeCard from '../components/EventTypeCard.svelte'

    let events = [
        {
            id: 'koh',
            title: 'King of the Hill',
            subtitle: 'Singles or Doubles',
            description: "Win and you stay on the table, lose and you're off."
        },
        {
            id: 'mdyp',
            title: 'Monster DYP',
            subtitle: 'Doubles',
            description: 'A new, random partner every round.'
        },
        {
            id: 'rr',
            title: 'Round Robin',
            subtitle: 'Singles or Doubles',
            description: 'Play against every other team for one or more rounds.'
        },
        {
            id: 'ko',
            title: 'Knockout',
            subtitle: 'Singles or Doubles',
            description: 'Classic bracket style tournament.'
        },
        {
            id: 'whist',
            title: 'Whist',
            subtitle: 'Doubles',
            description: 'Each player plays exactly once with everyone else, and exactly twice against everyone else'
        },
        {
            id: 'lms',
            title: 'Last Man Standing',
            subtitle: 'Doubles, then Singles',
            description: 'Lose a match, lose a life. Last player alive wins.'
        }
    ];
</script>

<section>
    <div class="hero-body">
        <div class="container">
            <h1 class="title">
                Create Event
            </h1>
        </div>
    </div>
</section>
<div class="container">
    <div class="columns">
        {#each events as event}
        <div class="column">
            <EventTypeCard event={event}></EventTypeCard>
        </div>
        {/each}
    </div>
</div>