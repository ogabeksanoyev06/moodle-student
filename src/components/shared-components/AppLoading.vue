<template>
  <div class="preloader">
    <div class="preloader-content">
      <div class="loader loader--fade">
        <span class="loader-item">1</span> <span class="loader-item">2</span>
        <span class="loader-item">3</span> <span class="loader-item">4</span>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "PreLoader",
};
</script>
<style>
.preloader {
  background: linear-gradient(0deg, #f2f4f6, #f2f4f6),
    linear-gradient(0deg, #f9f9f9, #f9f9f9), #fff;
  position: fixed;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
  z-index: 9999;
  display: flex;
  justify-content: center;
  align-items: center;
}
.loader {
  display: block;
  overflow: hidden;
  margin-bottom: 20px;
  font-size: 0;
}
.loader-item {
  display: inline-block;
  width: 15px;
  height: 15px;
  margin-left: 2.5px;
  margin-right: 2.5px;
  background-color: #00598f;
  color: #00598f;
  -webkit-animation-duration: 4s;
  animation-duration: 4s;
  -webkit-animation-timing-function: cubic-bezier(0.645, 0.045, 0.355, 1);
  animation-timing-function: cubic-bezier(0.645, 0.045, 0.355, 1);
  -webkit-animation-iteration-count: infinite;
  animation-iteration-count: infinite;
}
.loader--fade .loader-item {
  -webkit-animation-name: fade;
  animation-name: fade;
  -webkit-animation-duration: 1s;
  animation-duration: 1s;
}

.loader-item:nth-child(2) {
  -webkit-animation-delay: 0.2s;
  animation-delay: 0.2s;
}
.loader-item:first-child {
  -webkit-animation-delay: 0.1s;
  animation-delay: 0.1s;
}
.loader-item:nth-child(3) {
  -webkit-animation-delay: 0.3s;
  animation-delay: 0.3s;
}
.loader-item:nth-child(4) {
  -webkit-animation-delay: 0.4s;
  animation-delay: 0.4s;
}
@keyframes fade {
  0% {
    opacity: 0;
  }
  50% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
}
</style>
