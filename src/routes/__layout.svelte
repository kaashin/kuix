<script>
	import '../app.css';


	import Sidebar from '$lib/Sidebar';
	import Nav from '$lib/Nav';


	const navItems = [
		{
			name: 'Home',
			href: '/'
		},
		{
			name: 'Buttons',
			href: '/buttons'
		},
		{
			name: 'Contact',
			href: '/contact'
		}
	];
</script>

<div class="w-full flex flex-col items-center ">
	<slot></slot>
</div>
