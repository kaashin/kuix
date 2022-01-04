<script>
	export let size = 'sm';
	export let color = '';
	export let bgColor = '';
	export let type = '';
	export let state = '';
	export let twClasses = '';

	let sizeClass = '';
	let bgColorClass = '';
	let classString = '';
	let borderColor = 'border-transparent';
	let primaryColor = 'red';
	let twColor = primaryColor;
	let twBgColor = primaryColor;
	let twColorWeight = 600;
	let twHoverWeight = 700;
	let textColor = 'text-white';

	switch (size) {
		case 'sm':
			sizeClass = 'px-2.5 py-1.5 text-xs rounded';
			break;
		case 'md':
			sizeClass = 'px-3 py-2 text-sm leading-4 rounded-md';
			break;
		case 'lg':
			sizeClass = 'px-4 py-2 text-sm rounded-md';
			break;
		case 'xl':
			sizeClass = 'px-4 py-2 rounded-md';
			break;
		case '2xl':
			sizeClass = 'px-6 py-3 rounded-md';
			break;
		default:
			sizeClass = '';
			break;
	}

	// bgColorClass = 'bg-indigo-600';

	switch (state) {
		case 'info':
			twColor = 'blue';
			break;
		case 'success':
			twColor = 'green';
			break;
		case 'warning':
			twColor = 'orange';
			break;
		case 'error':
			twColor = 'red';
			break;
	}

	// Handle button type
	if (type === 'secondary') {
		borderColor = `border-${twColor}-500`;
		twBgColor = 'transparent';
		textColor = `text-${twColor}-${twColorWeight}`;
		twClasses = `hover:text-white ${twClasses}`;
	}

	if (['inherit', 'current', 'transparent', 'black', 'white'].includes(twBgColor)) {
		bgColorClass = `bg-${twColor}`;
	} else {
		bgColorClass = `bg-${twColor}-${twColorWeight}`;
	}

	// If there is any use override of the colors
	if (bgColor) {
		bgColorClass = bgColor;
	}
	if (color) {
		textColor = color;
	}

	classString = `inline-flex items-center ${sizeClass} border ${borderColor} font-medium shadow-sm ${textColor} ${bgColorClass} hover:bg-${twColor}-${twHoverWeight} focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 ${twClasses} transition hover:ease-in hover:duration-300`;
	console.log({ classString });
</script>

<button type="button" class={classString}><slot /></button>
