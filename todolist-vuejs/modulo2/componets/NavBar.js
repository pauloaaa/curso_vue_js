const NavBar = Vue.component("nav-bar", {
    template: /* html */ `
    <v-app-bar dark app color="blue accent-4">
        <v-btn text to="/">Home</v-btn>
        <v-btn text to="/clientes">Cliente</v-btn>
    </v-app-bar>
    `
})