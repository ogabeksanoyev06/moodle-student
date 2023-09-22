<template>
  <div>
    <video ref="video" autoplay></video>
  </div>
</template>

<script>
import * as faceapi from "face-api.js";

export default {
  name: "AP",
  data() {
    return {
      stream: null,
      intervalId: null,
    };
  },
  async mounted() {
    await this.setupCamera();
    await faceapi.nets.ssdMobilenetv1.loadFromUri("/models");
    this.startCaptureLoop();
  },
  beforeDestroy() {
    clearInterval(this.intervalId);
  },
  methods: {
    async setupCamera() {
      this.stream = await navigator.mediaDevices.getUserMedia({ video: {} });
      this.$refs.video.srcObject = this.stream;
    },
    async captureAndSendImage() {
      const detections = await faceapi.detectAllFaces(this.$refs.video);
      if (detections.length) {
        const faceBox = detections[0].box;
        let canvas = document.createElement("canvas");
        canvas.width = faceBox.width;
        canvas.height = faceBox.height;
        let ctx = canvas.getContext("2d");
        ctx.drawImage(
          this.$refs.video,
          faceBox.x,
          faceBox.y,
          faceBox.width,
          faceBox.height,
          0,
          0,
          faceBox.width,
          faceBox.height
        );
        let faceImageData = canvas.toDataURL("image/png");
        this.sendToServer(faceImageData);
      }
    },
    async sendToServer(faceImageData) {
      // Send the face image to your server for further processing
      await fetch("/your-backend-endpoint", {
        method: "POST",
        body: JSON.stringify({ image: faceImageData }),
        headers: {
          "Content-Type": "application/json",
        },
      });
    },
    startCaptureLoop() {
      this.intervalId = setInterval(this.captureAndSendImage, 300000); // 5 minutes
    },
  },
};
</script>
