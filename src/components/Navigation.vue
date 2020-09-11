<template>
    <div>
        <nav>
            <button class="closeBtn" @click="toggleMenu">
                <img src="../assets/graphics/navicon.svg" alt="" />
            </button>
            <div class="open" v-if="toggle">
                <h2 @click="handleRoute">Meny</h2>
                <h2 @click="handleRoute">Vårt Kaffe</h2>
                <h2 @click="handleRoute">Orderstatus</h2>
            </div>
        </nav>
    </div>
</template>

<script>
export default {
    name: 'Navigation',
    data() {
        return {
            toggle: false,
        };
    },
    methods: {
        toggleMenu() {
            this.toggle = !this.toggle;
        },
        handleRoute(e) {
            let route = e.path[0].innerText;
            console.log(e.path[0].innerText);
            if (route === 'Meny') {
                this.$router.push('/home');
            } else if (route === 'Vårt Kaffe') {
                this.$router.push('/about');
            }
            this.toggleMenu();
        },
    },
};
</script>

<style scoped>
.open {
    width: 100vw;
    height: 100vh;
    position: absolute;
    background-color: #333;
    transition: width 2s;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

.closeBtn {
    position: absolute;
    background-color: #f5f5f5;
    width: 50px;
    height: 50px;
    border: none;
    border-radius: 50%;
    top: 20px;
    left: 20px;
    z-index: 2;
}

.closeBtn:hover {
    background-color: #fff;
}
</style>
