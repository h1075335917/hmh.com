(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[5800],{4744:e=>{"use strict";var t=function(e){var t;return!!e&&"object"==typeof e&&"[object RegExp]"!==(t=Object.prototype.toString.call(e))&&"[object Date]"!==t&&e.$$typeof!==i},i="function"==typeof Symbol&&Symbol.for?Symbol.for("react.element"):60103;function a(e,t){return!1!==t.clone&&t.isMergeableObject(e)?o(Array.isArray(e)?[]:{},e,t):e}function r(e,t,i){return e.concat(t).map(function(e){return a(e,i)})}function n(e){return Object.keys(e).concat(Object.getOwnPropertySymbols?Object.getOwnPropertySymbols(e).filter(function(t){return Object.propertyIsEnumerable.call(e,t)}):[])}function s(e,t){try{return t in e}catch(e){return!1}}function o(e,i,l){(l=l||{}).arrayMerge=l.arrayMerge||r,l.isMergeableObject=l.isMergeableObject||t,l.cloneUnlessOtherwiseSpecified=a;var d,u,h=Array.isArray(i);return h!==Array.isArray(e)?a(i,l):h?l.arrayMerge(e,i,l):(u={},(d=l).isMergeableObject(e)&&n(e).forEach(function(t){u[t]=a(e[t],d)}),n(i).forEach(function(t){(!s(e,t)||Object.hasOwnProperty.call(e,t)&&Object.propertyIsEnumerable.call(e,t))&&(s(e,t)&&d.isMergeableObject(i[t])?u[t]=(function(e,t){if(!t.customMerge)return o;var i=t.customMerge(e);return"function"==typeof i?i:o})(t,d)(e[t],i[t],d):u[t]=a(i[t],d))}),u)}o.all=function(e,t){if(!Array.isArray(e))throw Error("first argument should be an array");return e.reduce(function(e,i){return o(e,i,t)},{})},e.exports=o},6147:e=>{function t(e,t){e.onload=function(){this.onerror=this.onload=null,t(null,e)},e.onerror=function(){this.onerror=this.onload=null,t(Error("Failed to load "+this.src),e)}}e.exports=function(e,i,a){var r=document.head||document.getElementsByTagName("head")[0],n=document.createElement("script");"function"==typeof i&&(a=i,i={}),i=i||{},a=a||function(){},n.type=i.type||"text/javascript",n.charset=i.charset||"utf8",n.async=!("async"in i)||!!i.async,n.src=e,i.attrs&&function(e,t){for(var i in t)e.setAttribute(i,t[i])}(n,i.attrs),i.text&&(n.text=""+i.text),("onload"in n?t:function(e,t){e.onreadystatechange=function(){("complete"==this.readyState||"loaded"==this.readyState)&&(this.onreadystatechange=null,t(null,e))}})(n,a),n.onload||t(n,a),r.appendChild(n)}},1811:(e,t,i)=>{"use strict";i.r(t),i.d(t,{default:()=>n});var a=Number.isNaN||function(e){return"number"==typeof e&&e!=e};function r(e,t){if(e.length!==t.length)return!1;for(var i,r,n=0;n<e.length;n++)if(!((i=e[n])===(r=t[n])||a(i)&&a(r)))return!1;return!0}let n=function(e,t){void 0===t&&(t=r);var i,a,n=[],s=!1;return function(){for(var r=[],o=0;o<arguments.length;o++)r[o]=arguments[o];return s&&i===this&&t(r,n)||(a=e.apply(this,r),s=!0,i=this,n=r),a}}},8021:(e,t,i)=>{var a=Object.create,r=Object.defineProperty,n=Object.getOwnPropertyDescriptor,s=Object.getOwnPropertyNames,o=Object.getPrototypeOf,l=Object.prototype.hasOwnProperty,d=(e,t,i)=>t in e?r(e,t,{enumerable:!0,configurable:!0,writable:!0,value:i}):e[t]=i,u=(e,t,i,a)=>{if(t&&"object"==typeof t||"function"==typeof t)for(let o of s(t))l.call(e,o)||o===i||r(e,o,{get:()=>t[o],enumerable:!(a=n(t,o))||a.enumerable});return e},h=(e,t,i)=>(i=null!=e?a(o(e)):{},u(!t&&e&&e.__esModule?i:r(i,"default",{value:e,enumerable:!0}),e)),c=(e,t,i)=>(d(e,"symbol"!=typeof t?t+"":t,i),i),m={};((e,t)=>{for(var i in t)r(e,i,{get:t[i],enumerable:!0})})(m,{default:()=>g}),e.exports=u(r({},"__esModule",{value:!0}),m);var p=h(i(6540)),E=h(i(115)),v=i(7604),b=i(8016);class g extends p.Component{constructor(){super(...arguments),c(this,"mounted",!1),c(this,"isReady",!1),c(this,"isPlaying",!1),c(this,"isLoading",!0),c(this,"loadOnReady",null),c(this,"startOnPlay",!0),c(this,"seekOnPlay",null),c(this,"onDurationCalled",!1),c(this,"handlePlayerMount",e=>{if(this.player){this.progress();return}this.player=e,this.player.load(this.props.url),this.progress()}),c(this,"getInternalPlayer",e=>this.player?this.player[e]:null),c(this,"progress",()=>{if(this.props.url&&this.player&&this.isReady){let e=this.getCurrentTime()||0,t=this.getSecondsLoaded(),i=this.getDuration();if(i){let a={playedSeconds:e,played:e/i};null!==t&&(a.loadedSeconds=t,a.loaded=t/i),(a.playedSeconds!==this.prevPlayed||a.loadedSeconds!==this.prevLoaded)&&this.props.onProgress(a),this.prevPlayed=a.playedSeconds,this.prevLoaded=a.loadedSeconds}}this.progressTimeout=setTimeout(this.progress,this.props.progressFrequency||this.props.progressInterval)}),c(this,"handleReady",()=>{if(!this.mounted)return;this.isReady=!0,this.isLoading=!1;let{onReady:e,playing:t,volume:i,muted:a}=this.props;e(),a||null===i||this.player.setVolume(i),this.loadOnReady?(this.player.load(this.loadOnReady,!0),this.loadOnReady=null):t&&this.player.play(),this.handleDurationCheck()}),c(this,"handlePlay",()=>{this.isPlaying=!0,this.isLoading=!1;let{onStart:e,onPlay:t,playbackRate:i}=this.props;this.startOnPlay&&(this.player.setPlaybackRate&&1!==i&&this.player.setPlaybackRate(i),e(),this.startOnPlay=!1),t(),this.seekOnPlay&&(this.seekTo(this.seekOnPlay),this.seekOnPlay=null),this.handleDurationCheck()}),c(this,"handlePause",e=>{this.isPlaying=!1,this.isLoading||this.props.onPause(e)}),c(this,"handleEnded",()=>{let{activePlayer:e,loop:t,onEnded:i}=this.props;e.loopOnEnded&&t&&this.seekTo(0),t||(this.isPlaying=!1,i())}),c(this,"handleError",(...e)=>{this.isLoading=!1,this.props.onError(...e)}),c(this,"handleDurationCheck",()=>{clearTimeout(this.durationCheckTimeout);let e=this.getDuration();e?this.onDurationCalled||(this.props.onDuration(e),this.onDurationCalled=!0):this.durationCheckTimeout=setTimeout(this.handleDurationCheck,100)}),c(this,"handleLoaded",()=>{this.isLoading=!1})}componentDidMount(){this.mounted=!0}componentWillUnmount(){clearTimeout(this.progressTimeout),clearTimeout(this.durationCheckTimeout),this.isReady&&this.props.stopOnUnmount&&(this.player.stop(),this.player.disablePIP&&this.player.disablePIP()),this.mounted=!1}componentDidUpdate(e){if(!this.player)return;let{url:t,playing:i,volume:a,muted:r,playbackRate:n,pip:s,loop:o,activePlayer:l,disableDeferredLoading:d}=this.props;if(!(0,E.default)(e.url,t)){if(this.isLoading&&!l.forceLoad&&!d&&!(0,b.isMediaStream)(t)){console.warn(`ReactPlayer: the attempt to load ${t} is being deferred until the player has loaded`),this.loadOnReady=t;return}this.isLoading=!0,this.startOnPlay=!0,this.onDurationCalled=!1,this.player.load(t,this.isReady)}e.playing||!i||this.isPlaying||this.player.play(),e.playing&&!i&&this.isPlaying&&this.player.pause(),!e.pip&&s&&this.player.enablePIP&&this.player.enablePIP(),e.pip&&!s&&this.player.disablePIP&&this.player.disablePIP(),e.volume!==a&&null!==a&&this.player.setVolume(a),e.muted!==r&&(r?this.player.mute():(this.player.unmute(),null!==a&&setTimeout(()=>this.player.setVolume(a)))),e.playbackRate!==n&&this.player.setPlaybackRate&&this.player.setPlaybackRate(n),e.loop!==o&&this.player.setLoop&&this.player.setLoop(o)}getDuration(){return this.isReady?this.player.getDuration():null}getCurrentTime(){return this.isReady?this.player.getCurrentTime():null}getSecondsLoaded(){return this.isReady?this.player.getSecondsLoaded():null}seekTo(e,t,i){if(!this.isReady){0!==e&&(this.seekOnPlay=e,setTimeout(()=>{this.seekOnPlay=null},5e3));return}if(t?"fraction"===t:e>0&&e<1){let t=this.player.getDuration();if(!t){console.warn("ReactPlayer: could not seek using fraction \u2013\xa0duration not yet available");return}this.player.seekTo(t*e,i);return}this.player.seekTo(e,i)}render(){let e=this.props.activePlayer;return e?p.default.createElement(e,{...this.props,onMount:this.handlePlayerMount,onReady:this.handleReady,onPlay:this.handlePlay,onPause:this.handlePause,onEnded:this.handleEnded,onLoaded:this.handleLoaded,onError:this.handleError}):null}}c(g,"displayName","Player"),c(g,"propTypes",v.propTypes),c(g,"defaultProps",v.defaultProps)},5580:(e,t,i)=>{var a=Object.create,r=Object.defineProperty,n=Object.getOwnPropertyDescriptor,s=Object.getOwnPropertyNames,o=Object.getPrototypeOf,l=Object.prototype.hasOwnProperty,d=(e,t,i)=>t in e?r(e,t,{enumerable:!0,configurable:!0,writable:!0,value:i}):e[t]=i,u=(e,t,i,a)=>{if(t&&"object"==typeof t||"function"==typeof t)for(let o of s(t))l.call(e,o)||o===i||r(e,o,{get:()=>t[o],enumerable:!(a=n(t,o))||a.enumerable});return e},h=(e,t,i)=>(i=null!=e?a(o(e)):{},u(!t&&e&&e.__esModule?i:r(i,"default",{value:e,enumerable:!0}),e)),c=(e,t,i)=>(d(e,"symbol"!=typeof t?t+"":t,i),i),m={};((e,t)=>{for(var i in t)r(e,i,{get:t[i],enumerable:!0})})(m,{createReactPlayer:()=>k}),e.exports=u(r({},"__esModule",{value:!0}),m);var p=h(i(6540)),E=h(i(4744)),v=h(i(1811)),b=h(i(115)),g=i(7604),f=i(8016),A=h(i(8021));let y=(0,f.lazy)(()=>i.e(6353).then(i.t.bind(i,6734,23))),I="undefined"!=typeof window&&window.document&&"undefined"!=typeof document,_=void 0!==i.g&&i.g.window&&i.g.window.document,w=Object.keys(g.propTypes),T=I||_?p.Suspense:()=>null,S=[],k=(e,t)=>{var i;return i=class extends p.Component{constructor(){super(...arguments),c(this,"state",{showPreview:!!this.props.light}),c(this,"references",{wrapper:e=>{this.wrapper=e},player:e=>{this.player=e}}),c(this,"handleClickPreview",e=>{this.setState({showPreview:!1}),this.props.onClickPreview(e)}),c(this,"showPreview",()=>{this.setState({showPreview:!0})}),c(this,"getDuration",()=>this.player?this.player.getDuration():null),c(this,"getCurrentTime",()=>this.player?this.player.getCurrentTime():null),c(this,"getSecondsLoaded",()=>this.player?this.player.getSecondsLoaded():null),c(this,"getInternalPlayer",(e="player")=>this.player?this.player.getInternalPlayer(e):null),c(this,"seekTo",(e,t,i)=>{if(!this.player)return null;this.player.seekTo(e,t,i)}),c(this,"handleReady",()=>{this.props.onReady(this)}),c(this,"getActivePlayer",(0,v.default)(i=>{for(let t of[...S,...e])if(t.canPlay(i))return t;return t||null})),c(this,"getConfig",(0,v.default)((e,t)=>{let{config:i}=this.props;return E.default.all([g.defaultProps.config,g.defaultProps.config[t]||{},i,i[t]||{}])})),c(this,"getAttributes",(0,v.default)(e=>(0,f.omit)(this.props,w))),c(this,"renderActivePlayer",e=>{if(!e)return null;let t=this.getActivePlayer(e);if(!t)return null;let i=this.getConfig(e,t.key);return p.default.createElement(A.default,{...this.props,key:t.key,ref:this.references.player,config:i,activePlayer:t.lazyPlayer||t,onReady:this.handleReady})})}shouldComponentUpdate(e,t){return!(0,b.default)(this.props,e)||!(0,b.default)(this.state,t)}componentDidUpdate(e){let{light:t}=this.props;!e.light&&t&&this.setState({showPreview:!0}),e.light&&!t&&this.setState({showPreview:!1})}renderPreview(e){if(!e)return null;let{light:t,playIcon:i,previewTabIndex:a,oEmbedUrl:r,previewAriaLabel:n}=this.props;return p.default.createElement(y,{url:e,light:t,playIcon:i,previewTabIndex:a,previewAriaLabel:n,oEmbedUrl:r,onClick:this.handleClickPreview})}render(){let{url:e,style:t,width:i,height:a,fallback:r,wrapper:n}=this.props,{showPreview:s}=this.state,o=this.getAttributes(e),l="string"==typeof n?this.references.wrapper:void 0;return p.default.createElement(n,{ref:l,style:{...t,width:i,height:a},...o},p.default.createElement(T,{fallback:r},s?this.renderPreview(e):this.renderActivePlayer(e)))}},c(i,"displayName","ReactPlayer"),c(i,"propTypes",g.propTypes),c(i,"defaultProps",g.defaultProps),c(i,"addCustomPlayer",e=>{S.push(e)}),c(i,"removeCustomPlayers",()=>{S.length=0}),c(i,"canPlay",t=>{for(let i of[...S,...e])if(i.canPlay(t))return!0;return!1}),c(i,"canEnablePIP",t=>{for(let i of[...S,...e])if(i.canEnablePIP&&i.canEnablePIP(t))return!0;return!1}),i}},3554:(e,t,i)=>{let a,r,n;var s=Object.create,o=Object.defineProperty,l=Object.getOwnPropertyDescriptor,d=Object.getOwnPropertyNames,u=Object.getPrototypeOf,h=Object.prototype.hasOwnProperty,c=(e,t,i,a)=>{if(t&&"object"==typeof t||"function"==typeof t)for(let r of d(t))h.call(e,r)||r===i||o(e,r,{get:()=>t[r],enumerable:!(a=l(t,r))||a.enumerable});return e},m={};((e,t)=>{for(var i in t)o(e,i,{get:t[i],enumerable:!0})})(m,{default:()=>b}),e.exports=c(o({},"__esModule",{value:!0}),m);var p=(n=null!=(a=i(7015))?s(u(a)):{},c(!r&&a&&a.__esModule?n:o(n,"default",{value:a,enumerable:!0}),a)),E=i(5580);let v=p.default[p.default.length-1];var b=(0,E.createReactPlayer)(p.default,v)},327:(e,t,i)=>{var a=Object.defineProperty,r=Object.getOwnPropertyDescriptor,n=Object.getOwnPropertyNames,s=Object.prototype.hasOwnProperty,o={};((e,t)=>{for(var i in t)a(e,i,{get:t[i],enumerable:!0})})(o,{AUDIO_EXTENSIONS:()=>_,DASH_EXTENSIONS:()=>S,FLV_EXTENSIONS:()=>k,HLS_EXTENSIONS:()=>T,MATCH_URL_DAILYMOTION:()=>f,MATCH_URL_FACEBOOK:()=>m,MATCH_URL_FACEBOOK_WATCH:()=>p,MATCH_URL_KALTURA:()=>I,MATCH_URL_MIXCLOUD:()=>A,MATCH_URL_MUX:()=>c,MATCH_URL_SOUNDCLOUD:()=>u,MATCH_URL_STREAMABLE:()=>E,MATCH_URL_TWITCH_CHANNEL:()=>g,MATCH_URL_TWITCH_VIDEO:()=>b,MATCH_URL_VIDYARD:()=>y,MATCH_URL_VIMEO:()=>h,MATCH_URL_WISTIA:()=>v,MATCH_URL_YOUTUBE:()=>d,VIDEO_EXTENSIONS:()=>w,canPlay:()=>L}),e.exports=((e,t,i,o)=>{if(t&&"object"==typeof t||"function"==typeof t)for(let l of n(t))s.call(e,l)||l===i||a(e,l,{get:()=>t[l],enumerable:!(o=r(t,l))||o.enumerable});return e})(a({},"__esModule",{value:!0}),o);var l=i(8016);let d=/(?:youtu\.be\/|youtube(?:-nocookie|education)?\.com\/(?:embed\/|v\/|watch\/|watch\?v=|watch\?.+&v=|shorts\/|live\/))((\w|-){11})|youtube\.com\/playlist\?list=|youtube\.com\/user\//,u=/(?:soundcloud\.com|snd\.sc)\/[^.]+$/,h=/vimeo\.com\/(?!progressive_redirect).+/,c=/stream\.mux\.com\/(?!\w+\.m3u8)(\w+)/,m=/^https?:\/\/(www\.)?facebook\.com.*\/(video(s)?|watch|story)(\.php?|\/).+$/,p=/^https?:\/\/fb\.watch\/.+$/,E=/streamable\.com\/([a-z0-9]+)$/,v=/(?:wistia\.(?:com|net)|wi\.st)\/(?:medias|embed)\/(?:iframe\/)?([^?]+)/,b=/(?:www\.|go\.)?twitch\.tv\/videos\/(\d+)($|\?)/,g=/(?:www\.|go\.)?twitch\.tv\/([a-zA-Z0-9_]+)($|\?)/,f=/^(?:(?:https?):)?(?:\/\/)?(?:www\.)?(?:(?:dailymotion\.com(?:\/embed)?\/video)|dai\.ly)\/([a-zA-Z0-9]+)(?:_[\w_-]+)?(?:[\w.#_-]+)?/,A=/mixcloud\.com\/([^/]+\/[^/]+)/,y=/vidyard.com\/(?:watch\/)?([a-zA-Z0-9-_]+)/,I=/^https?:\/\/[a-zA-Z]+\.kaltura.(com|org)\/p\/([0-9]+)\/sp\/([0-9]+)00\/embedIframeJs\/uiconf_id\/([0-9]+)\/partner_id\/([0-9]+)(.*)entry_id.([a-zA-Z0-9-_].*)$/,_=/\.(m4a|m4b|mp4a|mpga|mp2|mp2a|mp3|m2a|m3a|wav|weba|aac|oga|spx)($|\?)/i,w=/\.(mp4|og[gv]|webm|mov|m4v)(#t=[,\d+]+)?($|\?)/i,T=/\.(m3u8)($|\?)/i,S=/\.(mpd)($|\?)/i,k=/\.(flv)($|\?)/i,M=e=>{if(e instanceof Array){for(let t of e)if("string"==typeof t&&M(t)||M(t.src))return!0;return!1}return!!((0,l.isMediaStream)(e)||(0,l.isBlobUrl)(e))||_.test(e)||w.test(e)||T.test(e)||S.test(e)||k.test(e)},L={youtube:e=>e instanceof Array?e.every(e=>d.test(e)):d.test(e),soundcloud:e=>u.test(e)&&!_.test(e),vimeo:e=>h.test(e)&&!w.test(e)&&!T.test(e),mux:e=>c.test(e),facebook:e=>m.test(e)||p.test(e),streamable:e=>E.test(e),wistia:e=>v.test(e),twitch:e=>b.test(e)||g.test(e),dailymotion:e=>f.test(e),mixcloud:e=>A.test(e),vidyard:e=>y.test(e),kaltura:e=>I.test(e),file:M}},7015:(e,t,i)=>{var a=Object.defineProperty,r=Object.getOwnPropertyDescriptor,n=Object.getOwnPropertyNames,s=Object.prototype.hasOwnProperty,o={};((e,t)=>{for(var i in t)a(e,i,{get:t[i],enumerable:!0})})(o,{default:()=>u}),e.exports=((e,t,i,o)=>{if(t&&"object"==typeof t||"function"==typeof t)for(let l of n(t))s.call(e,l)||l===i||a(e,l,{get:()=>t[l],enumerable:!(o=r(t,l))||o.enumerable});return e})(a({},"__esModule",{value:!0}),o);var l=i(8016),d=i(327),u=[{key:"youtube",name:"YouTube",canPlay:d.canPlay.youtube,lazyPlayer:(0,l.lazy)(()=>i.e(8446).then(i.t.bind(i,2910,23)))},{key:"soundcloud",name:"SoundCloud",canPlay:d.canPlay.soundcloud,lazyPlayer:(0,l.lazy)(()=>i.e(9979).then(i.t.bind(i,3127,23)))},{key:"vimeo",name:"Vimeo",canPlay:d.canPlay.vimeo,lazyPlayer:(0,l.lazy)(()=>i.e(6173).then(i.t.bind(i,1423,23)))},{key:"mux",name:"Mux",canPlay:d.canPlay.mux,lazyPlayer:(0,l.lazy)(()=>i.e(2723).then(i.t.bind(i,7553,23)))},{key:"facebook",name:"Facebook",canPlay:d.canPlay.facebook,lazyPlayer:(0,l.lazy)(()=>i.e(6887).then(i.t.bind(i,1343,23)))},{key:"streamable",name:"Streamable",canPlay:d.canPlay.streamable,lazyPlayer:(0,l.lazy)(()=>i.e(7627).then(i.t.bind(i,9643,23)))},{key:"wistia",name:"Wistia",canPlay:d.canPlay.wistia,lazyPlayer:(0,l.lazy)(()=>i.e(9340).then(i.t.bind(i,3330,23)))},{key:"twitch",name:"Twitch",canPlay:d.canPlay.twitch,lazyPlayer:(0,l.lazy)(()=>i.e(2042).then(i.t.bind(i,1400,23)))},{key:"dailymotion",name:"DailyMotion",canPlay:d.canPlay.dailymotion,lazyPlayer:(0,l.lazy)(()=>i.e(6328).then(i.t.bind(i,9348,23)))},{key:"mixcloud",name:"Mixcloud",canPlay:d.canPlay.mixcloud,lazyPlayer:(0,l.lazy)(()=>i.e(7570).then(i.t.bind(i,3276,23)))},{key:"vidyard",name:"Vidyard",canPlay:d.canPlay.vidyard,lazyPlayer:(0,l.lazy)(()=>i.e(3392).then(i.t.bind(i,3552,23)))},{key:"kaltura",name:"Kaltura",canPlay:d.canPlay.kaltura,lazyPlayer:(0,l.lazy)(()=>i.e(6463).then(i.t.bind(i,7945,23)))},{key:"file",name:"FilePlayer",canPlay:d.canPlay.file,canEnablePIP:e=>d.canPlay.file(e)&&(document.pictureInPictureEnabled||(0,l.supportsWebKitPresentationMode)())&&!d.AUDIO_EXTENSIONS.test(e),lazyPlayer:(0,l.lazy)(()=>i.e(7458).then(i.t.bind(i,688,23)))}]},7604:(e,t,i)=>{let a,r,n;var s=Object.create,o=Object.defineProperty,l=Object.getOwnPropertyDescriptor,d=Object.getOwnPropertyNames,u=Object.getPrototypeOf,h=Object.prototype.hasOwnProperty,c=(e,t,i,a)=>{if(t&&"object"==typeof t||"function"==typeof t)for(let r of d(t))h.call(e,r)||r===i||o(e,r,{get:()=>t[r],enumerable:!(a=l(t,r))||a.enumerable});return e},m={};((e,t)=>{for(var i in t)o(e,i,{get:t[i],enumerable:!0})})(m,{defaultProps:()=>T,propTypes:()=>_}),e.exports=c(o({},"__esModule",{value:!0}),m);let{string:p,bool:E,number:v,array:b,oneOfType:g,shape:f,object:A,func:y,node:I}=(n=null!=(a=i(5556))?s(u(a)):{},c(!r&&a&&a.__esModule?n:o(n,"default",{value:a,enumerable:!0}),a)).default,_={url:g([p,b,A]),playing:E,loop:E,controls:E,volume:v,muted:E,playbackRate:v,width:g([p,v]),height:g([p,v]),style:A,progressInterval:v,playsinline:E,pip:E,stopOnUnmount:E,light:g([E,p,A]),playIcon:I,previewTabIndex:v,previewAriaLabel:p,fallback:I,oEmbedUrl:p,wrapper:g([p,y,f({render:y.isRequired})]),config:f({soundcloud:f({options:A}),youtube:f({playerVars:A,embedOptions:A,onUnstarted:y}),facebook:f({appId:p,version:p,playerId:p,attributes:A}),dailymotion:f({params:A}),vimeo:f({playerOptions:A,title:p}),mux:f({attributes:A,version:p}),file:f({attributes:A,tracks:b,forceVideo:E,forceAudio:E,forceHLS:E,forceSafariHLS:E,forceDisableHls:E,forceDASH:E,forceFLV:E,hlsOptions:A,hlsVersion:p,dashVersion:p,flvVersion:p}),wistia:f({options:A,playerId:p,customControls:b}),mixcloud:f({options:A}),twitch:f({options:A,playerId:p}),vidyard:f({options:A})}),onReady:y,onStart:y,onPlay:y,onPause:y,onBuffer:y,onBufferEnd:y,onEnded:y,onError:y,onDuration:y,onSeek:y,onPlaybackRateChange:y,onPlaybackQualityChange:y,onProgress:y,onClickPreview:y,onEnablePIP:y,onDisablePIP:y},w=()=>{},T={playing:!1,loop:!1,controls:!1,volume:null,muted:!1,playbackRate:1,width:"640px",height:"360px",style:{},progressInterval:1e3,playsinline:!1,pip:!1,stopOnUnmount:!0,light:!1,fallback:null,wrapper:"div",previewTabIndex:0,previewAriaLabel:"",oEmbedUrl:"https://noembed.com/embed?url={url}",config:{soundcloud:{options:{visual:!0,buying:!1,liking:!1,download:!1,sharing:!1,show_comments:!1,show_playcount:!1}},youtube:{playerVars:{playsinline:1,showinfo:0,rel:0,iv_load_policy:3,modestbranding:1},embedOptions:{},onUnstarted:w},facebook:{appId:"1309697205772819",version:"v3.3",playerId:null,attributes:{}},dailymotion:{params:{api:1,"endscreen-enable":!1}},vimeo:{playerOptions:{autopause:!1,byline:!1,portrait:!1,title:!1},title:null},mux:{attributes:{},version:"2"},file:{attributes:{},tracks:[],forceVideo:!1,forceAudio:!1,forceHLS:!1,forceDASH:!1,forceFLV:!1,hlsOptions:{},hlsVersion:"1.1.4",dashVersion:"3.1.3",flvVersion:"1.5.0",forceDisableHls:!1},wistia:{options:{},playerId:null,customControls:null},mixcloud:{options:{hide_cover:1}},twitch:{options:{},playerId:null},vidyard:{options:{}}},onReady:w,onStart:w,onPlay:w,onPause:w,onBuffer:w,onBufferEnd:w,onEnded:w,onError:w,onDuration:w,onSeek:w,onPlaybackRateChange:w,onPlaybackQualityChange:w,onProgress:w,onClickPreview:w,onEnablePIP:w,onDisablePIP:w}},8016:(e,t,i)=>{var a=Object.create,r=Object.defineProperty,n=Object.getOwnPropertyDescriptor,s=Object.getOwnPropertyNames,o=Object.getPrototypeOf,l=Object.prototype.hasOwnProperty,d=(e,t,i,a)=>{if(t&&"object"==typeof t||"function"==typeof t)for(let o of s(t))l.call(e,o)||o===i||r(e,o,{get:()=>t[o],enumerable:!(a=n(t,o))||a.enumerable});return e},u=(e,t,i)=>(i=null!=e?a(o(e)):{},d(!t&&e&&e.__esModule?i:r(i,"default",{value:e,enumerable:!0}),e)),h={};((e,t)=>{for(var i in t)r(e,i,{get:t[i],enumerable:!0})})(h,{callPlayer:()=>R,getConfig:()=>M,getSDK:()=>k,isBlobUrl:()=>D,isMediaStream:()=>C,lazy:()=>E,omit:()=>L,parseEndTime:()=>I,parseStartTime:()=>y,queryString:()=>w,randomString:()=>_,supportsWebKitPresentationMode:()=>P}),e.exports=d(r({},"__esModule",{value:!0}),h);var c=u(i(6540)),m=u(i(6147)),p=u(i(4744));let E=e=>c.default.lazy(async()=>{let t=await e();return"function"==typeof t.default?t:t.default}),v=/[?&#](?:start|t)=([0-9hms]+)/,b=/[?&#]end=([0-9hms]+)/,g=/(\d+)(h|m|s)/g,f=/^\d+$/;function A(e,t){if(e instanceof Array)return;let i=e.match(t);if(i){let e=i[1];if(e.match(g))return function(e){let t=0,i=g.exec(e);for(;null!==i;){let[,a,r]=i;"h"===r&&(t+=3600*parseInt(a,10)),"m"===r&&(t+=60*parseInt(a,10)),"s"===r&&(t+=parseInt(a,10)),i=g.exec(e)}return t}(e);if(f.test(e))return parseInt(e)}}function y(e){return A(e,v)}function I(e){return A(e,b)}function _(){return Math.random().toString(36).substr(2,5)}function w(e){return Object.keys(e).map(t=>`${t}=${e[t]}`).join("&")}function T(e){return window[e]?window[e]:window.exports&&window.exports[e]?window.exports[e]:window.module&&window.module.exports&&window.module.exports[e]?window.module.exports[e]:null}let S={},k=function(e,t,i=null,a=()=>!0,r=m.default){let n=T(t);return n&&a(n)?Promise.resolve(n):new Promise((a,n)=>{if(S[e]){S[e].push({resolve:a,reject:n});return}S[e]=[{resolve:a,reject:n}];let s=t=>{S[e].forEach(e=>e.resolve(t))};if(i){let e=window[i];window[i]=function(){e&&e(),s(T(t))}}r(e,a=>{a?(S[e].forEach(e=>e.reject(a)),S[e]=null):i||s(T(t))})})};function M(e,t){return(0,p.default)(t.config,e.config)}function L(e,...t){let i=[].concat(...t),a={};for(let t of Object.keys(e))-1===i.indexOf(t)&&(a[t]=e[t]);return a}function R(e,...t){if(!this.player||!this.player[e]){let t=`ReactPlayer: ${this.constructor.displayName} player could not call %c${e}%c \u2013 `;return this.player?this.player[e]||(t+="The method was not available"):t+="The player was not available",console.warn(t,"font-weight: bold",""),null}return this.player[e](...t)}function C(e){return"undefined"!=typeof window&&void 0!==window.MediaStream&&e instanceof window.MediaStream}function D(e){return/^blob:/.test(e)}function P(e=document.createElement("video")){let t=!1===/iPhone|iPod/.test(navigator.userAgent);return e.webkitSupportsPresentationMode&&"function"==typeof e.webkitSetPresentationMode&&t}},8453:(e,t,i)=>{"use strict";i.d(t,{R:()=>s,x:()=>o});var a=i(6540);let r={},n=a.createContext(r);function s(e){let t=a.useContext(n);return a.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:s(e.components),a.createElement(n.Provider,{value:t},e.children)}},5858:()=>{"use strict";let e,t;let i={MEDIA_PLAY_REQUEST:"mediaplayrequest",MEDIA_PAUSE_REQUEST:"mediapauserequest",MEDIA_MUTE_REQUEST:"mediamuterequest",MEDIA_UNMUTE_REQUEST:"mediaunmuterequest",MEDIA_VOLUME_REQUEST:"mediavolumerequest",MEDIA_SEEK_REQUEST:"mediaseekrequest",MEDIA_AIRPLAY_REQUEST:"mediaairplayrequest",MEDIA_ENTER_FULLSCREEN_REQUEST:"mediaenterfullscreenrequest",MEDIA_EXIT_FULLSCREEN_REQUEST:"mediaexitfullscreenrequest",MEDIA_PREVIEW_REQUEST:"mediapreviewrequest",MEDIA_ENTER_PIP_REQUEST:"mediaenterpiprequest",MEDIA_EXIT_PIP_REQUEST:"mediaexitpiprequest",MEDIA_ENTER_CAST_REQUEST:"mediaentercastrequest",MEDIA_EXIT_CAST_REQUEST:"mediaexitcastrequest",MEDIA_SHOW_TEXT_TRACKS_REQUEST:"mediashowtexttracksrequest",MEDIA_HIDE_TEXT_TRACKS_REQUEST:"mediahidetexttracksrequest",MEDIA_SHOW_SUBTITLES_REQUEST:"mediashowsubtitlesrequest",MEDIA_DISABLE_SUBTITLES_REQUEST:"mediadisablesubtitlesrequest",MEDIA_TOGGLE_SUBTITLES_REQUEST:"mediatogglesubtitlesrequest",MEDIA_PLAYBACK_RATE_REQUEST:"mediaplaybackraterequest",MEDIA_RENDITION_REQUEST:"mediarenditionrequest",MEDIA_AUDIO_TRACK_REQUEST:"mediaaudiotrackrequest",MEDIA_SEEK_TO_LIVE_REQUEST:"mediaseektoliverequest",REGISTER_MEDIA_STATE_RECEIVER:"registermediastatereceiver",UNREGISTER_MEDIA_STATE_RECEIVER:"unregistermediastatereceiver"},a={MEDIA_CHROME_ATTRIBUTES:"mediachromeattributes",MEDIA_CONTROLLER:"mediacontroller"},r={MEDIA_AIRPLAY_UNAVAILABLE:"mediaAirplayUnavailable",MEDIA_FULLSCREEN_UNAVAILABLE:"mediaFullscreenUnavailable",MEDIA_PIP_UNAVAILABLE:"mediaPipUnavailable",MEDIA_CAST_UNAVAILABLE:"mediaCastUnavailable",MEDIA_RENDITION_UNAVAILABLE:"mediaRenditionUnavailable",MEDIA_AUDIO_TRACK_UNAVAILABLE:"mediaAudioTrackUnavailable",MEDIA_WIDTH:"mediaWidth",MEDIA_HEIGHT:"mediaHeight",MEDIA_PAUSED:"mediaPaused",MEDIA_HAS_PLAYED:"mediaHasPlayed",MEDIA_ENDED:"mediaEnded",MEDIA_MUTED:"mediaMuted",MEDIA_VOLUME_LEVEL:"mediaVolumeLevel",MEDIA_VOLUME:"mediaVolume",MEDIA_VOLUME_UNAVAILABLE:"mediaVolumeUnavailable",MEDIA_IS_PIP:"mediaIsPip",MEDIA_IS_CASTING:"mediaIsCasting",MEDIA_IS_AIRPLAYING:"mediaIsAirplaying",MEDIA_SUBTITLES_LIST:"mediaSubtitlesList",MEDIA_SUBTITLES_SHOWING:"mediaSubtitlesShowing",MEDIA_IS_FULLSCREEN:"mediaIsFullscreen",MEDIA_PLAYBACK_RATE:"mediaPlaybackRate",MEDIA_CURRENT_TIME:"mediaCurrentTime",MEDIA_DURATION:"mediaDuration",MEDIA_SEEKABLE:"mediaSeekable",MEDIA_PREVIEW_TIME:"mediaPreviewTime",MEDIA_PREVIEW_IMAGE:"mediaPreviewImage",MEDIA_PREVIEW_COORDS:"mediaPreviewCoords",MEDIA_PREVIEW_CHAPTER:"mediaPreviewChapter",MEDIA_LOADING:"mediaLoading",MEDIA_BUFFERED:"mediaBuffered",MEDIA_STREAM_TYPE:"mediaStreamType",MEDIA_TARGET_LIVE_WINDOW:"mediaTargetLiveWindow",MEDIA_TIME_IS_LIVE:"mediaTimeIsLive",MEDIA_RENDITION_LIST:"mediaRenditionList",MEDIA_RENDITION_SELECTED:"mediaRenditionSelected",MEDIA_AUDIO_TRACK_LIST:"mediaAudioTrackList",MEDIA_AUDIO_TRACK_ENABLED:"mediaAudioTrackEnabled",MEDIA_CHAPTERS_CUES:"mediaChaptersCues"},n=Object.entries(r),s=n.reduce((e,[t,i])=>(e[t]=i.toLowerCase(),e),{}),o=n.reduce((e,[t,i])=>(e[t]=i.toLowerCase(),e),{USER_INACTIVE:"userinactivechange",BREAKPOINTS_CHANGE:"breakpointchange",BREAKPOINTS_COMPUTED:"breakpointscomputed"});Object.entries(o).reduce((e,[t,i])=>{let a=s[t];return a&&(e[i]=a),e},{userinactivechange:"userinactive"});let l=Object.entries(s).reduce((e,[t,i])=>{let a=o[t];return a&&(e[i]=a),e},{userinactive:"userinactivechange"}),d={SUBTITLES:"subtitles",CAPTIONS:"captions",CHAPTERS:"chapters",METADATA:"metadata"},u={DISABLED:"disabled",SHOWING:"showing"},h={MOUSE:"mouse",TOUCH:"touch"},c={UNAVAILABLE:"unavailable",UNSUPPORTED:"unsupported"},m={LIVE:"live",ON_DEMAND:"on-demand",UNKNOWN:"unknown"},p={FULLSCREEN:"fullscreen"},E={AUDIO_PLAYER:()=>"audio player",VIDEO_PLAYER:()=>"video player",VOLUME:()=>"volume",SEEK:()=>"seek",CLOSED_CAPTIONS:()=>"closed captions",PLAYBACK_RATE:({playbackRate:e=1}={})=>`current playback rate ${e}`,PLAYBACK_TIME:()=>"playback time",MEDIA_LOADING:()=>"media loading",SETTINGS:()=>"settings",AUDIO_TRACKS:()=>"audio tracks",QUALITY:()=>"quality"},v={PLAY:()=>"play",PAUSE:()=>"pause",MUTE:()=>"mute",UNMUTE:()=>"unmute",ENTER_AIRPLAY:()=>"start airplay",EXIT_AIRPLAY:()=>"stop airplay",ENTER_CAST:()=>"start casting",EXIT_CAST:()=>"stop casting",ENTER_FULLSCREEN:()=>"enter fullscreen mode",EXIT_FULLSCREEN:()=>"exit fullscreen mode",ENTER_PIP:()=>"enter picture in picture mode",EXIT_PIP:()=>"exit picture in picture mode",SEEK_FORWARD_N_SECS:({seekOffset:e=30}={})=>`seek forward ${e} seconds`,SEEK_BACK_N_SECS:({seekOffset:e=30}={})=>`seek back ${e} seconds`,SEEK_LIVE:()=>"seek to live",PLAYING_LIVE:()=>"playing live"};function b(e){if(e){let{id:t,width:i,height:a}=e;return[t,i,a].filter(e=>null!=e).join(":")}}function g(e){if(e){let{id:t,kind:i,language:a,label:r}=e;return[t,i,a,r].filter(e=>null!=e).join(":")}}function f(e){return"number"==typeof e&&!Number.isNaN(e)&&Number.isFinite(e)}({...E,...v});let A=e=>new Promise(t=>setTimeout(t,e)),y=[{singular:"hour",plural:"hours"},{singular:"minute",plural:"minutes"},{singular:"second",plural:"seconds"}],I=(e,t)=>{let i=1===e?y[t].singular:y[t].plural;return`${e} ${i}`},_=e=>{if(!f(e))return"";let t=Math.abs(e),i=t!==e,a=new Date(0,0,0,0,0,t,0),r=[a.getHours(),a.getMinutes(),a.getSeconds()].map((e,t)=>e&&I(e,t)).filter(e=>e).join(", ");return`${r}${i?" remaining":""}`};function w(e,t){let i=!1;e<0&&(i=!0,e=0-e);let a=Math.floor((e=e<0?0:e)%60),r=Math.floor(e/60%60),n=Math.floor(e/3600),s=Math.floor(t/60%60),o=Math.floor(t/3600);return(isNaN(e)||e===1/0)&&(n=r=a="0"),r=(((n=n>0||o>0?n+":":"")||s>=10)&&r<10?"0"+r:r)+":",(i?"-":"")+n+r+(a=a<10?"0"+a:a)}Object.freeze({length:0,start(e){let t=e>>>0;if(t>=this.length)throw new DOMException(`Failed to execute 'start' on 'TimeRanges': The index provided (${t}) is greater than or equal to the maximum bound (${this.length}).`);return 0},end(e){let t=e>>>0;if(t>=this.length)throw new DOMException(`Failed to execute 'end' on 'TimeRanges': The index provided (${t}) is greater than or equal to the maximum bound (${this.length}).`);return 0}});class T{addEventListener(){}removeEventListener(){}dispatchEvent(){return!0}}class S extends T{}class k extends S{constructor(){super(...arguments),this.role=null}}let M={createElement:function(){return new L.HTMLElement},createElementNS:function(){return new L.HTMLElement},addEventListener(){},removeEventListener(){},dispatchEvent:e=>!1},L={ResizeObserver:class{observe(){}unobserve(){}disconnect(){}},document:M,Node:S,Element:k,HTMLElement:class extends k{constructor(){super(...arguments),this.innerHTML=""}get content(){return new L.DocumentFragment}},DocumentFragment:class extends T{},customElements:{get:function(){},define:function(){},whenDefined:function(){}},localStorage:{getItem:e=>null,setItem(e,t){},removeItem(e){}},CustomEvent:function(){},getComputedStyle:function(){},navigator:{languages:[],get userAgent(){return""}},matchMedia:e=>({matches:!1,media:e})},R="undefined"==typeof window||void 0===window.customElements,C=Object.keys(L).every(e=>e in globalThis),D=R&&!C?L:globalThis,P=R&&!C?M:globalThis.document,O=new WeakMap,x=e=>{let t=O.get(e);return t||O.set(e,t=new Set),t},N=new D.ResizeObserver(e=>{for(let t of e)for(let e of x(t.target))e(t)});function U(e,t){x(e).add(t),N.observe(e)}let F=(e,t,i=".value")=>{let a=e.querySelector(i);a&&(a.textContent=t)},V=(e,t)=>{let i=`slot[name="${t}"]`,a=e.shadowRoot.querySelector(i);return a?a.children:[]},W=(e,t)=>V(e,t)[0],B=(e,t)=>!!e&&!!t&&(null!=e&&!!e.contains(t)||B(e,t.getRootNode().host)),$=(e,t)=>e?e.closest(t)||$(e.getRootNode().host,t):null;function H(e,t){return Math.sqrt(Math.pow(t.x-e.x,2)+Math.pow(t.y-e.y,2))}function j(e,t){return function(e,t){var i,a;let r;for(r of null!=(i=e.querySelectorAll("style:not([media])"))?i:[]){let e;try{e=null==(a=r.sheet)?void 0:a.cssRules}catch{continue}for(let i of null!=e?e:[])if(t(i.selectorText))return i}}(e,e=>e===t)||function(e,t){var i,a;let r=null!=(i=e.querySelectorAll("style:not([media])"))?i:[],n=null==r?void 0:r[r.length-1];return(null==n?void 0:n.sheet)?(null==n||n.sheet.insertRule(`${t}{}`,n.sheet.cssRules.length),null==(a=n.sheet.cssRules)?void 0:a[n.sheet.cssRules.length-1]):(console.warn("Media Chrome: No style sheet found on style tag of",e),{style:{setProperty:()=>{},removeProperty:()=>"",getPropertyValue:()=>""}})}(e,t)}function K(e,t,i=Number.NaN){let a=e.getAttribute(t);return null!=a?+a:i}function G(e,t,i){let a=+i;if(null==i||Number.isNaN(a)){e.hasAttribute(t)&&e.removeAttribute(t);return}K(e,t,void 0)!==a&&e.setAttribute(t,`${a}`)}function q(e,t){return e.hasAttribute(t)}function Y(e,t,i){if(null==i){e.hasAttribute(t)&&e.removeAttribute(t);return}q(e,t)!=i&&e.toggleAttribute(t,i)}function z(e,t,i=null){var a;return null!=(a=e.getAttribute(t))?a:i}function Q(e,t,i){if(null==i){e.hasAttribute(t)&&e.removeAttribute(t);return}let a=`${i}`;z(e,t,void 0)!==a&&e.setAttribute(t,a)}var Z,X,J,ee,et,ei,ea,er,en,es,eo,el,ed,eu,eh,ec,em,ep,eE,ev,eb,eg,ef,eA,ey,eI,e_,ew,eT,eS,ek,eM,eL,eR,eC,eD,eP,eO,ex,eN,eU,eF,eV,eW,eB,e$,eH,ej,eK,eG,eq,eY,ez,eQ,eZ,eX,eJ,e0,e1,e2,e3,e5,e4,e7,e8,e6,e9,te,tt,ti,ta,tr,tn,ts,to,tl,td,tu,th,tc,tm,tp,tE,tv,tb,tg,tf,tA,ty,tI,t_,tw,tT,tS,tk,tM,tL,tR,tC,tD,tP,tO,tx,tN,tU,tF,tV,tW,tB,t$,tH,tj,tK,tG,tq,tY,tz,tQ,tZ,tX,tJ,t0,t1,t2=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot "+i)},t3=(e,t,i)=>(t2(e,t,"read from private field"),i?i.call(e):t.get(e)),t5=(e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)},t4=(e,t,i,a)=>(t2(e,t,"write to private field"),a?a.call(e,i):t.set(e,i),i);let t7=P.createElement("template");t7.innerHTML=`
<style>
  :host {
    display: var(--media-control-display, var(--media-gesture-receiver-display, inline-block));
    box-sizing: border-box;
  }
</style>
`;class t8 extends D.HTMLElement{constructor(e={}){if(super(),t5(this,Z,void 0),!this.shadowRoot){let t=this.attachShadow({mode:"open"}),i=t7.content.cloneNode(!0);this.nativeEl=i;let a=e.slotTemplate;a||((a=P.createElement("template")).innerHTML=`<slot>${e.defaultContent||""}</slot>`),this.nativeEl.appendChild(a.content.cloneNode(!0)),t.appendChild(i)}}static get observedAttributes(){return[a.MEDIA_CONTROLLER,s.MEDIA_PAUSED]}attributeChangedCallback(e,t,i){var r,n,s,o,l;e===a.MEDIA_CONTROLLER&&(t&&(null==(n=null==(r=t3(this,Z))?void 0:r.unassociateElement)||n.call(r,this),t4(this,Z,null)),i&&this.isConnected&&(t4(this,Z,null==(s=this.getRootNode())?void 0:s.getElementById(i)),null==(l=null==(o=t3(this,Z))?void 0:o.associateElement)||l.call(o,this)))}connectedCallback(){var e,t,i,r;this.tabIndex=-1,this.setAttribute("aria-hidden","true"),t4(this,Z,function(e){var t;let i=e.getAttribute(a.MEDIA_CONTROLLER);return i?null==(t=e.getRootNode())?void 0:t.getElementById(i):$(e,"media-controller")}(this)),this.getAttribute(a.MEDIA_CONTROLLER)&&(null==(t=null==(e=t3(this,Z))?void 0:e.associateElement)||t.call(e,this)),null==(i=t3(this,Z))||i.addEventListener("pointerdown",this),null==(r=t3(this,Z))||r.addEventListener("click",this)}disconnectedCallback(){var e,t,i,r;this.getAttribute(a.MEDIA_CONTROLLER)&&(null==(t=null==(e=t3(this,Z))?void 0:e.unassociateElement)||t.call(e,this)),null==(i=t3(this,Z))||i.removeEventListener("pointerdown",this),null==(r=t3(this,Z))||r.removeEventListener("click",this),t4(this,Z,null)}handleEvent(e){var t;let i=null==(t=e.composedPath())?void 0:t[0];if(["video","media-controller"].includes(null==i?void 0:i.localName)){if("pointerdown"===e.type)this._pointerType=e.pointerType;else if("click"===e.type){let{clientX:t,clientY:i}=e,{left:a,top:r,width:n,height:s}=this.getBoundingClientRect(),o=t-a,l=i-r;if(o<0||l<0||o>n||l>s||0===n&&0===s)return;let{pointerType:d=this._pointerType}=e;if(this._pointerType=void 0,d===h.TOUCH){this.handleTap(e);return}if(d===h.MOUSE){this.handleMouseClick(e);return}}}}get mediaPaused(){return q(this,s.MEDIA_PAUSED)}set mediaPaused(e){Y(this,s.MEDIA_PAUSED,e)}handleTap(e){}handleMouseClick(e){let t=this.mediaPaused?i.MEDIA_PLAY_REQUEST:i.MEDIA_PAUSE_REQUEST;this.dispatchEvent(new D.CustomEvent(t,{composed:!0,bubbles:!0}))}}Z=new WeakMap,D.customElements.get("media-gesture-receiver")||D.customElements.define("media-gesture-receiver",t8);var t6=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot "+i)},t9=(e,t,i)=>(t6(e,t,"read from private field"),i?i.call(e):t.get(e)),ie=(e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)},it=(e,t,i,a)=>(t6(e,t,"write to private field"),a?a.call(e,i):t.set(e,i),i),ii=(e,t,i)=>(t6(e,t,"access private method"),i);let ia={AUDIO:"audio",AUTOHIDE:"autohide",BREAKPOINTS:"breakpoints",GESTURES_DISABLED:"gesturesdisabled",KEYBOARD_CONTROL:"keyboardcontrol",NO_AUTOHIDE:"noautohide",USER_INACTIVE:"userinactive"},ir=P.createElement("template");ir.innerHTML=`
  <style>
    
    :host([${s.MEDIA_IS_FULLSCREEN}]) ::slotted([slot=media]) {
      outline: none;
    }

    :host {
      box-sizing: border-box;
      position: relative;
      display: inline-block;
      line-height: 0;
      background-color: var(--media-background-color, #000);
    }

    :host(:not([${ia.AUDIO}])) [part~=layer]:not([part~=media-layer]) {
      position: absolute;
      top: 0;
      left: 0;
      bottom: 0;
      right: 0;
      display: flex;
      flex-flow: column nowrap;
      align-items: start;
      pointer-events: none;
      background: none;
    }

    slot[name=media] {
      display: var(--media-slot-display, contents);
    }

    
    :host([${ia.AUDIO}]) slot[name=media] {
      display: var(--media-slot-display, none);
    }

    
    :host([${ia.AUDIO}]) [part~=layer][part~=gesture-layer] {
      height: 0;
      display: block;
    }

    
    :host(:not([${ia.AUDIO}])[${ia.GESTURES_DISABLED}]) ::slotted([slot=gestures-chrome]),
    :host(:not([${ia.AUDIO}])[${ia.GESTURES_DISABLED}]) media-gesture-receiver[slot=gestures-chrome] {
      display: none;
    }

    
    ::slotted(:not([slot=media]):not([slot=poster]):not(media-loading-indicator):not([hidden])) {
      pointer-events: auto;
    }

    :host(:not([${ia.AUDIO}])) *[part~=layer][part~=centered-layer] {
      align-items: center;
      justify-content: center;
    }

    :host(:not([${ia.AUDIO}])) ::slotted(media-gesture-receiver[slot=gestures-chrome]),
    :host(:not([${ia.AUDIO}])) media-gesture-receiver[slot=gestures-chrome] {
      align-self: stretch;
      flex-grow: 1;
    }

    slot[name=middle-chrome] {
      display: inline;
      flex-grow: 1;
      pointer-events: none;
      background: none;
    }

    
    ::slotted([slot=media]),
    ::slotted([slot=poster]) {
      width: 100%;
      height: 100%;
    }

    
    :host(:not([${ia.AUDIO}])) .spacer {
      flex-grow: 1;
    }

    
    :host(:-webkit-full-screen) {
      
      width: 100% !important;
      height: 100% !important;
    }

    
    ::slotted(:not([slot=media]):not([slot=poster]):not([${ia.NO_AUTOHIDE}]):not([hidden])) {
      opacity: 1;
      transition: opacity 0.25s;
    }

    
    :host([${ia.USER_INACTIVE}]:not([${s.MEDIA_PAUSED}]):not([${s.MEDIA_IS_AIRPLAYING}]):not([${s.MEDIA_IS_CASTING}]):not([${ia.AUDIO}])) ::slotted(:not([slot=media]):not([slot=poster]):not([${ia.NO_AUTOHIDE}])) {
      opacity: 0;
      transition: opacity 1s;
    }

    :host([${ia.USER_INACTIVE}]:not([${s.MEDIA_PAUSED}]):not([${s.MEDIA_IS_CASTING}]):not([${ia.AUDIO}])) ::slotted([slot=media]) {
      cursor: none;
    }

    ::slotted(media-control-bar)  {
      align-self: stretch;
    }

    
    :host(:not([${ia.AUDIO}])[${s.MEDIA_HAS_PLAYED}]) slot[name=poster] {
      display: none;
    }

    ::slotted([role="menu"]) {
      align-self: end;
    }

    ::slotted([role="dialog"]) {
      align-self: center;
    }
  </style>

  <slot name="media" part="layer media-layer"></slot>
  <slot name="poster" part="layer poster-layer"></slot>
  <slot name="gestures-chrome" part="layer gesture-layer">
    <media-gesture-receiver slot="gestures-chrome"></media-gesture-receiver>
  </slot>
  <span part="layer vertical-layer">
    <slot name="top-chrome" part="top chrome"></slot>
    <slot name="middle-chrome" part="middle chrome"></slot>
    <slot name="centered-chrome" part="layer centered-layer center centered chrome"></slot>
    
    <slot part="bottom chrome"></slot>
  </span>
`;let is=Object.values(s);class io extends D.HTMLElement{constructor(){super(),ie(this,ei),ie(this,er),ie(this,es),ie(this,el),ie(this,eu),ie(this,X,0),ie(this,J,null),ie(this,ee,null),ie(this,et,void 0),this.breakpointsComputed=!1,this.shadowRoot||(this.attachShadow({mode:"open"}),this.shadowRoot.appendChild(ir.content.cloneNode(!0))),new MutationObserver(e=>{let t=this.media;for(let i of e)"childList"===i.type&&(i.removedNodes.forEach(e=>{if("media"==e.slot&&i.target==this){let a=i.previousSibling&&i.previousSibling.previousElementSibling;if(a&&t){let t="media"!==a.slot;for(;null!==(a=a.previousSibling);)"media"==a.slot&&(t=!1);t&&this.mediaUnsetCallback(e)}else this.mediaUnsetCallback(e)}}),t&&i.addedNodes.forEach(e=>{e===t&&this.handleMediaUpdated(t)}))}).observe(this,{childList:!0,subtree:!0});let e=!1;U(this,t=>{e||(setTimeout(()=>{(function(e,t){var i;if(!e.isConnected)return;let a=Object.fromEntries((null!=(i=e.getAttribute(ia.BREAKPOINTS))?i:"sm:384 md:576 lg:768 xl:960").split(/\s+/).map(e=>e.split(":"))),r=Object.keys(a).filter(e=>t>=parseInt(a[e])),n=!1;if(Object.keys(a).forEach(t=>{if(r.includes(t)){e.hasAttribute(`breakpoint${t}`)||(e.setAttribute(`breakpoint${t}`,""),n=!0);return}e.hasAttribute(`breakpoint${t}`)&&(e.removeAttribute(`breakpoint${t}`),n=!0)}),n){let t=new CustomEvent(o.BREAKPOINTS_CHANGE,{detail:r});e.dispatchEvent(t)}})(t.target,t.contentRect.width),e=!1,this.breakpointsComputed||(this.breakpointsComputed=!0,this.dispatchEvent(new CustomEvent(o.BREAKPOINTS_COMPUTED,{bubbles:!0,composed:!0})))},0),e=!0)});let t=this.querySelector(":scope > slot[slot=media]");t&&t.addEventListener("slotchange",()=>{if(!t.assignedElements({flatten:!0}).length){t9(this,J)&&this.mediaUnsetCallback(t9(this,J));return}this.handleMediaUpdated(this.media)})}static get observedAttributes(){return[ia.AUTOHIDE,ia.GESTURES_DISABLED].concat(is).filter(e=>![s.MEDIA_RENDITION_LIST,s.MEDIA_AUDIO_TRACK_LIST,s.MEDIA_CHAPTERS_CUES,s.MEDIA_WIDTH,s.MEDIA_HEIGHT].includes(e))}attributeChangedCallback(e,t,i){e.toLowerCase()==ia.AUTOHIDE&&(this.autohide=i)}get media(){let e=this.querySelector(":scope > [slot=media]");return(null==e?void 0:e.nodeName)=="SLOT"&&(e=e.assignedElements({flatten:!0})[0]),e}async handleMediaUpdated(e){e&&(it(this,J,e),e.localName.includes("-")&&await D.customElements.whenDefined(e.localName),this.mediaSetCallback(e))}connectedCallback(){var e;let t=null!=this.getAttribute(ia.AUDIO)?E.AUDIO_PLAYER():E.VIDEO_PLAYER();this.setAttribute("role","region"),this.setAttribute("aria-label",t),this.handleMediaUpdated(this.media),this.setAttribute(ia.USER_INACTIVE,""),this.addEventListener("pointerdown",this),this.addEventListener("pointermove",this),this.addEventListener("pointerup",this),this.addEventListener("mouseleave",this),this.addEventListener("keyup",this),null==(e=D.window)||e.addEventListener("mouseup",this)}disconnectedCallback(){var e;this.media&&this.mediaUnsetCallback(this.media),null==(e=D.window)||e.removeEventListener("mouseup",this)}mediaSetCallback(e){}mediaUnsetCallback(e){it(this,J,null)}handleEvent(e){switch(e.type){case"pointerdown":it(this,X,e.timeStamp);break;case"pointermove":ii(this,ei,ea).call(this,e);break;case"pointerup":ii(this,er,en).call(this,e);break;case"mouseleave":ii(this,es,eo).call(this);break;case"mouseup":this.removeAttribute(ia.KEYBOARD_CONTROL);break;case"keyup":ii(this,eu,eh).call(this),this.setAttribute(ia.KEYBOARD_CONTROL,"")}}set autohide(e){let t=Number(e);it(this,et,isNaN(t)?0:t)}get autohide(){return(void 0===t9(this,et)?2:t9(this,et)).toString()}}X=new WeakMap,J=new WeakMap,ee=new WeakMap,et=new WeakMap,ei=new WeakSet,ea=function(e){!("mouse"!==e.pointerType&&e.timeStamp-t9(this,X)<250)&&(ii(this,el,ed).call(this),clearTimeout(t9(this,ee)),[this,this.media].includes(e.target)&&ii(this,eu,eh).call(this))},er=new WeakSet,en=function(e){if("touch"===e.pointerType){let t=!this.hasAttribute(ia.USER_INACTIVE);[this,this.media].includes(e.target)&&t?ii(this,es,eo).call(this):ii(this,eu,eh).call(this)}else e.composedPath().some(e=>["media-play-button","media-fullscreen-button"].includes(null==e?void 0:e.localName))&&ii(this,eu,eh).call(this)},es=new WeakSet,eo=function(){if(0>t9(this,et)||this.hasAttribute(ia.USER_INACTIVE))return;this.setAttribute(ia.USER_INACTIVE,"");let e=new D.CustomEvent(o.USER_INACTIVE,{composed:!0,bubbles:!0,detail:!0});this.dispatchEvent(e)},el=new WeakSet,ed=function(){if(!this.hasAttribute(ia.USER_INACTIVE))return;this.removeAttribute(ia.USER_INACTIVE);let e=new D.CustomEvent(o.USER_INACTIVE,{composed:!0,bubbles:!0,detail:!1});this.dispatchEvent(e)},eu=new WeakSet,eh=function(){ii(this,el,ed).call(this),clearTimeout(t9(this,ee));let e=parseInt(this.autohide);e<0||it(this,ee,setTimeout(()=>{ii(this,es,eo).call(this)},1e3*e))},D.customElements.get("media-container")||D.customElements.define("media-container",io);var il=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot "+i)},id=(e,t,i)=>(il(e,t,"read from private field"),i?i.call(e):t.get(e)),iu=(e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)},ih=(e,t,i,a)=>(il(e,t,"write to private field"),a?a.call(e,i):t.set(e,i),i);class ic{constructor(e,t,{defaultValue:i}={defaultValue:void 0}){iu(this,ev),iu(this,ec,void 0),iu(this,em,void 0),iu(this,ep,void 0),iu(this,eE,new Set),ih(this,ec,e),ih(this,em,t),ih(this,ep,new Set(i))}[Symbol.iterator](){return id(this,ev,eb).values()}get length(){return id(this,ev,eb).size}get value(){var e;return null!=(e=[...id(this,ev,eb)].join(" "))?e:""}set value(e){var t;e!==this.value&&(ih(this,eE,new Set),this.add(...null!=(t=null==e?void 0:e.split(" "))?t:[]))}toString(){return this.value}item(e){return[...id(this,ev,eb)][e]}values(){return id(this,ev,eb).values()}forEach(e,t){id(this,ev,eb).forEach(e,t)}add(...e){var t,i;e.forEach(e=>id(this,eE).add(e)),(""!==this.value||(null==(t=id(this,ec))?void 0:t.hasAttribute(`${id(this,em)}`)))&&(null==(i=id(this,ec))||i.setAttribute(`${id(this,em)}`,`${this.value}`))}remove(...e){var t;e.forEach(e=>id(this,eE).delete(e)),null==(t=id(this,ec))||t.setAttribute(`${id(this,em)}`,`${this.value}`)}contains(e){return id(this,ev,eb).has(e)}toggle(e,t){return void 0!==t?t?(this.add(e),!0):(this.remove(e),!1):this.contains(e)?(this.remove(e),!1):(this.add(e),!0)}replace(e,t){return this.remove(e),this.add(t),e===t}}ec=new WeakMap,em=new WeakMap,ep=new WeakMap,eE=new WeakMap,ev=new WeakSet,eb=function(){return id(this,eE).size?id(this,eE):id(this,ep)};let im=(e="")=>e.split(/\s+/),ip=(e="")=>{let[t,i,a]=e.split(":"),r=a?decodeURIComponent(a):void 0;return{kind:"cc"===t?d.CAPTIONS:d.SUBTITLES,language:i,label:r}},iE=(e="",t={})=>im(e).map(e=>{let i=ip(e);return{...t,...i}}),iv=e=>e?Array.isArray(e)?e.map(e=>"string"==typeof e?ip(e):e):"string"==typeof e?iE(e):[e]:[],ib=({kind:e,label:t,language:i}={kind:"subtitles"})=>t?`${"captions"===e?"cc":"sb"}:${i}:${encodeURIComponent(t)}`:i,ig=(e=[])=>Array.prototype.map.call(e,ib).join(" "),iA=(e,t)=>i=>i[e]===t,iy=e=>{let t=Object.entries(e).map(([e,t])=>iA(e,t));return e=>t.every(t=>t(e))},iI=(e,t=[],i=[])=>{let a=iv(i).map(iy);Array.from(t).filter(e=>a.some(t=>t(e))).forEach(t=>{t.mode=e})},i_=(e,t=()=>!0)=>{if(!(null==e?void 0:e.textTracks))return[];let i="function"==typeof t?t:iy(t);return Array.from(e.textTracks).filter(i)},iw=e=>{var t;return!!(null==(t=e.mediaSubtitlesShowing)?void 0:t.length)||e.hasAttribute(s.MEDIA_SUBTITLES_SHOWING)},iT=e=>{var t;let{media:i,fullscreenElement:a}=e,r=a&&"requestFullscreen"in a?"requestFullscreen":a&&"webkitRequestFullScreen"in a?"webkitRequestFullScreen":void 0;if(r){let e=null==(t=a[r])?void 0:t.call(a);if(e instanceof Promise)return e.catch(()=>{})}else(null==i?void 0:i.webkitEnterFullscreen)?i.webkitEnterFullscreen():(null==i?void 0:i.requestFullscreen)&&i.requestFullscreen()},iS="exitFullscreen"in P?"exitFullscreen":"webkitExitFullscreen"in P?"webkitExitFullscreen":"webkitCancelFullScreen"in P?"webkitCancelFullScreen":void 0,ik=e=>{var t;let{documentElement:i}=e;if(iS){let e=null==(t=null==i?void 0:i[iS])?void 0:t.call(i);if(e instanceof Promise)return e.catch(()=>{})}},iM="fullscreenElement"in P?"fullscreenElement":"webkitFullscreenElement"in P?"webkitFullscreenElement":void 0,iL=e=>{let{documentElement:t,media:i}=e,a=null==t?void 0:t[iM];return!a&&"webkitDisplayingFullscreen"in i&&"webkitPresentationMode"in i&&i.webkitDisplayingFullscreen&&i.webkitPresentationMode===p.FULLSCREEN?i:a},iR=e=>{var t;let{media:i,documentElement:a,fullscreenElement:r=i}=e;if(!i||!a)return!1;let n=iL(e);if(!n)return!1;if(n===r||n===i)return!0;if(n.localName.includes("-")){let e=n.shadowRoot;if(!(iM in e))return B(n,r);for(;null==e?void 0:e[iM];){if(e[iM]===r)return!0;e=null==(t=e[iM])?void 0:t.shadowRoot}}return!1},iC="fullscreenEnabled"in P?"fullscreenEnabled":"webkitFullscreenEnabled"in P?"webkitFullscreenEnabled":void 0,iD=e=>{let{documentElement:t,media:i}=e;return!!(null==t?void 0:t[iC])||i&&"webkitSupportsFullscreen"in i},iP=()=>{var t;return e||(e=null==(t=null==P?void 0:P.createElement)?void 0:t.call(P,"video"))},iO=async(e=iP())=>{if(!e)return!1;let t=e.volume;e.volume=t/2+.1;let i=new AbortController,a=await Promise.race([ix(e,i.signal),iN(e,t)]);return i.abort(),a},ix=(e,t)=>new Promise(i=>{e.addEventListener("volumechange",()=>i(!0),{signal:t})}),iN=async(e,t)=>{for(let i=0;i<10;i++){if(e.volume===t)return!1;await A(10)}return e.volume!==t},iU=/.*Version\/.*Safari\/.*/.test(D.navigator.userAgent),iF=(e=iP())=>(!D.matchMedia("(display-mode: standalone)").matches||!iU)&&"function"==typeof(null==e?void 0:e.requestPictureInPicture),iV=(e=iP())=>iD({documentElement:P,media:e}),iW=iV(),iB=iF(),i$=!!D.WebKitPlaybackTargetAvailabilityEvent,iH=!!D.chrome,ij=e=>i_(e.media,e=>[d.SUBTITLES,d.CAPTIONS].includes(e.kind)).sort((e,t)=>e.kind>=t.kind?1:-1),iK=e=>i_(e.media,e=>e.mode===u.SHOWING&&[d.SUBTITLES,d.CAPTIONS].includes(e.kind)),iG=(e,t)=>{let i=ij(e),a=iK(e),r=!!a.length;if(i.length){if(!1===t||r&&!0!==t)iI(u.DISABLED,i,a);else if(!0===t||!r&&!1!==t){let t=i[0],{options:r}=e;if(!(null==r?void 0:r.noSubtitlesLangPref)){let e=globalThis.localStorage.getItem("media-chrome-pref-subtitles-lang"),a=e?[e,...globalThis.navigator.languages]:globalThis.navigator.languages,r=i.filter(e=>a.some(t=>e.language.toLowerCase().startsWith(t.split("-")[0]))).sort((e,t)=>a.findIndex(t=>e.language.toLowerCase().startsWith(t.split("-")[0]))-a.findIndex(e=>t.language.toLowerCase().startsWith(e.split("-")[0])));r[0]&&(t=r[0])}let{language:n,label:s,kind:o}=t;iI(u.DISABLED,i,a),iI(u.SHOWING,i,[{language:n,label:s,kind:o}])}}},iq=(e,t)=>e===t||typeof e==typeof t&&(!!("number"==typeof e&&Number.isNaN(e)&&Number.isNaN(t))||"object"==typeof e&&(Array.isArray(e)?iY(e,t):Object.entries(e).every(([e,i])=>e in t&&iq(i,t[e])))),iY=(e,t)=>{let i=Array.isArray(e),a=Array.isArray(t);return i===a&&(!i&&!a||e.length===t.length&&e.every((e,i)=>iq(e,t[i])))},iz=Object.values(m),iQ=iO().then(e=>t=e),iZ=async(...e)=>{await Promise.all(e.filter(e=>e).map(async e=>{if(!("localName"in e&&e instanceof D.HTMLElement))return;let t=e.localName;if(!t.includes("-"))return;let i=D.customElements.get(t);i&&e instanceof i||(await D.customElements.whenDefined(t),D.customElements.upgrade(e))}))},iX={mediaWidth:{get(e){var t;let{media:i}=e;return null!=(t=null==i?void 0:i.videoWidth)?t:0},mediaEvents:["resize"]},mediaHeight:{get(e){var t;let{media:i}=e;return null!=(t=null==i?void 0:i.videoHeight)?t:0},mediaEvents:["resize"]},mediaPaused:{get(e){var t;let{media:i}=e;return null==(t=null==i?void 0:i.paused)||t},set(e,t){var i;let{media:a}=t;a&&(e?a.pause():null==(i=a.play())||i.catch(()=>{}))},mediaEvents:["play","playing","pause","emptied"]},mediaHasPlayed:{get(e,t){let{media:i}=e;return!!i&&(t?"playing"===t.type:!i.paused)},mediaEvents:["playing","emptied"]},mediaEnded:{get(e){var t;let{media:i}=e;return null!=(t=null==i?void 0:i.ended)&&t},mediaEvents:["seeked","ended","emptied"]},mediaPlaybackRate:{get(e){var t;let{media:i}=e;return null!=(t=null==i?void 0:i.playbackRate)?t:1},set(e,t){let{media:i}=t;i&&Number.isFinite(+e)&&(i.playbackRate=+e)},mediaEvents:["ratechange","loadstart"]},mediaMuted:{get(e){var t;let{media:i}=e;return null!=(t=null==i?void 0:i.muted)&&t},set(e,t){let{media:i}=t;i&&(i.muted=e)},mediaEvents:["volumechange"]},mediaVolume:{get(e){var t;let{media:i}=e;return null!=(t=null==i?void 0:i.volume)?t:1},set(e,t){let{media:i}=t;if(i){try{null==e?D.localStorage.removeItem("media-chrome-pref-volume"):D.localStorage.setItem("media-chrome-pref-volume",e.toString())}catch(e){}Number.isFinite(+e)&&(i.volume=+e)}},mediaEvents:["volumechange"],stateOwnersUpdateHandlers:[(e,t)=>{let{options:{noVolumePref:i}}=t;if(!i)try{let i=D.localStorage.getItem("media-chrome-pref-volume");if(null==i)return;iX.mediaVolume.set(+i,t),e(+i)}catch(e){console.debug("Error getting volume pref",e)}}]},mediaVolumeLevel:{get(e){let{media:t}=e;return void 0===(null==t?void 0:t.volume)?"high":t.muted||0===t.volume?"off":t.volume<.5?"low":t.volume<.75?"medium":"high"},mediaEvents:["volumechange"]},mediaCurrentTime:{get(e){var t;let{media:i}=e;return null!=(t=null==i?void 0:i.currentTime)?t:0},set(e,t){let{media:i}=t;i&&f(e)&&(i.currentTime=e)},mediaEvents:["timeupdate","loadedmetadata"]},mediaDuration:{get(e){let{media:t,options:{defaultDuration:i}={}}=e;return i&&(!t||!t.duration||Number.isNaN(t.duration)||!Number.isFinite(t.duration))?i:Number.isFinite(null==t?void 0:t.duration)?t.duration:Number.NaN},mediaEvents:["durationchange","loadedmetadata","emptied"]},mediaLoading:{get(e){let{media:t}=e;return(null==t?void 0:t.readyState)<3},mediaEvents:["waiting","playing","emptied"]},mediaSeekable:{get(e){var t;let{media:i}=e;if(!(null==(t=null==i?void 0:i.seekable)?void 0:t.length))return;let a=i.seekable.start(0),r=i.seekable.end(i.seekable.length-1);if(a||r)return[Number(a.toFixed(3)),Number(r.toFixed(3))]},mediaEvents:["loadedmetadata","emptied","progress","seekablechange"]},mediaBuffered:{get(e){var t;let{media:i}=e,a=null!=(t=null==i?void 0:i.buffered)?t:[];return Array.from(a).map((e,t)=>[Number(a.start(t).toFixed(3)),Number(a.end(t).toFixed(3))])},mediaEvents:["progress","emptied"]},mediaStreamType:{get(e){let{media:t,options:{defaultStreamType:i}={}}=e,a=[m.LIVE,m.ON_DEMAND].includes(i)?i:void 0;if(!t)return a;let{streamType:r}=t;if(iz.includes(r))return r===m.UNKNOWN?a:r;let n=t.duration;return n===1/0?m.LIVE:Number.isFinite(n)?m.ON_DEMAND:a},mediaEvents:["emptied","durationchange","loadedmetadata","streamtypechange"]},mediaTargetLiveWindow:{get(e){let{media:t}=e;if(!t)return Number.NaN;let{targetLiveWindow:i}=t,a=iX.mediaStreamType.get(e);return(null==i||Number.isNaN(i))&&a===m.LIVE?0:i},mediaEvents:["emptied","durationchange","loadedmetadata","streamtypechange","targetlivewindowchange"]},mediaTimeIsLive:{get(e){let{media:t,options:{liveEdgeOffset:i=10}={}}=e;if(!t)return!1;if("number"==typeof t.liveEdgeStart)return!Number.isNaN(t.liveEdgeStart)&&t.currentTime>=t.liveEdgeStart;if(iX.mediaStreamType.get(e)!==m.LIVE)return!1;let a=t.seekable;if(!a)return!0;if(!a.length)return!1;let r=a.end(a.length-1)-i;return t.currentTime>=r},mediaEvents:["playing","timeupdate","progress","waiting","emptied"]},mediaSubtitlesList:{get:e=>ij(e).map(({kind:e,label:t,language:i})=>({kind:e,label:t,language:i})),mediaEvents:["loadstart"],textTracksEvents:["addtrack","removetrack"]},mediaSubtitlesShowing:{get:e=>iK(e).map(({kind:e,label:t,language:i})=>({kind:e,label:t,language:i})),mediaEvents:["loadstart"],textTracksEvents:["addtrack","removetrack","change"],stateOwnersUpdateHandlers:[(e,t)=>{var i,a;let{media:r,options:n}=t;if(!r)return;let s=e=>{var i;n.defaultSubtitles&&(e&&![d.CAPTIONS,d.SUBTITLES].includes(null==(i=null==e?void 0:e.track)?void 0:i.kind)||iG(t,!0))};return null==(i=r.textTracks)||i.addEventListener("addtrack",s),null==(a=r.textTracks)||a.addEventListener("removetrack",s),s(),()=>{var e,t;null==(e=r.textTracks)||e.removeEventListener("addtrack",s),null==(t=r.textTracks)||t.removeEventListener("removetrack",s)}}]},mediaChaptersCues:{get(e){var t;let{media:i}=e;if(!i)return[];let[a]=i_(i,{kind:d.CHAPTERS});return Array.from(null!=(t=null==a?void 0:a.cues)?t:[]).map(({text:e,startTime:t,endTime:i})=>({text:e,startTime:t,endTime:i}))},mediaEvents:["loadstart","loadedmetadata"],textTracksEvents:["addtrack","removetrack","change"],stateOwnersUpdateHandlers:[(e,t)=>{var i;let{media:a}=t;if(!a)return;let r=a.querySelector('track[kind="chapters"][default][src]'),n=null==(i=a.shadowRoot)?void 0:i.querySelector(':is(video,audio) > track[kind="chapters"][default][src]');return null==r||r.addEventListener("load",e),null==n||n.addEventListener("load",e),()=>{null==r||r.removeEventListener("load",e),null==n||n.removeEventListener("load",e)}}]},mediaIsPip:{get(e){var t,i;let{media:a,documentElement:r}=e;if(!a||!r||!r.pictureInPictureElement)return!1;if(r.pictureInPictureElement===a)return!0;if(r.pictureInPictureElement instanceof HTMLMediaElement)return null!=(t=a.localName)&&!!t.includes("-")&&B(a,r.pictureInPictureElement);if(r.pictureInPictureElement.localName.includes("-")){let e=r.pictureInPictureElement.shadowRoot;for(;null==e?void 0:e.pictureInPictureElement;){if(e.pictureInPictureElement===a)return!0;e=null==(i=e.pictureInPictureElement)?void 0:i.shadowRoot}}return!1},set(e,t){let{media:i}=t;if(i){if(e){if(!P.pictureInPictureEnabled){console.warn("MediaChrome: Picture-in-picture is not enabled");return}if(!i.requestPictureInPicture){console.warn("MediaChrome: The current media does not support picture-in-picture");return}let e=()=>{console.warn("MediaChrome: The media is not ready for picture-in-picture. It must have a readyState > 0.")};i.requestPictureInPicture().catch(t=>{if(11===t.code){if(!i.src){console.warn("MediaChrome: The media is not ready for picture-in-picture. It must have a src set.");return}if(0===i.readyState&&"none"===i.preload){let t=()=>{i.removeEventListener("loadedmetadata",a),i.preload="none"},a=()=>{i.requestPictureInPicture().catch(e),t()};i.addEventListener("loadedmetadata",a),i.preload="metadata",setTimeout(()=>{0===i.readyState&&e(),t()},1e3)}else throw t}else throw t})}else P.pictureInPictureElement&&P.exitPictureInPicture()}},mediaEvents:["enterpictureinpicture","leavepictureinpicture"]},mediaRenditionList:{get(e){var t;let{media:i}=e;return[...null!=(t=null==i?void 0:i.videoRenditions)?t:[]].map(e=>({...e}))},mediaEvents:["emptied","loadstart"],videoRenditionsEvents:["addrendition","removerendition"]},mediaRenditionSelected:{get(e){var t,i,a;let{media:r}=e;return null==(a=null==(i=null==r?void 0:r.videoRenditions)?void 0:i[null==(t=r.videoRenditions)?void 0:t.selectedIndex])?void 0:a.id},set(e,t){let{media:i}=t;if(!(null==i?void 0:i.videoRenditions)){console.warn("MediaController: Rendition selection not supported by this media.");return}let a=Array.prototype.findIndex.call(i.videoRenditions,t=>t.id==e);i.videoRenditions.selectedIndex!=a&&(i.videoRenditions.selectedIndex=a)},mediaEvents:["emptied"],videoRenditionsEvents:["addrendition","removerendition","change"]},mediaAudioTrackList:{get(e){var t;let{media:i}=e;return[...null!=(t=null==i?void 0:i.audioTracks)?t:[]]},mediaEvents:["emptied","loadstart"],audioTracksEvents:["addtrack","removetrack"]},mediaAudioTrackEnabled:{get(e){var t,i;let{media:a}=e;return null==(i=[...null!=(t=null==a?void 0:a.audioTracks)?t:[]].find(e=>e.enabled))?void 0:i.id},set(e,t){let{media:i}=t;if(!(null==i?void 0:i.audioTracks)){console.warn("MediaChrome: Audio track selection not supported by this media.");return}for(let t of i.audioTracks)t.enabled=e==t.id},mediaEvents:["emptied"],audioTracksEvents:["addtrack","removetrack","change"]},mediaIsFullscreen:{get:e=>iR(e),set(e,t){e?iT(t):ik(t)},rootEvents:["fullscreenchange","webkitfullscreenchange"],mediaEvents:["webkitbeginfullscreen","webkitendfullscreen","webkitpresentationmodechanged"]},mediaIsCasting:{get(e){var t;let{media:i}=e;return null!=i&&!!i.remote&&(null==(t=i.remote)?void 0:t.state)!=="disconnected"&&!!i.remote.state},set(e,t){var i,a;let{media:r}=t;if(r&&(!e||(null==(i=r.remote)?void 0:i.state)==="disconnected")&&(e||(null==(a=r.remote)?void 0:a.state)==="connected")){if("function"!=typeof r.remote.prompt){console.warn("MediaChrome: Casting is not supported in this environment");return}r.remote.prompt().catch(()=>{})}},remoteEvents:["connect","connecting","disconnect"]},mediaIsAirplaying:{get:()=>!1,set(e,t){let{media:i}=t;if(i){if(!(i.webkitShowPlaybackTargetPicker&&D.WebKitPlaybackTargetAvailabilityEvent)){console.warn("MediaChrome: received a request to select AirPlay but AirPlay is not supported in this environment");return}i.webkitShowPlaybackTargetPicker()}},mediaEvents:["webkitcurrentplaybacktargetiswirelesschanged"]},mediaFullscreenUnavailable:{get(e){let{media:t}=e;if(!iW||!iV(t))return c.UNSUPPORTED}},mediaPipUnavailable:{get(e){let{media:t}=e;if(!iB||!iF(t))return c.UNSUPPORTED}},mediaVolumeUnavailable:{get(e){let{media:i}=e;if(!1===t||(null==i?void 0:i.volume)==void 0)return c.UNSUPPORTED},stateOwnersUpdateHandlers:[e=>{null==t&&iQ.then(t=>e(t?void 0:c.UNSUPPORTED))}]},mediaCastUnavailable:{get(e,{availability:t="not-available"}={}){var i;let{media:a}=e;return iH&&(null==(i=null==a?void 0:a.remote)?void 0:i.state)?null!=t&&"available"!==t?c.UNAVAILABLE:void 0:c.UNSUPPORTED},stateOwnersUpdateHandlers:[(e,t)=>{var i;let{media:a}=t;if(a)return a.disableRemotePlayback||a.hasAttribute("disableremoteplayback")||null==(i=null==a?void 0:a.remote)||i.watchAvailability(t=>{e({availability:t?"available":"not-available"})}).catch(t=>{"NotSupportedError"===t.name?e({availability:null}):e({availability:"not-available"})}),()=>{var e;null==(e=null==a?void 0:a.remote)||e.cancelWatchAvailability().catch(()=>{})}}]},mediaAirplayUnavailable:{get:(e,t)=>i$?(null==t?void 0:t.availability)==="not-available"?c.UNAVAILABLE:void 0:c.UNSUPPORTED,mediaEvents:["webkitplaybacktargetavailabilitychanged"],stateOwnersUpdateHandlers:[(e,t)=>{var i;let{media:a}=t;if(a)return a.disableRemotePlayback||a.hasAttribute("disableremoteplayback")||null==(i=null==a?void 0:a.remote)||i.watchAvailability(t=>{e({availability:t?"available":"not-available"})}).catch(t=>{"NotSupportedError"===t.name?e({availability:null}):e({availability:"not-available"})}),()=>{var e;null==(e=null==a?void 0:a.remote)||e.cancelWatchAvailability().catch(()=>{})}}]},mediaRenditionUnavailable:{get(e){var t;let{media:i}=e;return(null==i?void 0:i.videoRenditions)?(null==(t=i.videoRenditions)?void 0:t.length)?void 0:c.UNAVAILABLE:c.UNSUPPORTED},mediaEvents:["emptied","loadstart"],videoRenditionsEvents:["addrendition","removerendition"]},mediaAudioTrackUnavailable:{get(e){var t,i;let{media:a}=e;return(null==a?void 0:a.audioTracks)?(null!=(i=null==(t=a.audioTracks)?void 0:t.length)?i:0)<=1?c.UNAVAILABLE:void 0:c.UNSUPPORTED},mediaEvents:["emptied","loadstart"],audioTracksEvents:["addtrack","removetrack"]}},iJ={[i.MEDIA_PREVIEW_REQUEST](e,t,{detail:i}){var a,r,n;let s,o;let{media:l}=t,u=null!=i?i:void 0;if(l&&null!=u){let[e]=i_(l,{kind:d.METADATA,label:"thumbnails"}),t=Array.prototype.find.call(null!=(a=null==e?void 0:e.cues)?a:[],(e,t,i)=>0===t?e.endTime>u:t===i.length-1?e.startTime<=u:e.startTime<=u&&e.endTime>u);if(t){let e=/'^(?:[a-z]+:)?\/\//i.test(t.text)?void 0:null==(r=null==l?void 0:l.querySelector('track[label="thumbnails"]'))?void 0:r.src,i=new URL(t.text,e);o=new URLSearchParams(i.hash).get("#xywh").split(",").map(e=>+e),s=i.href}}let h=e.mediaDuration.get(t),c=null==(n=e.mediaChaptersCues.get(t).find((e,t,i)=>t===i.length-1&&h===e.endTime?e.startTime<=u&&e.endTime>=u:e.startTime<=u&&e.endTime>u))?void 0:n.text;return null!=i&&null==c&&(c=""),{mediaPreviewTime:u,mediaPreviewImage:s,mediaPreviewCoords:o,mediaPreviewChapter:c}},[i.MEDIA_PAUSE_REQUEST](e,t){e.mediaPaused.set(!0,t)},[i.MEDIA_PLAY_REQUEST](e,t){var i;if(e.mediaStreamType.get(t)===m.LIVE){let a=!(e.mediaTargetLiveWindow.get(t)>0),r=null==(i=e.mediaSeekable.get(t))?void 0:i[1];a&&r&&e.mediaCurrentTime.set(r,t)}e.mediaPaused.set(!1,t)},[i.MEDIA_PLAYBACK_RATE_REQUEST](e,t,{detail:i}){e.mediaPlaybackRate.set(i,t)},[i.MEDIA_MUTE_REQUEST](e,t){e.mediaMuted.set(!0,t)},[i.MEDIA_UNMUTE_REQUEST](e,t){e.mediaVolume.get(t)||e.mediaVolume.set(.25,t),e.mediaMuted.set(!1,t)},[i.MEDIA_VOLUME_REQUEST](e,t,{detail:i}){i&&e.mediaMuted.get(t)&&e.mediaMuted.set(!1,t),e.mediaVolume.set(i,t)},[i.MEDIA_SEEK_REQUEST](e,t,{detail:i}){e.mediaCurrentTime.set(i,t)},[i.MEDIA_SEEK_TO_LIVE_REQUEST](e,t){var i;let a=null==(i=e.mediaSeekable.get(t))?void 0:i[1];Number.isNaN(Number(a))||e.mediaCurrentTime.set(a,t)},[i.MEDIA_SHOW_SUBTITLES_REQUEST](e,t,{detail:i}){var a;let{options:r}=t,n=ij(t),s=iv(i),o=null==(a=s[0])?void 0:a.language;o&&!r.noSubtitlesLangPref&&D.localStorage.setItem("media-chrome-pref-subtitles-lang",o),iI(u.SHOWING,n,s)},[i.MEDIA_DISABLE_SUBTITLES_REQUEST](e,t,{detail:i}){let a=ij(t);iI(u.DISABLED,a,null!=i?i:[])},[i.MEDIA_TOGGLE_SUBTITLES_REQUEST](e,t,{detail:i}){iG(t,i)},[i.MEDIA_RENDITION_REQUEST](e,t,{detail:i}){e.mediaRenditionSelected.set(i,t)},[i.MEDIA_AUDIO_TRACK_REQUEST](e,t,{detail:i}){e.mediaAudioTrackEnabled.set(i,t)},[i.MEDIA_ENTER_PIP_REQUEST](e,t){e.mediaIsFullscreen.get(t)&&e.mediaIsFullscreen.set(!1,t),e.mediaIsPip.set(!0,t)},[i.MEDIA_EXIT_PIP_REQUEST](e,t){e.mediaIsPip.set(!1,t)},[i.MEDIA_ENTER_FULLSCREEN_REQUEST](e,t){e.mediaIsPip.get(t)&&e.mediaIsPip.set(!1,t),e.mediaIsFullscreen.set(!0,t)},[i.MEDIA_EXIT_FULLSCREEN_REQUEST](e,t){e.mediaIsFullscreen.set(!1,t)},[i.MEDIA_ENTER_CAST_REQUEST](e,t){e.mediaIsFullscreen.get(t)&&e.mediaIsFullscreen.set(!1,t),e.mediaIsCasting.set(!0,t)},[i.MEDIA_EXIT_CAST_REQUEST](e,t){e.mediaIsCasting.set(!1,t)},[i.MEDIA_AIRPLAY_REQUEST](e,t){e.mediaIsAirplaying.set(!0,t)}};var i0=({media:e,fullscreenElement:t,documentElement:i,stateMediator:a=iX,requestMap:r=iJ,options:n={},monitorStateOwnersOnlyWithSubscriptions:s=!0})=>{let o;let l=[],d={options:{...n}},u=Object.freeze({mediaPreviewTime:void 0,mediaPreviewImage:void 0,mediaPreviewCoords:void 0,mediaPreviewChapter:void 0}),h=e=>{void 0==e||iq(e,u)||(u=Object.freeze({...u,...e}),l.forEach(e=>e(u)))},c=()=>{h(Object.entries(a).reduce((e,[t,{get:i}])=>(e[t]=i(d),e),{}))},m={},p=async(e,t)=>{var i,r,n,u,p,E,v,b,g,f,A,y,I,_,w,T;let S=!!o;if(o={...d,...null!=o?o:{},...e},S)return;await iZ(...Object.values(e));let k=l.length>0&&0===t&&s,M=d.media!==o.media,L=(null==(i=d.media)?void 0:i.textTracks)!==(null==(r=o.media)?void 0:r.textTracks),R=(null==(n=d.media)?void 0:n.videoRenditions)!==(null==(u=o.media)?void 0:u.videoRenditions),C=(null==(p=d.media)?void 0:p.audioTracks)!==(null==(E=o.media)?void 0:E.audioTracks),D=(null==(v=d.media)?void 0:v.remote)!==(null==(b=o.media)?void 0:b.remote),P=d.documentElement!==o.documentElement,O=!!d.media&&(M||k),x=!!(null==(g=d.media)?void 0:g.textTracks)&&(L||k),N=!!(null==(f=d.media)?void 0:f.videoRenditions)&&(R||k),U=!!(null==(A=d.media)?void 0:A.audioTracks)&&(C||k),F=!!(null==(y=d.media)?void 0:y.remote)&&(D||k),V=!!d.documentElement&&(P||k),W=O||x||N||U||F||V,B=0===l.length&&1===t&&s,$=!!o.media&&(M||B),H=!!(null==(I=o.media)?void 0:I.textTracks)&&(L||B),j=!!(null==(_=o.media)?void 0:_.videoRenditions)&&(R||B),K=!!(null==(w=o.media)?void 0:w.audioTracks)&&(C||B),G=!!(null==(T=o.media)?void 0:T.remote)&&(D||B),q=!!o.documentElement&&(P||B),Y=$||H||j||K||G||q;if(!(W||Y)){Object.entries(o).forEach(([e,t])=>{d[e]=t}),c(),o=void 0;return}Object.entries(a).forEach(([e,{get:t,mediaEvents:i=[],textTracksEvents:a=[],videoRenditionsEvents:r=[],audioTracksEvents:n=[],remoteEvents:s=[],rootEvents:l=[],stateOwnersUpdateHandlers:u=[]}])=>{let c;m[e]||(m[e]={});let p=i=>{h({[e]:t(d,i)})};c=m[e].mediaEvents,i.forEach(t=>{c&&O&&(d.media.removeEventListener(t,c),m[e].mediaEvents=void 0),$&&(o.media.addEventListener(t,p),m[e].mediaEvents=p)}),c=m[e].textTracksEvents,a.forEach(t=>{var i,a;c&&x&&(null==(i=d.media.textTracks)||i.removeEventListener(t,c),m[e].textTracksEvents=void 0),H&&(null==(a=o.media.textTracks)||a.addEventListener(t,p),m[e].textTracksEvents=p)}),c=m[e].videoRenditionsEvents,r.forEach(t=>{var i,a;c&&N&&(null==(i=d.media.videoRenditions)||i.removeEventListener(t,c),m[e].videoRenditionsEvents=void 0),j&&(null==(a=o.media.videoRenditions)||a.addEventListener(t,p),m[e].videoRenditionsEvents=p)}),c=m[e].audioTracksEvents,n.forEach(t=>{var i,a;c&&U&&(null==(i=d.media.audioTracks)||i.removeEventListener(t,c),m[e].audioTracksEvents=void 0),K&&(null==(a=o.media.audioTracks)||a.addEventListener(t,p),m[e].audioTracksEvents=p)}),c=m[e].remoteEvents,s.forEach(t=>{var i,a;c&&F&&(null==(i=d.media.remote)||i.removeEventListener(t,c),m[e].remoteEvents=void 0),G&&(null==(a=o.media.remote)||a.addEventListener(t,p),m[e].remoteEvents=p)}),c=m[e].rootEvents,l.forEach(t=>{c&&V&&(d.documentElement.removeEventListener(t,c),m[e].rootEvents=void 0),q&&(o.documentElement.addEventListener(t,p),m[e].rootEvents=p)});let E=m[e].stateOwnersUpdateHandlers;u.forEach(t=>{E&&W&&E(),Y&&(m[e].stateOwnersUpdateHandlers=t(p,o))})}),Object.entries(o).forEach(([e,t])=>{d[e]=t}),c(),o=void 0};return p({media:e,fullscreenElement:t,documentElement:i,options:n}),{dispatch(e){let{type:t,detail:i}=e;if(r[t]){h(r[t](a,d,e));return}"mediaelementchangerequest"===t?p({media:i}):"fullscreenelementchangerequest"===t?p({fullscreenElement:i}):"documentelementchangerequest"===t?p({documentElement:i}):"optionschangerequest"===t&&Object.entries(null!=i?i:{}).forEach(([e,t])=>{d.options[e]=t})},getState:()=>u,subscribe:e=>(p({},l.length+1),l.push(e),e(u),()=>{let t=l.indexOf(e);t>=0&&(p({},l.length-1),l.splice(t,1))})}},i1=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot "+i)},i2=(e,t,i)=>(i1(e,t,"read from private field"),i?i.call(e):t.get(e)),i3=(e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)},i5=(e,t,i,a)=>(i1(e,t,"write to private field"),a?a.call(e,i):t.set(e,i),i),i4=(e,t,i)=>(i1(e,t,"access private method"),i);let i7=["ArrowLeft","ArrowRight","Enter"," ","f","m","k","c"],i8={DEFAULT_SUBTITLES:"defaultsubtitles",DEFAULT_STREAM_TYPE:"defaultstreamtype",DEFAULT_DURATION:"defaultduration",FULLSCREEN_ELEMENT:"fullscreenelement",HOTKEYS:"hotkeys",KEYS_USED:"keysused",LIVE_EDGE_OFFSET:"liveedgeoffset",NO_HOTKEYS:"nohotkeys",NO_VOLUME_PREF:"novolumepref",NO_SUBTITLES_LANG_PREF:"nosubtitleslangpref",NO_DEFAULT_STORE:"nodefaultstore",KEYBOARD_FORWARD_SEEK_OFFSET:"keyboardforwardseekoffset",KEYBOARD_BACKWARD_SEEK_OFFSET:"keyboardbackwardseekoffset"};eg=new WeakMap,ef=new WeakMap,eA=new WeakMap,ey=new WeakMap,eI=new WeakMap,e_=new WeakMap,ew=new WeakSet,eT=function(){var e;this.mediaStore=i0({media:this.media,fullscreenElement:this.fullscreenElement,options:{defaultSubtitles:this.hasAttribute(i8.DEFAULT_SUBTITLES),defaultDuration:this.hasAttribute(i8.DEFAULT_DURATION)?+this.getAttribute(i8.DEFAULT_DURATION):void 0,defaultStreamType:null!=(e=this.getAttribute(i8.DEFAULT_STREAM_TYPE))?e:void 0,liveEdgeOffset:this.hasAttribute(i8.LIVE_EDGE_OFFSET)?+this.getAttribute(i8.LIVE_EDGE_OFFSET):void 0,noVolumePref:this.hasAttribute(i8.NO_VOLUME_PREF),noSubtitlesLangPref:this.hasAttribute(i8.NO_SUBTITLES_LANG_PREF)}})},eS=new WeakSet,ek=function(e){let{key:t}=e;if(!i7.includes(t)){this.removeEventListener("keyup",i4(this,eS,ek));return}this.keyboardShortcutHandler(e)},eM=new WeakSet,eL=function(e){let{metaKey:t,altKey:i,key:a}=e;if(t||i||!i7.includes(a)){this.removeEventListener("keyup",i4(this,eS,ek));return}[" ","ArrowLeft","ArrowRight"].includes(a)&&!(i2(this,eg).contains(`no${a.toLowerCase()}`)||" "===a&&i2(this,eg).contains("nospace"))&&e.preventDefault(),this.addEventListener("keyup",i4(this,eS,ek),{once:!0})};let i6=Object.values(s),i9=Object.values(r),ae=e=>{var t,i,r,n;let{observedAttributes:s}=e.constructor;!s&&(null==(t=e.nodeName)?void 0:t.includes("-"))&&(D.customElements.upgrade(e),{observedAttributes:s}=e.constructor);let o=null==(n=null==(r=null==(i=null==e?void 0:e.getAttribute)?void 0:i.call(e,a.MEDIA_CHROME_ATTRIBUTES))?void 0:r.split)?void 0:n.call(r,/\s+/);return Array.isArray(s||o)?(s||o).filter(e=>i6.includes(e)):[]},at=e=>{var t,i;return(null==(t=e.nodeName)?void 0:t.includes("-"))&&D.customElements.get(null==(i=e.nodeName)?void 0:i.toLowerCase())&&!(e instanceof D.customElements.get(e.nodeName.toLowerCase()))&&D.customElements.upgrade(e),i9.some(t=>t in e)},ai=e=>at(e)||!!ae(e).length,aa=e=>{var t;return null==(t=null==e?void 0:e.join)?void 0:t.call(e,":")},ar={[s.MEDIA_SUBTITLES_LIST]:ig,[s.MEDIA_SUBTITLES_SHOWING]:ig,[s.MEDIA_SEEKABLE]:aa,[s.MEDIA_BUFFERED]:e=>null==e?void 0:e.map(aa).join(" "),[s.MEDIA_PREVIEW_COORDS]:e=>null==e?void 0:e.join(" "),[s.MEDIA_RENDITION_LIST]:function(e){return null==e?void 0:e.map(b).join(" ")},[s.MEDIA_AUDIO_TRACK_LIST]:function(e){return null==e?void 0:e.map(g).join(" ")}},an=async(e,t,i)=>{var a,r;if(e.isConnected||await A(0),"boolean"==typeof i||null==i)return Y(e,t,i);if("number"==typeof i)return G(e,t,i);if("string"==typeof i)return Q(e,t,i);if(Array.isArray(i)&&!i.length)return e.removeAttribute(t);let n=null!=(r=null==(a=ar[t])?void 0:a.call(ar,i))?r:i;return e.setAttribute(t,n)},as=e=>{var t;return!!(null==(t=e.closest)?void 0:t.call(e,'*[slot="media"]'))},ao=(e,t)=>{if(as(e))return;let i=(e,t)=>{var i,a;ai(e)&&t(e);let{children:r=[]}=null!=e?e:{};[...r,...null!=(a=null==(i=null==e?void 0:e.shadowRoot)?void 0:i.children)?a:[]].forEach(e=>ao(e,t))},a=null==e?void 0:e.nodeName.toLowerCase();if(a.includes("-")&&!ai(e)){D.customElements.whenDefined(a).then(()=>{i(e,t)});return}i(e,t)},al=(e,t,i)=>{e.forEach(e=>{if(t in e){e[t]=i;return}let a=ae(e),r=t.toLowerCase();a.includes(r)&&an(e,r,i)})},ad=(e,t,r)=>{ao(e,t);let n=e=>{var i;t(null!=(i=null==e?void 0:e.composedPath()[0])?i:e.target)},s=e=>{var t;r(null!=(t=null==e?void 0:e.composedPath()[0])?t:e.target)};e.addEventListener(i.REGISTER_MEDIA_STATE_RECEIVER,n),e.addEventListener(i.UNREGISTER_MEDIA_STATE_RECEIVER,s);let o=[],l=e=>{let i=e.target;"media"!==i.name&&(o.forEach(e=>ao(e,r)),(o=[...i.assignedElements({flatten:!0})]).forEach(e=>ao(e,t)))};e.addEventListener("slotchange",l);let d=new MutationObserver(e=>{e.forEach(e=>{let{addedNodes:i=[],removedNodes:n=[],type:s,target:o,attributeName:l}=e;"childList"===s?(Array.prototype.forEach.call(i,e=>ao(e,t)),Array.prototype.forEach.call(n,e=>ao(e,r))):"attributes"===s&&l===a.MEDIA_CHROME_ATTRIBUTES&&(ai(o)?t(o):r(o))})});return d.observe(e,{childList:!0,attributes:!0,subtree:!0}),()=>{ao(e,r),e.removeEventListener("slotchange",l),d.disconnect(),e.removeEventListener(i.REGISTER_MEDIA_STATE_RECEIVER,n),e.removeEventListener(i.UNREGISTER_MEDIA_STATE_RECEIVER,s)}};D.customElements.get("media-controller")||D.customElements.define("media-controller",class extends io{constructor(){super(),i3(this,ew),i3(this,eS),i3(this,eM),this.mediaStateReceivers=[],this.associatedElementSubscriptions=new Map,i3(this,eg,new ic(this,i8.HOTKEYS)),i3(this,ef,void 0),i3(this,eA,void 0),i3(this,ey,void 0),i3(this,eI,void 0),i3(this,e_,e=>{var t;null==(t=i2(this,eA))||t.dispatch(e)}),this.associateElement(this);let e={};i5(this,ey,t=>{Object.entries(t).forEach(([t,i])=>{if(t in e&&e[t]===i)return;this.propagateMediaState(t,i);let a=t.toLowerCase(),r=new D.CustomEvent(l[a],{composed:!0,detail:i});this.dispatchEvent(r)}),e=t}),this.enableHotkeys()}static get observedAttributes(){return super.observedAttributes.concat(i8.NO_HOTKEYS,i8.HOTKEYS,i8.DEFAULT_STREAM_TYPE,i8.DEFAULT_SUBTITLES,i8.DEFAULT_DURATION)}get mediaStore(){return i2(this,eA)}set mediaStore(e){var t,i;if(i2(this,eA)&&(null==(t=i2(this,eI))||t.call(this),i5(this,eI,void 0)),i5(this,eA,e),!i2(this,eA)&&!this.hasAttribute(i8.NO_DEFAULT_STORE)){i4(this,ew,eT).call(this);return}i5(this,eI,null==(i=i2(this,eA))?void 0:i.subscribe(i2(this,ey)))}get fullscreenElement(){var e;return null!=(e=i2(this,ef))?e:this}set fullscreenElement(e){var t;this.hasAttribute(i8.FULLSCREEN_ELEMENT)&&this.removeAttribute(i8.FULLSCREEN_ELEMENT),i5(this,ef,e),null==(t=i2(this,eA))||t.dispatch({type:"fullscreenelementchangerequest",detail:this.fullscreenElement})}attributeChangedCallback(e,t,i){var a,r,n,s,o,l;(super.attributeChangedCallback(e,t,i),e===i8.NO_HOTKEYS)?i!==t&&""===i?(this.hasAttribute(i8.HOTKEYS)&&console.warn("Media Chrome: Both `hotkeys` and `nohotkeys` have been set. All hotkeys will be disabled."),this.disableHotkeys()):i!==t&&null===i&&this.enableHotkeys():e===i8.HOTKEYS?i2(this,eg).value=i:e===i8.DEFAULT_SUBTITLES&&i!==t?null==(a=i2(this,eA))||a.dispatch({type:"optionschangerequest",detail:{defaultSubtitles:this.hasAttribute(i8.DEFAULT_SUBTITLES)}}):e===i8.DEFAULT_STREAM_TYPE?null==(n=i2(this,eA))||n.dispatch({type:"optionschangerequest",detail:{defaultStreamType:null!=(r=this.getAttribute(i8.DEFAULT_STREAM_TYPE))?r:void 0}}):e===i8.LIVE_EDGE_OFFSET?null==(s=i2(this,eA))||s.dispatch({type:"optionschangerequest",detail:{liveEdgeOffset:this.hasAttribute(i8.LIVE_EDGE_OFFSET)?+this.getAttribute(i8.LIVE_EDGE_OFFSET):void 0}}):e===i8.FULLSCREEN_ELEMENT&&(i5(this,ef,i?null==(o=this.getRootNode())?void 0:o.getElementById(i):void 0),null==(l=i2(this,eA))||l.dispatch({type:"fullscreenelementchangerequest",detail:this.fullscreenElement}))}connectedCallback(){var e,t;i2(this,eA)||this.hasAttribute(i8.NO_DEFAULT_STORE)||i4(this,ew,eT).call(this),null==(e=i2(this,eA))||e.dispatch({type:"documentelementchangerequest",detail:P}),super.connectedCallback(),i2(this,eA)&&!i2(this,eI)&&i5(this,eI,null==(t=i2(this,eA))?void 0:t.subscribe(i2(this,ey))),this.enableHotkeys()}disconnectedCallback(){var e,t,a,r;null==(e=super.disconnectedCallback)||e.call(this),i2(this,eA)&&(null==(t=i2(this,eA))||t.dispatch({type:"documentelementchangerequest",detail:void 0}),null==(a=i2(this,eA))||a.dispatch({type:i.MEDIA_TOGGLE_SUBTITLES_REQUEST,detail:!1})),i2(this,eI)&&(null==(r=i2(this,eI))||r.call(this),i5(this,eI,void 0))}mediaSetCallback(e){var t;super.mediaSetCallback(e),null==(t=i2(this,eA))||t.dispatch({type:"mediaelementchangerequest",detail:e}),e.hasAttribute("tabindex")||(e.tabIndex=-1)}mediaUnsetCallback(e){var t;super.mediaUnsetCallback(e),null==(t=i2(this,eA))||t.dispatch({type:"mediaelementchangerequest",detail:void 0})}propagateMediaState(e,t){al(this.mediaStateReceivers,e,t)}associateElement(e){if(!e)return;let{associatedElementSubscriptions:t}=this;if(t.has(e))return;let a=ad(e,this.registerMediaStateReceiver.bind(this),this.unregisterMediaStateReceiver.bind(this));Object.values(i).forEach(t=>{e.addEventListener(t,i2(this,e_))}),t.set(e,a)}unassociateElement(e){if(!e)return;let{associatedElementSubscriptions:t}=this;t.has(e)&&(t.get(e)(),t.delete(e),Object.values(i).forEach(t=>{e.removeEventListener(t,i2(this,e_))}))}registerMediaStateReceiver(e){if(!e)return;let t=this.mediaStateReceivers;!(t.indexOf(e)>-1)&&(t.push(e),i2(this,eA)&&Object.entries(i2(this,eA).getState()).forEach(([t,i])=>{al([e],t,i)}))}unregisterMediaStateReceiver(e){let t=this.mediaStateReceivers,i=t.indexOf(e);i<0||t.splice(i,1)}enableHotkeys(){this.addEventListener("keydown",i4(this,eM,eL))}disableHotkeys(){this.removeEventListener("keydown",i4(this,eM,eL)),this.removeEventListener("keyup",i4(this,eS,ek))}get hotkeys(){return i2(this,eg)}keyboardShortcutHandler(e){var t,a,r,n,s;let o,l,d;let u=e.target;if(!((null!=(r=null!=(a=null==(t=u.getAttribute(i8.KEYS_USED))?void 0:t.split(" "))?a:null==u?void 0:u.keysUsed)?r:[]).map(e=>"Space"===e?" ":e).filter(Boolean).includes(e.key)||i2(this,eg).contains(`no${e.key.toLowerCase()}`))&&!(" "===e.key&&i2(this,eg).contains("nospace")))switch(e.key){case" ":case"k":o=i2(this,eA).getState().mediaPaused?i.MEDIA_PLAY_REQUEST:i.MEDIA_PAUSE_REQUEST,this.dispatchEvent(new D.CustomEvent(o,{composed:!0,bubbles:!0}));break;case"m":o="off"===this.mediaStore.getState().mediaVolumeLevel?i.MEDIA_UNMUTE_REQUEST:i.MEDIA_MUTE_REQUEST,this.dispatchEvent(new D.CustomEvent(o,{composed:!0,bubbles:!0}));break;case"f":o=this.mediaStore.getState().mediaIsFullscreen?i.MEDIA_EXIT_FULLSCREEN_REQUEST:i.MEDIA_ENTER_FULLSCREEN_REQUEST,this.dispatchEvent(new D.CustomEvent(o,{composed:!0,bubbles:!0}));break;case"c":this.dispatchEvent(new D.CustomEvent(i.MEDIA_TOGGLE_SUBTITLES_REQUEST,{composed:!0,bubbles:!0}));break;case"ArrowLeft":{let e=this.hasAttribute(i8.KEYBOARD_BACKWARD_SEEK_OFFSET)?+this.getAttribute(i8.KEYBOARD_BACKWARD_SEEK_OFFSET):10;l=Math.max((null!=(n=this.mediaStore.getState().mediaCurrentTime)?n:0)-e,0),d=new D.CustomEvent(i.MEDIA_SEEK_REQUEST,{composed:!0,bubbles:!0,detail:l}),this.dispatchEvent(d);break}case"ArrowRight":{let e=this.hasAttribute(i8.KEYBOARD_FORWARD_SEEK_OFFSET)?+this.getAttribute(i8.KEYBOARD_FORWARD_SEEK_OFFSET):10;l=Math.max((null!=(s=this.mediaStore.getState().mediaCurrentTime)?s:0)+e,0),d=new D.CustomEvent(i.MEDIA_SEEK_REQUEST,{composed:!0,bubbles:!0,detail:l}),this.dispatchEvent(d)}}}});var au=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot "+i)},ah=(e,t,i)=>(au(e,t,"read from private field"),i?i.call(e):t.get(e)),ac=(e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)},am=(e,t,i,a)=>(au(e,t,"write to private field"),a?a.call(e,i):t.set(e,i),i),ap=(e,t,i)=>(au(e,t,"access private method"),i);let aE={TOOLTIP_PLACEMENT:"tooltipplacement"},av=P.createElement("template");av.innerHTML=`
<style>
  :host {
    position: relative;
    font: var(--media-font,
      var(--media-font-weight, bold)
      var(--media-font-size, 14px) /
      var(--media-text-content-height, var(--media-control-height, 24px))
      var(--media-font-family, helvetica neue, segoe ui, roboto, arial, sans-serif));
    color: var(--media-text-color, var(--media-primary-color, rgb(238 238 238)));
    background: var(--media-control-background, var(--media-secondary-color, rgb(20 20 30 / .7)));
    padding: var(--media-button-padding, var(--media-control-padding, 10px));
    justify-content: var(--media-button-justify-content, center);
    display: inline-flex;
    align-items: center;
    vertical-align: middle;
    box-sizing: border-box;
    transition: background .15s linear;
    pointer-events: auto;
    cursor: pointer;
    -webkit-tap-highlight-color: transparent;
  }

  
  :host(:focus-visible) {
    box-shadow: inset 0 0 0 2px rgb(27 127 204 / .9);
    outline: 0;
  }
  
  :host(:where(:focus)) {
    box-shadow: none;
    outline: 0;
  }

  :host(:hover) {
    background: var(--media-control-hover-background, rgba(50 50 70 / .7));
  }

  svg, img, ::slotted(svg), ::slotted(img) {
    width: var(--media-button-icon-width);
    height: var(--media-button-icon-height, var(--media-control-height, 24px));
    transform: var(--media-button-icon-transform);
    transition: var(--media-button-icon-transition);
    fill: var(--media-icon-color, var(--media-primary-color, rgb(238 238 238)));
    vertical-align: middle;
    max-width: 100%;
    max-height: 100%;
    min-width: 100%;
  }

  media-tooltip {
    
    max-width: 0;
    overflow-x: clip;
    opacity: 0;
    transition: opacity .3s, max-width 0s 9s;
  }

  :host(:hover) media-tooltip,
  :host(:focus-visible) media-tooltip {
    max-width: 100vw;
    opacity: 1;
    transition: opacity .3s;
  }

  :host([notooltip]) slot[name="tooltip"] {
    display: none;
  }
</style>

<slot name="tooltip">
  <media-tooltip part="tooltip" aria-hidden="true">
    <slot name="tooltip-content"></slot>
  </media-tooltip>
</slot>
`;class ab extends D.HTMLElement{constructor(e={}){var t;if(super(),ac(this,ex),ac(this,eR,void 0),this.preventClick=!1,this.tooltipEl=null,this.tooltipContent="",ac(this,eC,e=>{this.preventClick||this.handleClick(e),setTimeout(ah(this,eD),0)}),ac(this,eD,()=>{var e,t;null==(t=null==(e=this.tooltipEl)?void 0:e.updateXOffset)||t.call(e)}),ac(this,eP,e=>{let{key:t}=e;if(!this.keysUsed.includes(t)){this.removeEventListener("keyup",ah(this,eP));return}this.preventClick||this.handleClick(e)}),ac(this,eO,e=>{let{metaKey:t,altKey:i,key:a}=e;if(t||i||!this.keysUsed.includes(a)){this.removeEventListener("keyup",ah(this,eP));return}this.addEventListener("keyup",ah(this,eP),{once:!0})}),!this.shadowRoot){this.attachShadow({mode:"open"});let i=av.content.cloneNode(!0);this.nativeEl=i;let a=e.slotTemplate;a||((a=P.createElement("template")).innerHTML=`<slot>${e.defaultContent||""}</slot>`),e.tooltipContent&&(i.querySelector('slot[name="tooltip-content"]').innerHTML=null!=(t=e.tooltipContent)?t:"",this.tooltipContent=e.tooltipContent),this.nativeEl.appendChild(a.content.cloneNode(!0)),this.shadowRoot.appendChild(i)}this.tooltipEl=this.shadowRoot.querySelector("media-tooltip")}static get observedAttributes(){return["disabled",aE.TOOLTIP_PLACEMENT,a.MEDIA_CONTROLLER]}enable(){this.addEventListener("click",ah(this,eC)),this.addEventListener("keydown",ah(this,eO)),this.tabIndex=0}disable(){this.removeEventListener("click",ah(this,eC)),this.removeEventListener("keydown",ah(this,eO)),this.removeEventListener("keyup",ah(this,eP)),this.tabIndex=-1}attributeChangedCallback(e,t,i){var r,n,s,o,l;e===a.MEDIA_CONTROLLER?(t&&(null==(n=null==(r=ah(this,eR))?void 0:r.unassociateElement)||n.call(r,this),am(this,eR,null)),i&&this.isConnected&&(am(this,eR,null==(s=this.getRootNode())?void 0:s.getElementById(i)),null==(l=null==(o=ah(this,eR))?void 0:o.associateElement)||l.call(o,this))):"disabled"===e&&i!==t?null==i?this.enable():this.disable():e===aE.TOOLTIP_PLACEMENT&&this.tooltipEl&&i!==t&&(this.tooltipEl.placement=i),ah(this,eD).call(this)}connectedCallback(){var e,t,i;let{style:r}=j(this.shadowRoot,":host");r.setProperty("display",`var(--media-control-display, var(--${this.localName}-display, inline-flex))`),this.hasAttribute("disabled")||this.enable(),this.setAttribute("role","button");let n=this.getAttribute(a.MEDIA_CONTROLLER);n&&(am(this,eR,null==(e=this.getRootNode())?void 0:e.getElementById(n)),null==(i=null==(t=ah(this,eR))?void 0:t.associateElement)||i.call(t,this)),D.customElements.whenDefined("media-tooltip").then(()=>ap(this,ex,eN).call(this))}disconnectedCallback(){var e,t;this.disable(),null==(t=null==(e=ah(this,eR))?void 0:e.unassociateElement)||t.call(e,this),am(this,eR,null),this.removeEventListener("mouseenter",ah(this,eD)),this.removeEventListener("focus",ah(this,eD)),this.removeEventListener("click",ah(this,eC))}get keysUsed(){return["Enter"," "]}get tooltipPlacement(){return z(this,aE.TOOLTIP_PLACEMENT)}set tooltipPlacement(e){Q(this,aE.TOOLTIP_PLACEMENT,e)}handleClick(e){}}eR=new WeakMap,eC=new WeakMap,eD=new WeakMap,eP=new WeakMap,eO=new WeakMap,ex=new WeakSet,eN=function(){this.addEventListener("mouseenter",ah(this,eD)),this.addEventListener("focus",ah(this,eD)),this.addEventListener("click",ah(this,eC));let e=this.tooltipPlacement;e&&this.tooltipEl&&(this.tooltipEl.placement=e)},D.customElements.get("media-chrome-button")||D.customElements.define("media-chrome-button",ab);let ag=`<svg aria-hidden="true" viewBox="0 0 26 24">
  <path d="M22.13 3H3.87a.87.87 0 0 0-.87.87v13.26a.87.87 0 0 0 .87.87h3.4L9 16H5V5h16v11h-4l1.72 2h3.4a.87.87 0 0 0 .87-.87V3.87a.87.87 0 0 0-.86-.87Zm-8.75 11.44a.5.5 0 0 0-.76 0l-4.91 5.73a.5.5 0 0 0 .38.83h9.82a.501.501 0 0 0 .38-.83l-4.91-5.73Z"/>
</svg>
`,af=P.createElement("template");af.innerHTML=`
  <style>
    :host([${s.MEDIA_IS_AIRPLAYING}]) slot[name=icon] slot:not([name=exit]) {
      display: none !important;
    }

    
    :host(:not([${s.MEDIA_IS_AIRPLAYING}])) slot[name=icon] slot:not([name=enter]) {
      display: none !important;
    }

    :host([${s.MEDIA_IS_AIRPLAYING}]) slot[name=tooltip-enter],
    :host(:not([${s.MEDIA_IS_AIRPLAYING}])) slot[name=tooltip-exit] {
      display: none;
    }
  </style>

  <slot name="icon">
    <slot name="enter">${ag}</slot>
    <slot name="exit">${ag}</slot>
  </slot>
`;let aA=`
  <slot name="tooltip-enter">Start airplay</slot>
  <slot name="tooltip-exit">Stop airplay</slot>
`,ay=e=>{let t=e.mediaIsAirplaying?v.EXIT_AIRPLAY():v.ENTER_AIRPLAY();e.setAttribute("aria-label",t)};D.customElements.get("media-airplay-button")||D.customElements.define("media-airplay-button",class extends ab{static get observedAttributes(){return[...super.observedAttributes,s.MEDIA_IS_AIRPLAYING,s.MEDIA_AIRPLAY_UNAVAILABLE]}constructor(e={}){super({slotTemplate:af,tooltipContent:aA,...e})}connectedCallback(){super.connectedCallback(),ay(this)}attributeChangedCallback(e,t,i){super.attributeChangedCallback(e,t,i),e===s.MEDIA_IS_AIRPLAYING&&ay(this)}get mediaIsAirplaying(){return q(this,s.MEDIA_IS_AIRPLAYING)}set mediaIsAirplaying(e){Y(this,s.MEDIA_IS_AIRPLAYING,e)}get mediaAirplayUnavailable(){return z(this,s.MEDIA_AIRPLAY_UNAVAILABLE)}set mediaAirplayUnavailable(e){Q(this,s.MEDIA_AIRPLAY_UNAVAILABLE,e)}handleClick(){let e=new D.CustomEvent(i.MEDIA_AIRPLAY_REQUEST,{composed:!0,bubbles:!0});this.dispatchEvent(e)}});let aI=`<svg aria-hidden="true" viewBox="0 0 26 24">
  <path d="M22.83 5.68a2.58 2.58 0 0 0-2.3-2.5c-3.62-.24-11.44-.24-15.06 0a2.58 2.58 0 0 0-2.3 2.5c-.23 4.21-.23 8.43 0 12.64a2.58 2.58 0 0 0 2.3 2.5c3.62.24 11.44.24 15.06 0a2.58 2.58 0 0 0 2.3-2.5c.23-4.21.23-8.43 0-12.64Zm-11.39 9.45a3.07 3.07 0 0 1-1.91.57 3.06 3.06 0 0 1-2.34-1 3.75 3.75 0 0 1-.92-2.67 3.92 3.92 0 0 1 .92-2.77 3.18 3.18 0 0 1 2.43-1 2.94 2.94 0 0 1 2.13.78c.364.359.62.813.74 1.31l-1.43.35a1.49 1.49 0 0 0-1.51-1.17 1.61 1.61 0 0 0-1.29.58 2.79 2.79 0 0 0-.5 1.89 3 3 0 0 0 .49 1.93 1.61 1.61 0 0 0 1.27.58 1.48 1.48 0 0 0 1-.37 2.1 2.1 0 0 0 .59-1.14l1.4.44a3.23 3.23 0 0 1-1.07 1.69Zm7.22 0a3.07 3.07 0 0 1-1.91.57 3.06 3.06 0 0 1-2.34-1 3.75 3.75 0 0 1-.92-2.67 3.88 3.88 0 0 1 .93-2.77 3.14 3.14 0 0 1 2.42-1 3 3 0 0 1 2.16.82 2.8 2.8 0 0 1 .73 1.31l-1.43.35a1.49 1.49 0 0 0-1.51-1.21 1.61 1.61 0 0 0-1.29.58A2.79 2.79 0 0 0 15 12a3 3 0 0 0 .49 1.93 1.61 1.61 0 0 0 1.27.58 1.44 1.44 0 0 0 1-.37 2.1 2.1 0 0 0 .6-1.15l1.4.44a3.17 3.17 0 0 1-1.1 1.7Z"/>
</svg>`,a_=`<svg aria-hidden="true" viewBox="0 0 26 24">
  <path d="M17.73 14.09a1.4 1.4 0 0 1-1 .37 1.579 1.579 0 0 1-1.27-.58A3 3 0 0 1 15 12a2.8 2.8 0 0 1 .5-1.85 1.63 1.63 0 0 1 1.29-.57 1.47 1.47 0 0 1 1.51 1.2l1.43-.34A2.89 2.89 0 0 0 19 9.07a3 3 0 0 0-2.14-.78 3.14 3.14 0 0 0-2.42 1 3.91 3.91 0 0 0-.93 2.78 3.74 3.74 0 0 0 .92 2.66 3.07 3.07 0 0 0 2.34 1 3.07 3.07 0 0 0 1.91-.57 3.17 3.17 0 0 0 1.07-1.74l-1.4-.45c-.083.43-.3.822-.62 1.12Zm-7.22 0a1.43 1.43 0 0 1-1 .37 1.58 1.58 0 0 1-1.27-.58A3 3 0 0 1 7.76 12a2.8 2.8 0 0 1 .5-1.85 1.63 1.63 0 0 1 1.29-.57 1.47 1.47 0 0 1 1.51 1.2l1.43-.34a2.81 2.81 0 0 0-.74-1.32 2.94 2.94 0 0 0-2.13-.78 3.18 3.18 0 0 0-2.43 1 4 4 0 0 0-.92 2.78 3.74 3.74 0 0 0 .92 2.66 3.07 3.07 0 0 0 2.34 1 3.07 3.07 0 0 0 1.91-.57 3.23 3.23 0 0 0 1.07-1.74l-1.4-.45a2.06 2.06 0 0 1-.6 1.07Zm12.32-8.41a2.59 2.59 0 0 0-2.3-2.51C18.72 3.05 15.86 3 13 3c-2.86 0-5.72.05-7.53.17a2.59 2.59 0 0 0-2.3 2.51c-.23 4.207-.23 8.423 0 12.63a2.57 2.57 0 0 0 2.3 2.5c1.81.13 4.67.19 7.53.19 2.86 0 5.72-.06 7.53-.19a2.57 2.57 0 0 0 2.3-2.5c.23-4.207.23-8.423 0-12.63Zm-1.49 12.53a1.11 1.11 0 0 1-.91 1.11c-1.67.11-4.45.18-7.43.18-2.98 0-5.76-.07-7.43-.18a1.11 1.11 0 0 1-.91-1.11c-.21-4.14-.21-8.29 0-12.43a1.11 1.11 0 0 1 .91-1.11C7.24 4.56 10 4.49 13 4.49s5.76.07 7.43.18a1.11 1.11 0 0 1 .91 1.11c.21 4.14.21 8.29 0 12.43Z"/>
</svg>`,aw=P.createElement("template");aw.innerHTML=`
  <style>
    :host([aria-checked="true"]) slot[name=off] {
      display: none !important;
    }

    
    :host(:not([aria-checked="true"])) slot[name=on] {
      display: none !important;
    }

    :host([aria-checked="true"]) slot[name=tooltip-enable],
    :host(:not([aria-checked="true"])) slot[name=tooltip-disable] {
      display: none;
    }
  </style>

  <slot name="icon">
    <slot name="on">${aI}</slot>
    <slot name="off">${a_}</slot>
  </slot>
`;let aT=`
  <slot name="tooltip-enable">Enable captions</slot>
  <slot name="tooltip-disable">Disable captions</slot>
`,aS=e=>{e.setAttribute("aria-checked",iw(e).toString())},ak=(e,t)=>{let i=e.getAttribute(t);return i?iE(i):[]},aM=(e,t,i)=>{if(!(null==i?void 0:i.length)){e.removeAttribute(t);return}let a=ig(i);e.getAttribute(t)!==a&&e.setAttribute(t,a)};D.customElements.get("media-captions-button")||D.customElements.define("media-captions-button",class extends ab{static get observedAttributes(){return[...super.observedAttributes,s.MEDIA_SUBTITLES_LIST,s.MEDIA_SUBTITLES_SHOWING]}constructor(e={}){super({slotTemplate:aw,tooltipContent:aT,...e}),this._captionsReady=!1}connectedCallback(){super.connectedCallback(),this.setAttribute("role","switch"),this.setAttribute("aria-label",E.CLOSED_CAPTIONS()),aS(this)}attributeChangedCallback(e,t,i){super.attributeChangedCallback(e,t,i),e===s.MEDIA_SUBTITLES_SHOWING&&aS(this)}get mediaSubtitlesList(){return ak(this,s.MEDIA_SUBTITLES_LIST)}set mediaSubtitlesList(e){aM(this,s.MEDIA_SUBTITLES_LIST,e)}get mediaSubtitlesShowing(){return ak(this,s.MEDIA_SUBTITLES_SHOWING)}set mediaSubtitlesShowing(e){aM(this,s.MEDIA_SUBTITLES_SHOWING,e)}handleClick(){this.dispatchEvent(new D.CustomEvent(i.MEDIA_TOGGLE_SUBTITLES_REQUEST,{composed:!0,bubbles:!0}))}});let aL=P.createElement("template");aL.innerHTML=`
  <style>
  :host([${s.MEDIA_IS_CASTING}]) slot[name=icon] slot:not([name=exit]) {
    display: none !important;
  }

  
  :host(:not([${s.MEDIA_IS_CASTING}])) slot[name=icon] slot:not([name=enter]) {
    display: none !important;
  }

  :host([${s.MEDIA_IS_CASTING}]) slot[name=tooltip-enter],
    :host(:not([${s.MEDIA_IS_CASTING}])) slot[name=tooltip-exit] {
      display: none;
    }
  </style>

  <slot name="icon">
    <slot name="enter"><svg aria-hidden="true" viewBox="0 0 24 24"><g><path class="cast_caf_icon_arch0" d="M1,18 L1,21 L4,21 C4,19.3 2.66,18 1,18 L1,18 Z"/><path class="cast_caf_icon_arch1" d="M1,14 L1,16 C3.76,16 6,18.2 6,21 L8,21 C8,17.13 4.87,14 1,14 L1,14 Z"/><path class="cast_caf_icon_arch2" d="M1,10 L1,12 C5.97,12 10,16.0 10,21 L12,21 C12,14.92 7.07,10 1,10 L1,10 Z"/><path class="cast_caf_icon_box" d="M21,3 L3,3 C1.9,3 1,3.9 1,5 L1,8 L3,8 L3,5 L21,5 L21,19 L14,19 L14,21 L21,21 C22.1,21 23,20.1 23,19 L23,5 C23,3.9 22.1,3 21,3 L21,3 Z"/></g></svg></slot>
    <slot name="exit"><svg aria-hidden="true" viewBox="0 0 24 24"><g><path class="cast_caf_icon_arch0" d="M1,18 L1,21 L4,21 C4,19.3 2.66,18 1,18 L1,18 Z"/><path class="cast_caf_icon_arch1" d="M1,14 L1,16 C3.76,16 6,18.2 6,21 L8,21 C8,17.13 4.87,14 1,14 L1,14 Z"/><path class="cast_caf_icon_arch2" d="M1,10 L1,12 C5.97,12 10,16.0 10,21 L12,21 C12,14.92 7.07,10 1,10 L1,10 Z"/><path class="cast_caf_icon_box" d="M21,3 L3,3 C1.9,3 1,3.9 1,5 L1,8 L3,8 L3,5 L21,5 L21,19 L14,19 L14,21 L21,21 C22.1,21 23,20.1 23,19 L23,5 C23,3.9 22.1,3 21,3 L21,3 Z"/><path class="cast_caf_icon_boxfill" d="M5,7 L5,8.63 C8,8.6 13.37,14 13.37,17 L19,17 L19,7 Z"/></g></svg></slot>
  </slot>
`;let aR=`
  <slot name="tooltip-enter">Start casting</slot>
  <slot name="tooltip-exit">Stop casting</slot>
`,aC=e=>{let t=e.mediaIsCasting?v.EXIT_CAST():v.ENTER_CAST();e.setAttribute("aria-label",t)};D.customElements.get("media-cast-button")||D.customElements.define("media-cast-button",class extends ab{static get observedAttributes(){return[...super.observedAttributes,s.MEDIA_IS_CASTING,s.MEDIA_CAST_UNAVAILABLE]}constructor(e={}){super({slotTemplate:aL,tooltipContent:aR,...e})}connectedCallback(){super.connectedCallback(),aC(this)}attributeChangedCallback(e,t,i){super.attributeChangedCallback(e,t,i),e===s.MEDIA_IS_CASTING&&aC(this)}get mediaIsCasting(){return q(this,s.MEDIA_IS_CASTING)}set mediaIsCasting(e){Y(this,s.MEDIA_IS_CASTING,e)}get mediaCastUnavailable(){return z(this,s.MEDIA_CAST_UNAVAILABLE)}set mediaCastUnavailable(e){Q(this,s.MEDIA_CAST_UNAVAILABLE,e)}handleClick(){let e=this.mediaIsCasting?i.MEDIA_EXIT_CAST_REQUEST:i.MEDIA_ENTER_CAST_REQUEST;this.dispatchEvent(new D.CustomEvent(e,{composed:!0,bubbles:!0}))}});var aD=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot "+i)},aP=(e,t,i)=>(aD(e,t,"read from private field"),i?i.call(e):t.get(e)),aO=(e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)},ax=(e,t,i,a)=>(aD(e,t,"write to private field"),a?a.call(e,i):t.set(e,i),i),aN=(e,t,i)=>(aD(e,t,"access private method"),i);let aU=P.createElement("template");aU.innerHTML=`
  <style>
    :host {
      font: var(--media-font,
        var(--media-font-weight, normal)
        var(--media-font-size, 14px) /
        var(--media-text-content-height, var(--media-control-height, 24px))
        var(--media-font-family, helvetica neue, segoe ui, roboto, arial, sans-serif));
      color: var(--media-text-color, var(--media-primary-color, rgb(238 238 238)));
      background: var(--media-dialog-background, var(--media-control-background, var(--media-secondary-color, rgb(20 20 30 / .8))));
      border-radius: var(--media-dialog-border-radius);
      border: var(--media-dialog-border, none);
      display: var(--media-dialog-display, inline-flex);
      transition: var(--media-dialog-transition-in,
        visibility 0s,
        opacity .2s ease-out,
        transform .15s ease-out
      ) !important;
      
      visibility: var(--media-dialog-visibility, visible);
      opacity: var(--media-dialog-opacity, 1);
      transform: var(--media-dialog-transform-in, translateY(0) scale(1));
    }

    :host([hidden]) {
      transition: var(--media-dialog-transition-out,
        visibility .15s ease-in,
        opacity .15s ease-in,
        transform .15s ease-in
      ) !important;
      visibility: var(--media-dialog-hidden-visibility, hidden);
      opacity: var(--media-dialog-hidden-opacity, 0);
      transform: var(--media-dialog-transform-out, translateY(2px) scale(.99));
      pointer-events: none;
    }
  </style>
  <slot></slot>
`;let aF="hidden";class aV extends D.HTMLElement{constructor(){super(),aO(this,eV),aO(this,eB),aO(this,eH),aO(this,eK),aO(this,eq),aO(this,eU,null),aO(this,eF,null),this.shadowRoot||(this.attachShadow({mode:"open"}),this.nativeEl=this.constructor.template.content.cloneNode(!0),this.shadowRoot.append(this.nativeEl)),this.addEventListener("invoke",this),this.addEventListener("focusout",this),this.addEventListener("keydown",this)}static get observedAttributes(){return[aF,"anchor"]}handleEvent(e){switch(e.type){case"invoke":aN(this,eH,ej).call(this,e);break;case"focusout":aN(this,eK,eG).call(this,e);break;case"keydown":aN(this,eq,eY).call(this,e)}}connectedCallback(){this.role||(this.role="dialog")}attributeChangedCallback(e,t,i){e===aF&&i!==t&&(this.hidden?aN(this,eB,e$).call(this):aN(this,eV,eW).call(this))}focus(){ax(this,eU,function e(t=document){var i;let a=null==t?void 0:t.activeElement;return a?null!=(i=e(a.shadowRoot))?i:a:null}());let e=this.querySelector('[autofocus], [tabindex]:not([tabindex="-1"]), [role="menu"]');null==e||e.focus()}get keysUsed(){return["Escape","Tab"]}}eU=new WeakMap,eF=new WeakMap,eV=new WeakSet,eW=function(){var e;null==(e=aP(this,eF))||e.setAttribute("aria-expanded","true"),this.addEventListener("transitionend",()=>this.focus(),{once:!0})},eB=new WeakSet,e$=function(){var e;null==(e=aP(this,eF))||e.setAttribute("aria-expanded","false")},eH=new WeakSet,ej=function(e){ax(this,eF,e.relatedTarget),B(this,e.relatedTarget)||(this.hidden=!this.hidden)},eK=new WeakSet,eG=function(e){var t;B(this,e.relatedTarget)||(null==(t=aP(this,eU))||t.focus(),!aP(this,eF)||aP(this,eF)===e.relatedTarget||this.hidden||(this.hidden=!0))},eq=new WeakSet,eY=function(e){var t,i,a,r,n;let{key:s,ctrlKey:o,altKey:l,metaKey:d}=e;!o&&!l&&!d&&this.keysUsed.includes(s)&&(e.preventDefault(),e.stopPropagation(),"Tab"===s?(e.shiftKey?null==(i=null==(t=this.previousElementSibling)?void 0:t.focus)||i.call(t):null==(r=null==(a=this.nextElementSibling)?void 0:a.focus)||r.call(a),this.blur()):"Escape"===s&&(null==(n=aP(this,eU))||n.focus(),this.hidden=!0))},aV.template=aU,D.customElements.get("media-chrome-dialog")||D.customElements.define("media-chrome-dialog",aV);var aW=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot "+i)},aB=(e,t,i)=>(aW(e,t,"read from private field"),i?i.call(e):t.get(e)),a$=(e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)},aH=(e,t,i,a)=>(aW(e,t,"write to private field"),a?a.call(e,i):t.set(e,i),i),aj=(e,t,i)=>(aW(e,t,"access private method"),i);let aK=P.createElement("template");aK.innerHTML=`
  <style>
    :host {
      --_focus-box-shadow: var(--media-focus-box-shadow, inset 0 0 0 2px rgb(27 127 204 / .9));
      --_media-range-padding: var(--media-range-padding, var(--media-control-padding, 10px));

      box-shadow: var(--_focus-visible-box-shadow, none);
      background: var(--media-control-background, var(--media-secondary-color, rgb(20 20 30 / .7)));
      height: calc(var(--media-control-height, 24px) + 2 * var(--_media-range-padding));
      display: inline-flex;
      align-items: center;
      
      vertical-align: middle;
      box-sizing: border-box;
      position: relative;
      width: 100px;
      transition: background .15s linear;
      cursor: pointer;
      pointer-events: auto;
      touch-action: none; 
      z-index: 1; 
    }

    
    input[type=range]:focus {
      outline: 0;
    }
    input[type=range]:focus::-webkit-slider-runnable-track {
      outline: 0;
    }

    :host(:hover) {
      background: var(--media-control-hover-background, rgb(50 50 70 / .7));
    }

    #leftgap {
      padding-left: var(--media-range-padding-left, var(--_media-range-padding));
    }

    #rightgap {
      padding-right: var(--media-range-padding-right, var(--_media-range-padding));
    }

    #startpoint,
    #endpoint {
      position: absolute;
    }

    #endpoint {
      right: 0;
    }

    #container {
      
      width: var(--media-range-track-width, 100%);
      transform: translate(var(--media-range-track-translate-x, 0px), var(--media-range-track-translate-y, 0px));
      position: relative;
      height: 100%;
      display: flex;
      align-items: center;
      min-width: 40px;
    }

    #range {
      
      display: var(--media-time-range-hover-display, block);
      bottom: var(--media-time-range-hover-bottom, -7px);
      height: var(--media-time-range-hover-height, max(100% + 7px, 25px));
      width: 100%;
      position: absolute;
      cursor: pointer;

      -webkit-appearance: none; 
      -webkit-tap-highlight-color: transparent;
      background: transparent; 
      margin: 0;
      z-index: 1;
    }

    @media (hover: hover) {
      #range {
        bottom: var(--media-time-range-hover-bottom, -5px);
        height: var(--media-time-range-hover-height, max(100% + 5px, 20px));
      }
    }

    
    
    #range::-webkit-slider-thumb {
      -webkit-appearance: none;
      background: transparent;
      width: .1px;
      height: .1px;
    }

    
    #range::-moz-range-thumb {
      background: transparent;
      border: transparent;
      width: .1px;
      height: .1px;
    }

    #appearance {
      height: var(--media-range-track-height, 4px);
      display: flex;
      flex-direction: column;
      justify-content: center;
      width: 100%;
      position: absolute;
      
      will-change: transform;
    }

    #track {
      background: var(--media-range-track-background, rgb(255 255 255 / .2));
      border-radius: var(--media-range-track-border-radius, 1px);
      border: var(--media-range-track-border, none);
      outline: var(--media-range-track-outline);
      outline-offset: var(--media-range-track-outline-offset);
      backdrop-filter: var(--media-range-track-backdrop-filter);
      -webkit-backdrop-filter: var(--media-range-track-backdrop-filter);
      box-shadow: var(--media-range-track-box-shadow, none);
      position: absolute;
      width: 100%;
      height: 100%;
      overflow: hidden;
    }

    #progress,
    #pointer {
      position: absolute;
      height: 100%;
      will-change: width;
    }

    #progress {
      background: var(--media-range-bar-color, var(--media-primary-color, rgb(238 238 238)));
      transition: var(--media-range-track-transition);
    }

    #pointer {
      background: var(--media-range-track-pointer-background);
      border-right: var(--media-range-track-pointer-border-right);
      transition: visibility .25s, opacity .25s;
      visibility: hidden;
      opacity: 0;
    }

    @media (hover: hover) {
      :host(:hover) #pointer {
        transition: visibility .5s, opacity .5s;
        visibility: visible;
        opacity: 1;
      }
    }

    #thumb {
      width: var(--media-range-thumb-width, 10px);
      height: var(--media-range-thumb-height, 10px);
      margin-left: calc(var(--media-range-thumb-width, 10px) / -2);
      border: var(--media-range-thumb-border, none);
      border-radius: var(--media-range-thumb-border-radius, 10px);
      background: var(--media-range-thumb-background, var(--media-primary-color, rgb(238 238 238)));
      box-shadow: var(--media-range-thumb-box-shadow, 1px 1px 1px transparent);
      transition: var(--media-range-thumb-transition);
      transform: var(--media-range-thumb-transform, none);
      opacity: var(--media-range-thumb-opacity, 1);
      position: absolute;
      left: 0;
      cursor: pointer;
    }

    :host([disabled]) #thumb {
      background-color: #777;
    }

    .segments #appearance {
      height: var(--media-range-segment-hover-height, 7px);
    }

    #track {
      clip-path: url(#segments-clipping);
    }

    #segments {
      --segments-gap: var(--media-range-segments-gap, 2px);
      position: absolute;
      width: 100%;
      height: 100%;
    }

    #segments-clipping {
      transform: translateX(calc(var(--segments-gap) / 2));
    }

    #segments-clipping:empty {
      display: none;
    }

    #segments-clipping rect {
      height: var(--media-range-track-height, 4px);
      y: calc((var(--media-range-segment-hover-height, 7px) - var(--media-range-track-height, 4px)) / 2);
      transition: var(--media-range-segment-transition, transform .1s ease-in-out);
      transform: var(--media-range-segment-transform, scaleY(1));
      transform-origin: center;
    }
  </style>
  <div id="leftgap"></div>
  <div id="container">
    <div id="startpoint"></div>
    <div id="endpoint"></div>
    <div id="appearance">
      <div id="track" part="track">
        <div id="pointer"></div>
        <div id="progress" part="progress"></div>
      </div>
      <div id="thumb" part="thumb"></div>
      <svg id="segments"><clipPath id="segments-clipping"></clipPath></svg>
    </div>
    <input id="range" type="range" min="0" max="1" step="any" value="0">
  </div>
  <div id="rightgap"></div>
`;class aG extends D.HTMLElement{constructor(){super(),a$(this,e5),a$(this,e7),a$(this,e6),a$(this,te),a$(this,ti),a$(this,tr),a$(this,ts),a$(this,tl),a$(this,ez,void 0),a$(this,eQ,void 0),a$(this,eZ,void 0),a$(this,eX,void 0),a$(this,eJ,{}),a$(this,e0,[]),a$(this,e1,()=>{if(this.range.matches(":focus-visible")){let{style:e}=j(this.shadowRoot,":host");e.setProperty("--_focus-visible-box-shadow","var(--_focus-box-shadow)")}}),a$(this,e2,()=>{let{style:e}=j(this.shadowRoot,":host");e.removeProperty("--_focus-visible-box-shadow")}),a$(this,e3,()=>{let e=this.shadowRoot.querySelector("#segments-clipping");e&&e.parentNode.append(e)}),this.shadowRoot||(this.attachShadow({mode:"open"}),this.shadowRoot.appendChild(aK.content.cloneNode(!0))),this.container=this.shadowRoot.querySelector("#container"),aH(this,eZ,this.shadowRoot.querySelector("#startpoint")),aH(this,eX,this.shadowRoot.querySelector("#endpoint")),this.range=this.shadowRoot.querySelector("#range"),this.appearance=this.shadowRoot.querySelector("#appearance")}static get observedAttributes(){return["disabled","aria-disabled",a.MEDIA_CONTROLLER]}attributeChangedCallback(e,t,i){var r,n,s,o,l;e===a.MEDIA_CONTROLLER?(t&&(null==(n=null==(r=aB(this,ez))?void 0:r.unassociateElement)||n.call(r,this),aH(this,ez,null)),i&&this.isConnected&&(aH(this,ez,null==(s=this.getRootNode())?void 0:s.getElementById(i)),null==(l=null==(o=aB(this,ez))?void 0:o.associateElement)||l.call(o,this))):("disabled"===e||"aria-disabled"===e&&t!==i)&&(null==i?(this.range.removeAttribute(e),aj(this,e7,e8).call(this)):(this.range.setAttribute(e,i),aj(this,e6,e9).call(this)))}connectedCallback(){var e,t,i;let{style:r}=j(this.shadowRoot,":host");r.setProperty("display",`var(--media-control-display, var(--${this.localName}-display, inline-flex))`),aB(this,eJ).pointer=j(this.shadowRoot,"#pointer"),aB(this,eJ).progress=j(this.shadowRoot,"#progress"),aB(this,eJ).thumb=j(this.shadowRoot,"#thumb"),aB(this,eJ).activeSegment=j(this.shadowRoot,"#segments-clipping rect:nth-child(0)");let n=this.getAttribute(a.MEDIA_CONTROLLER);n&&(aH(this,ez,null==(e=this.getRootNode())?void 0:e.getElementById(n)),null==(i=null==(t=aB(this,ez))?void 0:t.associateElement)||i.call(t,this)),this.updateBar(),this.shadowRoot.addEventListener("focusin",aB(this,e1)),this.shadowRoot.addEventListener("focusout",aB(this,e2)),aj(this,e7,e8).call(this),U(this.container,aB(this,e3))}disconnectedCallback(){var e,t;aj(this,e6,e9).call(this),null==(t=null==(e=aB(this,ez))?void 0:e.unassociateElement)||t.call(e,this),aH(this,ez,null),this.shadowRoot.removeEventListener("focusin",aB(this,e1)),this.shadowRoot.removeEventListener("focusout",aB(this,e2)),function(e,t){let i=x(e);i.delete(t),i.size||N.unobserve(e)}(this.container,aB(this,e3))}updatePointerBar(e){var t;null==(t=aB(this,eJ).pointer)||t.style.setProperty("width",`${100*this.getPointerRatio(e)}%`)}updateBar(){var e,t;let i=100*this.range.valueAsNumber;null==(e=aB(this,eJ).progress)||e.style.setProperty("width",`${i}%`),null==(t=aB(this,eJ).thumb)||t.style.setProperty("left",`${i}%`)}updateSegments(e){let t=this.shadowRoot.querySelector("#segments-clipping");if(t.textContent="",this.container.classList.toggle("segments",!!(null==e?void 0:e.length)),!(null==e?void 0:e.length))return;let i=[...new Set([+this.range.min,...e.flatMap(e=>[e.start,e.end]),+this.range.max])];aH(this,e0,[...i]);let a=i.pop();for(let[e,r]of i.entries()){let[n,s]=[0===e,e===i.length-1],o=n?"calc(var(--segments-gap) / -1)":`${100*r}%`,l=s?a:i[e+1],d=`calc(${(l-r)*100}%${n||s?"":" - var(--segments-gap)"})`,u=P.createElementNS("http://www.w3.org/2000/svg","rect"),h=j(this.shadowRoot,`#segments-clipping rect:nth-child(${e+1})`);h.style.setProperty("x",o),h.style.setProperty("width",d),t.append(u)}}getPointerRatio(e){return Math.max(0,Math.min(1,function(e,t,i,a){let r=H(i,a),n=H(i,{x:e,y:t}),s=H(a,{x:e,y:t});return n>r||s>r?n>s?1:0:n/r}(e.clientX,e.clientY,aB(this,eZ).getBoundingClientRect(),aB(this,eX).getBoundingClientRect())))}get dragging(){return this.hasAttribute("dragging")}handleEvent(e){switch(e.type){case"pointermove":aj(this,tl,td).call(this,e);break;case"input":this.updateBar();break;case"pointerenter":aj(this,ti,ta).call(this,e);break;case"pointerdown":aj(this,te,tt).call(this,e);break;case"pointerup":aj(this,tr,tn).call(this);break;case"pointerleave":aj(this,ts,to).call(this)}}get keysUsed(){return["ArrowUp","ArrowRight","ArrowDown","ArrowLeft"]}}ez=new WeakMap,eQ=new WeakMap,eZ=new WeakMap,eX=new WeakMap,eJ=new WeakMap,e0=new WeakMap,e1=new WeakMap,e2=new WeakMap,e3=new WeakMap,e5=new WeakSet,e4=function(e){let t=aB(this,eJ).activeSegment;if(!t)return;let i=this.getPointerRatio(e),a=aB(this,e0).findIndex((e,t,a)=>{let r=a[t+1];return null!=r&&i>=e&&i<=r}),r=`#segments-clipping rect:nth-child(${a+1})`;t.selectorText==r&&t.style.transform||(t.selectorText=r,t.style.setProperty("transform","var(--media-range-segment-hover-transform, scaleY(2))"))},e7=new WeakSet,e8=function(){this.hasAttribute("disabled")||(this.addEventListener("input",this),this.addEventListener("pointerdown",this),this.addEventListener("pointerenter",this))},e6=new WeakSet,e9=function(){var e,t;this.removeEventListener("input",this),this.removeEventListener("pointerdown",this),this.removeEventListener("pointerenter",this),null==(e=D.window)||e.removeEventListener("pointerup",this),null==(t=D.window)||t.removeEventListener("pointermove",this)},te=new WeakSet,tt=function(e){var t;aH(this,eQ,e.composedPath().includes(this.range)),null==(t=D.window)||t.addEventListener("pointerup",this)},ti=new WeakSet,ta=function(e){var t;"mouse"!==e.pointerType&&aj(this,te,tt).call(this,e),this.addEventListener("pointerleave",this),null==(t=D.window)||t.addEventListener("pointermove",this)},tr=new WeakSet,tn=function(){var e;null==(e=D.window)||e.removeEventListener("pointerup",this),this.toggleAttribute("dragging",!1),this.range.disabled=this.hasAttribute("disabled")},ts=new WeakSet,to=function(){var e,t;this.removeEventListener("pointerleave",this),null==(e=D.window)||e.removeEventListener("pointermove",this),this.toggleAttribute("dragging",!1),this.range.disabled=this.hasAttribute("disabled"),null==(t=aB(this,eJ).activeSegment)||t.style.removeProperty("transform")},tl=new WeakSet,td=function(e){this.toggleAttribute("dragging",1===e.buttons||"mouse"!==e.pointerType),this.updatePointerBar(e),aj(this,e5,e4).call(this,e),this.dragging&&("mouse"!==e.pointerType||!aB(this,eQ))&&(this.range.disabled=!0,this.range.valueAsNumber=this.getPointerRatio(e),this.range.dispatchEvent(new Event("input",{bubbles:!0,composed:!0})))},D.customElements.get("media-chrome-range")||D.customElements.define("media-chrome-range",aG);var aq=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot "+i)},aY=(e,t,i)=>(aq(e,t,"read from private field"),i?i.call(e):t.get(e)),az=(e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)},aQ=(e,t,i,a)=>(aq(e,t,"write to private field"),a?a.call(e,i):t.set(e,i),i);let aZ=P.createElement("template");aZ.innerHTML=`
  <style>
    :host {
      
      box-sizing: border-box;
      display: var(--media-control-display, var(--media-control-bar-display, inline-flex));
      color: var(--media-text-color, var(--media-primary-color, rgb(238 238 238)));
      --media-loading-indicator-icon-height: 44px;
    }

    ::slotted(media-time-range),
    ::slotted(media-volume-range) {
      min-height: 100%;
    }

    ::slotted(media-time-range),
    ::slotted(media-clip-selector) {
      flex-grow: 1;
    }

    ::slotted([role="menu"]) {
      position: absolute;
    }
  </style>

  <slot></slot>
`;class aX extends D.HTMLElement{constructor(){super(),az(this,tu,void 0),this.shadowRoot||(this.attachShadow({mode:"open"}),this.shadowRoot.appendChild(aZ.content.cloneNode(!0)))}static get observedAttributes(){return[a.MEDIA_CONTROLLER]}attributeChangedCallback(e,t,i){var r,n,s,o,l;e===a.MEDIA_CONTROLLER&&(t&&(null==(n=null==(r=aY(this,tu))?void 0:r.unassociateElement)||n.call(r,this),aQ(this,tu,null)),i&&this.isConnected&&(aQ(this,tu,null==(s=this.getRootNode())?void 0:s.getElementById(i)),null==(l=null==(o=aY(this,tu))?void 0:o.associateElement)||l.call(o,this)))}connectedCallback(){var e,t,i;let r=this.getAttribute(a.MEDIA_CONTROLLER);r&&(aQ(this,tu,null==(e=this.getRootNode())?void 0:e.getElementById(r)),null==(i=null==(t=aY(this,tu))?void 0:t.associateElement)||i.call(t,this))}disconnectedCallback(){var e,t;null==(t=null==(e=aY(this,tu))?void 0:e.unassociateElement)||t.call(e,this),aQ(this,tu,null)}}tu=new WeakMap,D.customElements.get("media-control-bar")||D.customElements.define("media-control-bar",aX);var aJ=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot "+i)},a0=(e,t,i)=>(aJ(e,t,"read from private field"),i?i.call(e):t.get(e)),a1=(e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)},a2=(e,t,i,a)=>(aJ(e,t,"write to private field"),a?a.call(e,i):t.set(e,i),i);let a3=P.createElement("template");a3.innerHTML=`
  <style>
    :host {
      font: var(--media-font,
        var(--media-font-weight, normal)
        var(--media-font-size, 14px) /
        var(--media-text-content-height, var(--media-control-height, 24px))
        var(--media-font-family, helvetica neue, segoe ui, roboto, arial, sans-serif));
      color: var(--media-text-color, var(--media-primary-color, rgb(238 238 238)));
      background: var(--media-text-background, var(--media-control-background, var(--media-secondary-color, rgb(20 20 30 / .7))));
      padding: var(--media-control-padding, 10px);
      display: inline-flex;
      justify-content: center;
      align-items: center;
      vertical-align: middle;
      box-sizing: border-box;
      text-align: center;
      pointer-events: auto;
    }

    
    :host(:focus-visible) {
      box-shadow: inset 0 0 0 2px rgb(27 127 204 / .9);
      outline: 0;
    }

    
    :host(:where(:focus)) {
      box-shadow: none;
      outline: 0;
    }
  </style>
  <slot></slot>
`;class a5 extends D.HTMLElement{constructor(){super(),a1(this,th,void 0),this.shadowRoot||(this.attachShadow({mode:"open"}),this.shadowRoot.appendChild(a3.content.cloneNode(!0)))}static get observedAttributes(){return[a.MEDIA_CONTROLLER]}attributeChangedCallback(e,t,i){var r,n,s,o,l;e===a.MEDIA_CONTROLLER&&(t&&(null==(n=null==(r=a0(this,th))?void 0:r.unassociateElement)||n.call(r,this),a2(this,th,null)),i&&this.isConnected&&(a2(this,th,null==(s=this.getRootNode())?void 0:s.getElementById(i)),null==(l=null==(o=a0(this,th))?void 0:o.associateElement)||l.call(o,this)))}connectedCallback(){var e,t,i;let{style:r}=j(this.shadowRoot,":host");r.setProperty("display",`var(--media-control-display, var(--${this.localName}-display, inline-flex))`);let n=this.getAttribute(a.MEDIA_CONTROLLER);n&&(a2(this,th,null==(e=this.getRootNode())?void 0:e.getElementById(n)),null==(i=null==(t=a0(this,th))?void 0:t.associateElement)||i.call(t,this))}disconnectedCallback(){var e,t;null==(t=null==(e=a0(this,th))?void 0:e.unassociateElement)||t.call(e,this),a2(this,th,null)}}th=new WeakMap,D.customElements.get("media-text-display")||D.customElements.define("media-text-display",a5);var a4=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot "+i)},a7=(e,t,i)=>(a4(e,t,"read from private field"),i?i.call(e):t.get(e)),a8=(e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)},a6=(e,t,i,a)=>(a4(e,t,"write to private field"),a?a.call(e,i):t.set(e,i),i);tc=new WeakMap,D.customElements.get("media-duration-display")||D.customElements.define("media-duration-display",class extends a5{constructor(){super(),a8(this,tc,void 0),a6(this,tc,this.shadowRoot.querySelector("slot")),a7(this,tc).textContent=w(0)}static get observedAttributes(){return[...super.observedAttributes,s.MEDIA_DURATION]}attributeChangedCallback(e,t,i){e===s.MEDIA_DURATION&&(a7(this,tc).textContent=w(+i)),super.attributeChangedCallback(e,t,i)}get mediaDuration(){return K(this,s.MEDIA_DURATION)}set mediaDuration(e){G(this,s.MEDIA_DURATION,e)}});let a9=`<svg aria-hidden="true" viewBox="0 0 26 24">
  <path d="M16 3v2.5h3.5V9H22V3h-6ZM4 9h2.5V5.5H10V3H4v6Zm15.5 9.5H16V21h6v-6h-2.5v3.5ZM6.5 15H4v6h6v-2.5H6.5V15Z"/>
</svg>`,re=`<svg aria-hidden="true" viewBox="0 0 26 24">
  <path d="M18.5 6.5V3H16v6h6V6.5h-3.5ZM16 21h2.5v-3.5H22V15h-6v6ZM4 17.5h3.5V21H10v-6H4v2.5Zm3.5-11H4V9h6V3H7.5v3.5Z"/>
</svg>`,rt=P.createElement("template");rt.innerHTML=`
  <style>
    :host([${s.MEDIA_IS_FULLSCREEN}]) slot[name=icon] slot:not([name=exit]) {
      display: none !important;
    }

    
    :host(:not([${s.MEDIA_IS_FULLSCREEN}])) slot[name=icon] slot:not([name=enter]) {
      display: none !important;
    }

    :host([${s.MEDIA_IS_FULLSCREEN}]) slot[name=tooltip-enter],
    :host(:not([${s.MEDIA_IS_FULLSCREEN}])) slot[name=tooltip-exit] {
      display: none;
    }
  </style>

  <slot name="icon">
    <slot name="enter">${a9}</slot>
    <slot name="exit">${re}</slot>
  </slot>
`;let ri=`
  <slot name="tooltip-enter">Enter fullscreen mode</slot>
  <slot name="tooltip-exit">Exit fullscreen mode</slot>
`,ra=e=>{let t=e.mediaIsFullscreen?v.EXIT_FULLSCREEN():v.ENTER_FULLSCREEN();e.setAttribute("aria-label",t)};D.customElements.get("media-fullscreen-button")||D.customElements.define("media-fullscreen-button",class extends ab{static get observedAttributes(){return[...super.observedAttributes,s.MEDIA_IS_FULLSCREEN,s.MEDIA_FULLSCREEN_UNAVAILABLE]}constructor(e={}){super({slotTemplate:rt,tooltipContent:ri,...e})}connectedCallback(){super.connectedCallback(),ra(this)}attributeChangedCallback(e,t,i){super.attributeChangedCallback(e,t,i),e===s.MEDIA_IS_FULLSCREEN&&ra(this)}get mediaFullscreenUnavailable(){return z(this,s.MEDIA_FULLSCREEN_UNAVAILABLE)}set mediaFullscreenUnavailable(e){Q(this,s.MEDIA_FULLSCREEN_UNAVAILABLE,e)}get mediaIsFullscreen(){return q(this,s.MEDIA_IS_FULLSCREEN)}set mediaIsFullscreen(e){Y(this,s.MEDIA_IS_FULLSCREEN,e)}handleClick(){let e=this.mediaIsFullscreen?i.MEDIA_EXIT_FULLSCREEN_REQUEST:i.MEDIA_ENTER_FULLSCREEN_REQUEST;this.dispatchEvent(new D.CustomEvent(e,{composed:!0,bubbles:!0}))}});let{MEDIA_TIME_IS_LIVE:rr,MEDIA_PAUSED:rn}=s,{MEDIA_SEEK_TO_LIVE_REQUEST:rs,MEDIA_PLAY_REQUEST:ro}=i,rl=P.createElement("template");rl.innerHTML=`
  <style>
  :host { --media-tooltip-display: none; }
  
  slot[name=indicator] > *,
  :host ::slotted([slot=indicator]) {
    
    min-width: auto;
    fill: var(--media-live-button-icon-color, rgb(140, 140, 140));
    color: var(--media-live-button-icon-color, rgb(140, 140, 140));
  }

  :host([${rr}]:not([${rn}])) slot[name=indicator] > *,
  :host([${rr}]:not([${rn}])) ::slotted([slot=indicator]) {
    fill: var(--media-live-button-indicator-color, rgb(255, 0, 0));
    color: var(--media-live-button-indicator-color, rgb(255, 0, 0));
  }

  :host([${rr}]:not([${rn}])) {
    cursor: not-allowed;
  }

  </style>

  <slot name="indicator"><svg viewBox="0 0 6 12"><circle cx="3" cy="6" r="2"></circle></svg></slot>
  
  <slot name="spacer">&nbsp;</slot><slot name="text">LIVE</slot>
`;let rd=e=>{let t=e.mediaPaused||!e.mediaTimeIsLive,i=t?v.SEEK_LIVE():v.PLAYING_LIVE();e.setAttribute("aria-label",i),t?e.removeAttribute("aria-disabled"):e.setAttribute("aria-disabled","true")};D.customElements.get("media-live-button")||D.customElements.define("media-live-button",class extends ab{static get observedAttributes(){return[...super.observedAttributes,rn,rr]}constructor(e={}){super({slotTemplate:rl,...e})}connectedCallback(){rd(this),super.connectedCallback()}attributeChangedCallback(e,t,i){super.attributeChangedCallback(e,t,i),rd(this)}get mediaPaused(){return q(this,s.MEDIA_PAUSED)}set mediaPaused(e){Y(this,s.MEDIA_PAUSED,e)}get mediaTimeIsLive(){return q(this,s.MEDIA_TIME_IS_LIVE)}set mediaTimeIsLive(e){Y(this,s.MEDIA_TIME_IS_LIVE,e)}handleClick(){(this.mediaPaused||!this.mediaTimeIsLive)&&(this.dispatchEvent(new D.CustomEvent(rs,{composed:!0,bubbles:!0})),this.hasAttribute(rn)&&this.dispatchEvent(new D.CustomEvent(ro,{composed:!0,bubbles:!0})))}});var ru=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot "+i)},rh=(e,t,i)=>(ru(e,t,"read from private field"),i?i.call(e):t.get(e)),rc=(e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)},rm=(e,t,i,a)=>(ru(e,t,"write to private field"),a?a.call(e,i):t.set(e,i),i);let rp="loadingdelay",rE=P.createElement("template"),rv=`
<svg aria-hidden="true" viewBox="0 0 100 100">
  <path d="M73,50c0-12.7-10.3-23-23-23S27,37.3,27,50 M30.9,50c0-10.5,8.5-19.1,19.1-19.1S69.1,39.5,69.1,50">
    <animateTransform
       attributeName="transform"
       attributeType="XML"
       type="rotate"
       dur="1s"
       from="0 50 50"
       to="360 50 50"
       repeatCount="indefinite" />
  </path>
</svg>
`;rE.innerHTML=`
<style>
:host {
  display: var(--media-control-display, var(--media-loading-indicator-display, inline-block));
  vertical-align: middle;
  box-sizing: border-box;
  --_loading-indicator-delay: var(--media-loading-indicator-transition-delay, 500ms);
}

#status {
  color: rgba(0,0,0,0);
  width: 0px;
  height: 0px;
}

:host slot[name=icon] > *,
:host ::slotted([slot=icon]) {
  opacity: var(--media-loading-indicator-opacity, 0);
  transition: opacity 0.15s;
}

:host([${s.MEDIA_LOADING}]:not([${s.MEDIA_PAUSED}])) slot[name=icon] > *,
:host([${s.MEDIA_LOADING}]:not([${s.MEDIA_PAUSED}])) ::slotted([slot=icon]) {
  opacity: var(--media-loading-indicator-opacity, 1);
  transition: opacity 0.15s var(--_loading-indicator-delay);
}

:host #status {
  visibility: var(--media-loading-indicator-opacity, hidden);
  transition: visibility 0.15s;
}

:host([${s.MEDIA_LOADING}]:not([${s.MEDIA_PAUSED}])) #status {
  visibility: var(--media-loading-indicator-opacity, visible);
  transition: visibility 0.15s var(--_loading-indicator-delay);
}

svg, img, ::slotted(svg), ::slotted(img) {
  width: var(--media-loading-indicator-icon-width);
  height: var(--media-loading-indicator-icon-height, 100px);
  fill: var(--media-icon-color, var(--media-primary-color, rgb(238 238 238)));
  vertical-align: middle;
}
</style>

<slot name="icon">${rv}</slot>
<div id="status" role="status" aria-live="polite">${E.MEDIA_LOADING()}</div>
`;class rb extends D.HTMLElement{constructor(){if(super(),rc(this,tm,void 0),rc(this,tp,500),!this.shadowRoot){let e=this.attachShadow({mode:"open"}),t=rE.content.cloneNode(!0);e.appendChild(t)}}static get observedAttributes(){return[a.MEDIA_CONTROLLER,s.MEDIA_PAUSED,s.MEDIA_LOADING,rp]}attributeChangedCallback(e,t,i){var r,n,s,o,l;e===rp&&t!==i?this.loadingDelay=Number(i):e===a.MEDIA_CONTROLLER&&(t&&(null==(n=null==(r=rh(this,tm))?void 0:r.unassociateElement)||n.call(r,this),rm(this,tm,null)),i&&this.isConnected&&(rm(this,tm,null==(s=this.getRootNode())?void 0:s.getElementById(i)),null==(l=null==(o=rh(this,tm))?void 0:o.associateElement)||l.call(o,this)))}connectedCallback(){var e,t,i;let r=this.getAttribute(a.MEDIA_CONTROLLER);r&&(rm(this,tm,null==(e=this.getRootNode())?void 0:e.getElementById(r)),null==(i=null==(t=rh(this,tm))?void 0:t.associateElement)||i.call(t,this))}disconnectedCallback(){var e,t;null==(t=null==(e=rh(this,tm))?void 0:e.unassociateElement)||t.call(e,this),rm(this,tm,null)}get loadingDelay(){return rh(this,tp)}set loadingDelay(e){rm(this,tp,e);let{style:t}=j(this.shadowRoot,":host");t.setProperty("--_loading-indicator-delay",`var(--media-loading-indicator-transition-delay, ${e}ms)`)}get mediaPaused(){return q(this,s.MEDIA_PAUSED)}set mediaPaused(e){Y(this,s.MEDIA_PAUSED,e)}get mediaLoading(){return q(this,s.MEDIA_LOADING)}set mediaLoading(e){Y(this,s.MEDIA_LOADING,e)}}tm=new WeakMap,tp=new WeakMap,D.customElements.get("media-loading-indicator")||D.customElements.define("media-loading-indicator",rb);let{MEDIA_VOLUME_LEVEL:rg}=s,rf=`<svg aria-hidden="true" viewBox="0 0 24 24">
  <path d="M16.5 12A4.5 4.5 0 0 0 14 8v2.18l2.45 2.45a4.22 4.22 0 0 0 .05-.63Zm2.5 0a6.84 6.84 0 0 1-.54 2.64L20 16.15A8.8 8.8 0 0 0 21 12a9 9 0 0 0-7-8.77v2.06A7 7 0 0 1 19 12ZM4.27 3 3 4.27 7.73 9H3v6h4l5 5v-6.73l4.25 4.25A6.92 6.92 0 0 1 14 18.7v2.06A9 9 0 0 0 17.69 19l2 2.05L21 19.73l-9-9L4.27 3ZM12 4 9.91 6.09 12 8.18V4Z"/>
</svg>`,rA=`<svg aria-hidden="true" viewBox="0 0 24 24">
  <path d="M3 9v6h4l5 5V4L7 9H3Zm13.5 3A4.5 4.5 0 0 0 14 8v8a4.47 4.47 0 0 0 2.5-4Z"/>
</svg>`,ry=`<svg aria-hidden="true" viewBox="0 0 24 24">
  <path d="M3 9v6h4l5 5V4L7 9H3Zm13.5 3A4.5 4.5 0 0 0 14 8v8a4.47 4.47 0 0 0 2.5-4ZM14 3.23v2.06a7 7 0 0 1 0 13.42v2.06a9 9 0 0 0 0-17.54Z"/>
</svg>`,rI=P.createElement("template");rI.innerHTML=`
  <style>
  
  :host(:not([${rg}])) slot[name=icon] slot:not([name=high]), 
  :host([${rg}=high]) slot[name=icon] slot:not([name=high]) {
    display: none !important;
  }

  :host([${rg}=off]) slot[name=icon] slot:not([name=off]) {
    display: none !important;
  }

  :host([${rg}=low]) slot[name=icon] slot:not([name=low]) {
    display: none !important;
  }

  :host([${rg}=medium]) slot[name=icon] slot:not([name=medium]) {
    display: none !important;
  }

  :host(:not([${rg}=off])) slot[name=tooltip-unmute],
  :host([${rg}=off]) slot[name=tooltip-mute] {
    display: none;
  }
  </style>

  <slot name="icon">
    <slot name="off">${rf}</slot>
    <slot name="low">${rA}</slot>
    <slot name="medium">${rA}</slot>
    <slot name="high">${ry}</slot>
  </slot>
`;let r_=`
  <slot name="tooltip-mute">Mute</slot>
  <slot name="tooltip-unmute">Unmute</slot>
`,rw=e=>{let t="off"===e.mediaVolumeLevel?v.UNMUTE():v.MUTE();e.setAttribute("aria-label",t)};D.customElements.get("media-mute-button")||D.customElements.define("media-mute-button",class extends ab{static get observedAttributes(){return[...super.observedAttributes,s.MEDIA_VOLUME_LEVEL]}constructor(e={}){super({slotTemplate:rI,tooltipContent:r_,...e})}connectedCallback(){rw(this),super.connectedCallback()}attributeChangedCallback(e,t,i){e===s.MEDIA_VOLUME_LEVEL&&rw(this),super.attributeChangedCallback(e,t,i)}get mediaVolumeLevel(){return z(this,s.MEDIA_VOLUME_LEVEL)}set mediaVolumeLevel(e){Q(this,s.MEDIA_VOLUME_LEVEL,e)}handleClick(){let e="off"===this.mediaVolumeLevel?i.MEDIA_UNMUTE_REQUEST:i.MEDIA_MUTE_REQUEST;this.dispatchEvent(new D.CustomEvent(e,{composed:!0,bubbles:!0}))}});let rT=`<svg aria-hidden="true" viewBox="0 0 28 24">
  <path d="M24 3H4a1 1 0 0 0-1 1v16a1 1 0 0 0 1 1h20a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1Zm-1 16H5V5h18v14Zm-3-8h-7v5h7v-5Z"/>
</svg>`,rS=P.createElement("template");rS.innerHTML=`
  <style>
  :host([${s.MEDIA_IS_PIP}]) slot[name=icon] slot:not([name=exit]) {
    display: none !important;
  }

  
  :host(:not([${s.MEDIA_IS_PIP}])) slot[name=icon] slot:not([name=enter]) {
    display: none !important;
  }

  :host([${s.MEDIA_IS_PIP}]) slot[name=tooltip-enter],
  :host(:not([${s.MEDIA_IS_PIP}])) slot[name=tooltip-exit] {
    display: none;
  }
  </style>

  <slot name="icon">
    <slot name="enter">${rT}</slot>
    <slot name="exit">${rT}</slot>
  </slot>
`;let rk=`
  <slot name="tooltip-enter">Enter picture in picture mode</slot>
  <slot name="tooltip-exit">Enter picture in picture mode</slot>
`,rM=e=>{let t=e.mediaIsPip?v.EXIT_PIP():v.ENTER_PIP();e.setAttribute("aria-label",t)};D.customElements.get("media-pip-button")||D.customElements.define("media-pip-button",class extends ab{static get observedAttributes(){return[...super.observedAttributes,s.MEDIA_IS_PIP,s.MEDIA_PIP_UNAVAILABLE]}constructor(e={}){super({slotTemplate:rS,tooltipContent:rk,...e})}connectedCallback(){rM(this),super.connectedCallback()}attributeChangedCallback(e,t,i){e===s.MEDIA_IS_PIP&&rM(this),super.attributeChangedCallback(e,t,i)}get mediaPipUnavailable(){return z(this,s.MEDIA_PIP_UNAVAILABLE)}set mediaPipUnavailable(e){Q(this,s.MEDIA_PIP_UNAVAILABLE,e)}get mediaIsPip(){return q(this,s.MEDIA_IS_PIP)}set mediaIsPip(e){Y(this,s.MEDIA_IS_PIP,e)}handleClick(){let e=this.mediaIsPip?i.MEDIA_EXIT_PIP_REQUEST:i.MEDIA_ENTER_PIP_REQUEST;this.dispatchEvent(new D.CustomEvent(e,{composed:!0,bubbles:!0}))}});var rL=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot "+i)},rR=(e,t,i)=>(rL(e,t,"read from private field"),i?i.call(e):t.get(e)),rC=(e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)};let rD="rates",rP=[1,1.2,1.5,1.7,2],rO=P.createElement("template");rO.innerHTML=`
  <style>
    :host {
      min-width: 5ch;
      padding: var(--media-button-padding, var(--media-control-padding, 10px 5px));
    }
  </style>
  <slot name="icon"></slot>
`,tE=new WeakMap,D.customElements.get("media-playback-rate-button")||D.customElements.define("media-playback-rate-button",class extends ab{constructor(e={}){super({slotTemplate:rO,tooltipContent:"Playback rate",...e}),rC(this,tE,new ic(this,rD,{defaultValue:rP})),this.container=this.shadowRoot.querySelector('slot[name="icon"]'),this.container.innerHTML="1x"}static get observedAttributes(){return[...super.observedAttributes,s.MEDIA_PLAYBACK_RATE,rD]}attributeChangedCallback(e,t,i){if(super.attributeChangedCallback(e,t,i),e===rD&&(rR(this,tE).value=i),e===s.MEDIA_PLAYBACK_RATE){let e=i?+i:Number.NaN,t=Number.isNaN(e)?1:e;this.container.innerHTML=`${t}x`,this.setAttribute("aria-label",E.PLAYBACK_RATE({playbackRate:t}))}}get rates(){return rR(this,tE)}set rates(e){e?Array.isArray(e)&&(rR(this,tE).value=e.join(" ")):rR(this,tE).value=""}get mediaPlaybackRate(){return K(this,s.MEDIA_PLAYBACK_RATE,1)}set mediaPlaybackRate(e){G(this,s.MEDIA_PLAYBACK_RATE,e)}handleClick(){var e,t;let a=Array.from(this.rates.values(),e=>+e).sort((e,t)=>e-t),r=null!=(t=null!=(e=a.find(e=>e>this.mediaPlaybackRate))?e:a[0])?t:1,n=new D.CustomEvent(i.MEDIA_PLAYBACK_RATE_REQUEST,{composed:!0,bubbles:!0,detail:r});this.dispatchEvent(n)}});let rx=`<svg aria-hidden="true" viewBox="0 0 24 24">
  <path d="m6 21 15-9L6 3v18Z"/>
</svg>`,rN=`<svg aria-hidden="true" viewBox="0 0 24 24">
  <path d="M6 20h4V4H6v16Zm8-16v16h4V4h-4Z"/>
</svg>`,rU=P.createElement("template");rU.innerHTML=`
  <style>
    :host([${s.MEDIA_PAUSED}]) slot[name=pause],
    :host(:not([${s.MEDIA_PAUSED}])) slot[name=play] {
      display: none !important;
    }

    :host([${s.MEDIA_PAUSED}]) slot[name=tooltip-pause],
    :host(:not([${s.MEDIA_PAUSED}])) slot[name=tooltip-play] {
      display: none;
    }
  </style>

  <slot name="icon">
    <slot name="play">${rx}</slot>
    <slot name="pause">${rN}</slot>
  </slot>
`;let rF=`
  <slot name="tooltip-play">Play</slot>
  <slot name="tooltip-pause">Pause</slot>
`,rV=e=>{let t=e.mediaPaused?v.PLAY():v.PAUSE();e.setAttribute("aria-label",t)};D.customElements.get("media-play-button")||D.customElements.define("media-play-button",class extends ab{static get observedAttributes(){return[...super.observedAttributes,s.MEDIA_PAUSED,s.MEDIA_ENDED]}constructor(e={}){super({slotTemplate:rU,tooltipContent:rF,...e})}connectedCallback(){rV(this),super.connectedCallback()}attributeChangedCallback(e,t,i){e===s.MEDIA_PAUSED&&rV(this),super.attributeChangedCallback(e,t,i)}get mediaPaused(){return q(this,s.MEDIA_PAUSED)}set mediaPaused(e){Y(this,s.MEDIA_PAUSED,e)}handleClick(){let e=this.mediaPaused?i.MEDIA_PLAY_REQUEST:i.MEDIA_PAUSE_REQUEST;this.dispatchEvent(new D.CustomEvent(e,{composed:!0,bubbles:!0}))}});let rW={PLACEHOLDER_SRC:"placeholdersrc",SRC:"src"},rB=P.createElement("template");rB.innerHTML=`
  <style>
    :host {
      pointer-events: none;
      display: var(--media-poster-image-display, inline-block);
      box-sizing: border-box;
    }

    img {
      max-width: 100%;
      max-height: 100%;
      min-width: 100%;
      min-height: 100%;
      background-repeat: no-repeat;
      background-position: var(--media-poster-image-background-position, var(--media-object-position, center));
      background-size: var(--media-poster-image-background-size, var(--media-object-fit, contain));
      object-fit: var(--media-object-fit, contain);
      object-position: var(--media-object-position, center);
    }
  </style>

  <img part="poster img" aria-hidden="true" id="image"/>
`;let r$=e=>{e.style.removeProperty("background-image")},rH=(e,t)=>{e.style["background-image"]=`url('${t}')`};class rj extends D.HTMLElement{static get observedAttributes(){return[rW.PLACEHOLDER_SRC,rW.SRC]}constructor(){super(),this.shadowRoot||(this.attachShadow({mode:"open"}),this.shadowRoot.appendChild(rB.content.cloneNode(!0))),this.image=this.shadowRoot.querySelector("#image")}attributeChangedCallback(e,t,i){e===rW.SRC&&(null==i?this.image.removeAttribute(rW.SRC):this.image.setAttribute(rW.SRC,i)),e===rW.PLACEHOLDER_SRC&&(null==i?r$(this.image):rH(this.image,i))}get placeholderSrc(){return z(this,rW.PLACEHOLDER_SRC)}set placeholderSrc(e){Q(this,rW.SRC,e)}get src(){return z(this,rW.SRC)}set src(e){Q(this,rW.SRC,e)}}D.customElements.get("media-poster-image")||D.customElements.define("media-poster-image",rj);var rK=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot "+i)},rG=(e,t,i)=>(rK(e,t,"read from private field"),i?i.call(e):t.get(e)),rq=(e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)},rY=(e,t,i,a)=>(rK(e,t,"write to private field"),a?a.call(e,i):t.set(e,i),i);tv=new WeakMap,D.customElements.get("media-preview-chapter-display")||D.customElements.define("media-preview-chapter-display",class extends a5{constructor(){super(),rq(this,tv,void 0),rY(this,tv,this.shadowRoot.querySelector("slot"))}static get observedAttributes(){return[...super.observedAttributes,s.MEDIA_PREVIEW_CHAPTER]}attributeChangedCallback(e,t,i){super.attributeChangedCallback(e,t,i),e===s.MEDIA_PREVIEW_CHAPTER&&i!==t&&null!=i&&(rG(this,tv).textContent=i,""!==i?this.setAttribute("aria-valuetext",`chapter: ${i}`):this.removeAttribute("aria-valuetext"))}get mediaPreviewChapter(){return z(this,s.MEDIA_PREVIEW_CHAPTER)}set mediaPreviewChapter(e){Q(this,s.MEDIA_PREVIEW_CHAPTER,e)}});var rz=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot "+i)},rQ=(e,t,i)=>(rz(e,t,"read from private field"),i?i.call(e):t.get(e)),rZ=(e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)},rX=(e,t,i,a)=>(rz(e,t,"write to private field"),a?a.call(e,i):t.set(e,i),i);let rJ=P.createElement("template");rJ.innerHTML=`
  <style>
    :host {
      box-sizing: border-box;
      display: var(--media-control-display, var(--media-preview-thumbnail-display, inline-block));
      overflow: hidden;
    }

    img {
      display: none;
      position: relative;
    }
  </style>
  <img crossorigin loading="eager" decoding="async">
`;class r0 extends D.HTMLElement{constructor(){super(),rZ(this,tb,void 0),this.shadowRoot||(this.attachShadow({mode:"open"}),this.shadowRoot.appendChild(rJ.content.cloneNode(!0)))}static get observedAttributes(){return[a.MEDIA_CONTROLLER,s.MEDIA_PREVIEW_IMAGE,s.MEDIA_PREVIEW_COORDS]}connectedCallback(){var e,t,i;let r=this.getAttribute(a.MEDIA_CONTROLLER);r&&(rX(this,tb,null==(e=this.getRootNode())?void 0:e.getElementById(r)),null==(i=null==(t=rQ(this,tb))?void 0:t.associateElement)||i.call(t,this))}disconnectedCallback(){var e,t;null==(t=null==(e=rQ(this,tb))?void 0:e.unassociateElement)||t.call(e,this),rX(this,tb,null)}attributeChangedCallback(e,t,i){var r,n,o,l,d;[s.MEDIA_PREVIEW_IMAGE,s.MEDIA_PREVIEW_COORDS].includes(e)&&this.update(),e===a.MEDIA_CONTROLLER&&(t&&(null==(n=null==(r=rQ(this,tb))?void 0:r.unassociateElement)||n.call(r,this),rX(this,tb,null)),i&&this.isConnected&&(rX(this,tb,null==(o=this.getRootNode())?void 0:o.getElementById(i)),null==(d=null==(l=rQ(this,tb))?void 0:l.associateElement)||d.call(l,this)))}get mediaPreviewImage(){return z(this,s.MEDIA_PREVIEW_IMAGE)}set mediaPreviewImage(e){Q(this,s.MEDIA_PREVIEW_IMAGE,e)}get mediaPreviewCoords(){let e=this.getAttribute(s.MEDIA_PREVIEW_COORDS);if(e)return e.split(/\s+/).map(e=>+e)}set mediaPreviewCoords(e){if(!e){this.removeAttribute(s.MEDIA_PREVIEW_COORDS);return}this.setAttribute(s.MEDIA_PREVIEW_COORDS,e.join(" "))}update(){let e=this.mediaPreviewCoords,t=this.mediaPreviewImage;if(!(e&&t))return;let[i,a,r,n]=e,s=t.split("#")[0],{maxWidth:o,maxHeight:l,minWidth:d,minHeight:u}=getComputedStyle(this),h=Math.min(parseInt(o)/r,parseInt(l)/n),c=Math.max(parseInt(d)/r,parseInt(u)/n),m=h<1,p=m?h:c>1?c:1,{style:E}=j(this.shadowRoot,":host"),v=j(this.shadowRoot,"img").style,b=this.shadowRoot.querySelector("img"),g=m?"min":"max";E.setProperty(`${g}-width`,"initial","important"),E.setProperty(`${g}-height`,"initial","important"),E.width=`${r*p}px`,E.height=`${n*p}px`;let f=()=>{v.width=`${this.imgWidth*p}px`,v.height=`${this.imgHeight*p}px`,v.display="block"};b.src!==s&&(b.onload=()=>{this.imgWidth=b.naturalWidth,this.imgHeight=b.naturalHeight,f()},b.src=s,f()),f(),v.transform=`translate(-${i*p}px, -${a*p}px)`}}tb=new WeakMap,D.customElements.get("media-preview-thumbnail")||D.customElements.define("media-preview-thumbnail",r0);var r1=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot "+i)},r2=(e,t,i)=>(r1(e,t,"read from private field"),i?i.call(e):t.get(e)),r3=(e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)},r5=(e,t,i,a)=>(r1(e,t,"write to private field"),a?a.call(e,i):t.set(e,i),i);tg=new WeakMap,D.customElements.get("media-preview-time-display")||D.customElements.define("media-preview-time-display",class extends a5{constructor(){super(),r3(this,tg,void 0),r5(this,tg,this.shadowRoot.querySelector("slot")),r2(this,tg).textContent=w(0)}static get observedAttributes(){return[...super.observedAttributes,s.MEDIA_PREVIEW_TIME]}attributeChangedCallback(e,t,i){super.attributeChangedCallback(e,t,i),e===s.MEDIA_PREVIEW_TIME&&null!=i&&(r2(this,tg).textContent=w(parseFloat(i)))}get mediaPreviewTime(){return K(this,s.MEDIA_PREVIEW_TIME)}set mediaPreviewTime(e){G(this,s.MEDIA_PREVIEW_TIME,e)}});let r4={SEEK_OFFSET:"seekoffset"},r7=P.createElement("template");r7.innerHTML=`
  <slot name="icon"><svg aria-hidden="true" viewBox="0 0 20 24"><defs><style>.text{font-size:8px;font-family:Arial-BoldMT, Arial;font-weight:700;}</style></defs><text class="text value" transform="translate(2.18 19.87)">30</text><path d="M10 6V3L4.37 7 10 10.94V8a5.54 5.54 0 0 1 1.9 10.48v2.12A7.5 7.5 0 0 0 10 6Z"/></svg></slot>
`,D.customElements.get("media-seek-backward-button")||D.customElements.define("media-seek-backward-button",class extends ab{static get observedAttributes(){return[...super.observedAttributes,s.MEDIA_CURRENT_TIME,r4.SEEK_OFFSET]}constructor(e={}){super({slotTemplate:r7,tooltipContent:"Seek backward",...e})}connectedCallback(){this.seekOffset=K(this,r4.SEEK_OFFSET,30),super.connectedCallback()}attributeChangedCallback(e,t,i){e===r4.SEEK_OFFSET&&(this.seekOffset=K(this,r4.SEEK_OFFSET,30)),super.attributeChangedCallback(e,t,i)}get seekOffset(){return K(this,r4.SEEK_OFFSET,30)}set seekOffset(e){G(this,r4.SEEK_OFFSET,e),this.setAttribute("aria-label",v.SEEK_BACK_N_SECS({seekOffset:this.seekOffset})),F(W(this,"icon"),this.seekOffset)}get mediaCurrentTime(){return K(this,s.MEDIA_CURRENT_TIME,0)}set mediaCurrentTime(e){G(this,s.MEDIA_CURRENT_TIME,e)}handleClick(){let e=Math.max(this.mediaCurrentTime-this.seekOffset,0),t=new D.CustomEvent(i.MEDIA_SEEK_REQUEST,{composed:!0,bubbles:!0,detail:e});this.dispatchEvent(t)}});let r8={SEEK_OFFSET:"seekoffset"},r6=P.createElement("template");r6.innerHTML=`
  <slot name="icon"><svg aria-hidden="true" viewBox="0 0 20 24"><defs><style>.text{font-size:8px;font-family:Arial-BoldMT, Arial;font-weight:700;}</style></defs><text class="text value" transform="translate(8.9 19.87)">30</text><path d="M10 6V3l5.61 4L10 10.94V8a5.54 5.54 0 0 0-1.9 10.48v2.12A7.5 7.5 0 0 1 10 6Z"/></svg></slot>
`,D.customElements.get("media-seek-forward-button")||D.customElements.define("media-seek-forward-button",class extends ab{static get observedAttributes(){return[...super.observedAttributes,s.MEDIA_CURRENT_TIME,r8.SEEK_OFFSET]}constructor(e={}){super({slotTemplate:r6,tooltipContent:"Seek forward",...e})}connectedCallback(){this.seekOffset=K(this,r8.SEEK_OFFSET,30),super.connectedCallback()}attributeChangedCallback(e,t,i){e===r8.SEEK_OFFSET&&(this.seekOffset=K(this,r8.SEEK_OFFSET,30)),super.attributeChangedCallback(e,t,i)}get seekOffset(){return K(this,r8.SEEK_OFFSET,30)}set seekOffset(e){G(this,r8.SEEK_OFFSET,e),this.setAttribute("aria-label",v.SEEK_FORWARD_N_SECS({seekOffset:this.seekOffset})),F(W(this,"icon"),this.seekOffset)}get mediaCurrentTime(){return K(this,s.MEDIA_CURRENT_TIME,0)}set mediaCurrentTime(e){G(this,s.MEDIA_CURRENT_TIME,e)}handleClick(){let e=this.mediaCurrentTime+this.seekOffset,t=new D.CustomEvent(i.MEDIA_SEEK_REQUEST,{composed:!0,bubbles:!0,detail:e});this.dispatchEvent(t)}});var r9=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot "+i)},ne=(e,t,i)=>(r9(e,t,"read from private field"),i?i.call(e):t.get(e)),nt=(e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)},ni=(e,t,i,a)=>(r9(e,t,"write to private field"),a?a.call(e,i):t.set(e,i),i);let na={REMAINING:"remaining",SHOW_DURATION:"showduration",NO_TOGGLE:"notoggle"},nr=[...Object.values(na),s.MEDIA_CURRENT_TIME,s.MEDIA_DURATION,s.MEDIA_SEEKABLE],nn=["Enter"," "],ns="&nbsp;/&nbsp;",no=(e,{timesSep:t=ns}={})=>{var i,a;let r=e.hasAttribute(na.REMAINING),n=e.hasAttribute(na.SHOW_DURATION),s=null!=(i=e.mediaCurrentTime)?i:0,[,o]=null!=(a=e.mediaSeekable)?a:[],l=0;Number.isFinite(e.mediaDuration)?l=e.mediaDuration:Number.isFinite(o)&&(l=o);let d=r?w(0-(l-s)):w(s);return n?`${d}${t}${w(l)}`:d},nl=e=>{var t;let i=e.mediaCurrentTime,[,a]=null!=(t=e.mediaSeekable)?t:[],r=null;if(Number.isFinite(e.mediaDuration)?r=e.mediaDuration:Number.isFinite(a)&&(r=a),null==i||null===r){e.setAttribute("aria-valuetext","video not loaded, unknown time.");return}let n=e.hasAttribute(na.REMAINING),s=e.hasAttribute(na.SHOW_DURATION),o=n?_(0-(r-i)):_(i);if(!s){e.setAttribute("aria-valuetext",o);return}let l=_(r),d=`${o} of ${l}`;e.setAttribute("aria-valuetext",d)};tf=new WeakMap,D.customElements.get("media-time-display")||D.customElements.define("media-time-display",class extends a5{constructor(){super(),nt(this,tf,void 0),ni(this,tf,this.shadowRoot.querySelector("slot")),ne(this,tf).innerHTML=`${no(this)}`}static get observedAttributes(){return[...super.observedAttributes,...nr,"disabled"]}connectedCallback(){let{style:e}=j(this.shadowRoot,":host(:hover:not([notoggle]))");e.setProperty("cursor","pointer"),e.setProperty("background","var(--media-control-hover-background, rgba(50 50 70 / .7))"),this.hasAttribute("disabled")||this.enable(),this.setAttribute("role","progressbar"),this.setAttribute("aria-label",E.PLAYBACK_TIME());let t=e=>{let{key:i}=e;if(!nn.includes(i)){this.removeEventListener("keyup",t);return}this.toggleTimeDisplay()};this.addEventListener("keydown",e=>{let{metaKey:i,altKey:a,key:r}=e;if(i||a||!nn.includes(r)){this.removeEventListener("keyup",t);return}this.addEventListener("keyup",t)}),this.addEventListener("click",this.toggleTimeDisplay),super.connectedCallback()}toggleTimeDisplay(){this.noToggle||(this.hasAttribute("remaining")?this.removeAttribute("remaining"):this.setAttribute("remaining",""))}disconnectedCallback(){this.disable(),super.disconnectedCallback()}attributeChangedCallback(e,t,i){nr.includes(e)?this.update():"disabled"===e&&i!==t&&(null==i?this.enable():this.disable()),super.attributeChangedCallback(e,t,i)}enable(){this.tabIndex=0}disable(){this.tabIndex=-1}get remaining(){return q(this,na.REMAINING)}set remaining(e){Y(this,na.REMAINING,e)}get showDuration(){return q(this,na.SHOW_DURATION)}set showDuration(e){Y(this,na.SHOW_DURATION,e)}get noToggle(){return q(this,na.NO_TOGGLE)}set noToggle(e){Y(this,na.NO_TOGGLE,e)}get mediaDuration(){return K(this,s.MEDIA_DURATION)}set mediaDuration(e){G(this,s.MEDIA_DURATION,e)}get mediaCurrentTime(){return K(this,s.MEDIA_CURRENT_TIME)}set mediaCurrentTime(e){G(this,s.MEDIA_CURRENT_TIME,e)}get mediaSeekable(){let e=this.getAttribute(s.MEDIA_SEEKABLE);if(e)return e.split(":").map(e=>+e)}set mediaSeekable(e){if(null==e){this.removeAttribute(s.MEDIA_SEEKABLE);return}this.setAttribute(s.MEDIA_SEEKABLE,e.join(":"))}update(){let e=no(this);nl(this),e!==ne(this,tf).innerHTML&&(ne(this,tf).innerHTML=e)}});var nd=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot "+i)},nu=(e,t,i)=>(nd(e,t,"read from private field"),i?i.call(e):t.get(e)),nh=(e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)},nc=(e,t,i,a)=>(nd(e,t,"write to private field"),a?a.call(e,i):t.set(e,i),i),nm=(e,t,i,a)=>({set _(value){nc(e,t,value,i)},get _(){return nu(e,t,a)}});class np{constructor(e,t,i){nh(this,tA,void 0),nh(this,ty,void 0),nh(this,tI,void 0),nh(this,t_,void 0),nh(this,tw,void 0),nh(this,tT,void 0),nh(this,tS,void 0),nh(this,tk,void 0),nh(this,tM,0),nh(this,tL,(e=performance.now())=>{nc(this,tM,requestAnimationFrame(nu(this,tL))),nc(this,t_,performance.now()-nu(this,tI));let t=1e3/this.fps;if(nu(this,t_)>t){nc(this,tI,e-nu(this,t_)%t);let i=1e3/((e-nu(this,ty))/++nm(this,tw)._),a=(e-nu(this,tT))/1e3/this.duration,r=nu(this,tS)+a*this.playbackRate;r-nu(this,tA).valueAsNumber>0?nc(this,tk,this.playbackRate/this.duration/i):(nc(this,tk,.995*nu(this,tk)),r=nu(this,tA).valueAsNumber+nu(this,tk)),this.callback(r)}}),nc(this,tA,e),this.callback=t,this.fps=i}start(){0===nu(this,tM)&&(nc(this,tI,performance.now()),nc(this,ty,nu(this,tI)),nc(this,tw,0),nu(this,tL).call(this))}stop(){0!==nu(this,tM)&&(cancelAnimationFrame(nu(this,tM)),nc(this,tM,0))}update({start:e,duration:t,playbackRate:i}){let a=e-nu(this,tA).valueAsNumber,r=Math.abs(t-this.duration);(a>0||a<-.03||r>=.5)&&this.callback(e),nc(this,tS,e),nc(this,tT,performance.now()),this.duration=t,this.playbackRate=i}}tA=new WeakMap,ty=new WeakMap,tI=new WeakMap,t_=new WeakMap,tw=new WeakMap,tT=new WeakMap,tS=new WeakMap,tk=new WeakMap,tM=new WeakMap,tL=new WeakMap;var nE=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot "+i)},nv=(e,t,i)=>(nE(e,t,"read from private field"),i?i.call(e):t.get(e)),nb=(e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)},ng=(e,t,i,a)=>(nE(e,t,"write to private field"),a?a.call(e,i):t.set(e,i),i),nf=(e,t,i)=>(nE(e,t,"access private method"),i);let nA=e=>{let t=e.range,i=_(+n_(e)),a=_(+e.mediaSeekableEnd),r=i&&a?`${i} of ${a}`:"video not loaded, unknown time.";t.setAttribute("aria-valuetext",r)},ny=P.createElement("template");ny.innerHTML=`
  <style>
    :host {
      --media-box-border-radius: 4px;
      --media-box-padding-left: 10px;
      --media-box-padding-right: 10px;
      --media-preview-border-radius: var(--media-box-border-radius);
      --media-box-arrow-offset: var(--media-box-border-radius);
      --_control-background: var(--media-control-background, var(--media-secondary-color, rgb(20 20 30 / .7)));
      --_preview-background: var(--media-preview-background, var(--_control-background));

      
      contain: layout;
    }

    #buffered {
      background: var(--media-time-range-buffered-color, rgb(255 255 255 / .4));
      position: absolute;
      height: 100%;
      will-change: width;
    }

    #preview-rail,
    #current-rail {
      width: 100%;
      position: absolute;
      left: 0;
      bottom: 100%;
      pointer-events: none;
      will-change: transform;
    }

    [part~="box"] {
      width: min-content;
      
      position: absolute;
      bottom: 100%;
      flex-direction: column;
      align-items: center;
      transform: translateX(-50%);
    }

    [part~="current-box"] {
      display: var(--media-current-box-display, var(--media-box-display, flex));
      margin: var(--media-current-box-margin, var(--media-box-margin, 0 0 5px));
      visibility: hidden;
    }

    [part~="preview-box"] {
      display: var(--media-preview-box-display, var(--media-box-display, flex));
      margin: var(--media-preview-box-margin, var(--media-box-margin, 0 0 5px));
      transition-property: var(--media-preview-transition-property, visibility, opacity);
      transition-duration: var(--media-preview-transition-duration-out, .25s);
      transition-delay: var(--media-preview-transition-delay-out, 0s);
      visibility: hidden;
      opacity: 0;
    }

    :host(:is([${s.MEDIA_PREVIEW_IMAGE}], [${s.MEDIA_PREVIEW_TIME}])[dragging]) [part~="preview-box"] {
      transition-duration: var(--media-preview-transition-duration-in, .5s);
      transition-delay: var(--media-preview-transition-delay-in, .25s);
      visibility: visible;
      opacity: 1;
    }

    @media (hover: hover) {
      :host(:is([${s.MEDIA_PREVIEW_IMAGE}], [${s.MEDIA_PREVIEW_TIME}]):hover) [part~="preview-box"] {
        transition-duration: var(--media-preview-transition-duration-in, .5s);
        transition-delay: var(--media-preview-transition-delay-in, .25s);
        visibility: visible;
        opacity: 1;
      }
    }

    media-preview-thumbnail,
    ::slotted(media-preview-thumbnail) {
      visibility: hidden;
      
      transition: visibility 0s .25s;
      transition-delay: calc(var(--media-preview-transition-delay-out, 0s) + var(--media-preview-transition-duration-out, .25s));
      background: var(--media-preview-thumbnail-background, var(--_preview-background));
      box-shadow: var(--media-preview-thumbnail-box-shadow, 0 0 4px rgb(0 0 0 / .2));
      max-width: var(--media-preview-thumbnail-max-width, 180px);
      max-height: var(--media-preview-thumbnail-max-height, 160px);
      min-width: var(--media-preview-thumbnail-min-width, 120px);
      min-height: var(--media-preview-thumbnail-min-height, 80px);
      border: var(--media-preview-thumbnail-border);
      border-radius: var(--media-preview-thumbnail-border-radius,
        var(--media-preview-border-radius) var(--media-preview-border-radius) 0 0);
    }

    :host([${s.MEDIA_PREVIEW_IMAGE}][dragging]) media-preview-thumbnail,
    :host([${s.MEDIA_PREVIEW_IMAGE}][dragging]) ::slotted(media-preview-thumbnail) {
      transition-delay: var(--media-preview-transition-delay-in, .25s);
      visibility: visible;
    }

    @media (hover: hover) {
      :host([${s.MEDIA_PREVIEW_IMAGE}]:hover) media-preview-thumbnail,
      :host([${s.MEDIA_PREVIEW_IMAGE}]:hover) ::slotted(media-preview-thumbnail) {
        transition-delay: var(--media-preview-transition-delay-in, .25s);
        visibility: visible;
      }

      :host([${s.MEDIA_PREVIEW_TIME}]:hover) {
        --media-time-range-hover-display: block;
      }
    }

    media-preview-chapter-display,
    ::slotted(media-preview-chapter-display) {
      font-size: var(--media-font-size, 13px);
      line-height: 17px;
      min-width: 0;
      visibility: hidden;
      
      transition: min-width 0s, border-radius 0s, margin 0s, padding 0s, visibility 0s;
      transition-delay: calc(var(--media-preview-transition-delay-out, 0s) + var(--media-preview-transition-duration-out, .25s));
      background: var(--media-preview-chapter-background, var(--_preview-background));
      border-radius: var(--media-preview-chapter-border-radius,
        var(--media-preview-border-radius) var(--media-preview-border-radius)
        var(--media-preview-border-radius) var(--media-preview-border-radius));
      padding: var(--media-preview-chapter-padding, 3.5px 9px);
      margin: var(--media-preview-chapter-margin, 0 0 5px);
      text-shadow: var(--media-preview-chapter-text-shadow, 0 0 4px rgb(0 0 0 / .75));
    }

    :host([${s.MEDIA_PREVIEW_IMAGE}]) media-preview-chapter-display,
    :host([${s.MEDIA_PREVIEW_IMAGE}]) ::slotted(media-preview-chapter-display) {
      transition-delay: var(--media-preview-transition-delay-in, .25s);
      border-radius: var(--media-preview-chapter-border-radius, 0);
      padding: var(--media-preview-chapter-padding, 3.5px 9px 0);
      margin: var(--media-preview-chapter-margin, 0);
      min-width: 100%;
    }

    media-preview-chapter-display[${s.MEDIA_PREVIEW_CHAPTER}],
    ::slotted(media-preview-chapter-display[${s.MEDIA_PREVIEW_CHAPTER}]) {
      visibility: visible;
    }

    media-preview-chapter-display:not([aria-valuetext]),
    ::slotted(media-preview-chapter-display:not([aria-valuetext])) {
      display: none;
    }

    media-preview-time-display,
    ::slotted(media-preview-time-display),
    media-time-display,
    ::slotted(media-time-display) {
      font-size: var(--media-font-size, 13px);
      line-height: 17px;
      min-width: 0;
      
      transition: min-width 0s, border-radius 0s;
      transition-delay: calc(var(--media-preview-transition-delay-out, 0s) + var(--media-preview-transition-duration-out, .25s));
      background: var(--media-preview-time-background, var(--_preview-background));
      border-radius: var(--media-preview-time-border-radius,
        var(--media-preview-border-radius) var(--media-preview-border-radius)
        var(--media-preview-border-radius) var(--media-preview-border-radius));
      padding: var(--media-preview-time-padding, 3.5px 9px);
      margin: var(--media-preview-time-margin, 0);
      text-shadow: var(--media-preview-time-text-shadow, 0 0 4px rgb(0 0 0 / .75));
      transform: translateX(min(
        max(calc(50% - var(--_box-width) / 2),
        calc(var(--_box-shift, 0))),
        calc(var(--_box-width) / 2 - 50%)
      ));
    }

    :host([${s.MEDIA_PREVIEW_IMAGE}]) media-preview-time-display,
    :host([${s.MEDIA_PREVIEW_IMAGE}]) ::slotted(media-preview-time-display) {
      transition-delay: var(--media-preview-transition-delay-in, .25s);
      border-radius: var(--media-preview-time-border-radius,
        0 0 var(--media-preview-border-radius) var(--media-preview-border-radius));
      min-width: 100%;
    }

    :host([${s.MEDIA_PREVIEW_TIME}]:hover) {
      --media-time-range-hover-display: block;
    }

    [part~="arrow"],
    ::slotted([part~="arrow"]) {
      display: var(--media-box-arrow-display, inline-block);
      transform: translateX(min(
        max(calc(50% - var(--_box-width) / 2 + var(--media-box-arrow-offset)),
        calc(var(--_box-shift, 0))),
        calc(var(--_box-width) / 2 - 50% - var(--media-box-arrow-offset))
      ));
      
      border-color: transparent;
      border-top-color: var(--media-box-arrow-background, var(--_control-background));
      border-width: var(--media-box-arrow-border-width,
        var(--media-box-arrow-height, 5px) var(--media-box-arrow-width, 6px) 0);
      border-style: solid;
      justify-content: center;
      height: 0;
    }
  </style>
  <div id="preview-rail">
    <slot name="preview" part="box preview-box">
      <media-preview-thumbnail></media-preview-thumbnail>
      <media-preview-chapter-display></media-preview-chapter-display>
      <media-preview-time-display></media-preview-time-display>
      <slot name="preview-arrow"><div part="arrow"></div></slot>
    </slot>
  </div>
  <div id="current-rail">
    <slot name="current" part="box current-box">
      
    </slot>
  </div>
`;let nI=(e,t=e.mediaCurrentTime)=>{let i=Number.isFinite(e.mediaSeekableStart)?e.mediaSeekableStart:0,a=Number.isFinite(e.mediaDuration)?e.mediaDuration:e.mediaSeekableEnd;return Number.isNaN(a)?0:Math.max(0,Math.min((t-i)/(a-i),1))},n_=(e,t=e.range.valueAsNumber)=>{let i=Number.isFinite(e.mediaSeekableStart)?e.mediaSeekableStart:0,a=Number.isFinite(e.mediaDuration)?e.mediaDuration:e.mediaSeekableEnd;return Number.isNaN(a)?0:t*(a-i)+i};tR=new WeakMap,tC=new WeakMap,tD=new WeakMap,tP=new WeakMap,tO=new WeakMap,tx=new WeakMap,tN=new WeakMap,tU=new WeakMap,tF=new WeakMap,tV=new WeakSet,tW=function(){nf(this,tB,t$).call(this)?nv(this,tC).start():nv(this,tC).stop()},tB=new WeakSet,t$=function(){return this.isConnected&&!this.mediaPaused&&!this.mediaLoading&&!this.mediaEnded&&this.mediaSeekableEnd>0&&function(e,t=3){if(e.checkVisibility)return e.checkVisibility({checkOpacity:!0,checkVisibilityCSS:!0});let i=e;for(;i&&t>0;){let e=getComputedStyle(i);if("0"===e.opacity||"hidden"===e.visibility||"none"===e.display)return!1;i=i.parentElement,t--}return!0}(this)},tH=new WeakMap,tj=new WeakSet,tK=function(e){var t;let i=(null!=(t=this.getAttribute("bounds")?$(this,`#${this.getAttribute("bounds")}`):this.parentElement)?t:this).getBoundingClientRect(),a=this.range.getBoundingClientRect(),r=e.offsetWidth,n=-(a.left-i.left-r/2),s=i.right-a.left-r/2;return{box:{width:r,min:n,max:s},bounds:i,range:a}},tG=new WeakSet,tq=function(e,t){let i=`${100*t}%`,{width:a,min:r,max:n}=e.box;if(!a)return i;if(!Number.isNaN(r)){let e=`calc(1 / var(--_range-width) * 100 * ${r}% + var(--media-box-padding-left))`;i=`max(${e}, ${i})`}if(!Number.isNaN(n)){let e=`calc(1 / var(--_range-width) * 100 * ${n}% - var(--media-box-padding-right))`;i=`min(${i}, ${e})`}return i},tY=new WeakSet,tz=function(e,t){let{width:i,min:a,max:r}=e.box,n=t*e.range.width;if(n<a+nv(this,tN)){let t=e.range.left-e.bounds.left-nv(this,tN);return`${n-i/2+t}px`}if(n>r-nv(this,tU)){let t=e.bounds.right-e.range.right-nv(this,tU);return`${n+i/2-t-e.range.width}px`}return 0},tQ=new WeakSet,tZ=function(e){let t=[...nv(this,tD)].some(t=>e.composedPath().includes(t));if(!this.dragging&&(t||!e.composedPath().includes(this))){nf(this,tX,tJ).call(this,null);return}let i=this.mediaSeekableEnd;if(!i)return;let a=j(this.shadowRoot,"#preview-rail"),r=j(this.shadowRoot,'[part~="preview-box"]'),n=nf(this,tj,tK).call(this,nv(this,tO)),s=(e.clientX-n.range.left)/n.range.width;s=Math.max(0,Math.min(1,s));let o=nf(this,tG,tq).call(this,n,s),l=nf(this,tY,tz).call(this,n,s);a.style.transform=`translateX(${o})`,a.style.setProperty("--_range-width",`${n.range.width}`),r.style.setProperty("--_box-shift",`${l}`),r.style.setProperty("--_box-width",`${n.box.width}px`),1>Math.abs(Math.round(nv(this,tP))-Math.round(s*i))&&s>.01&&s<.99||(ng(this,tP,s*i),nf(this,tX,tJ).call(this,nv(this,tP)))},tX=new WeakSet,tJ=function(e){this.dispatchEvent(new D.CustomEvent(i.MEDIA_PREVIEW_REQUEST,{composed:!0,bubbles:!0,detail:e}))},t0=new WeakSet,t1=function(){nv(this,tC).stop();let e=n_(this);this.dispatchEvent(new D.CustomEvent(i.MEDIA_SEEK_REQUEST,{composed:!0,bubbles:!0,detail:e}))},D.customElements.get("media-time-range")||D.customElements.define("media-time-range",class extends aG{constructor(){super(),nb(this,tV),nb(this,tB),nb(this,tj),nb(this,tG),nb(this,tY),nb(this,tQ),nb(this,tX),nb(this,t0),nb(this,tR,void 0),nb(this,tC,void 0),nb(this,tD,void 0),nb(this,tP,void 0),nb(this,tO,void 0),nb(this,tx,void 0),nb(this,tN,void 0),nb(this,tU,void 0),nb(this,tF,void 0),nb(this,tH,e=>{this.dragging||(f(e)&&(this.range.valueAsNumber=e),this.updateBar())}),this.container.appendChild(ny.content.cloneNode(!0)),this.shadowRoot.querySelector("#track").insertAdjacentHTML("afterbegin",'<div id="buffered" part="buffered"></div>'),ng(this,tD,this.shadowRoot.querySelectorAll('[part~="box"]')),ng(this,tO,this.shadowRoot.querySelector('[part~="preview-box"]')),ng(this,tx,this.shadowRoot.querySelector('[part~="current-box"]'));let e=getComputedStyle(this);ng(this,tN,parseInt(e.getPropertyValue("--media-box-padding-left"))),ng(this,tU,parseInt(e.getPropertyValue("--media-box-padding-right"))),ng(this,tC,new np(this.range,nv(this,tH),60))}static get observedAttributes(){return[...super.observedAttributes,s.MEDIA_PAUSED,s.MEDIA_DURATION,s.MEDIA_SEEKABLE,s.MEDIA_CURRENT_TIME,s.MEDIA_PREVIEW_IMAGE,s.MEDIA_PREVIEW_TIME,s.MEDIA_PREVIEW_CHAPTER,s.MEDIA_BUFFERED,s.MEDIA_PLAYBACK_RATE,s.MEDIA_LOADING,s.MEDIA_ENDED]}connectedCallback(){var e;super.connectedCallback(),this.range.setAttribute("aria-label",E.SEEK()),nf(this,tV,tW).call(this),ng(this,tR,this.getRootNode()),null==(e=nv(this,tR))||e.addEventListener("transitionstart",this)}disconnectedCallback(){var e;super.disconnectedCallback(),nf(this,tV,tW).call(this),null==(e=nv(this,tR))||e.removeEventListener("transitionstart",this),ng(this,tR,null)}attributeChangedCallback(e,t,i){super.attributeChangedCallback(e,t,i),t!=i&&(e===s.MEDIA_CURRENT_TIME||e===s.MEDIA_PAUSED||e===s.MEDIA_ENDED||e===s.MEDIA_LOADING||e===s.MEDIA_DURATION||e===s.MEDIA_SEEKABLE?(nv(this,tC).update({start:nI(this),duration:this.mediaSeekableEnd-this.mediaSeekableStart,playbackRate:this.mediaPlaybackRate}),nf(this,tV,tW).call(this),nA(this)):e===s.MEDIA_BUFFERED&&this.updateBufferedBar(),(e===s.MEDIA_DURATION||e===s.MEDIA_SEEKABLE)&&(this.mediaChaptersCues=nv(this,tF),this.updateBar()))}get mediaChaptersCues(){return nv(this,tF)}set mediaChaptersCues(e){var t;ng(this,tF,e),this.updateSegments(null==(t=nv(this,tF))?void 0:t.map(e=>({start:nI(this,e.startTime),end:nI(this,e.endTime)})))}get mediaPaused(){return q(this,s.MEDIA_PAUSED)}set mediaPaused(e){Y(this,s.MEDIA_PAUSED,e)}get mediaLoading(){return q(this,s.MEDIA_LOADING)}set mediaLoading(e){Y(this,s.MEDIA_LOADING,e)}get mediaDuration(){return K(this,s.MEDIA_DURATION)}set mediaDuration(e){G(this,s.MEDIA_DURATION,e)}get mediaCurrentTime(){return K(this,s.MEDIA_CURRENT_TIME)}set mediaCurrentTime(e){G(this,s.MEDIA_CURRENT_TIME,e)}get mediaPlaybackRate(){return K(this,s.MEDIA_PLAYBACK_RATE,1)}set mediaPlaybackRate(e){G(this,s.MEDIA_PLAYBACK_RATE,e)}get mediaBuffered(){let e=this.getAttribute(s.MEDIA_BUFFERED);return e?e.split(" ").map(e=>e.split(":").map(e=>+e)):[]}set mediaBuffered(e){if(!e){this.removeAttribute(s.MEDIA_BUFFERED);return}let t=e.map(e=>e.join(":")).join(" ");this.setAttribute(s.MEDIA_BUFFERED,t)}get mediaSeekable(){let e=this.getAttribute(s.MEDIA_SEEKABLE);if(e)return e.split(":").map(e=>+e)}set mediaSeekable(e){if(null==e){this.removeAttribute(s.MEDIA_SEEKABLE);return}this.setAttribute(s.MEDIA_SEEKABLE,e.join(":"))}get mediaSeekableEnd(){var e;let[,t=this.mediaDuration]=null!=(e=this.mediaSeekable)?e:[];return t}get mediaSeekableStart(){var e;let[t=0]=null!=(e=this.mediaSeekable)?e:[];return t}get mediaPreviewImage(){return z(this,s.MEDIA_PREVIEW_IMAGE)}set mediaPreviewImage(e){Q(this,s.MEDIA_PREVIEW_IMAGE,e)}get mediaPreviewTime(){return K(this,s.MEDIA_PREVIEW_TIME)}set mediaPreviewTime(e){G(this,s.MEDIA_PREVIEW_TIME,e)}get mediaEnded(){return q(this,s.MEDIA_ENDED)}set mediaEnded(e){Y(this,s.MEDIA_ENDED,e)}updateBar(){super.updateBar(),this.updateBufferedBar(),this.updateCurrentBox()}updateBufferedBar(){var e;let t;let i=this.mediaBuffered;if(!i.length)return;if(this.mediaEnded)t=1;else{let a=this.mediaCurrentTime,[,r=this.mediaSeekableStart]=null!=(e=i.find(([e,t])=>e<=a&&a<=t))?e:[];t=nI(this,r)}let{style:a}=j(this.shadowRoot,"#buffered");a.setProperty("width",`${100*t}%`)}updateCurrentBox(){if(!this.shadowRoot.querySelector('slot[name="current"]').assignedElements().length)return;let e=j(this.shadowRoot,"#current-rail"),t=j(this.shadowRoot,'[part~="current-box"]'),i=nf(this,tj,tK).call(this,nv(this,tx)),a=nf(this,tG,tq).call(this,i,this.range.valueAsNumber),r=nf(this,tY,tz).call(this,i,this.range.valueAsNumber);e.style.transform=`translateX(${a})`,e.style.setProperty("--_range-width",`${i.range.width}`),t.style.setProperty("--_box-shift",`${r}`),t.style.setProperty("--_box-width",`${i.box.width}px`),t.style.setProperty("visibility","initial")}handleEvent(e){switch(super.handleEvent(e),e.type){case"input":nf(this,t0,t1).call(this);break;case"pointermove":nf(this,tQ,tZ).call(this,e);break;case"pointerup":case"pointerleave":nf(this,tX,tJ).call(this,null);break;case"transitionstart":B(e.target,this)&&setTimeout(()=>nf(this,tV,tW).call(this),0)}}});let nw="placement",nT="bounds",nS=P.createElement("template");nS.innerHTML=`
  <style>
    :host {
      --_tooltip-background-color: var(--media-tooltip-background-color, var(--media-secondary-color, rgba(20, 20, 30, .7)));
      --_tooltip-background: var(--media-tooltip-background, var(--_tooltip-background-color));
      --_tooltip-arrow-half-width: calc(var(--media-tooltip-arrow-width, 12px) / 2);
      --_tooltip-arrow-height: var(--media-tooltip-arrow-height, 5px);
      --_tooltip-arrow-background: var(--media-tooltip-arrow-color, var(--_tooltip-background-color));
      position: relative;
      pointer-events: none;
      display: var(--media-tooltip-display, inline-flex);
      justify-content: center;
      align-items: center;
      box-sizing: border-box;
      z-index: var(--media-tooltip-z-index, 1);
      background: var(--_tooltip-background);
      color: var(--media-text-color, var(--media-primary-color, rgb(238 238 238)));
      font: var(--media-font,
        var(--media-font-weight, 400)
        var(--media-font-size, 13px) /
        var(--media-text-content-height, var(--media-control-height, 18px))
        var(--media-font-family, helvetica neue, segoe ui, roboto, arial, sans-serif));
      padding: var(--media-tooltip-padding, .35em .7em);
      border: var(--media-tooltip-border, none);
      border-radius: var(--media-tooltip-border-radius, 5px);
      filter: var(--media-tooltip-filter, drop-shadow(0 0 4px rgba(0, 0, 0, .2)));
      white-space: var(--media-tooltip-white-space, nowrap);
    }

    :host([hidden]) {
      display: none;
    }

    img, svg {
      display: inline-block;
    }

    #arrow {
      position: absolute;
      width: 0px;
      height: 0px;
      border-style: solid;
      display: var(--media-tooltip-arrow-display, block);
    }

    :host(:not([placement])),
    :host([placement="top"]) {
      position: absolute;
      bottom: calc(100% + var(--media-tooltip-distance, 12px));
      left: 50%;
      transform: translate(calc(-50% - var(--media-tooltip-offset-x, 0px)), 0);
    }
    :host(:not([placement])) #arrow,
    :host([placement="top"]) #arrow {
      top: 100%;
      left: 50%;
      border-width: var(--_tooltip-arrow-height) var(--_tooltip-arrow-half-width) 0 var(--_tooltip-arrow-half-width);
      border-color: var(--_tooltip-arrow-background) transparent transparent transparent;
      transform: translate(calc(-50% + var(--media-tooltip-offset-x, 0px)), 0);
    }

    :host([placement="right"]) {
      position: absolute;
      left: calc(100% + var(--media-tooltip-distance, 12px));
      top: 50%;
      transform: translate(0, -50%);
    }
    :host([placement="right"]) #arrow {
      top: 50%;
      right: 100%;
      border-width: var(--_tooltip-arrow-half-width) var(--_tooltip-arrow-height) var(--_tooltip-arrow-half-width) 0;
      border-color: transparent var(--_tooltip-arrow-background) transparent transparent;
      transform: translate(0, -50%);
    }

    :host([placement="bottom"]) {
      position: absolute;
      top: calc(100% + var(--media-tooltip-distance, 12px));
      left: 50%;
      transform: translate(calc(-50% - var(--media-tooltip-offset-x, 0px)), 0);
    }
    :host([placement="bottom"]) #arrow {
      bottom: 100%;
      left: 50%;
      border-width: 0 var(--_tooltip-arrow-half-width) var(--_tooltip-arrow-height) var(--_tooltip-arrow-half-width);
      border-color: transparent transparent var(--_tooltip-arrow-background) transparent;
      transform: translate(calc(-50% + var(--media-tooltip-offset-x, 0px)), 0);
    }

    :host([placement="left"]) {
      position: absolute;
      right: calc(100% + var(--media-tooltip-distance, 12px));
      top: 50%;
      transform: translate(0, -50%);
    }
    :host([placement="left"]) #arrow {
      top: 50%;
      left: 100%;
      border-width: var(--_tooltip-arrow-half-width) 0 var(--_tooltip-arrow-half-width) var(--_tooltip-arrow-height);
      border-color: transparent transparent transparent var(--_tooltip-arrow-background);
      transform: translate(0, -50%);
    }
    
    :host([placement="none"]) #arrow {
      display: none;
    }

  </style>
  <slot></slot>
  <div id="arrow"></div>
`;class nk extends D.HTMLElement{constructor(){if(super(),this.updateXOffset=()=>{var e,t;let i=this.placement;if("left"===i||"right"===i){this.style.removeProperty("--media-tooltip-offset-x");return}let r=getComputedStyle(this),n=null!=(e=$(this,"#"+this.bounds))?e:null!=(t=function(e){var t;let{MEDIA_CONTROLLER:i}=a,r=e.getAttribute(i);if(r)return null==(t=function(e){var t;let i=null==(t=null==e?void 0:e.getRootNode)?void 0:t.call(e);return i instanceof ShadowRoot||i instanceof Document?i:null}(e))?void 0:t.getElementById(r)}(this))?t:$(this,"media-controller");if(!n)return;let{x:s,width:o}=n.getBoundingClientRect(),{x:l,width:d}=this.getBoundingClientRect(),u=r.getPropertyValue("--media-tooltip-offset-x"),h=u?parseFloat(u.replace("px","")):0,c=r.getPropertyValue("--media-tooltip-container-margin"),m=c?parseFloat(c.replace("px","")):0,p=l-s+h-m,E=l+d-(s+o)+h+m;if(p<0){this.style.setProperty("--media-tooltip-offset-x",`${p}px`);return}if(E>0){this.style.setProperty("--media-tooltip-offset-x",`${E}px`);return}this.style.removeProperty("--media-tooltip-offset-x")},this.shadowRoot||(this.attachShadow({mode:"open"}),this.shadowRoot.appendChild(nS.content.cloneNode(!0))),this.arrowEl=this.shadowRoot.querySelector("#arrow"),Object.prototype.hasOwnProperty.call(this,"placement")){let e=this.placement;delete this.placement,this.placement=e}}static get observedAttributes(){return[nw,nT]}get placement(){return z(this,nw)}set placement(e){Q(this,nw,e)}get bounds(){return z(this,nT)}set bounds(e){Q(this,nT,e)}}D.customElements.get("media-tooltip")||D.customElements.define("media-tooltip",nk);let nM=e=>e.mediaMuted?0:e.mediaVolume,nL=e=>`${Math.round(100*e)}%`;D.customElements.get("media-volume-range")||D.customElements.define("media-volume-range",class extends aG{static get observedAttributes(){return[...super.observedAttributes,s.MEDIA_VOLUME,s.MEDIA_MUTED,s.MEDIA_VOLUME_UNAVAILABLE]}constructor(){super(),this.range.addEventListener("input",()=>{let e=this.range.value,t=new D.CustomEvent(i.MEDIA_VOLUME_REQUEST,{composed:!0,bubbles:!0,detail:e});this.dispatchEvent(t)})}connectedCallback(){super.connectedCallback(),this.range.setAttribute("aria-label",E.VOLUME())}attributeChangedCallback(e,t,i){super.attributeChangedCallback(e,t,i),(e===s.MEDIA_VOLUME||e===s.MEDIA_MUTED)&&(this.range.valueAsNumber=nM(this),this.range.setAttribute("aria-valuetext",nL(this.range.valueAsNumber)),this.updateBar())}get mediaVolume(){return K(this,s.MEDIA_VOLUME,1)}set mediaVolume(e){G(this,s.MEDIA_VOLUME,e)}get mediaMuted(){return q(this,s.MEDIA_MUTED)}set mediaMuted(e){Y(this,s.MEDIA_MUTED,e)}get mediaVolumeUnavailable(){return z(this,s.MEDIA_VOLUME_UNAVAILABLE)}set mediaVolumeUnavailable(e){Q(this,s.MEDIA_VOLUME_UNAVAILABLE,e)}})},5041:(e,t,i)=>{"use strict";i.d(t,{A:()=>o});let a=[["requestFullscreen","exitFullscreen","fullscreenElement","fullscreenEnabled","fullscreenchange","fullscreenerror"],["webkitRequestFullscreen","webkitExitFullscreen","webkitFullscreenElement","webkitFullscreenEnabled","webkitfullscreenchange","webkitfullscreenerror"],["webkitRequestFullScreen","webkitCancelFullScreen","webkitCurrentFullScreenElement","webkitCancelFullScreen","webkitfullscreenchange","webkitfullscreenerror"],["mozRequestFullScreen","mozCancelFullScreen","mozFullScreenElement","mozFullScreenEnabled","mozfullscreenchange","mozfullscreenerror"],["msRequestFullscreen","msExitFullscreen","msFullscreenElement","msFullscreenEnabled","MSFullscreenChange","MSFullscreenError"]],r=(()=>{if("undefined"==typeof document)return!1;let e=a[0],t={};for(let i of a)if(i?.[1]in document){for(let[a,r]of i.entries())t[e[a]]=r;return t}return!1})(),n={change:r.fullscreenchange,error:r.fullscreenerror},s={request:(e=document.documentElement,t)=>new Promise((i,a)=>{let n=()=>{s.off("change",n),i()};s.on("change",n);let o=e[r.requestFullscreen](t);o instanceof Promise&&o.then(n).catch(a)}),exit:()=>new Promise((e,t)=>{if(!s.isFullscreen){e();return}let i=()=>{s.off("change",i),e()};s.on("change",i);let a=document[r.exitFullscreen]();a instanceof Promise&&a.then(i).catch(t)}),toggle:(e,t)=>s.isFullscreen?s.exit():s.request(e,t),onchange(e){s.on("change",e)},onerror(e){s.on("error",e)},on(e,t){let i=n[e];i&&document.addEventListener(i,t,!1)},off(e,t){let i=n[e];i&&document.removeEventListener(i,t,!1)},raw:r};Object.defineProperties(s,{isFullscreen:{get:()=>!!document[r.fullscreenElement]},element:{enumerable:!0,get:()=>document[r.fullscreenElement]??void 0},isEnabled:{enumerable:!0,get:()=>!!document[r.fullscreenEnabled]}}),r||(s={isEnabled:!1});let o=s}}]);