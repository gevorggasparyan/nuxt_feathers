<!-- components/SignInForm.vue -->
<template>
  <button @click="goToRegister" class="button">Register</button>

  <form @submit.prevent="signIn" class="form">
    <label for="username">Username</label>
    <input type="text" id="username" v-model="username" class="input">
<br>
    <label for="password">Password</label>
    <input type="password" id="password" v-model="password" class="input">
<br>
    <button type="submit" class="button">Sign In</button>
  </form>
</template>

<style scoped>
.form {
  margin-bottom: 20px;
}

.input {
  margin-left: 10px;
  padding: 8px;
  margin-bottom: 10px;
  width: 60%;
  border: 1px solid #ccc;
  border-radius: 4px;
}

.button {
  padding: 10px 20px;
  background-color: #007bff; /* Blue color, you can change this */
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  margin-bottom: 15px;
}

.button:hover {
  background-color: #0056b3; /* Darker shade of blue on hover */
}
</style>


<script>
export default {
  data() {
    return {
      username: '',
      password: ''
    };
  },
  methods: {
    async signIn() {
      try {
        const response = await fetch('http://localhost:3030/authentication', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            strategy: "local",
            email: this.username,
            password: this.password
          })
        });

        if (!response.ok) {
          throw new Error('Failed to sign in');
        }

        const data = await response.json();
        console.log('User signed in:', data);

        if (data.accessToken) {
          // Redirect to '/home' if accessToken is present
          this.$router.push('/home');
        }

        // Reset the form fields
        this.username = '';
        this.password = '';
      } catch (error) {
        console.error('Error signing in:', error);
      }
    },
    goToRegister() {
      this.$router.push('/register');
    }
  }
};
</script>
