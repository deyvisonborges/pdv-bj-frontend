<template>
  <div class="navinfocaixa container-fluid">
      <div class="row">
        <div class="col s3">
            <p class="navinfocaixa_logo">BJ Supermercados | <strong>Frente de Loja</strong></p>
        </div>
        <div class="col s3"></div>
        <div class="col s4">
            <p class="navinfocaixa_cp">
                <span>Caixa: <strong>001</strong></span>
                <span>Operador: <strong>Deyvison Borges</strong></span>
            </p>
        </div>
        <div class="col s2">Sair</div>
    </div>
  </div>
</template>

<script>
export default {
    name: 'navinfocaixa'
}
</script>

<style lang="less">
.navinfocaixa {
    background-color: blue;

    .navinfocaixa_cp {
        color: #fff;
        font-weight: bold;
    }
}
</style>