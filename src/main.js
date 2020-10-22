import App from "./components/App.svelte";

const app = new App({
  target: document.getElementsByTagName("main")[0],
  props: {
    // we'll learn about props later
    answer: 42,
  },
});
