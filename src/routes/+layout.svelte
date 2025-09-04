<script lang="ts">
	import '../app.css';
</script>

<slot></slot>

<style>
	:global(:root) {
		--brand-color: #005843;
		--brand-color-alt: #002729;
		--width-large: 67.5rem;
		--standard-gap: 2rem;

		--padding-sm: clamp(1rem, 3%, 1.5rem);
		--padding-md: clamp(1.5rem, 6%, 3rem);
		--padding-lg: clamp(3rem, 12%, 6rem);

		--layout-gap-sm: clamp(1rem, 3vmax, 1.5rem);
		--layout-gap-md: clamp(1.5rem, 6vmax, 3rem);
		--layout-gap-lg: clamp(3rem, 8vmax, 4rem);

		--font-family: 'Geist Mono', monospace;
	}
	:global {
		body {
			background-color: var(--brand-color);
			/* height: 100vh;
			width: 100vw; */
			margin: 0;
			font-family: var(--font-family);
			font-optical-sizing: auto;
			font-weight: 400;
			font-style: normal;
			font-size: clamp(0.8rem, 2vw, 1.2rem);
			color: white;
		}

		input,
		button,
		textarea {
			font-family: var(--font-family);
			font-size: clamp(0.8rem, 2vw, 1.2rem);
		}

		section.container {
			max-width: 1920px;
			margin: 0px auto;
			padding: var(--padding-md);
		}

		/* .rubik-light {
      font-family: "Rubik", serif;
      font-optical-sizing: auto;
      font-weight: 200;
      font-style: normal;
    }

    .rubik-regular {
      font-family: "Rubik", serif;
      font-optical-sizing: auto;
      font-weight: 400;
      font-style: normal;
    }

    .rubik-bold {
      font-family: "Rubik", serif;
      font-optical-sizing: auto;
      font-weight: 700;
      font-style: normal;
    } */
	}

	@media (min-width: 1080px) {
		:global {
			/* section {
				max-width: var(--width-large);
				margin-left: auto;
				margin-right: auto;
			} */
			.blurb-container {
				display: flex;
				flex-direction: row;
				gap: var(--standard-gap);
			}

			.blurb-container > * {
				flex: 1;
			}
		}
	}
</style>
