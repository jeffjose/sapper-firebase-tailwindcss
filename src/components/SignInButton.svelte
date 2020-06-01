<script>
  import { signInWithFacebook, signInWithGoogle } from "../firebase";

  export let provider;
</script>

{#if provider === 'google'}
  <button
    class="google bg-gray-200 hover:bg-gray-300 rounded-lg px-4 mx-1"
    on:click={signInWithGoogle}>
    <span>Sign in with Google</span>
  </button>
{:else if provider === 'facebook'}
  <button
    class="bg-gray-200 hover:bg-gray-300 rounded-lg px-4"
    on:click={signInWithFacebook}>
    <span>Sign in with facebook</span>
  </button>
{:else}
  <div>No provider was provided as a prop</div>
{/if}
