<script>
  import { signOut } from "../firebase";
  import { authStore } from "../stores/auth";
  import Profile from "./Profile.svelte";
  import SignInButton from "./SignInButton.svelte";
</script>

<style>

</style>

<section class="flex">
  {#if $authStore.status === 'in'}
    <Profile {...$authStore.user} />
    <button
      class="bg-gray-200 hover:bg-gray-300 rounded-lg px-4"
      on:click={signOut}>
      Logout
    </button>
  {:else}
    <SignInButton provider={'google'} />
    <SignInButton provider={'facebook'} />
  {/if}
</section>
