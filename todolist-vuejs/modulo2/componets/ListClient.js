const ListClient = Vue.component('list-client', {
    template: /* html */ `
        <table>
            <thead>
                <th>Nome</th>
                <th>Email</th>
                <th>CPF</th>
            </thead>
            <tbody>
                <tr v-for="cli in clients">
                    <td>{{cli.name}}</td>
                    <td>{{cli.email}}</td>
                    <td>{{cli.cpf}}</td>
                    <td><button @click="goToDetail(cli)">Detalhes</button></td>
                </tr>
            </tbody>            
        </table>
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