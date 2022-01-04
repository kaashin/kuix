<script>
  export let title = "Title";
</script>


<div class="hidden md:flex md:w-64 md:flex-col md:fixed md:inset-y-0">
  <!-- Sidebar component, swap this element with another sidebar if you like -->
  <div class="flex-1 flex flex-col min-h-0 bg-gray-800">
    <div class="flex items-center h-16 flex-shrink-0 px-4 bg-gray-900">
      <h1 class="text-gray-200">{title}</h1>
    </div>
    <div class="flex-1 flex flex-col overflow-y-auto">
      <slot />
    </div>
  </div>
</div>