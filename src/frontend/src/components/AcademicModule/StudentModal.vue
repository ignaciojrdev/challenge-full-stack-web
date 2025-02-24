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
                    outlined dense
                    :readonly="deleting"
                    />
                </v-col>
                <v-col cols="12">
                    <v-text-field 
                    label="RA" 
                    placeholder="RA" 
                    v-model="form.ra" 
                    outlined dense 
                    :readonly="editing || deleting"
                    />
                </v-col>
                <v-col cols="12">
                    <v-text-field 
                    label="CPF" 
                    placeholder="CPF" 
                    v-model="form.cpf" 
                    outlined dense 
                    :readonly="editing || deleting"
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
  export default {
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
      closeModal() {
        this.$emit("update:show", false);
      },
      saveStudent() {
        this.closeModal();
      },
      deleteStudent(){
        //delete student
        this.closeModal();
      }
    },
  };
  </script>
  
  <style scoped>
  .v-card-title {
    font-weight: bold;
  }
  </style>  