import store from "./store";
const microApps = [
  {
    name: "vue1",
    entry: "//localhost:7301/vue1",
    activeRule: "/vue1",
  },
  {
    name: "vue2",
    entry:"//localhost:7305/vue2",
    activeRule: "/vue2",
  },
  {
    name: "vue3",
    entry:"//localhost:7316/vue3",
    activeRule: "/vue3",
  },
];

const apps = microApps.map((item) => {
  return {
    ...item,
    container: "#cnbi-viewport", // 子应用挂载的div
    props: {
      routerBase: item.activeRule, // 下发基础路由
      getGlobalState: store, // 下发GlobalState方法
    },
  };
});

export default apps;
