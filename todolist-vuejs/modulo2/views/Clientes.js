const Cliente = Vue.component('clientes', {
    template: /* html */ `
        <v-container>
            <form-client @saved="list" @cancel="cancel" :client="client"></form-client>

            <list-client ref="list"></list-client>
        </v-container>
    `,
    components: {
        NavBar,
        FormClient,
        ListClient
    },
    data() {
        return {
            title: "Cadastro de Cliente",
            client: {}
        }        
    },
    methods: {
        cancel() {
            this.client = {}
        },
        list() {
            this.$refs.list.listAll()
        }
    }
})