<template>
  <div>
    <p>coucou</p>
  </div>
</template>

<script>
import * as THREE from 'three';
export default {
  name: "Piano"
}

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );
</script>

<style scoped>

</style>