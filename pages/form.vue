<template>
  <div class="form">
    <h1 class="form__title">README Template 作成</h1>
    <v-form ref="form">
      <v-text-field
        v-model="name"
        label="プロジェクトの名前 / Project Title"
        required
      ></v-text-field>
      <v-text-field
        v-model="text"
        label="プロジェクトの概要 / Overview"
        required
      ></v-text-field>
      <div class="form__images">
        <v-file-input accept="image/*" label="スクショ画像 1"></v-file-input>
        <v-file-input accept="image/*" label="スクショ画像 2"></v-file-input>
        <v-file-input accept="image/*" label="スクショ画像 3"></v-file-input>
      </div>
      <v-text-field v-model="url" label="リリースURL / Demo URL"></v-text-field>
      <v-textarea
        outlined
        name="input-7-4"
        label="ローカル実行方法 / Getting Started"
        value=""
      ></v-textarea>
      <v-textarea
        outlined
        name="input-7-4"
        label="使用技術 / Technology"
        value=""
      ></v-textarea>
      <v-text-field
        v-model="text"
        label="著者 / Author"
        required
      ></v-text-field>
    </v-form>
  </div>
</template>

<script>
export default {}
</script>

<style scoped>
.form {
  width: 40%;
  margin: 0 auto;
}

.form__title {
  text-align: center;
  margin: 20px 0;
}

.form__images {
  display: flex;
}
</style>
