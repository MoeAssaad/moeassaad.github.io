// // Template elements

// function htmlToElement(html) {
//     var template = document.createElement('template');
//     html = html.trim(); // Never return a text node of whitespace as the result
//     template.innerHTML = html;
//     return template.content.firstChild;
// }

// var marker = '<a-sphere color="yellow" radius="3"  position="-10 -30 -200"   material="opacity: 0.5">  </a-sphere>';

var counter = 0;
var roomCount = 6, markerCount = 10;

// var r0_r1 = {x: -196, y: -8, z: -16},
var r0_r1 = {x: 0, y: 0, z: -200};
    /* r0_r2 = {x: 115, y: 2, z: -159},
     * r1_r0 = {x: -188, y: -15, z: -54},
     * r2_r0 = {x: 2, y: -19, z: -196},
     * r2_r3 = {x: 196, y: -12, z: 12},
     * r3_r4 = {x: -190, y: -22, z: -42},
     * r3_r5 = {x: 31, y: -7, z: 194},
     * r3_r2 = {x: 187, y: -5, z: 60},
     * r4_r3 = {x: 196, y: -5, z: 17},
     * r5_r3 = {x: 194, y: 2, z: 30};*/

/* var r0 = {x: 1, y: -93, z: 0},*/
var r0 = {x: 0, y: 0, z: 0},
    r1 = {x: 1, y: -124, z: 0},
    r2 = {x: 0, y: -88, z: 0},
    r3 = {x: -5, y: -294, z: 0},
    r4 = {x: -1, y: -123, z: 0},
    r5 = {x: -4, y: -204, z: 0};

/* var markerList = {'r0_r1': r0_r1, 'r0_r2': r0_r2, 'r1_r0': r1_r0, 'r2_r0': r2_r0, 'r2_r3': r2_r3, 'r3_r4': r3_r4, 'r3_r5': r3_r5, 'r3_r2': r3_r2, 'r4_r3': r4_r3, 'r5_r3': r5_r3};*/
var markerList = {'r0_r1': r0_r1};
var rotationList = {'r0': r0, 'r1': r1, 'r2': r2, 'r3': r3, 'r4': r4, 'r5': r5};

var skyEl, skyElSrc, sceneEl;

// cameraEl.addEventLit


// // get position of marker
// AFRAME.registerComponent('marker-point', {
//     tick: function () {
// 	this.el.addEventListener('click', function (evt) {

// 	    var rotation = document.querySelector('#camera').getAttribute('rotation');

// 	    document.querySelector('.posX').textContent = parseInt(evt.detail.intersection.point.x);
// 	    document.querySelector('.posY').textContent = parseInt(evt.detail.intersection.point.y);
// 	    document.querySelector('.posZ').textContent = parseInt(evt.detail.intersection.point.z);

// 	    document.querySelector('.rotX').textContent = parseInt(rotation.x);
// 	    document.querySelector('.rotY').textContent = parseInt(rotation.y);
// 	    document.querySelector('.rotZ').textContent = parseInt(rotation.z);


// 	    // console.log('I was clicked at: ', evt.detail.intersection.point);
// 	    //console.log('Camera\'s rotation: ', document.querySelector('#camera').getAttribute('rotation'));

// 	});
// 	// this.el.setAttribute('marker-point', '');

//   }
// });


// document.addEventListener("DOMContentLoaded", function(event) {
//      document.querySelector('a-scene').addEventListener('enter-vr', function () {
//      	console.log("ENTERED VR");
//      });



// });


// place marker based on loaded photo
AFRAME.registerComponent('do-something-once-loaded', {
    init: function () {
	
	sceneEl = this.el;
	skyEl = document.querySelector('a-sky');
	skyElSrc = skyEl.getAttribute('src');

	document.querySelector('#camera').setAttribute('rotation', rotationList[skyElSrc.split("#")[1]]);

	var camAnimEl = document.querySelector("#camAnim");
	// var startingAngle = rotationList[skyElSrc.split("#")[1]];
	// console.log(startingAngle);
	// var finaleAngle = startingAngle.x + " " + 0 + " " + startingAngle.z;
	// camAnimEl.setAttribute('to', finaleAngle  );
	// camAnimEl.setAttribute('fill','both');
	/* camAnimEl.emit("showcase");*/
	
	// document.querySelector('#camera').setAttribute('showcase', '');
	// document.querySelector('#camera').setAttribute('animation', {attribute: 'rotation', from=rotationList[skyElSrc.split("#")[1]], to: rotationList[skyElSrc.split("#")[1]], repeat: 'indefinite'});

	//console.log(markerList);
	for (var place in markerList) {
	    var markerHolderEl = document.createElement('a-entity');
	    var markerEl = document.createElement('a-gltf-model');
	    markerEl.setAttribute('src', '#door');
	    /* markerEl.setAttribute('rotation', '0 180 0');*/
	    markerEl.setAttribute('scale', '0.1 0.1 0.1');
	    markerEl.setAttribute('rotation', '0 45 0');
	    markerHolderEl.setAttribute('class', place);
	    /* markerHolderEl.setAttribute('change-room', 'event', 'click');*/
	    markerHolderEl.setAttribute('position', markerList[place]);
	    /* markerHolderEl.setAttribute('animate-marker','');*/
	    /* var markerEl = document.createElement('a-sphere');
	       markerEl.setAttribute('color', 'yellow');
	       markerEl.setAttribute('radius', '3');
	       // markerEl.setAttribute('position', {x:-200,y:0,z:0});
	       markerEl.setAttribute('transparent', 'true');	
	       markerEl.setAttribute('material', 'opacity', '0.5');
	       //markerEl.setAttribute('load-marker', '');
	       //console.log('tempEl of ' + place + ' is '  + tempEl);
	       markerEl.setAttribute('position', markerList[place]);
	       markerEl.setAttribute('class', place);*/
	    // markerEl.setAttribute('change-room', 'event', 'click');

	    
	    
	    if (!skyElSrc.localeCompare("#"+place.split("_")[0])) {
		//console.log(' #'+place.split("_")[0] + skyElSrc);
		sceneEl.appendChild(markerHolderEl);
		markerHolderEl.appendChild(markerEl);
		//sceneEl.removeAttribute('do-something-once-loaded');
	    }
	    else {
		if (document.getElementsByClassName(place).length > 0) {
		    //console.log(document.getElementsByClassName(place) + ' ' + skyElSrc);
	    	    sceneEl.removeChild(document.getElementsByClassName(place)[0]);
		}
	    	//sceneEl.removeAttribute('do-something-once-loaded');
	    }
	}
	//sceneEl.removeAttribute('do-something-once-loaded');
    }
});





// });

// // Change room
AFRAME.registerComponent('change-room', {
    schema: {
	event: {type: 'string'},
    },
    init:function() {
	
	var el = this.el;
	if (this.data.event){
	    el.addEventListener(this.data.event, function (evt) {
		//console.log(el);
		var nav = el.getAttribute('class');
		var navTo = nav.split("_")[1];
		
	
		skyEl.setAttribute('src','#'+navTo);
		sceneEl.removeAttribute('do-something-once-loaded');
		sceneEl.setAttribute('do-something-once-loaded','');
		//sceneEl.removeChild(el);
		
	
	    });
	}
    }
});
// AFRAME.registerComponent('set-image', {
//   schema: {
//     on: {type: 'string'},
//     target: {type: 'selector'},
//     src: {type: 'string'},
//     dur: {type: 'number', default: 100}
//   },
//   init: function () {
//     var data = this.data;
//     var el = this.el;
//     this.setupFadeAnimation();
//     el.addEventListener(data.on, function () {
//     // Fade out image.
// 	// data.target.emit('set-image-fade');
// 	// // Wait for fade to complete.
// 	// console.log(data.target.getAttribute('src'));
//     setTimeout(function () {
//     	//Set image.
//     	var targetSrc;
//     	switch (data.target.getDOMAttribute('material').src.toString()) {
// 	case "#outside":
// 	    targetSrc = "#livingroom1";
// 	    break;
// 	case "#livingroom1":
// 	    targetSrc = "#outside";
// 	    break;
// 	}
// 	data.target.setAttribute('material', 'src', targetSrc);
// 	console.log(data.target.getDOMAttribute('src'));
//     	console.log(data.target.getAttribute('src'));
//     	console.log(data.target.getDOMAttribute('material').src);
// 	console.log(data.target.getAttribute('material').src);
//     }, data.dur);
//   });
//   },
//   setupFadeAnimation: function () {
//     var data = this.data;
//     var targetEl = this.data.target;

//     // Only set up once.
//     if (targetEl.dataset.setImageFadeSetup) { return; }
//     targetEl.dataset.setImageFadeSetup = true;

//     // Create animation.
//     targetEl.setAttribute('animation__fade', {
//       property: 'material.color',
//       startEvents: 'set-image-fade',
//       dir: 'alternate',
//       dur: data.dur,
//       from: '#FFF',
//       to: '#000'
//     });
//   }
// });
