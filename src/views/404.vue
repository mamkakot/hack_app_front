<template>
  <div id="main">
    <div class="error">
      <div class="code">404</div>
      <div class="message">NOT FOUND</div>
    </div>
  </div>
</template>

<style scope>
/* html {
  height: 100%;
}

body {
  height: 100%;
  font-family: "Myriad Pro", Calibri, Helvetica, Arial, sans-serif;
  background-color: #dfdfdf;
} */

#main {
  display: table;
  width: 100%;
  height: 100%;
}

.error {
  display: table-cell;
  text-align: center;
  vertical-align: middle;
}

.error .code {
  font-size: 1600%;
  font-weight: bold;
}

.error .message {
  font-size: 400%;
}
</style>
