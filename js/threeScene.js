/*==========================================================
ENTITY ENTERPRISES
Three.js Controller
==========================================================*/

const container = document.getElementById("three-container");

if (container) {

    const scene = new THREE.Scene();

    const camera = new THREE.PerspectiveCamera(

        35,

        container.clientWidth / container.clientHeight,

        0.1,

        100

    );

    camera.position.set(0, 2, 9);

    /*==========================================================
    Renderer
    ==========================================================*/

    const renderer = new THREE.WebGLRenderer({

        antialias: true,
        alpha: true,
        powerPreference: "high-performance"

    });

    renderer.setPixelRatio(

        Math.min(window.devicePixelRatio, 2)

    );

    renderer.setSize(

        container.clientWidth,

        container.clientHeight

    );

    renderer.shadowMap.enabled = true;

    renderer.shadowMap.type = THREE.PCFSoftShadowMap;

    renderer.outputColorSpace = THREE.SRGBColorSpace;

    renderer.toneMapping = THREE.ACESFilmicToneMapping;

    renderer.toneMappingExposure = 1.15;

    container.appendChild(renderer.domElement);

    /*==========================================================
    Lights
    ==========================================================*/

    const ambient = new THREE.AmbientLight(

        0xffffff,

        2.5

    );

    scene.add(ambient);

    const sun = new THREE.DirectionalLight(

        0xffffff,

        3

    );

    sun.position.set(

        8,

        12,

        6

    );

    sun.castShadow = true;

    scene.add(sun);

    const rim = new THREE.DirectionalLight(

        0x8cbcff,

        1.4

    );

    rim.position.set(

        -6,

        4,

        -5

    );

    scene.add(rim);

    const fill = new THREE.PointLight(

        0xffddc4,

        2,

        40

    );

    fill.position.set(

        3,

        5,

        4

    );

    scene.add(fill);

    /*==========================================================
    Shadow Plane
    ==========================================================*/

    const ground = new THREE.Mesh(

        new THREE.CircleGeometry(

            8,

            64

        ),

        new THREE.ShadowMaterial({

            opacity: .18

        })

    );

    ground.rotation.x = -Math.PI / 2;

    ground.position.y = -2;

    ground.receiveShadow = true;

    scene.add(ground);

    /*==========================================================
    Loader
    ==========================================================*/
/*==========================================================
Loader
==========================================================*/

let building = null;

const loader = new THREE.GLTFLoader();

/*
Replace this URL later with your own model:

assets/models/building.glb

*/

const MODEL_URL =
"https://raw.githubusercontent.com/KhronosGroup/glTF-Sample-Assets/main/Models/Box/glTF-Binary/Box.glb";

loader.load(

MODEL_URL,

(gltf)=>{

building = gltf.scene;

building.scale.set(

2.5,

2.5,

2.5

);

building.position.set(

0,

-2,

0

);

building.traverse((child)=>{

if(child.isMesh){

child.castShadow=true;

child.receiveShadow=true;

if(child.material){

child.material.roughness=.25;

child.material.metalness=.12;

child.material.envMapIntensity=1.8;

}

}

});

scene.add(building);

gsap.from(

building.scale,

{

x:0,

y:0,

z:0,

duration:2,

ease:"expo.out"

}

);

},

(xhr)=>{

console.log(

Math.round(

(xhr.loaded/xhr.total)*100

)+"%"

);

},

(error)=>{

console.error(error);

}

);

    /*==========================================================
    Mouse
    ==========================================================*/

    const mouse = {

        x: 0,

        y: 0

    };

    window.addEventListener(

        "mousemove",

        e => {

            mouse.x =

                (e.clientX / window.innerWidth) * 2 - 1;

            mouse.y =

                -(e.clientY / window.innerHeight) * 2 + 1;

        }

    );

    /*==========================================================
    Clock
    ==========================================================*/

    const clock = new THREE.Clock();

    /*==========================================================
    Animation
    ==========================================================*/

    function animate() {

        requestAnimationFrame(animate);

        const t = clock.getElapsedTime();

        if (building) {

            building.rotation.y += (

                (mouse.x * .25) -

                building.rotation.y

            ) * .03;

            building.rotation.x += (

                (-mouse.y * .08) -

                building.rotation.x

            ) * .03;

            building.position.y =

                -2 +

                Math.sin(

                    t * .8

                ) * .08;

        }

        camera.position.x += (

            mouse.x * .7 -

            camera.position.x

        ) * .02;

        camera.position.y += (

            (2 + mouse.y * .25) -

            camera.position.y

        ) * .02;

        camera.lookAt(

            0,

            .5,

            0

        );

        renderer.render(

            scene,

            camera

        );

    }

    animate();

    /*==========================================================
    Scroll
    ==========================================================*/

    window.addEventListener(

        "scroll",

        () => {

            const progress = Math.min(

                window.scrollY /

                window.innerHeight,

                1

            );

            gsap.to(

                camera.position,

                {

                    z: 9 - progress * 2,

                    duration: .5

                }

            );

        }

    );

    /*==========================================================
    Resize
    ==========================================================*/

    window.addEventListener(

        "resize",

        () => {

            camera.aspect =

                container.clientWidth /

                container.clientHeight;

            camera.updateProjectionMatrix();

            renderer.setSize(

                container.clientWidth,

                container.clientHeight

            );

        }

    );

}