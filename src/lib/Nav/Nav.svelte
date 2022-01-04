<script>
  import NavItem from './NavItem.svelte';

  export let navItems = [
    {
      name: 'Item 1',
      href: '/'
    },
    {
      name: 'Item 2',
      href: '/'
    },
    {
      name: 'Item 3',
      href: '/'
    }
  ];
</script>

<nav class="flex-1 px-2 py-4 space-y-1">
  {#each navItems as item}
    <NavItem title={item.name} path={item.href}/>
  {/each}
</nav>