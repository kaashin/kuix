<script>
	import Button from '$lib/Button';
</script>

<div>
	<div class="">
		<h2 class="text-lg">Button Sizes</h2>
		<Button size="sm">SM</Button>
		<Button size="md">MD</Button>
		<Button size="lg">LG</Button>
		<Button size="xl">XL</Button>
		<Button size="2xl">2XL</Button>
	</div>
	<div class="">
		<h2 class="text-lg">Button States</h2>
		<Button size="md" state="info">Info</Button>
		<Button size="md" state="success">Success</Button>
		<Button size="md" state="warning">Warning</Button>
		<Button size="md" state="error">Error</Button>
	</div>
	<div class="">
		<h2 class="text-lg">Button Types</h2>
		<Button size="md" type="primary">Primary</Button>
		<Button size="md" type="secondary">Secondary</Button>
		<Button size="md" type="tertiary">Tertiary</Button>
		<Button size="md" type="dashed">Dashed</Button>
	</div>
	<div class="">
		<h2 class="text-lg">Pill Buttons</h2>
		<Button size="sm" pill={true}>SM</Button>
		<Button size="md" pill={true}>MD</Button>
		<Button size="lg" pill={true}>LG</Button>
		<Button size="xl" pill={true}>XL</Button>
		<Button size="2xl" pill={true}>2XL</Button>
	</div>
	<div class="">
		<h2 class="text-lg">Sharp Buttons</h2>
		<Button size="sm" rounded={false}>SM</Button>
		<Button size="md" rounded={false}>MD</Button>
		<Button size="lg" rounded={false}>LG</Button>
		<Button size="xl" rounded={false}>XL</Button>
		<Button size="2xl" rounded={false}>2XL</Button>
	</div>
	<div class="text-lg">
		<h2>Disabled</h2>
		<Button disabled={true}>Primary</Button>
		<Button disabled={true} type="secondary">Secondary</Button>
		<Button disabled={true} type="tertiary">Tertiary</Button>
		<Button disabled={true} type="dashed">Dashed</Button>
	</div>
	<div class="text-lg">
		<h2>Loading Buttons</h2>
		<Button size="sm" loading={true}>Loading</Button>
		<Button size="md" loading={true}>Loading</Button>
		<Button size="lg" loading={true}>Loading</Button>
		<Button size="xl" loading={true}>Loading</Button>
		<Button size="2xl" loading={true}>Loading</Button>
	</div>
	<div class="">
		<h2 class="text-lg">Class overrides</h2>
		<Button size="md" class="bg-orange-900">Pink</Button>
		<Button size="md" class="bg-blue-400">Blue</Button>
	</div>
</div>
