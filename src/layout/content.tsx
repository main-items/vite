import { CSSProperties, FunctionalComponent } from 'vue'

// interface Props {
//   count: number;
//   style: CSSProperties;
// }

// type Emit = {
//   childClick: () => void
// }

// const child: FunctionalComponent<Props, Emit> = (props, ctx) => {
  const child: FunctionalComponent = () => {
  return (
    <div>
      <router-link to={{ path: '/' }}>首页</router-link>
      &nbsp;&nbsp;&nbsp;
      <router-link to={{ path: '/overview' }}>概览</router-link>
      <router-view></router-view>
      <div id="cnbi-viewport"></div>
    </div>
  )
}

export default child