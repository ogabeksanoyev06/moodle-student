
<!--<template>-->
<!--  <div id="app">-->
<!--    <video ref="video" width="100%" height="100%" autoplay playsinline></video>-->
<!--    <img crossorigin="anonymous" ref="inputImage" :src="image" alt="img" v-show="false" />-->
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
<!--      type: String,-->
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
<!--            this.checkFace();-->
<!--      };-->
<!--    },-->
<!--    async checkFace() {-->
<!--      if (!this.modelsLoaded) return;-->

<!--      const video = this.$refs.video;-->
<!--      const image = this.$refs.inputImage;-->

<!--      const detectionsVideo = await faceapi.detectAllFaces(video, new faceapi.TinyFaceDetectorOptions()).withFaceLandmarks();-->
<!--      if (!detectionsVideo) {-->
<!--        console.log("Kamerada yuz aniqlanmadi ");-->
<!--        this.$emit('face-match-result', false);-->
<!--        return;-->
<!--      }-->
<!--      if(detectionsVideo.length !== 1){-->
<!--        console.log("Kamerada birdan ortiq yuz aniqlandi");-->
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

<!--      const distance = faceapi.euclideanDistance(videoDescriptor, imageDescriptor);-->
<!--      if (distance < 0.50) {-->
<!--        console.log("Yuzlar mos keladi");-->
<!--        this.$emit('face-match-result', true);-->
<!--      } else {-->
<!--        console.log("Yuzlar mos kelmaydi");-->
<!--        this.$emit('face-match-result', false);-->
<!--      }-->
<!--    }-->
<!--  }-->
<!--};-->
<!--</script>-->
<!--<style scoped>-->
<!--.counter{-->
<!--  position: absolute;-->
<!--  width: 100%;-->
<!--  height: 100%;-->
<!--  display: flex;-->
<!--  align-items: center;-->
<!--  justify-content: center;-->
<!--  font-size: 45px;-->
<!--  color: #fff;-->
<!--}-->
<!--.true{-->
<!--  font-size: 50px;-->
<!--}-->
<!--</style>-->

<template>
  <div id="app">
    <video ref="video" width="100%" height="100%" autoplay playsinline></video>
    <img crossorigin="anonymous" ref="inputImage" :src="image" alt="img" v-show="false" />
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
    image: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      modelsLoaded: false,
    };
  },
  async mounted() {
    await this.loadModels();
  },
  watch: {
    isOpenCamera(newVal) {
      if (newVal) {
        if (!this.modelsLoaded) this.loadModels();
        this.setupWebcam();
      } else {
        this.stopWebcam();
      }
    },
  },
  methods: {
    stopWebcam() {
      const video = this.$refs.video;
      if (video && video.srcObject) {
        const stream = video.srcObject;
        const tracks = stream.getTracks();
        tracks.forEach(function (track) {
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
                  this.checkFace();
          }
    },
    async checkFace() {
      if (!this.modelsLoaded) return;
      const video = this.$refs.video;
      const image = this.$refs.inputImage;
      const detectionsVideo = await faceapi
          .detectAllFaces(video, new faceapi.TinyFaceDetectorOptions())
          .withFaceLandmarks();



      const videoBox = detectionsVideo[0].detection.box;
      const videoFace = await faceapi.extractFaces(video, [videoBox]);
      const videoDescriptor = await faceapi.computeFaceDescriptor(videoFace[0]);
      video.pause();
      const detectionsImage = await faceapi
          .detectSingleFace(image, new faceapi.TinyFaceDetectorOptions({ inputSize: 128, scoreThreshold: 0.5 }))
          .withFaceLandmarks();
      const imageBox = detectionsImage.detection.box;
      const imageFace = await faceapi.extractFaces(image, [imageBox]);
      const imageDescriptor = await faceapi.computeFaceDescriptor(imageFace[0]);
      const distance = faceapi.euclideanDistance(videoDescriptor, imageDescriptor);
      if (distance < 0.50) {
        console.log("Faces match");
        this.$emit("face-match-result", true);
      } else {
        console.log("Faces do not match");
        this.$emit("face-match-result", false);
      }
    },

  },
};
</script>

<style scoped>
.counter {
  position: absolute;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 45px;
  color: #fff;
}
.true {
  font-size: 50px;
}
</style>
