<script lang="ts">
	import { Accordion, type WithoutChildrenOrChild } from 'bits-ui';
	import AccordionItem from '$lib/components/ui/accordion-item.svelte';

	type Item = {
		value?: string;
		title: string;
		content: string;
		disabled?: boolean;
	};

	let {
		value = $bindable(),
		ref = $bindable(null),
		items,
		...restProps
	}: WithoutChildrenOrChild<Accordion.RootProps> & {
		items: Item[];
	} = $props();
</script>

<!--
 Since we have to destructure the `value` to make it `$bindable`, we need to use `as any` here to avoid
 type errors from the discriminated union of `"single" | "multiple"`.
 (an unfortunate consequence of having to destructure bindable values)
  -->
<Accordion.Root bind:value bind:ref {...restProps as any}>
	{#each items as item, i (item.title + i)}
		<AccordionItem {...item} />
	{/each}
</Accordion.Root>
