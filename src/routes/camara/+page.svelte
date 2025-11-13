<svelte:head>
  <script src="https://aframe.io/releases/1.4.0/aframe.min.js"></script>
  <script src="https://cdn.jsdelivr.net/gh/AR-js-org/AR.js/aframe/build/aframe-ar.js"></script>
</svelte:head>

<a-scene
  embedded
  arjs="trackingMethod: best; sourceType: webcam; sourceParameters: { facingMode: 'environment' }; debugUIEnabled: false;"
  vr-mode-ui="enabled: false"
>
  <a-marker type="pattern" url="/XalapAR/patt/sus.patt">
    <a-entity
      gltf-model="/XalapAR/modelos/llama.glb"
      position="0 0 0"
      rotation="0 100 0"
      scale="0.01 0.01 0.01"
      animation-mixer
    ></a-entity>
  </a-marker>
  <a-entity camera></a-entity>
</a-scene>

<style>
  :global(body),
  :global(html) {
    margin: 0;
    padding: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;
    background: #000;
  }

  :global(a-scene),
  :global(video),
  :global(canvas) {
    position: fixed !important;
    top: 0;
    left: 0;
    width: 100% !important;
    height: 100% !important;
    object-fit: cover !important;
  }
</style>
