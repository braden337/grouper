<script>
  import marked from "marked";
  import { grpr } from "../../lib/grpr";

  let names = localStorage.getItem("names") || "";
  // "Ricky Carmichael\nRyan Villopoto\nJustin Barcia\nJames Stewart\nAlex Martin\nJeremy Martin\nChad Reed\nChristian Craig\nMalcolm Stewart\nTravis Preston\nErnesto Fonseca\nNick Wey\nEli Tomac\nMarvin Musquin\nMichael Byrne\nZach Osborne\nJustin Bogle\nBroc Tickle\nKevin Windham\nDavid Vuillemin\nAndrew Short\nJosh Hansen\nKen Roczen\nBroc Hepler\nMatt Walker\nGrant Langston\nBen Townley\nBlake Baggett\nDean Wilson\nTrey Canard";

  let groupsOf = Number(localStorage.getItem("groups")) || 6;

  $: localStorage.setItem("names", names);

  $: localStorage.setItem("groups", JSON.stringify(groupsOf));

  $: namesArr = names
    .trim()
    .split("\n")
    .map((x) => x.trim())
    .filter(Boolean);

  $: max = Math.trunc(namesArr.length / 2) || 1;

  $: if (max < groupsOf) {
    groupsOf = max;
  }

  // $: table = namesArr.length ? grpr(namesArr, groupsOf) : "";
  $: table = grpr(namesArr, groupsOf);

  // $: if (table) {
  //   groupsOf =
  // }

  // function localSave() {
  $: localStorage.setItem("names", names);
  // }
</script>

<style>
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

<section id="input">
  {#if namesArr.length}
    <h4>Groups of ~{groupsOf} people</h4>
    <input
      type="range"
      bind:value={groupsOf}
      on:change={console.log(groupsOf)}
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

<section>
  <pre
    id="arrow">
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;.
 .. ............;;.
  ..::::::::::::;;;;.
. . ::::::::::::;;:'
                :'
  </pre>
</section>

<section id="output">
  {@html marked(table)}
</section>
