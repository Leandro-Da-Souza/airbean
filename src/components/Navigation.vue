<template>
    <div>
        <nav>
            <button class="closeBtn" @click="toggleMenu">
                <img src alt="" />
            </button>
            <div class="open" :class="toggle ? 'closeMenu' : 'openMenu'">
                <h2 @click="handleRoute">Meny</h2>
                <hr />
                <h2 @click="handleRoute">Vårt Kaffe</h2>
                <hr />
                <h2 @click="handleRoute">Orderstatus</h2>
                <hr />
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
            if (route === 'Meny') {
                this.$router.push('/home');
            } else if (route === 'Vårt Kaffe') {
                this.$router.push('/about');
            }
            this.toggleMenu();
        },
        navIcon() {
            let img = this.$el.querySelector('.closeBtn img');

            if (this.toggle) {
                img.src = require('../assets/graphics/navicon.svg');
            } else {
                img.src = require('../assets/graphics/close.svg');
            }
        },
    },
    updated() {
        this.navIcon();
    },
    mounted() {
        this.navIcon();
    },
};
</script>

<style scoped>
.open {
    width: 100vw;
    height: 100vh;
    position: absolute;
    background-color: #333;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}
.openMenu {
    animation: slideOpen 0.7s ease;
    animation-fill-mode: forwards;
}

.closeMenu {
    animation: slideShut 0.7s ease;
    animation-fill-mode: forwards;
}

.open h2 {
    color: #f5f5f5;
    margin-top: 20px;
    margin-bottom: 5px;
}

.open hr {
    width: 30%;
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

@keyframes slideOpen {
    from {
        width: 0%;
    }
    to {
        width: 100%;
    }
}

@keyframes slideShut {
    from {
        width: 100%;
    }
    to {
        width: 0%;
    }
}
</style>
