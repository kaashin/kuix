<script>
	import LoadingSpinners from '../Loaders/LoadingSpinners.svelte';

	export let size = 'sm';
	export let color = '';
	export let bgColor = '';
	export let type = '';
	export let state = '';
	export let addClass = '';
	export let rounded = true;
	export let pill = false;
	export let disabled = false;
	export let href = '';
	export let htmlType = '';
	export let target = '';
	export let onClick = null;
	export let loading = false;

</script>

<button
	type="button"	
	class="inline-flex items-center border border-transparent font-medium shadow-sm text-white bg-primary-600 hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 hover:text-white transition hover:ease-in hover:duration-300 size_{size} state_{state} {addClass
		? addClass
		: ''} {$$props.class || ''}"
	class:primary={type === 'primary'}
	class:secondary={type === 'secondary'}
	class:tertiary={type === 'tertiary'}
	class:dashed={type === 'dashed'}
	class:pill
	class:notRounded={rounded === false}
	class:disabled
	class:loading
	class:disabledSecondary={type === 'secondary' && disabled === true}
	class:disabledTertiary={type === 'tertiary' && disabled === true}
	class:disabledDashed={type === 'dashed' && disabled === true}
	{onClick}
	disabled={disabled || loading}
	style="{$$props.style || ''}"
>
	{#if loading}
		<LoadingSpinners {size} />
	{/if}
	<slot />
</button>

<style>
	.size_sm {
		@apply px-2.5 py-1.5 text-xs rounded gap-1;
	}
	.size_md {
		@apply px-3 py-2 text-sm leading-4 rounded-md gap-1.5;
	}
	.size_lg {
		@apply px-4 py-2 text-sm rounded-md gap-2;
	}
	.size_xl {
		@apply px-4 py-2 rounded-md gap-2;
	}
	.size_2xl {
		@apply px-6 py-3 rounded-md gap-2;
	}
	.state_info {
		@apply bg-blue-600;
	}
	.state_info:hover {
		@apply bg-blue-700;
	}
	.state_success {
		@apply bg-green-600;
	}
	.state_success:hover {
		@apply bg-green-700;
	}
	.state_warning {
		@apply bg-orange-600;
	}
	.state_warning:hover {
		@apply bg-orange-700;
	}
	.state_error {
		@apply bg-red-600;
	}
	.state_error:hover {
		@apply bg-red-700;
	}
	.secondary {
		@apply bg-primary-100 text-primary-700;
	}
	.secondary:hover {
		@apply bg-primary-200;
	}
	.tertiary {
		@apply bg-white border border-primary-600 text-primary-600;
	}
	.tertiary:hover {
		@apply bg-primary-600 border border-primary-600 text-white;
	}
	.dashed {
		@apply border border-primary-600 border-dashed bg-transparent text-primary-600;
	}
	.dashed:hover {
		@apply border border-primary-600 bg-primary-600 text-white;
	}
	.pill {
		@apply rounded-full;
	}
	.notRounded {
		@apply rounded-none;
	}
	.disabled {
		@apply bg-gray-600 cursor-not-allowed;
	}
	.disabledSecondary {
		@apply bg-gray-200 text-gray-900 cursor-not-allowed; 
	}
	.disabledSecondary:hover {
		@apply bg-gray-200 text-gray-900 cursor-not-allowed;
	}
	.disabledTertiary {
		@apply bg-white border border-gray-400 text-gray-400 cursor-not-allowed;
	}
	.disabledTertiary:hover {
		@apply bg-white border border-gray-400 text-gray-400 cursor-not-allowed;
	}
	.disabledDashed {
		@apply bg-transparent border border-gray-400 border-dashed text-gray-400 cursor-not-allowed;
	}
	.disabledDashed:hover {
		@apply bg-transparent border border-gray-400 border-dashed text-gray-400 cursor-not-allowed;
	}
</style>
