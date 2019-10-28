const DetalheCliente = Vue.component('detalhe-cliente', {
    template: /* html */ `
        <div>
            <h1>Detalhe do Cliente</h1>

            <h3>{{client.name}}</h3>
            <p>{{client.cpf}}</p>
            <p>{{client.email}}</p>
        </div>
    `,
    data () {
        return {
            client: {}
        }
    },
    mounted() {
        this.client = this.$route.params;
    }
})