<!--
<script>
	const marker = document.querySelector('#markerLlama');
	const scene = document.querySelector('a-scene');
	const camera = document.querySelector('#camera');
	let fixedModel = null;

	marker.addEventListener('markerFound', () => {
		if (fixedModel) return;

		const tempModel = document.querySelector('#llamaTemp');
		fixedModel = tempModel.cloneNode(true);
		const markerPos = tempModel.object3D.getWorldPosition(new THREE.Vector3());
		fixedModel.setAttribute('position', `${markerPos.x} ${markerPos.y} ${markerPos.z}`);
		scene.appendChild(fixedModel);
	});

	document.addEventListener('keydown', (e) => {
		const pos = camera.getAttribute('position');
		if (e.key === 'q' || e.key === 'Q') pos.y += 0.1;
		if (e.key === 'e' || e.key === 'E') pos.y -= 0.1;
		camera.setAttribute('position', pos);
	});
</script>
-->
<svelte:head>
	<script src="https://aframe.io/releases/1.4.0/aframe.min.js"></script>
	<script src="https://cdn.jsdelivr.net/gh/AR-js-org/AR.js/aframe/build/aframe-ar.js"></script>
	<script
		src="https://cdn.jsdelivr.net/gh/c-frame/aframe-extras@7.5.0/dist/aframe-extras.min.js"
	></script>
</svelte:head>

<main>
	<div
		style="margin: 0; overflow: hidden; position: fixed; top: 0; left: 0; width: 100%; height: 100%;"
	>
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
	</div>
</main>
