<template>
    <header>
        <div class="container">
            <nav class="navbar navbar-expand-lg navbar-dark my-nav">
                <a class="navbar-brand" href="#"><img src="../assets/logo.svg" alt=""></a>
                <button class="navbar-toggler my-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon my-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNav">
                    <ul class="navbar-nav ml-auto">
                        <li class="nav-item my-nav-item">
                            <a class="nav-link my-nav-link" href="#">Web Hosting</a>
                        </li>
                        <li class="nav-item my-nav-item">
                            <a class="nav-link my-nav-link" href="#">Cloud Hosting</a>
                            <span class="sale-note">On Sale</span>
                        </li>
                        <li class="nav-item my-nav-item">
                            <a class="nav-link my-nav-link" href="#">VPS Hosting</a>
                        </li>
                        <li class="nav-item my-nav-item">
                            <a class="nav-link my-nav-link" href="#">Domain Checker</a>
                        </li>
                        <li class="nav-item my-nav-item">
                            <a class="nav-link my-nav-link" href="#">Website Builder</a>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    </header>
</template>

<script>
    export default {
        name: "HeaderBar"
    }
</script>

<style scoped lang="scss">
    @import '../assets/styles/components/headerBar';
</style>