<script lang="ts">
	import DmeterfieldsLogo from '$lib/assets/dmeterfields-sigil.svg?raw';
	import ServicesPreview from '$lib/components/services-preview.svelte';
	import { Tabs } from 'bits-ui';
	import * as commonmark from 'commonmark';

	type ServicesType = 'tolling' | 'storage' | 'logistics';
	const serviceTypes = ['tolling', 'storage', 'logistics'];
	let selectedTab = $state<ServicesType>('tolling');

	const reader = new commonmark.Parser({ smart: true });
	const writer = new commonmark.HtmlRenderer({ safe: true });

	const navLinks = [
		{ title: 'services', href: '#services' },
		{ title: 'facilities', href: '#facilities' },
		{ title: 'products', href: '#products' },
		{ title: 'clients', href: '#clients' }
	];

	const blurbs: { title: string; content: string; cta: string | null }[] = [
		{
			title: 'End to End',
			content: `Our service and product lines are comprehensive, and we handle everything from our farm right up to your kitchen. Want a specific cut of meat? Can do. Want us to store it and deliver it for you too? We've got your back.`,
			cta: null
		},
		{
			title: 'Hassle Free',
			content: `We know how hard it is to run a business. That's why it's important to us to be a reliable, high-quality supplier, so you can focus on what only you can do.

We'll take the rest off your plate.`,
			cta: null
		},
		{
			title: 'A Proven Track Record',
			content: `All of these promises mean nothing if we don't have a track record to prove it. We've supplied your favorite restaurants and supermarkets, and sometimes, other suppliers.`,
			cta: 'See our clients'
		}
	];

	const services: { title: string; content: string }[] = [
		{
			title: 'Tolling',
			content: 'what'
		},
		{
			title: 'Storage',
			content: 'Lorem Ipsum'
		},
		{
			title: 'Logistics',
			content: 'foo'
		}
	];

	const products = [
		{
			name: 'Carcass',
			subProducts: [{ name: 'Fresh Chilled Carcass' }, { name: 'Frozen Carcass' }]
		},
		{
			name: 'Primals',
			subProducts: [
				{ name: 'Chilled Primals' },
				{ name: 'Boxed Frozen Primals (Local)' },
				{ name: 'Boxed Frozen Primals (imported)' }
			]
		}
	];
</script>

<section id="hero" class="container">
	<nav id="main-nav">
		<ul>
			{#each navLinks as navLink}
				<li>
					<a href={navLink.href}>{navLink.title}</a>
				</li>
			{/each}
		</ul>
	</nav>
	<!-- <img id="sigil" src={img} alt="Dmeter Fields Logo" /> -->
	<div id="sigil">
		{@html DmeterfieldsLogo}
	</div>
	<h1 id="brand">Dmeter Fields</h1>
</section>
<section class="container">
	<h2>Making your day</h2>
	<div class="blurb-container">
		{#each blurbs as blurb}
			<div class="">
				<h3>{blurb.title}</h3>
				<p>{@html writer.render(reader.parse(blurb.content))}</p>
			</div>
		{/each}
	</div>
</section>
<section class="container">
	<h2 id="services">Services</h2>
	<Tabs.Root bind:value={selectedTab}>
		<Tabs.List>
			{#each serviceTypes as tabValue}
				<Tabs.Trigger value={tabValue}>{tabValue}</Tabs.Trigger>
			{/each}
		</Tabs.List>
		<Tabs.Content value={'tolling'}>
			<ServicesPreview />
		</Tabs.Content>
		<Tabs.Content value={'storage'}></Tabs.Content>
		<Tabs.Content value={'logistics'}></Tabs.Content>
	</Tabs.Root>
</section>
<section class="container">
	<h2 id="facilities">Facilities</h2>
	<!-- <div class="blurb-container">
		{#each services as service}
			<div>
				<h3>{service.title}</h3>
				<p>{@html writer.render(reader.parse(service.content))}</p>
			</div>
		{/each}
	</div> -->
</section>
<section class="container">
	<h2 id="products">Products</h2>
	<!-- <div class="blurb-container">
		{#each services as service}
			<div>
				<h3>{service.title}</h3>
				<p>{@html writer.render(reader.parse(service.content))}</p>
			</div>
		{/each}
	</div> -->
</section>
<section class="container">
	<h2 id="clients">Clients</h2>
	<!-- <div class="blurb-container">
		{#each services as service}
			<div>
				<h3>{service.title}</h3>
				<p>{@html writer.render(reader.parse(service.content))}</p>
			</div>
		{/each}
	</div> -->
</section>

<style scoped>
	#sigil {
		width: calc(min(12rem, 50vh));
	}

	#brand {
		font-weight: 100;
		font-size: 3rem;
		/* color: white; */
	}

	#slogan {
		font-weight: 900;
		font-size: 3rem;
		/* color: var(--brand-color-alt); */
	}

	#hero {
		/* background-color: var(--brand-color); */
	}

	#main-nav {
	}

	.container {
		/* display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center; */
		/* height: 100%; */
		/* width: 100%; */
	}
</style>
