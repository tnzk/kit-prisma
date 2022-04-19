<script lang="ts">
  let statusText = ''; 
  const handler = async () => {
    fetch('/data.json').then(res => statusText = res.statusText);
  };
</script>

<h1>Welcome to SvelteKit</h1>
<p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>

<button on:click={handler}>Click</button>
<br>
{statusText}
