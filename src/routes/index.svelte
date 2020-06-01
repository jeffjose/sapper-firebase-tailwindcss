<script context="module">
  export async function preload(page, session) {
    //let db = await firestore();
    //let fbList = await db.collection("list").get();
    //return { list: fbList.docs };
  }
</script>

<script>
  import { publicStore, privilagedStore } from "../stores/collection";
</script>

<style>

</style>

<svelte:head>
  <title>sapper-firebase-tailwindcss project template</title>
</svelte:head>

<div class="container mx-auto">
  <h1 class="text-2xl text-center mb-5">
    Welcome to sapper-firebase-tailwindcss project template
  </h1>

  <h2 class="text-xl text-center text-blue-500">Firestore data (Public)</h2>
  {#each $publicStore as doc}
    <p class="text-center">{JSON.stringify(doc)}</p>
  {:else}
    <p class="text-center">Firestore is empty.</p>
  {/each}

  <h2 class="mt-5 text-xl text-center text-red-500">
    Firestore data (Privilaged)
  </h2>
  {#each $privilagedStore as doc}
    <p class="text-center">{JSON.stringify(doc)}</p>
  {:else}
    <p class="text-center">Firestore is empty.</p>
  {/each}
</div>
