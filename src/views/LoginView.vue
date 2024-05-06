<template>
  <v-app>
    <v-main>
      <v-container class="d-flex justify-center align-center vh-100">
        <v-row justify="center">
          <v-col cols="12" sm="8" md="6">
            <v-card>
              <v-card-title class="text-center">Login</v-card-title>
              <v-card-text>
                <v-form>
                  <v-text-field
                    v-model="form.emailField"
                    label="Email"
                    outlined
                    required
                    :error-messages="emailErrors"
                  ></v-text-field>
                  <v-text-field
                    v-model="form.passwordField"
                    label="Password"
                    outlined
                    required
                    type="password"
                    minlength="6"
                    :error-messages="passwordErrors"
                  ></v-text-field>
                  <v-btn class="mt-4" color="primary" @click="login"
                    >Login</v-btn
                  >
                </v-form>
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>

<script setup>
import { reactive, ref } from "vue";
import { useVuelidate } from "@vuelidate/core";
import { required, email, minLength } from "@vuelidate/validators";
import { useRouter } from "vue-router";

const router = useRouter();

const form = reactive({
  emailField: "",
  passwordField: "",
});

const rules = {
  emailField: { required, email },
  passwordField: { required, minLength: minLength(6) },
};

const $v = useVuelidate(rules, form);

const passwordErrors = ref();
const emailErrors = ref();

const login = () => {
  $v.value.$touch();
  if ($v.value.$invalid) {
    if ($v.value.passwordField.$errors[0].$message) {
      passwordErrors.value = $v.value.passwordField.$errors[0].$message;
    }

    if ($v.value.passwordField.$errors[0].$message) {
      emailErrors.value = $v.value.emailField.$errors[0].$message;
    }
    return;
  }
  router.push("/game");
};
</script>

<style>
.vh-100 {
  height: 100vh;
}

.align-center {
  align-items: center;
}

.justify-center {
  justify-content: center;
}

.d-flex {
  display: flex;
}
</style>
