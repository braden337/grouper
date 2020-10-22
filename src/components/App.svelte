<script>
  import marked from "marked";
  import { grpr } from "../../lib/grpr";

  let names =
    "Ricky Carmichael\nRyan Villopoto\nJustin Barcia\nJames Stewart\nAlex Martin\nJeremy Martin\nChad Reed\nChristian Craig\nTy Masterpool\nJustin Cooper\nChase Sexton\nAdam Cianciarulo\nEli Tomac\nMarvin Musquin\nMax Anstie\nZach Osborne\nJustin Bogle\nBroc Tickle\nJake Masterpool\nDavid Vuillemin\nAndrew Short\nJosh Hansen\nKen Roczen\nBroc Hepler\nMatt Walker\nGrant Langston\nBen Townley\nBlake Baggett\nDean Wilson\nTrey Canard";

  let groupsOf = 5;

  $: namesArr = names
    .trim()
    .split("\n")
    .map((x) => x.trim());

  $: table = grpr(namesArr, groupsOf);
</script>

<style>
  section#input {
    display: flex;
    flex-direction: column;
  }
  section#input * + * {
    margin-top: 1rem;
  }
</style>

<section id="input">
  <h4>Groups of ~{groupsOf} people</h4>
  <input type="range" bind:value={groupsOf} min="2" max={namesArr.length / 2} />
  <textarea
    bind:value={names}
    id="students"
    placeholder="Put your student names here, one per line." />
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
