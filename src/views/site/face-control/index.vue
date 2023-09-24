<template>
  <div>
    <button @click="toggleCamera">
      {{ showCamera ? "Close Camera" : "Open Camera" }}
    </button>
    <div v-if="showCamera" class="camera-container" ref="videoContainer">
      <video ref="video" autoplay></video>
      <div :style="overlayStyle" class="detectionOverlay"></div>
    </div>
    <div v-if="capturedImage" class="captured-image">
      <img :src="capturedImage" alt="Captured Face" />
    </div>
    <div v-if="errorMessage" class="error-message">{{ errorMessage }}</div>
  </div>
</template>

<style scoped>
.camera-container {
  position: relative;
  width: 640px;
  height: 480px;
}

.detectionOverlay {
  position: absolute;
  border-radius: 50%;
  opacity: 0.5;
  z-index: 1;
  border: 3px solid transparent;
  transition: border 0.3s ease;
}

.captured-image {
  margin-top: 20px;
  text-align: center;
}

.error-message {
  color: red;
  margin-top: 10px;
}
</style>

<script>
import * as faceapi from "face-api.js";

export default {
  name: "FaceControl",
  data() {
    return {
      stream: null,
      faceBox: null,
      showCamera: false,
      capturedImage: null,
      errorMessage: null,
    };
  },
  computed: {
    overlayStyle() {
      const styleObj = {
        top: "50%",
        left: "50%",
        width: "300px",
        height: "350px",
        marginLeft: "-100px",
        marginTop: "-100px",
        borderColor: this.faceBox ? "green" : "red",
      };
      return styleObj;
    },
  },
  methods: {
    async toggleCamera() {
      if (this.showCamera) {
        this.closeCamera();
      } else {
        this.openCamera();
      }
    },
    async openCamera() {
      try {
        this.showCamera = true;
        await this.setupCamera();
        await faceapi.nets.ssdMobilenetv1.loadFromUri("/models");
        this.captureAndDisplayImage();
      } catch (error) {
        this.errorMessage = "Failed to open the camera: " + error.message;
      }
    },
    async setupCamera() {
      try {
        this.stream = await navigator.mediaDevices.getUserMedia({ video: {} });
        this.$refs.video.srcObject = this.stream;
      } catch (error) {
        this.errorMessage = "Failed to access the camera: " + error.message;
      }
    },
    async closeCamera() {
      this.showCamera = false;
      if (this.stream) {
        this.stream.getTracks().forEach((track) => track.stop());
        this.stream = null;
        this.$refs.video.srcObject = null;
      }
    },
    async captureAndDisplayImage() {
      try {
        const videoContainer = this.$refs.videoContainer;
        const detections = await faceapi.detectAllFaces(this.$refs.video);
        if (detections.length) {
          this.faceBox = detections[0].box;
          let canvas = document.createElement("canvas");
          canvas.width = this.faceBox.width;
          canvas.height = this.faceBox.height;
          let ctx = canvas.getContext("2d");
          ctx.drawImage(
            this.$refs.video,
            this.faceBox.x,
            this.faceBox.y,
            this.faceBox.width,
            this.faceBox.height,
            0,
            0,
            this.faceBox.width,
            this.faceBox.height
          );
          const faceBlob = await new Promise((resolve) =>
            canvas.toBlob(resolve, "image/png")
          );
          this.capturedImage = URL.createObjectURL(faceBlob);
        } else {
          this.faceBox = null;
          this.errorMessage = "No face detected.";
        }
      } catch (error) {
        this.errorMessage =
          "Error capturing and displaying image: " + error.message;
      }
    },
    async sendToServer(faceBlob) {
      try {
        const formData = new FormData();
        formData.append("face_image", faceBlob);
        await fetch("/your-backend-endpoint", {
          method: "POST",
          body: formData,
        });
      } catch (error) {
        this.errorMessage =
          "Error sending image to the server: " + error.message;
      }
    },
  },
};
</script>
