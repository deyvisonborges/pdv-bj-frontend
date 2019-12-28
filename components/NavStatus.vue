<template>
  <div class="navstatus container-fluid">
    <div class="col s12">
      <h2>Caixa disponível</h2>
    </div>
  </div>
</template>

<script>
export default {
  name: "navstatus"
};
</script>

<style lang="less">
.navstatus {
  h2 {
    background-color: green;
    color: #ffffff;
    font-weight: bold;
    padding: 5px;
    text-transform: uppercase;
    text-align: center;
  }
}
</style>