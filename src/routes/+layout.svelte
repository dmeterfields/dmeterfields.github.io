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
	}
	:global {
		body {
			background-color: var(--brand-color);
			height: 100vh;
			width: 100vw;
			margin: 0;
			font-family: 'Geist Mono', monospace;
			font-optical-sizing: auto;
			font-weight: 400;
			font-style: normal;
			color: white;
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
			section {
				max-width: var(--width-large);
				margin-left: auto;
				margin-right: auto;
			}
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
