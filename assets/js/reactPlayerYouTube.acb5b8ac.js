(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[8446],{2910:(e,t,a)=>{let l,s,r;var i=Object.create,o=Object.defineProperty,n=Object.getOwnPropertyDescriptor,y=Object.getOwnPropertyNames,p=Object.getPrototypeOf,u=Object.prototype.hasOwnProperty,c=(e,t,a)=>t in e?o(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a,h=(e,t,a,l)=>{if(t&&"object"==typeof t||"function"==typeof t)for(let s of y(t))u.call(e,s)||s===a||o(e,s,{get:()=>t[s],enumerable:!(l=n(t,s))||l.enumerable});return e},d=(e,t,a)=>(c(e,"symbol"!=typeof t?t+"":t,a),a),P={};((e,t)=>{for(var a in t)o(e,a,{get:t[a],enumerable:!0})})(P,{default:()=>T}),e.exports=h(o({},"__esModule",{value:!0}),P);var m=(r=null!=(l=a(6540))?i(p(l)):{},h(!s&&l&&l.__esModule?r:o(r,"default",{value:l,enumerable:!0}),l)),b=a(8016),g=a(327);let f=/[?&](?:list|channel)=([a-zA-Z0-9_-]+)/,w=/user\/([a-zA-Z0-9_-]+)\/?/,k=/youtube-nocookie\.com/;class T extends m.Component{constructor(){super(...arguments),d(this,"callPlayer",b.callPlayer),d(this,"parsePlaylist",e=>{if(e instanceof Array)return{listType:"playlist",playlist:e.map(this.getID).join(",")};if(f.test(e)){let[,t]=e.match(f);return{listType:"playlist",list:t.replace(/^UC/,"UU")}}if(w.test(e)){let[,t]=e.match(w);return{listType:"user_uploads",list:t}}return{}}),d(this,"onStateChange",e=>{let{data:t}=e,{onPlay:a,onPause:l,onBuffer:s,onBufferEnd:r,onEnded:i,onReady:o,loop:n,config:{playerVars:y,onUnstarted:p}}=this.props,{UNSTARTED:u,PLAYING:c,PAUSED:h,BUFFERING:d,ENDED:P,CUED:m}=window.YT.PlayerState;if(t===u&&p(),t===c&&(a(),r()),t===h&&l(),t===d&&s(),t===P){let e=!!this.callPlayer("getPlaylist");n&&!e&&(y.start?this.seekTo(y.start):this.play()),i()}t===m&&o()}),d(this,"mute",()=>{this.callPlayer("mute")}),d(this,"unmute",()=>{this.callPlayer("unMute")}),d(this,"ref",e=>{this.container=e})}componentDidMount(){this.props.onMount&&this.props.onMount(this)}getID(e){return!e||e instanceof Array||f.test(e)?null:e.match(g.MATCH_URL_YOUTUBE)[1]}load(e,t){let{playing:a,muted:l,playsinline:s,controls:r,loop:i,config:o,onError:n}=this.props,{playerVars:y,embedOptions:p}=o,u=this.getID(e);if(t){if(f.test(e)||w.test(e)||e instanceof Array){this.player.loadPlaylist(this.parsePlaylist(e));return}this.player.cueVideoById({videoId:u,startSeconds:(0,b.parseStartTime)(e)||y.start,endSeconds:(0,b.parseEndTime)(e)||y.end});return}(0,b.getSDK)("https://www.youtube.com/iframe_api","YT","onYouTubeIframeAPIReady",e=>e.loaded).then(t=>{this.container&&(this.player=new t.Player(this.container,{width:"100%",height:"100%",videoId:u,playerVars:{autoplay:a?1:0,mute:l?1:0,controls:r?1:0,start:(0,b.parseStartTime)(e),end:(0,b.parseEndTime)(e),origin:window.location.origin,playsinline:s?1:0,...this.parsePlaylist(e),...y},events:{onReady:()=>{i&&this.player.setLoop(!0),this.props.onReady()},onPlaybackRateChange:e=>this.props.onPlaybackRateChange(e.data),onPlaybackQualityChange:e=>this.props.onPlaybackQualityChange(e),onStateChange:this.onStateChange,onError:e=>n(e.data)},host:k.test(e)?"https://www.youtube-nocookie.com":void 0,...p}))},n),p.events&&console.warn("Using `embedOptions.events` will likely break things. Use ReactPlayer\u2019s callback props instead, eg onReady, onPlay, onPause")}play(){this.callPlayer("playVideo")}pause(){this.callPlayer("pauseVideo")}stop(){document.body.contains(this.callPlayer("getIframe"))&&this.callPlayer("stopVideo")}seekTo(e,t=!1){this.callPlayer("seekTo",e),t||this.props.playing||this.pause()}setVolume(e){this.callPlayer("setVolume",100*e)}setPlaybackRate(e){this.callPlayer("setPlaybackRate",e)}setLoop(e){this.callPlayer("setLoop",e)}getDuration(){return this.callPlayer("getDuration")}getCurrentTime(){return this.callPlayer("getCurrentTime")}getSecondsLoaded(){return this.callPlayer("getVideoLoadedFraction")*this.getDuration()}render(){let{display:e}=this.props;return m.default.createElement("div",{style:{width:"100%",height:"100%",display:e}},m.default.createElement("div",{ref:this.ref}))}}d(T,"displayName","YouTube"),d(T,"canPlay",g.canPlay.youtube)}}]);