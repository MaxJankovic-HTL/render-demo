const { createApp } = Vue;

const myApp = {
  data() {
    return {
      immos: [],
      id: '',
      inPrice: '',
    };
  },
  methods: {
    async getImmos() {
      const { data } = await axios.get('/immos');
      this.immos = data;
    },
    async delImmos(id) {
      await axios.delete(`/immos/${id}`);
      this.delImmos(id);
      this.getImmos();
    },
    savePrice(id, price) {
      this.id = id
      this.inPrice = price;
    },
    async changePrice() {
      await axios.patch(`/immos/${this.id}`, {price: this.inPrice});
      this.getImmos();
    },
  },
};

createApp(myApp).mount('#app');
