<template>
  <div class="g-savetodrive"
   data-src="" 
   data-filename="keystore.json"
   data-sitename="#"> /* we need to plug the source for the keystore, I have created a function below to create a kestore file and store it in the local storage where google drive can fetch it and upload it then delete onSession close. */
/* data-src => localStorage, data-filename => keystore.json, data-sitename => localHost */
</div>
</template>
<script src="https://apis.google.com/js/platform.js" async defer></script>
<script>

export default {
data: {
    seedPhrase: '' // Create an empty seedPhrase
  },
  mounted() {
    if (localStorage.name) {
      this.seedPhrase = localStorage.name; //assign the saved token (seedPhrase) to the seedPhrase variable
    }
  },
  watch: {
    name(newSeed) {
      localStorage.name = newSeed; // check for changes in seedPhrase and re-assign the variables back.
    }
  }
}
</script>

<style>

</style>