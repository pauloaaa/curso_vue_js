const NavBar = Vue.component("nav-bar", {
    template: /* html */ `
    <nav>
        <router-link to="/">
            <div>Home</div>
        </router-link>
        <router-link to="/clientes">
            <div>Cliente</div>
        </router-link>
    </nav>
    `
})