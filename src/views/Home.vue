<script>
export default {
  data() {
    return {
      step: 0,
      isLoading: false,
      isError: false,
      isShowButtons: true,
      hearts: [],
      icon: 'https://willvalentine.vercel.app/date.gif',
      message: 'Will you be my valentine?'
    }
  },
  methods: {
    refuse() {
      this.isError = false;
      if (this.step === 0) {
        this.isLoading = true;
        setTimeout(() => {
          this.isLoading = false;
          this.isError = true;
          this.step = 1;
        }, 5000)
      } else if (this.step === 1) {
        this.message = 'Think again!';
        this.icon = 'https://willvalentine.vercel.app/thnk.gif'
        this.step = 2;
      } else if (this.step === 2) {
        this.message = 'Please be my valentine!';
        this.icon = 'https://willvalentine.vercel.app/pls.gif'
        this.step = 3;
      } else if (this.step === 3) {
        this.message = 'I am asking last time';
        this.icon = 'https://willvalentine.vercel.app/last_time.jpg'
        this.step = 4;
      } else if (this.step === 4) {
        this.message = 'Maybe this was all stupid';
        this.icon = 'https://willvalentine.vercel.app/stupid.jpg'
        this.isShowButtons = false;
      }
    },
    accept_date() {
      this.isError = false;
      this.icon = 'https://willvalentine.vercel.app/thkn.jpg'
      this.message = 'We will have a wonderful time with you.';
      this.isShowButtons = false;
      this.generateHearts();
    },
    generateHearts() {
      setInterval(() => {
        const heart = {
          top: Math.random() * window.innerHeight,
          left: Math.random() * window.innerWidth
        };

        this.hearts.push(heart);

        setTimeout(() => {
          this.hearts.splice(this.hearts.indexOf(heart), 1);
        }, 7000)
      }, 500)
    }
  }
}
</script>

<template>
  <main class="w-full h-full transition-all duration-300">
    <div v-for="(heart, index) in hearts" :key="index" :style="{
      position: 'absolute',
      top: heart.top + 'px',
      left: heart.left + 'px'
    }">❤️</div>
    <div class="flex flex-col items-center justify-center space-y-2">
      <img :src="icon" class="w-24 h-24" loading="lazy">
      <h1 class="font-bold text-2xl text-black">{{ message }}</h1>
      <div class="flex flex-row items-center justify-center space-x-5" v-if="isShowButtons">
        <button @click="accept_date()"
          class="bg-pink-300 text-black pl-[1rem] pr-[1rem] pt-[0.50rem] pb-[0.50rem] min-w-full min-h-half w-full rounded-xl">
          Yes</button>
        <button
          class="bg-pink-300 text-black pl-[1rem] pr-[1rem] pt-[0.50rem] pb-[0.50rem] min-w-full min-h-half w-full rounded-xl flex items-center justify-center"
          v-if="isLoading" :disabled="isLoading">
          <img src="https://willvalentine.vercel.app/loading.gif" class="w-5 h-5"></button>
        <button @click="refuse()"
          class="bg-pink-300 text-black pl-[1rem] pr-[1rem] pt-[0.50rem] pb-[0.50rem] min-w-full min-h-half w-full rounded-xl"
          v-else :disabled="isLoading">
          No</button>
      </div>
      <span class="text-red-300 font-semibold" v-if="isError">An error occurred, try again.</span>
    </div>
    <div class="absolute w-full bottom-0 text-black text-center">
      This site is made entirely for entertainment purposes.
    </div>
  </main>
</template>
