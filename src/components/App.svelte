<script>
  import marked from "marked";
  import { grpr } from "../../lib/grpr";

  let names = localStorage.getItem("names") || "";

  let groups = Number(localStorage.getItem("groups")) || 6;

  $: people = groups == 1 ? "Person" : "People";

  $: localStorage.setItem("names", names);

  $: localStorage.setItem("groups", JSON.stringify(groups));

  $: namesArr = names
    .trim()
    .split("\n")
    .map((x) => x.trim())
    .filter(Boolean);

  $: max = Math.trunc(namesArr.length / 2) || 1;

  $: if (max < groups) {
    groups = max;
  }

  $: table = grpr(namesArr, groups);
</script>

<style>
  #header {
    font-size: 2rem;
    padding: 0 0 2rem 0;
  }
  section#input {
    display: flex;
    flex-direction: column;
  }
  section#input > * + * {
    margin-top: 1rem;
  }
  #scale {
    display: flex;
    justify-content: space-between;
  }
</style>

<section id="header">{people} Grouper</section>

<section id="input">
  {#if namesArr.length}
    <h4>Groups of ~{groups} {people.toLowerCase()}</h4>
    <input
      type="range"
      bind:value={groups}
      on:change={console.log(groups)}
      min="1"
      {max} />
    <div id="scale">
      <div>1</div>
      <div>{max}</div>
    </div>
  {:else}
    <h4>Enter Some Names</h4>
  {/if}
  <textarea bind:value={names} id="students" placeholder="One name per line." />
</section>

<section id="output">
  {@html marked(table)}
</section>
