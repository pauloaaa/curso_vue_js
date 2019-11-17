<template>
    <v-container>   
        <v-form>
            <v-row>
                <v-col cols="6">
                    <validation-provider name="nome" rules="required" v-slot="{ errors }">
                        <v-text-field :error-messages="errors[0]" v-model="client.name" outlined label="Nome do cliente"></v-text-field>                        
                    </validation-provider>
                </v-col>
                <v-col cols="4">
                    <validation-provider name="email" rules="required|email" v-slot="{ errors }">
                        <v-text-field :error-messages="errors[0]" v-model="client.email" outlined label="Email do Cliente"></v-text-field>
                    </validation-provider>
                </v-col>
                <v-col cols="2">
                    <validation-provider name="cpf" rules="required" v-slot="{ errors }">
                        <v-text-field :error-messages="errors[0]" outlined type="number" v-model="client.cpf" label="CPF do Cliente"></v-text-field>
                    </validation-provider>
                </v-col>           
                <v-col cols="2">
                    <validation-provider name="cep" rules="required" v-slot="{ errors }">
                        <v-text-field :error-messages="errors[0]" :loading="findingAddress" @input="findAddress" v-model="client.zipCode" outlined type="number" label="CEP do Cliente"></v-text-field>
                    </validation-provider>  
                </v-col>
                <v-col cols="4">
                    <validation-provider name="logradouro" rules="required" v-slot="{ errors }">
                        <v-text-field :error-messages="errors[0]" :disabled="addressLock" v-model="client.street" outlined label="Logradouro" hint="Ex: Rua, Avenida, etc"></v-text-field>
                    </validation-provider>
                </v-col>
                <v-col cols="3">
                    <validation-provider name="bairro" rules="required" v-slot="{ errors }">
                        <v-text-field :error-messages="errors[0]" :disabled="addressLock" outlined v-model="client.neighborhood" label="Bairro"></v-text-field>
                    </validation-provider>
                </v-col>
                <v-col cols="3">
                    <validation-provider name="cidade" rules="required" v-slot="{ errors }">
                        <v-text-field :error-messages="errors[0]" :disabled="addressLock" outlined v-model="client.city" label="Cidade"></v-text-field>
                    </validation-provider>
                </v-col>            
                <v-col cols="3">
                    <validation-provider name="estado" rules="required" v-slot="{ errors }">
                        <v-text-field :error-messages="errors[0]" :disabled="addressLock" outlined v-model="client.state" label="Estado"></v-text-field>
                    </validation-provider>
                </v-col>
                <v-col cols="2">
                    <validation-provider name="numero" rules="required" v-slot="{ errors }">
                        <v-text-field :error-messages="errors[0]" :disabled="addressLock" v-model="client.number" outlined type="number" label="Número"></v-text-field>
                    </validation-provider>
                </v-col>
            </v-row>
            <v-row class="px-3">
                <v-btn color="error" @click="save">Cancelar</v-btn>
                <v-spacer></v-spacer>
                <v-btn color="success">Salvar</v-btn>                
            </v-row>
        </v-form>
    </v-container>
</template>
<script>
import Axios from 'axios'

export default {
    data: () => ({
        client: {},
        addressLock: true,
        findingAddress: false
    }),
    methods: {
        clean() {
            this.client = {}
        },
        async findAddress() {
            if(this.client.zipCode && this.client.zipCode.length == 8){
                this.findingAddress = true
                let resp = await Axios.get(`https://viacep.com.br/ws/${this.client.zipCode}/json`)
                this.client.street = resp.data.logradouro
                this.client.neighborhood = resp.data.bairro
                this.client.city = resp.data.localidade
                this.client.state = resp.data.uf
                this.addressLock = false
                this.findingAddress = false
            }
        },
        save() {
            
        }
    }
}
</script>