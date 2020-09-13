<script context="module">
  export async function preload(page, session) {
    //let db = await firestore();
    //let fbList = await db.collection("list").get();
    //return { list: fbList.docs };
  }
</script>

<script>
  import { publicStore, privilagedStore } from "../stores/collection";
  import { addItemToCollection, removeItemFromCollection } from "../firebase";
</script>

<style>

</style>

<svelte:head>
  <title>sapper-firebase-tailwindcss project template</title>
</svelte:head>

<div class="container mx-auto">
  <h1 class="mb-5 text-2xl text-center">
    Welcome to sapper-firebase-tailwindcss project template
  </h1>

  <h2 class="text-xl text-center text-blue-500">Firestore data (Public)</h2>
  <button
    on:click={() => addItemToCollection('publiclist')}
    class="px-4 mx-1 bg-gray-200 rounded-lg hover:bg-gray-300">
    Add item
  </button>
  <button
    on:click={() => removeItemFromCollection('publiclist')}
    class="px-4 mx-1 bg-gray-200 rounded-lg hover:bg-gray-300">
    Remove item
  </button>
  {#each $publicStore as doc}
    <p class="text-center">{JSON.stringify(doc.name)}</p>
  {:else}
    <p class="text-center">Firestore is empty.</p>
  {/each}

  <h2 class="mt-5 text-xl text-center text-red-500">
    Firestore data (Privilaged)
  </h2>
  <button
    on:click={() => addItemToCollection('privilagedlist')}
    class="px-4 mx-1 bg-gray-200 rounded-lg hover:bg-gray-300">
    Add item
  </button>
  <button
    on:click={() => removeItemFromCollection('privilagedlist')}
    class="px-4 mx-1 bg-gray-200 rounded-lg hover:bg-gray-300">
    Remove item
  </button>
  {#each $privilagedStore as doc}
    <p class="text-center">{JSON.stringify(doc.name)}</p>
  {:else}
    <p class="text-center">Firestore is empty.</p>
  {/each}

</div>
