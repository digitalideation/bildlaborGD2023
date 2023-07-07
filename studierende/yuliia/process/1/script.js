(function () {
  'use strict';
  var app = {
    touchClick: 'ontouchstart' in window || window.DocumentTouch && document instanceof DocumentTouch ? 'touchstart' : 'click',
    addClass: function (el, className) {
      if (Array.isArray(el)) {
        for (var i = 0; i < el.length; i++) {
          addingClass(el[i], className);
        }
      } else
      {
        addingClass(el, className);
      }
      function addingClass(el, cls) {
        if (el.classList)
        el.classList.add(cls);else
        if (!app.hasClass(el, cls))
        el.className += " " + cls;
      }
    },
    removeClass: function (el, className) {

      if (Array.isArray(el)) {
        for (var i = 0; i < el.length; i++) {
          removingClass(el[i], className);
        }
      } else {
        removingClass(el, className);
      }

      function removingClass(el, cls) {

        if (el.classList)
        el.classList.remove(cls);else
        if (app.hasClass(el, cls)) {
          var reg = new RegExp('(\\s|^)' + cls + '(\\s|$)');
          el.className = el.className.replace(reg, ' ');
        }
      }
    },
    hasClass: function (el, cls) {

      if (el.classList) {
        return el.classList.contains(cls);
      } else {
        return !!el.className.match(
        new RegExp("(\\s|^)" + cls + "(\\s|$)"));

      }
    },
    findAncestor: function (el, sel) {
      while ((el = el.parentElement) && !(el.matches || el.matchesSelector).call(el, sel));
      return el;
    },
    findChild(element, className) {
      var foundElement = null,found;
      function recurse(element, className, found) {
        for (var i = 0; i < element.childNodes.length && !found; i++) {
          var el = element.childNodes[i];
          var classes = el.className != undefined ? el.className.split(" ") : [];
          for (var j = 0, jl = classes.length; j < jl; j++) {
            if (classes[j] == className) {
              found = true;
              foundElement = element.childNodes[i];
              break;
            }
          }
          if (found)
          break;
          recurse(element.childNodes[i], className, found);
        }
      }
      recurse(element, className, false);
      return foundElement;
    },
    getPosition: function () {
      var doc = document.documentElement;
      var left = (window.pageXOffset || doc.scrollLeft) - (doc.clientLeft || 0);
      var top = (window.pageYOffset || doc.scrollTop) - (doc.clientTop || 0);
      return [top, left];
    },
    onScreen: function (el) {
      var inScreen;
      var windowH = window.innerHeight;
      var elTop = el.getBoundingClientRect().top;
      if (parseInt(elTop) < windowH / 2) {
        inScreen = true;
      } else {
        inScreen = false;
      }
      return inScreen;
    },
    canvas: document.getElementById('canvas'),
    instruction: document.getElementById('instruction') };



  class Point {
    constructor(point, distortions, rangeX, rangeY, rangeZ) {

      this.point = point;
      this.distortions = distortions;
      this.actualX = this.xPos = this.point.x;
      this.actualY = this.yPos = this.point.y;
      this.actualZ = this.zPos = this.point.z;
      this.zOrig = this.point.z;
      this.yOrig = this.point.y;
      this.xOrig = this.point.x;
      this.step = 0.05;
      this.render = this.render.bind(this);
      this.randomize = this.randomize.bind(this);
      this.reverseX = false;
      this.reverseY = false;
      this.reverseZ = false;
      this.rangeX = rangeX;
      this.rangeY = rangeY;
      this.rangeZ = rangeZ;
      this.randomize();

    }

    randomize() {
      if (this.distortions[0]) {
        this.newX = this.random(this.rangeX[0], this.rangeX[1]);
      }
      if (this.distortions[1]) {
        this.newY = this.random(this.rangeY[0], this.rangeY[1]);
      }
      if (this.distortions[2]) {
        this.newZ = this.random(this.rangeZ[0], this.rangeY[1]);
      }

    }

    render() {
      this.step = 0.05;

      if (this.distortions[0]) {
        if (parseInt(this.actualX) != this.newX) {
          if (this.newX < this.actualX) {
            this.actualX -= this.step;
          } else {
            this.actualX += this.step;
          }
        } else
        {
          this.renderX = true;
        }
      }
      if (this.distortions[1]) {
        if (parseInt(this.actualY) != this.newY) {

          if (this.newY < this.actualY) {
            this.actualY -= this.step;
          } else {
            this.actualY += this.step;
          }
        } else {
          this.renderY = true;
        }
      }
      if (this.distortions[2]) {
        if (parseInt(this.actualZ) != this.newZ) {
          if (this.newZ < this.actualZ) {
            this.actualZ -= this.step;
          } else {
            this.actualZ += this.step;
          }

        } else
        {
          this.renderZ = true;
        }
      }

      if (this.distortions[0] & this.distortions[1] & this.distortions[2]) {
        this.point.set(this.actualX, this.actualY, this.actualZ);


        if (this.renderX && this.renderY && this.renderZ) {
          this.renderX = false;
          this.renderY = false;
          this.renderZ = false;
          return true;
        }
      }
      if (this.distortions[0] & this.distortions[1] & !this.distortions[2]) {
        this.point.set(this.actualX, this.actualY, this.zOrig);


        if (this.renderX && this.renderY) {
          this.renderX = false;
          this.renderY = false;
          return true;
        }
      }

      if (this.distortions[0] & !this.distortions[1] & this.distortions[2]) {
        this.point.set(this.actualX, this.yOrig, this.actualZ);


        if (this.renderX && this.renderZ) {
          this.renderX = false;
          this.renderZ = false;
          return true;
        }
      }
      if (!this.distortions[0] & this.distortions[1] & this.distortions[2]) {
        this.point.set(this.xOrig, this.actualY, this.actualZ);


        if (this.renderY && this.renderZ) {
          this.renderY = false;
          this.renderZ = false;
          return true;
        }
      }
      if (this.distortions[0] & !this.distortions[1] & !this.distortions[2]) {
        this.point.set(this.actualX, this.yOrig, this.zOrig);


        if (this.renderX) {
          this.renderX = false;
          return true;
        }
      }
      if (!this.distortions[0] & !this.distortions[1] & this.distortions[2]) {
        this.point.set(this.xOrig, this.yOrig, this.actualZ);


        if (this.renderZ) {
          this.renderZ = false;
          return true;
        }
      }
      if (!this.distortions[0] & this.distortions[1] & !this.distortions[2]) {
        this.point.set(this.xOrig, this.actualY, this.zOrig);


        if (this.renderY) {
          this.renderY = false;
          return true;
        }
      }

    }

    reverse() {
      this.step = 1;

      if (this.distortions[0]) {
        if (parseInt(this.actualX) != this.xOrig) {

          if (this.actualX < this.xOrig) {
            this.actualX += this.step;
          } else {
            this.actualX -= this.step;
          }
        } else
        {
          this.reverseX = true;
        }
      }


      if (this.distortions[2]) {
        if (parseInt(this.actualZ) != this.zOrig) {

          if (this.actualZ < this.zOrig) {
            this.actualZ += this.step;
          } else {
            this.actualZ -= this.step;
          }

        } else
        {
          this.reverseZ = true;
        }
      }

      if (this.distortions[1]) {
        if (parseInt(this.actualY) != this.yOrig) {

          if (this.actualY < this.yOrig) {
            this.actualY += this.step;
          } else {
            this.actualY -= this.step;
          }
        } else
        {
          this.reverseY = true;
        }
      }

      if (this.distortions[0] & this.distortions[1] & this.distortions[2]) {
        this.point.set(this.actualX, this.actualY, this.actualZ);


        if (this.reverseX && this.reverseY && this.reverseZ) {
          this.reverseX = false;
          this.reverseY = false;
          this.reverseZ = false;
          return true;
        }
      }
      if (this.distortions[0] & this.distortions[1] & !this.distortions[2]) {
        this.point.set(this.actualX, this.actualY, this.zOrig);


        if (this.reverseX && this.reverseY) {
          this.reverseX = false;
          this.reverseY = false;
          return true;
        }
      }
      if (this.distortions[0] & !this.distortions[1] & this.distortions[2]) {
        this.point.set(this.actualX, this.yOrig, this.actualZ);


        if (this.reverseX && this.reverseZ) {
          this.reverseX = false;
          this.reverseZ = false;
          return true;
        }
      }
      if (!this.distortions[0] & this.distortions[1] & this.distortions[2]) {
        this.point.set(this.xOrig, this.actualY, this.actualZ);


        if (this.reverseY && this.reverseZ) {
          this.reverseY = false;
          this.reverseZ = false;
          return true;
        }
      }
      if (this.distortions[0] & !this.distortions[1] & !this.distortions[2]) {
        this.point.set(this.actualX, this.yOrig, this.zOrig);


        if (this.reverseX) {
          this.reverseX = false;
          return true;
        }
      }
      if (!this.distortions[0] & this.distortions[1] & !this.distortions[2]) {
        this.point.set(this.xOrig, this.actualY, this.zOrig);


        if (this.reverseY) {
          this.reverseY = false;
          return true;
        }
      }
      if (!this.distortions[0] & !this.distortions[1] & this.distortions[2]) {
        this.point.set(this.xOrig, this.yOrig, this.actualZ);


        if (this.reverseZ) {
          this.reverseZ = false;
          return true;
        }
      }

    }

    random(min, max) {
      return Math.floor(Math.random() * (max - min)) + min;
    }}
  ;

  class PlaneCrash {
    constructor(obj) {


      this.planeValue = obj.plane ? obj.plane : [60, 60, 15, 15];
      this.planePosition = obj.planePosition ? obj.planePosition : [0, 0, 0];
      this.pointsNumber = obj.points ? obj.points : 35;
      this.rotation = obj.rotation ? obj.rotation : false;
      this.points = [];
      this.imgs = obj.images;
      this.distortions = obj.distortions ? obj.distortions : [true, true, true];
      this.rangeX = obj.rangeX ? obj.rangeX : [-200, 200];
      this.rangeY = obj.rangeY ? obj.rangeY : [-200, 200];
      this.rangeZ = obj.rangeZ ? obj.rangeZ : [-100, 100];
      this.animation = obj.animation != null ? obj.animation : true;

      this.startAnimation = false;
      this.reverseAnimation = false;
      this.countAnimation = 0;
      this.countReverse = 0;

      this.render = this.render.bind(this);
      this.initPlane = this.initPlane.bind(this);
      this.changeBg = this.changeBg.bind(this);
      this.setPoints = this.setPoints.bind(this);

      this.initPlane();
    }

    initPlane() {
      let $this = this;
      this.planeGeometry = new THREE.PlaneGeometry(this.planeValue[0], this.planeValue[1], this.planeValue[2], this.planeValue[3]);


      this.plane = new THREE.Mesh(this.planeGeometry);
      this.changeBg();

      this.plane.material.side = THREE.DoubleSide;

      this.plane.position.set(this.planePosition[0], this.planePosition[1], this.planePosition[2]);

      // add the plane to the scene

      this.setPoints();

      if (this.animation) {

        document.addEventListener(app.touchClick, function (e) {
          if (!app.hasClass(e.target, 'dolly-nav') && !app.hasClass(document.body, 'on-bio')) {
            $this.reverseAnimation = true;
            $this.startAnimation = false;
            $this.changeBg();
          }

        });
      }


    }
    setPoints() {

      for (var i = 0; i < this.pointsNumber; i++) {
        let index = this.random(0, this.planeGeometry.vertices.length);
        let point = new Point(this.planeGeometry.vertices[index], this.distortions, this.rangeX, this.rangeY, this.rangeZ);
        this.points.push(point);
      }
    }


    render() {
      let $this = this;
      if (this.startAnimation) {
        for (var i = 0; i < this.points.length; i++) {
          var finish = this.points[i].render();
          this.planeGeometry.verticesNeedUpdate = true;
          if (finish) {
            this.countAnimation++;
          }
        }
        if (this.countAnimation >= this.points.length) {
          this.startAnimation = false;
          this.countAnimation = 0;
        }
      }

      if (this.reverseAnimation) {
        for (var i = 0; i < this.points.length; i++) {
          var finish = this.points[i].reverse();
          this.planeGeometry.verticesNeedUpdate = true;
          if (finish) {
            this.countReverse++;
          }
        }
        if (this.countReverse >= this.points.length) {
          this.reverseAnimation = false;
          setTimeout(function () {
            $this.startAnimation = true;
          }, 1500);
          this.countReverse = 0;
        }
      }
      if (this.rotation) {
        this.plane.rotation.x -= 0.003;
        this.plane.rotation.y += 0.003;
        this.plane.rotation.z -= 0.003;
      }

    }

    random(min, max) {
      return Math.floor(Math.random() * (max - min)) + min;
    }

    changeBg() {
      let $this = this;
      let imgBg;
      randomBg();
      function randomBg() {
        imgBg = $this.imgs[$this.random(0, $this.imgs.length)];
        if (imgBg == app.actualBg) {
          randomBg();
        } else {
          app.actualBg = imgBg;
        }
      }
      var img = document.createElement('img');
      img.crossOrigin = "anonymous";
      img.setAttribute('src', 'https://assets.codepen.io/7885101/' + imgBg + '.jpg');

      img.addEventListener('load', function () {
        var vibrant = new vibrant(img);
        var swatches = vibrant.swatches();
        for (var swatch in swatches)
        if (swatches.hasOwnProperty(swatch) && swatches[swatch])


        document.body.style.backgroundColor = swatches['LightVibrant'].getHex();
        //app.claim.style.color = swatches['LightVibrant'].getHex();
        app.instruction.style.color = swatches['DarkVibrant'].getHex();

        setTimeout(function () {
          $this.startAnimation = true;
        }, 500);

        /*
         * Results into:
         * Vibrant #7a4426
         * Muted #7b9eae
         * DarkVibrant #348945
         * DarkMuted #141414
         * LightVibrant #f3ccb4
         */
      });
      // instantiate a loader
      let loader = new THREE.TextureLoader();

      // load a resource
      loader.load(
      // resource URL
      'https://assets.codepen.io/7885101/' + imgBg + '.jpg',

      // onLoad callback
      function (texture) {

        $this.plane.material = new THREE.MeshBasicMaterial({
          map: texture });


      },

      // onProgress callback currently not supported
      undefined,

      // onError callback
      function (err) {
        console.error('An error happened.');
      });

    }}


  function initPlanes() {
    let planePos;
    let depth;
    if (window.innerWidth < 991) {
      planePos = -120;
      depth = 700;
    } else
    {
      planePos = -100;
      depth = 600;
    }
    let scene = new THREE.Scene();
    app.camera = new THREE.PerspectiveCamera(40, window.innerWidth / window.innerHeight, 1, depth);

    app.camera.position.set(0, 0, 0);

    let renderer = new THREE.WebGLRenderer({
      antialias: true,
      alpha: true });

    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setClearColor(0x000000, 0);
    app.canvas.appendChild(renderer.domElement);

    let light = new THREE.AmbientLight(0xFFFFFF);
    light.position.set(0, 0, 0);
    scene.add(light);



    let planeA = new PlaneCrash({
      plane: [60, 60, 15, 15],
      planePosition: [0, 0, planePos],
      rotation: true,
      images: ['11', '12', '13', '15', '116', '17', '18', '14', '19', '100'] });



    scene.add(planeA.plane);


    function initListener() {

      window.addEventListener('resize', function () {

        app.camera.aspect = window.innerWidth / window.innerHeight;
        app.camera.updateProjectionMatrix();
        renderer.setSize(window.innerWidth, window.innerHeight);
      });
    }
    function render() {
      planeA.render();
      renderer.render(scene, app.camera);
      requestAnimationFrame(render);
    }
    initListener();
    render();
  }

  function init() {
    initPlanes();
  }


  document.addEventListener("DOMContentLoaded", function (event) {
    init();
  });
})();