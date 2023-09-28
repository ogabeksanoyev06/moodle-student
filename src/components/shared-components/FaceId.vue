<!--<template>-->
<!--  <div id="app">-->
<!--    &lt;!&ndash; WebCam Video Stream &ndash;&gt;-->
<!--    <video ref="video" autoplay playsinline></video>-->

<!--    &lt;!&ndash; Button to Trigger Face Check &ndash;&gt;-->
<!--    <button @click="checkFace">Tekshirish</button>-->
<!--  </div>-->
<!--</template>-->

<!--<script>-->
<!--import * as faceapi from "face-api.js";-->

<!--export default {-->
<!--  name: "App",-->
<!--  data() {-->
<!--    return {-->
<!--      modelsLoaded: false,-->
<!--      inputImage: null,  // Placeholder for the backend image-->
<!--      backendImageUrl: "https://hemis.tfi.uz/static/crop/3/3/320_320_90_334602468.jpg"-->
<!--    };-->
<!--  },-->
<!--  async mounted() {-->
<!--    await this.loadModels();-->
<!--    this.setupWebcam();-->
<!--    this.loadImageFromBackend();-->
<!--  },-->
<!--  methods: {-->
<!--    async loadModels() {-->
<!--      await Promise.all([-->
<!--        faceapi.nets.tinyFaceDetector.loadFromUri("/models"),-->
<!--        faceapi.nets.faceLandmark68Net.loadFromUri("/models"),-->
<!--        faceapi.nets.faceRecognitionNet.loadFromUri("/models"),-->
<!--      ]);-->
<!--      this.modelsLoaded = true;-->
<!--    },-->
<!--    async setupWebcam() {-->
<!--      const video = this.$refs.video;-->
<!--      const stream = await navigator.mediaDevices.getUserMedia({ video: {} });-->
<!--      video.srcObject = stream;-->
<!--    },-->
<!--    async loadImageFromBackend() {-->
<!--      try {-->
<!--        const response = await fetch(this.backendImageUrl);-->
<!--        if (response.ok) {-->
<!--          const blob = await response.blob();-->
<!--          const reader = new FileReader();-->
<!--          reader.onloadend = () => {-->
<!--            this.inputImage = reader.result;-->
<!--          };-->
<!--          reader.readAsDataURL(blob);-->
<!--        } else {-->
<!--          console.error("Error fetching the image from backend:", response.statusText);-->
<!--        }-->
<!--      } catch (error) {-->
<!--        console.error("Error fetching the image from backend:", error);-->
<!--      }-->
<!--    },-->
<!--    async checkFace() {-->
<!--      if (!this.modelsLoaded || !this.inputImage) return;-->

<!--      const video = this.$refs.video;-->

<!--      const detectionsVideo = await faceapi.detectAllFaces(video, new faceapi.TinyFaceDetectorOptions()).withFaceLandmarks();-->

<!--      if (!detectionsVideo || detectionsVideo.length > 1) {-->
<!--        console.log("Kamerada birdan ortiq yuz aniqlandi");-->
<!--        return;-->
<!--      }-->

<!--      if (detectionsVideo.length === 1) {-->
<!--        const videoBox = detectionsVideo[0].detection.box;-->
<!--        const videoFace = await faceapi.extractFaces(video, [videoBox]);-->

<!--        if (videoFace.length === 0) {-->
<!--          console.log("Kamerada yuz aniqlanmadi");-->
<!--          return;-->
<!--        }-->

<!--        const videoDescriptor = await faceapi.computeFaceDescriptor(videoFace[0]);-->

<!--        const detectionsImage = await faceapi.detectSingleFace(this.inputImage, new faceapi.TinyFaceDetectorOptions()).withFaceLandmarks();-->

<!--        if (!detectionsImage) {-->
<!--          console.log("Yuklangan rasmda yuz aniqlanmadi");-->
<!--          return;-->
<!--        }-->

<!--        const imageBox = detectionsImage.detection.box;-->
<!--        const imageFace = await faceapi.extractFaces(this.inputImage, [imageBox]);-->

<!--        if (imageFace.length === 0) {-->
<!--          console.log("Yuklangan rasmda yuz aniqlanmadi");-->
<!--          return;-->
<!--        }-->

<!--        const imageDescriptor = await faceapi.computeFaceDescriptor(imageFace[0]);-->

<!--        const distance = faceapi.euclideanDistance(videoDescriptor, imageDescriptor);-->

<!--        if (distance < 0.40) {-->
<!--          console.log("Yuzlar mos keladi");-->
<!--        } else {-->
<!--          console.log("Yuzlar mos kelmaydi");-->
<!--        }-->
<!--      } else {-->
<!--        console.log("Yuz aniqlanmadi");-->
<!--      }-->
<!--    }-->
<!--  }-->
<!--};-->
<!--</script>-->













<!--<template>-->
<!--  <div id="app">-->
<!--    <video ref="video" width="100%" height="100%" autoplay playsinline></video>-->
<!--    <img crossOrigin="anonymous" ref="inputImage" :src="image" alt="img" v-show="false" />-->
<!--  </div>-->
<!--</template>-->

<!--<script>-->
<!--import * as faceapi from "face-api.js";-->

<!--export default {-->
<!--  name: "App",-->
<!--  props: {-->
<!--    isOpenCamera: {-->
<!--      type: Boolean,-->
<!--      required: true,-->
<!--    },-->
<!--    image:{-->
<!--      type:String,-->
<!--      required: true-->
<!--    }-->
<!--  },-->
<!--  data() {-->
<!--    return {-->
<!--      modelsLoaded: false,-->
<!--    };-->
<!--  },-->
<!--  async mounted() {-->
<!--    await this.loadModels();-->
<!--  },-->
<!--  watch: {-->
<!--    async isOpenCamera(newVal) {-->
<!--      if (newVal) {-->
<!--        if (!this.modelsLoaded) await this.loadModels();-->
<!--        this.setupWebcam();-->
<!--      } else {-->
<!--        this.stopWebcam();-->
<!--      }-->
<!--    },-->
<!--  },-->
<!--  methods: {-->
<!--    stopWebcam() {-->
<!--      const video = this.$refs.video;-->
<!--      if(video && video.srcObject) {-->
<!--        const stream = video.srcObject;-->
<!--        const tracks = stream.getTracks();-->

<!--        tracks.forEach(function(track) {-->
<!--          track.stop();-->
<!--        });-->

<!--        video.srcObject = null;-->
<!--      }-->
<!--    },-->
<!--    async loadModels() {-->
<!--      await Promise.all([-->
<!--        faceapi.nets.tinyFaceDetector.loadFromUri("/models"),-->
<!--        faceapi.nets.faceLandmark68Net.loadFromUri("/models"),-->
<!--        faceapi.nets.faceRecognitionNet.loadFromUri("/models"),-->
<!--      ]);-->
<!--      this.modelsLoaded = true;-->
<!--    },-->
<!--    async setupWebcam() {-->
<!--      const video = this.$refs.video;-->
<!--      const stream = await navigator.mediaDevices.getUserMedia({ video: {} });-->
<!--      video.srcObject = stream;-->
<!--      video.onplaying = () => {-->
<!--        this.startFaceCheckLoop();-->
<!--      };-->
<!--    },-->
<!--    async checkFace() {-->
<!--      if (!this.modelsLoaded) return;-->

<!--      const video = this.$refs.video;-->
<!--      const image = this.$refs.inputImage;-->

<!--      // Detect faces and landmarks for the video-->
<!--      const detectionsVideo = await faceapi.detectAllFaces(video, new faceapi.TinyFaceDetectorOptions()).withFaceLandmarks();-->
<!--      if (!detectionsVideo || detectionsVideo.length !== 1) {-->
<!--        console.log("Kamerada yuz aniqlanmadi yoki birdan ortiq yuz aniqlandi");-->
<!--        this.$emit('face-match-result', false);-->
<!--        return;-->
<!--      }-->

<!--      const videoBox = detectionsVideo[0].detection.box;-->
<!--      const videoFace = await faceapi.extractFaces(video, [videoBox]);-->
<!--      if (videoFace.length === 0) {-->
<!--        console.log("Kamerada yuz aniqlanmadi");-->
<!--        this.$emit('face-match-result', false);-->

<!--        return;-->
<!--      }-->

<!--      const videoDescriptor = await faceapi.computeFaceDescriptor(videoFace[0]);-->

<!--      // Detect face and landmarks for the image-->
<!--      const detectionsImage = await faceapi.detectSingleFace(image, new faceapi.TinyFaceDetectorOptions({ inputSize: 128, scoreThreshold: 0.5 })).withFaceLandmarks();-->
<!--      if (!detectionsImage) {-->
<!--        console.log("Rasm yuzi aniqlanmadi");-->
<!--        this.$emit('face-match-result', false);-->

<!--        return;-->
<!--      }-->

<!--      const imageBox = detectionsImage.detection.box;-->
<!--      const imageFace = await faceapi.extractFaces(image, [imageBox]);-->
<!--      if (imageFace.length === 0) {-->
<!--        console.log("Rasm yuzi aniqlanmadi");-->
<!--        this.$emit('face-match-result', false);-->

<!--        return;-->
<!--      }-->

<!--      const imageDescriptor = await faceapi.computeFaceDescriptor(imageFace[0]);-->

<!--      // Compare descriptors-->
<!--      const distance = faceapi.euclideanDistance(videoDescriptor, imageDescriptor);-->
<!--      if (distance < 0.50) {-->
<!--        console.log("Yuzlar mos keladi");-->
<!--        this.$emit('face-match-result', true);-->
<!--      } else {-->
<!--        console.log("Yuzlar mos kelmaydi");-->
<!--        this.$emit('face-match-result', false);-->
<!--      }-->
<!--    },-->
<!--    startFaceCheckLoop() {-->
<!--      if (this.modelsLoaded) {-->
<!--        this.checkFace();-->
<!--        requestAnimationFrame(this.startFaceCheckLoop);-->
<!--      }-->
<!--    },-->
<!--    stopFaceCheckLoop() {-->
<!--      cancelAnimationFrame(this.startFaceCheckLoop);-->
<!--    }-->
<!--  }-->
<!--};-->
<!--</script>-->







<template>
  <div id="app">
    <div class="counter">
    <div v-if="countdown!==0">
      {{this.countdown}}

    </div>
      <div class="true" v-else>
        <i class='bx bx-check'></i>
      </div>
    </div>
    <video ref="video" width="100%" height="100%" autoplay playsinline></video>
    <img crossOrigin="anonymous" ref="inputImage" src="http://api.bek-baraka.uz/media/products/image_hkkrej4.png" alt="img" v-show="false" />
  </div>
</template>

<script>
import * as faceapi from "face-api.js";

export default {
  name: "App",
  props: {
    isOpenCamera: {
      type: Boolean,
      required: true,
    },
    image:{
      type: String,
      required: true
    }
  },
  data() {
    return {
      modelsLoaded: false,
      countdown: 4,
    };
  },
  async mounted() {
    await this.loadModels();
  },
  watch: {
    async isOpenCamera(newVal) {
      if (newVal) {
        if (!this.modelsLoaded) await this.loadModels();
        this.setupWebcam();
      } else {
        this.stopWebcam();
      }
    },
  },
  methods: {
    stopWebcam() {
      const video = this.$refs.video;
      if(video && video.srcObject) {
        const stream = video.srcObject;
        const tracks = stream.getTracks();

        tracks.forEach(function(track) {
          track.stop();
        });

        video.srcObject = null;
      }
    },
    async loadModels() {
      await Promise.all([
        faceapi.nets.tinyFaceDetector.loadFromUri("/models"),
        faceapi.nets.faceLandmark68Net.loadFromUri("/models"),
        faceapi.nets.faceRecognitionNet.loadFromUri("/models"),
      ]);
      this.modelsLoaded = true;
    },
    async setupWebcam() {
      const video = this.$refs.video;
      const stream = await navigator.mediaDevices.getUserMedia({ video: {} });
      video.srcObject = stream;
      video.onplaying = () => {
        console.log('aa')
        this.countdown=4
        let interval = setInterval(() => {
          if (this.countdown === 0) {
            clearInterval(interval);
            this.checkFace();
          } else {
            this.countdown--;
          }
        }, 1000);

      //   setTimeout(() => {
      //     this.checkFace();
      //   }, 4000);
      };
    },
    async checkFace() {
      if (!this.modelsLoaded) return;

      const video = this.$refs.video;
      const image = this.$refs.inputImage;

      const detectionsVideo = await faceapi.detectAllFaces(video, new faceapi.TinyFaceDetectorOptions()).withFaceLandmarks();
      if (!detectionsVideo || detectionsVideo.length !== 1) {
        console.log("Kamerada yuz aniqlanmadi yoki birdan ortiq yuz aniqlandi");
        this.$emit('face-match-result', false);
        return;
      }

      const videoBox = detectionsVideo[0].detection.box;
      const videoFace = await faceapi.extractFaces(video, [videoBox]);
      if (videoFace.length === 0) {
        console.log("Kamerada yuz aniqlanmadi");
        this.$emit('face-match-result', false);
        return;
      }

      const videoDescriptor = await faceapi.computeFaceDescriptor(videoFace[0]);

      const detectionsImage = await faceapi.detectSingleFace(image, new faceapi.TinyFaceDetectorOptions({ inputSize: 128, scoreThreshold: 0.5 })).withFaceLandmarks();
      if (!detectionsImage) {
        console.log("Rasm yuzi aniqlanmadi");
        this.$emit('face-match-result', false);
        return;
      }

      const imageBox = detectionsImage.detection.box;
      const imageFace = await faceapi.extractFaces(image, [imageBox]);
      if (imageFace.length === 0) {
        console.log("Rasm yuzi aniqlanmadi");
        this.$emit('face-match-result', false);
        return;
      }

      const imageDescriptor = await faceapi.computeFaceDescriptor(imageFace[0]);

      const distance = faceapi.euclideanDistance(videoDescriptor, imageDescriptor);
      if (distance < 0.50) {
        console.log("Yuzlar mos keladi");
        this.$emit('face-match-result', true);
      } else {
        console.log("Yuzlar mos kelmaydi");
        this.$emit('face-match-result', false);
      }
    }
  }
};
</script>
<style scoped>
.counter{
  position: absolute;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 45px;
  color: #fff;
}
.true{
  font-size: 50px;
}
</style>



