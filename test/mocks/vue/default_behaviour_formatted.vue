<template>
	<div class="xl:flex items-center py-12 -mx-6">
		<div class="md:text-center xl:text-left md:max-w-3xl max-w-2xl px-6 mx-auto text-left">
			<slot />
		</div>
		<div class="xl:mt-0 md:max-w-3xl flex-shrink-0 max-w-2xl px-6 mt-12">
			<slot name="figure" />
		</div>
	</div>
</template>

<script>
export default {
	name: 'prettier-tailwind'
}
</script>
