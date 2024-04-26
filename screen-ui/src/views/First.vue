<template>
  <dv-full-screen-container>
    <dv-border-box1 ref="borderRef" :color="['red', 'green']" :backgroundColor="blue">
      <h1 ref="first">dfadf</h1>
      <el-button id="button" @click="getMessage()" type="primary" ><Edit style="width: 1em; height: 1em; margin-right: 8px" />dfadf</el-button>
    </dv-border-box1>
  </dv-full-screen-container>
</template>
<script>
import request from "@/utils/request.js";
export default {
  name: "First",
  wsClient: undefined,
  created() {
    this.initWebSocket();
  },
  methods: {
    getMessage() {
      this.sendWsMessage("hello")
      // request({
      //   url: '/hello',
      //   method: 'get'
      // }).then(response => {
      //   this.$refs.first.textContent = response.data
      // })
    },
    initWebSocket() {
      //连接websocket
      // 创建一个 WebSocket 对象
      const ws = new WebSocket('ws://localhost:8080/api/pushMessage/screen');
      this.wsClient = ws;
      // 监听 WebSocket 对象的 open 事件
      ws.onopen = () => {
        // 发送一条消息
        ws.send('Hello, world!');
      };

      // 监听 WebSocket 对象的 message 事件
      ws.onmessage = event => {
        this.$refs.first.textContent = event.data;
        // 打印收到的消息
        console.log(event.data);
      };

      // 监听 WebSocket 对象的 close 事件
      ws.onclose = () => {
        // 打印一条消息
        console.log('Connection closed');
      };
    },
    sendWsMessage(message) {
      this.wsClient.send(message);
    }
  }
}
</script>
<style scoped>

</style>