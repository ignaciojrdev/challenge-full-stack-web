<template>
    <v-dialog :model-value="show" persistent max-width="600px">
      <v-card>
        <v-card-title v-if="!this.deleting" class="bg-grey-lighten-2 d-flex justify-space-between">
          <span class="text-h6">Student Register</span>
        </v-card-title>
        <v-card-title v-if="this.deleting" class="bg-red-lighten-2 d-flex justify-space-between">
          <span class="text-h6">Are you sure you want to delete?</span>
        </v-card-title>
  
        <v-card-text>
            <v-form>
                <v-row>
                <v-col cols="12">
                    <v-text-field 
                    label="Name" 
                    placeholder="Name" 
                    v-model="form.name" 
                    outlined dense
                    :readonly="deleting"
                    />
                </v-col>
                <v-col cols="12">
                    <v-text-field 
                        label="E-mail" 
                        placeholder="E-mail" 
                        v-model="form.email" 
                        outlined 
                        dense
                        :readonly="deleting"
                        :rules="[rules.required, rules.email]"
                    />
                </v-col>

                <v-col cols="12">
                    <v-text-field 
                    label="RA" 
                    placeholder="RA" 
                    v-model="form.ra" 
                    outlined dense 
                    :readonly="true"
                    />
                </v-col>
                <v-col cols="12">
                  <v-text-field 
                    label="CPF" 
                    placeholder="CPF" 
                    v-model="form.cpf" 
                    v-mask="'###.###.###-##'"
                    outlined 
                    dense
                    :readonly="editing || deleting"
                    :rules="[rules.required, rules.cpf]"
                  />
                </v-col>
            </v-row>
          </v-form>
        </v-card-text>
  
        <v-divider></v-divider>
  
        <v-card-actions class="d-flex justify-end">
            <v-btn color="grey" @click="closeModal">Cancel</v-btn>
            <v-btn color="red" v-show="this.deleting" @click="deleteStudent">Delete</v-btn>
            <v-btn color="primary" v-show="!this.deleting" @click="saveStudent">Save</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </template>
  
  <script>
  import { mask } from "vue-the-mask";
  import { useAuthStore } from '../../stores/auth.js';
  import axios from "axios";
  import { showToast } from "../../utils/generics/toast.js";
  export default {
    directives: { mask },
    setup() {
      const auth = useAuthStore();
      return { auth };
    },
    props: {
      show: Boolean,
      nameProp: String,
      emailProp: String,
      raProp: String,
      cpfProp: String,
      editing: Boolean,
      deleting: Boolean
    },
    data() {
      return {
        form: {
          name: this.nameProp || "",
          email: this.emailProp || "",
          ra: this.raProp || "",
          cpf: this.cpfProp || "",
        },
        rules: {
          required: v => !!v || 'Campo obrigatório',
          email: v => /.+@.+\..+/.test(v) || 'E-mail inválido',
          cpf: v => this.validateCPF(v) || 'CPF inválido',
        }
      };
    },
    watch: {
      nameProp(newVal) {
        this.form.name = newVal;
      },
      emailProp(newVal) {
        this.form.email = newVal;
      },
      raProp(newVal) {
        this.form.ra = newVal;
      },
      cpfProp(newVal) {
        this.form.cpf = newVal;
      },
    },
    methods: {
      validateCPF(cpf) {
        if (!cpf) return false;
        
        cpf = cpf.replace(/\D/g, '');
        
        if (cpf.length !== 11 || /^(\d)\1{10}$/.test(cpf)) return false;

        let add = 0;
        for (let i = 0; i < 9; i++) add += parseInt(cpf.charAt(i)) * (10 - i);
        let rev = 11 - (add % 11);
        if (rev === 10 || rev === 11) rev = 0;
        if (rev !== parseInt(cpf.charAt(9))) return false;

        add = 0;
        for (let i = 0; i < 10; i++) add += parseInt(cpf.charAt(i)) * (11 - i);
        rev = 11 - (add % 11);
        if (rev === 10 || rev === 11) rev = 0;
        if (rev !== parseInt(cpf.charAt(10))) return false;

        return true;
      },
      closeModal() {
        this.$emit("update:show", false);
        this.$emit("fetchStudents", true);
        //if(!this.editing && !this.deleting)
          this.clearModal();
      },
      saveStudent() {
        this.closeModal();
        this.saveStudent();
      },
      deleteStudent(){
        this.closeModal();
        this.confirmDeleteStudent();
      },
      clearModal(){
        this.form.name = this.nameProp || ''
        this.form.ra = this.raProp || ''
        this.form.cpf = this.cpfProp || ''
        this.form.email = this.emailProp || ''
      },
      async saveStudent() {
        try {
          const options = {
            withCredentials: true,
            headers: {
              Authorization: `Bearer ${this.auth.getToken()}`,
              "Content-Type": "application/json"
            }
          }
          if (this.editing) {
            await axios.put(`${import.meta.env.VITE_API_URL}/students/${this.form.ra}`, {
              name: this.form.name,
              email: this.form.email,
            }, options);
            this.showUpdatedMessageSuccess();
          } else {
            await axios.post(`${import.meta.env.VITE_API_URL}/students`, {
              name: this.form.name,
              email: this.form.email,
              cpf: this.form.cpf,
            }, options);
            this.showSavedMessageSuccess();
          }
          this.closeModal();
        } catch (error) {
          let message = '';
          if(error.response && error.response.data){
            message += error.response.data.message || error.response.data.error || "";
          }else{
            message += error.message;
          }
          this.showSaveMessageError(message);
        }
        this.closeModal();
      },
      async confirmDeleteStudent() {
        try {
          await axios.delete(`${import.meta.env.VITE_API_URL}/students/${this.form.ra}`,{
            withCredentials: true,
            headers: {
              Authorization: `Bearer ${this.auth.getToken()}`,
              "Content-Type": "application/json"
            }
          });
          this.showModalEditOrRegisterStudent = false;
          this.showDeleteMessageSuccess();
        } catch (error) {
          let message = '';
          if(error.response && error.response.data){
            message += error.response.data.message || error.response.data.error || "";
          }else{
            message += error.message;
          }
          this.showSaveMessageError(message);
        }
        this.closeModal();
      },
      showMessageLoginSuccess() {
        showToast.success("Logged in with success!");
      },
      showSaveMessageError(message = '') {
        showToast.error("Something is wrong on save! " + message);
      },
      showDeleteMessageSuccess() {
        showToast.success("Student was deleted!");
      },
      showUpdatedMessageSuccess() {
        showToast.success("Student was updated!");
      },
      showSavedMessageSuccess() {
        showToast.success("Student was saved!");
      },
    },
  };
  </script>
  
  <style scoped>
  .v-card-title {
    font-weight: bold;
  }
  </style>  