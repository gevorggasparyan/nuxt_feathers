// components/SignUpForm.vue
<template>
  <form @submit.prevent="signUp">
    <br>

    <label for="email">Email</label>
    <input type="email" id="email" v-model="email" class="input">
    <br>

    <label for="password">Password</label>
    <input type="password" id="password" v-model="password" class="input">
    <br>

    <button type="submit" class="button">Sign Up</button>
    <br>
    <button @click="goToLogin" class="button">Login</button>
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
  margin-bottom: 20px;
}

.button:hover {
  background-color: #0056b3; /* Darker shade of blue on hover */
}
</style>

<script>
export default {
  data() {
    return {
      email: '',
      password: ''
    };
  },
  methods: {
    async signUp() {
      try {
        const response = await fetch('http://localhost:3030/users', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            email: this.email,
            password: this.password
          })
        });

        if (!response.ok) {
          throw new Error('Failed to sign up');
        }

        const data = await response.json();
        console.log('User signed up:', data);

        this.email = '';
        this.password = '';
      } catch (error) {
        console.error('Error signing up:', error);
      }
    },
    goToLogin() {
      this.$router.push('/login');
    }
  }
};
</script>
<script setup lang="ts">
</script>
