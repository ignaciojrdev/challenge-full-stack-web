<template>
    <v-container class="fill-height d-flex align-center justify-center">
        <v-card elevation="8" class="pa-6" max-width="800">
            <v-card-title class="text-h4 font-weight-bold text-primary text-center">
                Desafio Full Stack Web - Edtech
            </v-card-title>
            <v-divider class="mb-4"></v-divider>
            <v-card-text>
                <h3 class="text-h5 text-secondary font-weight-bold mt-4">Objetivo</h3>
                <p class="text-body-1">
                    O objetivo deste desafio é avaliar as competências técnicas dos candidatos a desenvolvedor Full Stack Web na Maior Plataforma de Educação do Brasil.
                </p>
                
                <h3 class="text-h5 text-secondary font-weight-bold mt-4">Especificações Técnicas</h3>
                <v-list dense>
                    <v-list-item><v-icon class="mr-2">mdi-vuejs</v-icon><strong>Front-end:</strong> Vue.js</v-list-item>
                    <v-list-item><v-icon class="mr-2">mdi-palette</v-icon><strong>Framework de UI:</strong> Vuetify</v-list-item>
                    <v-list-item><v-icon class="mr-2">mdi-server</v-icon><strong>API:</strong> NodeJS</v-list-item>
                    <v-list-item><v-icon class="mr-2">mdi-database</v-icon><strong>Banco de Dados:</strong> PostgreSQL ou MySQL</v-list-item>
                    <v-list-item><v-icon class="mr-2">mdi-translate</v-icon><strong>Idioma do Código:</strong> Inglês</v-list-item>
                </v-list>
    
                <h3 class="text-h5 text-secondary font-weight-bold mt-4">Requisitos</h3>
                <p class="text-body-1">
                    O desafio consiste em criar uma aplicação para o cadastro de alunos conforme os critérios de aceitação.
                </p>
    
                <h3 class="text-h5 text-secondary font-weight-bold mt-4">Histórias do Usuário</h3>
                <v-list dense>
                    <v-list-item>
                        <v-btn @click="registerModal = true" color="primary">Cadastrar novo aluno</v-btn>
                    </v-list-item>
                    <v-list-item>
                        <v-btn @click="listModal = true" color="primary">Listar alunos cadastrados</v-btn>
                    </v-list-item>
                    <v-list-item>
                        <v-btn @click="editModal = true" color="primary">Editar cadastro de aluno</v-btn>
                    </v-list-item>
                    <v-list-item>
                        <v-btn @click="deleteModal = true" color="primary">Excluir cadastro de aluno</v-btn>
                    </v-list-item>
                </v-list>
                
                <h3 class="text-h5 text-secondary font-weight-bold mt-4">Critérios de Avaliação</h3>
                <v-list dense>
                    <v-list-item><v-icon class="mr-2">mdi-code-tags</v-icon>Qualidade de escrita do código</v-list-item>
                    <v-list-item><v-icon class="mr-2">mdi-folder-outline</v-icon>Organização do projeto</v-list-item>
                    <v-list-item><v-icon class="mr-2">mdi-api</v-icon>Qualidade da API</v-list-item>
                    <v-list-item><v-icon class="mr-2">mdi-lightbulb-on-outline</v-icon>Lógica da solução implementada</v-list-item>
                    <v-list-item><v-icon class="mr-2">mdi-database</v-icon>Qualidade da camada de persistência</v-list-item>
                    <v-list-item><v-icon class="mr-2">mdi-git</v-icon>Utilização do Git (quantidade e descrição dos commits, Git Flow, ...)</v-list-item>
                </v-list>
                
                <h3 class="text-h5 text-secondary font-weight-bold mt-4">Desejável</h3>
                <v-list dense>
                    <v-list-item><v-icon class="mr-2">mdi-check-circle-outline</v-icon>Testes de unidade</v-list-item>
                    <v-list-item><v-icon class="mr-2">mdi-file-document-outline</v-icon>Documentação da arquitetura de solução</v-list-item>
                </v-list>
                
                <h3 class="text-h5 text-secondary font-weight-bold mt-4">Diferenciais</h3>
                <v-list dense>
                    <v-list-item><v-icon class="mr-2">mdi-security</v-icon>Segurança da aplicação (autenticação, autorização, ...)</v-list-item>
                </v-list>
            </v-card-text>
        </v-card>

        <v-dialog v-model="registerModal" max-width="600">
            <v-card>
                <v-card-title class="d-flex justify-space-between align-center">
                <span class="text-h6">Cadastrar novo aluno</span>
                <v-btn icon @click="registerModal = false">
                    <v-icon>mdi-close</v-icon>
                </v-btn>
                </v-card-title>

                <v-divider></v-divider>

                <v-card-text>
                <v-container>
                    <v-row>
                        <v-col cols="12">
                            <p class="text-subtitle-1 font-weight-bold">Cenário: Cadastrar novo aluno</p>
                            <v-list dense>
                                <v-list-item v-for="(item, index) in registerStepByStep" :key="index">
                                    <v-list-item-content>
                                        <v-list-item-title v-html="index+1 + ' - ' + item"></v-list-item-title>
                                    </v-list-item-content>
                                </v-list-item>
                            </v-list>
                        </v-col>
                        <v-divider></v-divider>
                        <v-col cols="12">
                            <p class="text-subtitle-1 font-weight-bold">Cenário: Cadastrar novo aluno > Ação confirmar</p>
                            <v-list dense>
                                <v-list-item v-for="(item, index) in confirmRegisterStepByStep" :key="index">
                                    <v-list-item-content>
                                        <v-list-item-title v-html="index+1 + ' - ' + item"></v-list-item-title>
                                    </v-list-item-content>
                                </v-list-item>
                            </v-list>
                        </v-col>
                        <v-divider></v-divider>
                        <v-col cols="12">
                            <p class="text-subtitle-1 font-weight-bold">Cenário: Cadastrar novo aluno > Ação cancelar</p>
                            <v-list dense>
                                <v-list-item v-for="(item, index) in cancelRegisterStepByStep" :key="index">
                                    <v-list-item-content>
                                        <v-list-item-title v-html="index+1 + ' - ' + item"></v-list-item-title>
                                    </v-list-item-content>
                                </v-list-item>
                            </v-list>
                        </v-col>
                    </v-row>
                </v-container>
                </v-card-text>

                <v-divider></v-divider>

                <v-card-actions class="pa-4 justify-end">
                    <v-btn color="grey darken-1" @click="registerModal = false" variant="outlined">Fechar</v-btn>
                </v-card-actions>
            </v-card>
        </v-dialog>

        <v-dialog v-model="listModal" max-width="600">
            <v-card>
                <v-card-title class="d-flex justify-space-between align-center">
                    <span class="text-h6">Listar alunos cadastrados</span>
                    <v-btn icon @click="listModal = false">
                        <v-icon>mdi-close</v-icon>
                    </v-btn>
                </v-card-title>

                <v-divider></v-divider>

                <v-card-text>
                    <v-container>
                        <v-row>
                            <v-col cols="12">
                                <p class="text-subtitle-1 font-weight-bold">Cenário: Listar alunos</p>
                                <v-list dense>
                                    <v-list-item v-for="(item, index) in studentsListStepByStep" :key="index">
                                        <v-list-item-content>
                                            <v-list-item-title v-html="index+1 + ' - ' + item"></v-list-item-title>
                                        </v-list-item-content>
                                    </v-list-item>
                                </v-list>
                            </v-col>
                        </v-row>
                    </v-container>
                </v-card-text>

                <v-divider></v-divider>

                <v-card-actions class="pa-4 justify-end">
                    <v-btn color="grey darken-1" @click="listModal = false" variant="outlined">Fechar</v-btn>
                </v-card-actions>
            </v-card>
        </v-dialog>

        <v-dialog v-model="editModal" max-width="600">
            <v-card>
                <v-card-title class="d-flex justify-space-between align-center">
                    <span class="text-h6">Editar cadastro de aluno</span>
                    <v-btn icon @click="editModal = false">
                        <v-icon>mdi-close</v-icon>
                    </v-btn>
                </v-card-title>

                <v-divider></v-divider>

                <v-card-text>
                    <v-container>
                        <v-row>
                            <v-col cols="12">
                                <p class="text-subtitle-1 font-weight-bold">Cenário: Editar aluno</p>
                                <v-list dense>
                                    <v-list-item v-for="(item, index) in editStudentsRecordStepByStep" :key="index">
                                        <v-list-item-content>
                                            <v-list-item-title v-html="index+1 + ' - ' + item"></v-list-item-title>
                                        </v-list-item-content>
                                    </v-list-item>
                                </v-list>
                            </v-col>
                            <v-divider></v-divider>
                            <v-col cols="12">
                                <p class="text-subtitle-1 font-weight-bold">Cenário: Editar aluno > Ação confirmar</p>
                                <v-list dense>
                                    <v-list-item v-for="(item, index) in confirmEditStudentsRecordStepByStep" :key="index">
                                        <v-list-item-content>
                                            <v-list-item-title v-html="index+1 + ' - ' + item"></v-list-item-title>
                                        </v-list-item-content>
                                    </v-list-item>
                                </v-list>
                            </v-col>
                            <v-divider></v-divider>
                            <v-col cols="12">
                                <p class="text-subtitle-1 font-weight-bold">Cenário: Editar aluno > Ação cancelar</p>
                                <v-list dense>
                                    <v-list-item v-for="(item, index) in cancelEditStudentsRecordStepByStep" :key="index">
                                        <v-list-item-content>
                                            <v-list-item-title v-html="index+1 + ' - ' + item"></v-list-item-title>
                                        </v-list-item-content>
                                    </v-list-item>
                                </v-list>
                            </v-col>
                        </v-row>
                    </v-container>
                </v-card-text>

                <v-divider></v-divider>

                <v-card-actions class="pa-4 justify-end">
                    <v-btn color="grey darken-1" @click="editModal = false" variant="outlined">Fechar</v-btn>
                </v-card-actions>
            </v-card>
        </v-dialog>

        <v-dialog v-model="deleteModal" max-width="600">
            <v-card>
                <v-card-title class="d-flex justify-space-between align-center">
                    <span class="text-h6">Excluir cadastro de aluno</span>
                    <v-btn icon @click="deleteModal = false">
                        <v-icon>mdi-close</v-icon>
                    </v-btn>
                </v-card-title>

                <v-divider></v-divider>

                <v-card-text>
                    <v-container>
                        <v-row>
                            <v-col cols="12">
                                <p class="text-subtitle-1 font-weight-bold">Cenário: Excluir aluno</p>
                                <v-list dense>
                                    <v-list-item v-for="(item, index) in deleteStudentsRecordStepByStep" :key="index">
                                        <v-list-item-content>
                                            <v-list-item-title v-html="index+1 + ' - ' + item"></v-list-item-title>
                                        </v-list-item-content>
                                    </v-list-item>
                                </v-list>
                            </v-col>
                            <v-divider></v-divider>
                            <v-col cols="12">
                                <p class="text-subtitle-1 font-weight-bold">Cenário: Excluir aluno >  Ação confirmar</p>
                                <v-list dense>
                                    <v-list-item v-for="(item, index) in confirmDeleteStudentsRecordStepByStep" :key="index">
                                        <v-list-item-content>
                                            <v-list-item-title v-html="index+1 + ' - ' + item"></v-list-item-title>
                                        </v-list-item-content>
                                    </v-list-item>
                                </v-list>
                            </v-col>
                            <v-divider></v-divider>
                            <v-col cols="12">
                                <p class="text-subtitle-1 font-weight-bold">Cenário: Excluir aluno > Ação cancelar</p>
                                <v-list dense>
                                    <v-list-item v-for="(item, index) in cancelDeleteStudentsRecordStepByStep" :key="index">
                                        <v-list-item-content>
                                            <v-list-item-title v-html="index+1 + ' - ' + item"></v-list-item-title>
                                        </v-list-item-content>
                                    </v-list-item>
                                </v-list>
                            </v-col>
                        </v-row>
                    </v-container>
                </v-card-text>

                <v-divider></v-divider>

                <v-card-actions class="pa-4 justify-end">
                    <v-btn color="grey darken-1" @click="deleteModal = false" variant="outlined">Fechar</v-btn>
                </v-card-actions>
            </v-card>
        </v-dialog>

    </v-container>
</template>

<script>
export default {
    name: "Home",
    data() {
        return {
            registerModal: false,
            listModal: false,
            editModal: false,
            deleteModal: false,

            //register - variables
            registerStepByStep: [
                'Dado que estou na tela de Consulta de Alunos',
                'Quando clico em Cadastrar Aluno',
                'Então abre a tela de Cadastro do Aluno',
                'E exibe os campos obrigatórios vazios',
            ],
            confirmRegisterStepByStep: [
                'Dado que inseri dados válidos nos campos',
                'Quando clico em Salvar',
                'Então cria o novo aluno na base',
                'E retorna mensagem de sucesso',
            ],
            cancelRegisterStepByStep: [
                'Dado que inseri dados válidos nos campos',
                'Quando clico em Cancelar',
                'Então retorna para tela Consulta de Alunos',
                'E não persiste a gravação dos dados no banco',
            ],

            //students list - variables
            studentsListStepByStep: [
                'Dado que estou no Módulo Acadêmico',
                'Quando clico no menu Alunos',
                'Então abre a tela de Consulta de Alunos',
                'E exibe opção Cadastrar Aluno ao topo',
                'E lista dados dos alunos cadastrados',
                'E exibe opção Editar por aluno',
                'E exibe opção Excluir por aluno'
            ],

            //edit record - variables
            editStudentsRecordStepByStep: [
                "Dado que estou na listagem de alunos",
                "Quando clico em Editar aluno",
                "Então abre a tela de Cadastro do Aluno",
                "E exibe os campos do cadastro preenchidos",
                "E habilita alteração dos campos editáveis"
            ],
            confirmEditStudentsRecordStepByStep:[
                "Dado que estou na tela de Cadastro do Aluno",
                "Quando clica em Salvar",
                "Então grava os dados editáveis na base"
            ],
            cancelEditStudentsRecordStepByStep:[
                "Dado que estou na tela de Cadastro do Aluno",
                "Quando clica em Cancelar",
                "Então retorna para a tela de Consulta de Alunos",
                "E não persiste a gravação dos dados"
            ],

            //delete record - variables
            deleteStudentsRecordStepByStep: [
                "Dado que estou na listagem de alunos",
                "Quando clico em Excluir aluno",
                "Então exibe a modal de confirmação de exclusão"
            ],
            confirmDeleteStudentsRecordStepByStep:[
               "Dado que estou na modal de confirmação de exclusão",
                "Quando clico em Confirmar",
                "Então exclui o registro do aluno"
            ],
            cancelDeleteStudentsRecordStepByStep:[
                "Dado que estou na modal de confirmação de exclusão",
                "Quando clico em Cancelar",
                "Então fecha a modal e não persiste a exclusão" 
            ]
                        
        };
    }
};
</script>

<style scoped>
    .text-secondary {
        color: #424242;
    }
    .text-primary {
        color: #1976D2;
    }
    .v-list-item {
        padding-left: 16px;
    }
</style>