import Component from "@ember/component";

export default Component.extend({
  actions: {
    showItem(item) {
      alert(item);
    }
  }
});
