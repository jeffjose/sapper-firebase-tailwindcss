<script>
  export let segment;
  import Login from "../components/Login.svelte";
</script>

<style>

</style>

<nav>
  <ul class="h-20 flex items-center justify-evenly">
    <li>
      <a aria-current={segment === undefined ? 'page' : undefined} href=".">
        home
      </a>
    </li>
    <li>
      <a aria-current={segment === 'about' ? 'page' : undefined} href="about">
        about
      </a>
    </li>

    <!-- for the blog link, we're using rel=prefetch so that Sapper prefetches
		     the blog data when we hover over the link or tap it on a touchscreen -->
    <li>
      <a
        rel="prefetch"
        aria-current={segment === 'blog' ? 'page' : undefined}
        href="blog">
        blog
      </a>
    </li>
    <li>
      <span>
        <Login />
      </span>
    </li>
  </ul>
</nav>
