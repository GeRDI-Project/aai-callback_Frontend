<template>
  <div class="text-center">
    <b-spinner label="Loading..."></b-spinner>
    <div>Logging you in. You will be forwarded in a few moments.</div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  name: 'OidcCallback',
  methods: {
    ...mapActions('oidcStore', [
      'oidcSignInCallback'
    ])
  },
  created () {
    this.oidcSignInCallback()
      .then((redirectPath) => {
        window.location = redirectPath
      })
      .catch((err) => {
        console.log(err)
        this.$router.push('/signin-oidc-error') // Handle errors any way you want
      })
  }
}
</script>
