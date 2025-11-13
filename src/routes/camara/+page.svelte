<svelte:head>
	<script src="https://aframe.io/releases/1.4.0/aframe.min.js"></script>
	<script src="https://cdn.jsdelivr.net/gh/AR-js-org/AR.js/aframe/build/aframe-ar.js"></script>
	<script
		src="https://cdn.jsdelivr.net/gh/c-frame/aframe-extras@7.5.0/dist/aframe-extras.min.js"
	></script>
</svelte:head>

<a-scene
	embedded
	arjs="trackingMethod: best; sourceType: webcam; debugUIEnabled: false;"
	vr-mode-ui="enabled: false"
>
	<a-marker type="pattern" url="/XalapAR/patt/sus.patt">
		<a-entity
			gltf-model="/XalapAR/modelos/llama.glb"
			position="0 0 0"
			rotation="0 100 0"
			scale="0.01 0.01 0.01"
			animation-mixer
		/>
	</a-marker>
	<a-entity camera />
</a-scene>

<style>
	:global(body),
	:global(html) {
		margin: 0 !important;
		overflow: hidden !important;
		width: 100%;
		height: 100%;
	}

	:global(a-scene) {
		position: fixed !important;
		top: 0;
		left: 0;
		width: 100% !important;
		height: 100% !important;
	}
</style>
