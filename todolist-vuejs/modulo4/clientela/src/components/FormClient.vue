<template>
    <v-container>   
        <v-form>
            <v-row>
                <v-col>
                    <v-text-field outlined label="Nome do cliente"></v-text-field>
                </v-col>
                <v-col>
                    <v-text-field outlined label="Email do Cliente"></v-text-field>
                </v-col>
                <v-col>
                    <v-text-field outlined type="number" label="CPF do Cliente"></v-text-field>
                </v-col>               
            </v-row>
            <v-row>
                <v-col>
                    <v-text-field @input="findAddress" v-model="client.zipCode" outlined type="number" label="CEP do Cliente"></v-text-field>
                </v-col>
                <v-col>
                    <v-text-field :disabled="addressLock" outlined label="Logradouro" hint="Ex: Rua, Avenida, etc"></v-text-field>
                </v-col>
                <v-col>
                    <v-text-field :disabled="addressLock" outlined label="Bairro"></v-text-field>
                </v-col>
                <v-col>
                    <v-text-field :disabled="addressLock" outlined label="Cidade"></v-text-field>
                </v-col>
            </v-row>
            <v-row>
                <v-col>
                    <v-text-field :disabled="addressLock" outlined label="Estado"></v-text-field>
                </v-col>
                <v-col>
                    <v-text-field :disabled="addressLock" outlined type="number" label="Número"></v-text-field>
                </v-col>
            </v-row>
            <v-row class="px-3">
                <v-btn color="error">Cancelar</v-btn>
                <v-spacer></v-spacer>
                <v-btn color="success">Salvar</v-btn>                
            </v-row>
        </v-form>
    </v-container>
</template>

<script>
export default {
    data: () => ({
        client: {},
        addressLock: true
    }),
    methods: {
        clean() {
            this.client = {}
        },
        findAddress() {
            if(this.client.zipCode && this.client.zipCode.length == 8){
                this.addressLock = false
            }
        }
    }
}
</script>