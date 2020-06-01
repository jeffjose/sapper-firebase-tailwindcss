<script>
  export let displayName;
  export let photoURL;
  export let uid;
</script>

<div class="flex items-center">
  <p class="inline-block align-middle">{displayName}</p>
  <img src={photoURL} class="h-10 w-10 rounded-full mx-5" alt="user avatar" />
</div>
