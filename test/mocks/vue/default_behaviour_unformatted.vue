<template>
	<div class="xl:flex py-12 items-center -mx-6">
		<div class="px-6 text-left md:text-center xl:text-left max-w-2xl md:max-w-3xl mx-auto">
			<slot />
		</div>
		<div class="mt-12 px-6 xl:mt-0 flex-shrink-0 max-w-2xl md:max-w-3xl">
			<slot name="figure" />
		</div>
	</div>
</template>

<script>
export default {
	name: 'prettier-tailwind'
}
</script>
