<script context="module">
  export async function preload(page, session) {
    //let db = await firestore();
    //let fbList = await db.collection("list").get();
    //return { list: fbList.docs };
  }
</script>

<script>
  import { collectionStore } from "../stores/collection";

  export let list = [];
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

  <h2 class="text-xl text-center">Firestore data</h2>
  <p>{JSON.stringify($collectionStore)}</p>
  {#each list as listItem}
    <p class="text-center">{JSON.stringify(listItem.data().name)}</p>
  {:else}
    <p class="text-center">Firestore is empty.</p>
  {/each}
</div>
