const ListClient = Vue.component('list-client', {
    template: /* html */ `
        <v-simple-table class="mt-5">
            <thead>
                <th>Nome</th>
                <th>Email</th>
                <th>CPF</th>
                <th>Ações</th>
            </thead>
            <tbody>
                <tr v-for="cli in clients">
                    <td>{{cli.name}}</td>
                    <td>{{cli.email}}</td>
                    <td>{{cli.cpf}}</td>
                    <td>
                        <v-btn fab icon small color="info" @click="goToDetail(cli)">
                            <v-icon>mdi-eye</v-icon>
                        </v-btn>
                        <v-btn fab icon small color="error" @click="goToDetail(cli)">
                            <v-icon>mdi-delete</v-icon>
                        </v-btn>
                    </td>
                </tr>
            </tbody>            
        </v-simple-table>
    `,
    data() {
        return {
            clients: []
        }
    },
    methods: {
        listAll() {
            this.clients = ClientService.findAll()
        },
        goToDetail(client) {
            this.$router.push({name: 'detalhe', params: client})
        }
    },
    created() {
        this.listAll()
    }
})