import React, { Component } from 'react'
import screenfull from 'screenfull'

import packageJson from '@site/package.json'
import ReactPlayer from 'react-player'
import Duration from './Duration'
import appStyles from './app.module.css'

class App extends Component {

  state = {
    url: null,
    pip: false,
    playing: true,
    controls: false,
    light: false,
    volume: 0.8,
    muted: false,
    played: 0,
    loaded: 0,
    duration: 0,
    playbackRate: 1.0,
    loop: false
  }

  load = url => {
    this.setState({
      url,
      played: 0,
      loaded: 0,
      pip: false
    })
  }

  handlePlayPause = () => {
    this.setState({ playing: !this.state.playing })
  }

  handleStop = () => {
    this.setState({ url: null, playing: false })
  }

  handleToggleControls = () => {
    const url = this.state.url
    this.setState({
      controls: !this.state.controls,
      url: null
    }, () => this.load(url))
  }

  handleToggleLight = () => {
    this.setState({ light: !this.state.light })
  }

  handleToggleLoop = () => {
    this.setState({ loop: !this.state.loop })
  }

  handleVolumeChange = e => {
    this.setState({ volume: parseFloat(e.target.value) })
  }

  handleToggleMuted = () => {
    this.setState({ muted: !this.state.muted })
  }

  handleSetPlaybackRate = e => {
    this.setState({ playbackRate: parseFloat(e.target.value) })
  }

  handleOnPlaybackRateChange = (speed) => {
    this.setState({ playbackRate: parseFloat(speed) })
  }

  handleTogglePIP = () => {
    this.setState({ pip: !this.state.pip })
  }

  handlePlay = () => {
    console.log('onPlay')
    this.setState({ playing: true })
  }

  handleEnablePIP = () => {
    console.log('onEnablePIP')
    this.setState({ pip: true })
  }

  handleDisablePIP = () => {
    console.log('onDisablePIP')
    this.setState({ pip: false })
  }

  handlePause = () => {
    console.log('onPause')
    this.setState({ playing: false })
  }

  handleSeekMouseDown = e => {
    this.setState({ seeking: true })
  }

  handleSeekChange = e => {
    this.setState({ played: parseFloat(e.target.value) })
  }

  handleSeekMouseUp = e => {
    this.setState({ seeking: false })
    this.player.seekTo(parseFloat(e.target.value))
  }

  handleProgress = state => {
    console.log('onProgress', state)
    // We only want to update time slider if we are not currently seeking
    if (!this.state.seeking) {
      this.setState(state)
    }
  }

  handleEnded = () => {
    console.log('onEnded')
    this.setState({ playing: this.state.loop })
  }

  handleDuration = (duration) => {
    console.log('onDuration', duration)
    this.setState({ duration })
  }

  handleClickFullscreen = () => {
    screenfull.request(document.querySelector('.reactPlayer'))
  }

  renderLoadButton = (url, label) => {
    return (
      <button onClick={() => this.load(url)}>
        {label}
      </button>
    )
  }

  ref = player => {
    this.player = player
  }

  render () {
    const {
      url,
      playing,
      controls,
      light,
      volume,
      muted,
      loop,
      played,
      loaded,
      duration,
      playbackRate,
      pip
    } = this.state
    const SEPARATOR = ' · '
    const version = packageJson.version

    console.log('ref =========', this.ref.seekTo)

    return (
      <div className={appStyles.container}>

        <div className={appStyles.playerWrapperSection}>
          <ReactPlayer
            ref={this.ref} //使用ref调用播放器上的实例方法
            className="reactPlayer"
            url={url}
            pip={pip} //启用或禁用画中画模式；默认false
            playing={playing} //暂停或播放；默认false
            controls={controls} //显示本机播放器控件；默认false
            light={light} //设置为true仅显示视频缩略图，单击时会加载完整播放器？；默认false
            loop={loop} //循环播放媒体；默认false
            playbackRate={playbackRate} //设置播放器的播放速率；默认1
            volume={volume} //设置播放器的音量，介于0和之间1；默认null
            muted={muted} //将播放器静音；默认false
            onReady={() => console.log('onReady')} //当媒体加载并准备播放时调用。如果playing设置为true，媒体将立即播放
            onStart={() => console.log('onStart')} //当媒体开始播放时调用
            onPlay={this.handlePlay} //当媒体在暂停或缓冲后开始或恢复播放时调用
            onEnablePIP={this.handleEnablePIP} //启用画中画模式时调用
            onDisablePIP={this.handleDisablePIP} //禁用画中画模式时调用
            onPause={this.handlePause} //媒体暂停时调用
            onBuffer={() => console.log('onBuffer')} //当媒体开始缓冲时调用
            onPlaybackRateChange={this.handleOnPlaybackRateChange} //当播放器的播放速率更改时调用
            onSeek={e => console.log('onSeek', e)} //seconds当媒体使用参数进行搜索时调用
            onEnded={this.handleEnded} //当媒体播放完毕时调用
            onError={e => console.log('onError', e)} //尝试播放媒体时发生错误时调用
            onProgress={this.handleProgress} //回调包含played和loaded进度，并且playedSeconds和loadedSeconds以秒为单位◦ 例如{ played: 0.12, playedSeconds: 11.3, loaded: 0.34, loadedSeconds: 16.7 }
            onDuration={this.handleDuration} //包含媒体持续时间（以秒为单位）的回调
            onPlaybackQualityChange={e => console.log('onPlaybackQualityChange', e)} //当播放器的播放质量发生变化时调用
          />
        </div>

        <div className={appStyles.sectionVideo}>
          <table>
            <tbody>
            <tr>
              <th>YouTube</th>
              <td>
                {this.renderLoadButton('https://www.youtube.com/watch?v=oUFJJNQGwhk', 'Test A')}
                {this.renderLoadButton('https://www.youtube.com/watch?v=jNgP6d9HraI', 'Test B')}
                {this.renderLoadButton('https://www.youtube.com/playlist?list=PLogRWNZ498ETeQNYrOlqikEML3bKJcdcx', 'Playlist')}
              </td>
            </tr>
            <tr>
              <th>Files</th>
              <td>
                {this.renderLoadButton('https://test-videos.co.uk/vids/bigbuckbunny/mp4/h264/360/Big_Buck_Bunny_360_10s_1MB.mp4', 'mp4')}
                {this.renderLoadButton('https://test-videos.co.uk/vids/bigbuckbunny/webm/vp8/360/Big_Buck_Bunny_360_10s_1MB.webm', 'webm')}
                {this.renderLoadButton('https://filesamples.com/samples/video/ogv/sample_640x360.ogv', 'ogv')}
                {this.renderLoadButton('https://storage.googleapis.com/media-session/elephants-dream/the-wires.mp3', 'mp3')}
                <br/>
                {this.renderLoadButton('https://bitdash-a.akamaihd.net/content/MI201109210084_1/m3u8s/f08e80da-bf1d-4e3d-8899-f0f6155f6efa.m3u8', 'HLS (m3u8)')}
                {this.renderLoadButton('https://dash.akamaized.net/akamai/bbb_30fps/bbb_30fps_640x360_800k.mpd', 'DASH (mpd)')}
              </td>
            </tr>
            <tr>
              <th>Custom URL</th>
              <td>
                <input ref={input => { this.urlInput = input }} type="text" placeholder="Enter URL"/>
                <button onClick={() => this.setState({ url: this.urlInput.value })}>Load</button>
              </td>
            </tr>
            </tbody>
          </table>
        </div>

        <div className={`${appStyles.section} ${appStyles.sectionControl}`}>
          <table>
            <tbody>
            <tr>
              <th>播放</th>
              <td>
                <div className={appStyles.dropdown}>
                  <button className={appStyles.dropbtn}>控件</button>
                  <div className={appStyles.dropdownContent}>
                    <button onClick={this.handleStop}>停止</button>
                    <button onClick={this.handlePlayPause}>{playing ? '暂停' : '播放'}</button>
                    <button onClick={this.handleClickFullscreen}>全屏</button>
                    {light &&
                      <button onClick={() => this.player.showPreview()}>Show preview</button>}
                    {ReactPlayer.canEnablePIP(url) &&
                      <button onClick={this.handleTogglePIP}>{pip ? 'Disable PiP' : 'Enable PiP'}</button>}
                  </div>
                </div>
              </td>
            </tr>
            <tr>
              <th>倍速</th>
              <td>
                <button onClick={this.handleSetPlaybackRate} value={1}>1x</button>
                <button onClick={this.handleSetPlaybackRate} value={1.5}>1.5x</button>
                <button onClick={this.handleSetPlaybackRate} value={2}>2x</button>
              </td>
            </tr>
            <tr>
              <th>进度条</th>
              <td>
                <input
                  type="range" min={0} max={0.999999} step="any"
                  value={played}
                  onMouseDown={this.handleSeekMouseDown}
                  onChange={this.handleSeekChange}
                  onMouseUp={this.handleSeekMouseUp}
                />
              </td>
            </tr>
            <tr>
              <th>声音</th>
              <td>
                <input type="range" min={0} max={1} step="any" value={volume} onChange={this.handleVolumeChange}/>
              </td>
            </tr>
            <tr>
              <th>
                <label htmlFor="controls">播放控件</label>
              </th>
              <td>
                <input id="controls" type="checkbox" checked={controls} onChange={this.handleToggleControls}/>
                <em className={appStyles.em}>&nbsp; 注：将会重新加载</em>
              </td>
            </tr>
            <tr>
              <th>
                <label htmlFor="muted">静音</label>
              </th>
              <td>
                <input id="muted" type="checkbox" checked={muted} onChange={this.handleToggleMuted}/>
              </td>
            </tr>
            <tr>
              <th>
                <label htmlFor="loop">循环播放</label>
              </th>
              <td>
                <input id="loop" type="checkbox" checked={loop} onChange={this.handleToggleLoop}/>
              </td>
            </tr>
            <tr>
              <th>
                <label htmlFor="light">Light mode</label>
              </th>
              <td>
                <input id="light" type="checkbox" checked={light} onChange={this.handleToggleLight}/>
              </td>
            </tr>
            <tr>
              <th>播放进度条</th>
              <td>
                <progress max={1} value={played}/>
              </td>
            </tr>
            <tr>
              <th>加载进度条</th>
              <td>
                <progress max={1} value={loaded}/>
              </td>
            </tr>
            </tbody>
          </table>
        </div>

        <div className={`${appStyles.section} ${appStyles.sectionState}`}>
            <table>
              <tbody>
              <tr>
                <th>url</th>
                <td className={!url ? appStyles.faded : ''}>
                  {(url instanceof Array ? 'Multiple' : url) || 'null'}
                </td>
              </tr>
              <tr>
                <th>状态</th>
                <td>{playing ? 'true' : 'false'}</td>
              </tr>
              <tr>
                <th>声音</th>
                <td>{(volume * 100).toFixed(0)}</td>
              </tr>
              <tr>
                <th>倍速</th>
                <td>{playbackRate}</td>
              </tr>
              <tr>
                <th>播放进度</th>
                <td>{played.toFixed(3)}</td>
              </tr>
              <tr>
                <th>加载进度</th>
                <td>{loaded.toFixed(3)}</td>
              </tr>
              <tr>
                <th>总时长</th>
                <td><Duration seconds={duration}/></td>
              </tr>
              <tr>
                <th>播放时长</th>
                <td><Duration seconds={duration * played}/></td>
              </tr>
              <tr>
                <th>剩余时长</th>
                <td><Duration seconds={duration * (1 - played)}/></td>
              </tr>
              </tbody>
            </table>
          </div>

        <div className={appStyles.footer}>
          Version <strong>{version}</strong>
          {SEPARATOR}
          <a href="https://github.com/CookPete/react-player">GitHub</a>
          {SEPARATOR}
          <a href="https://www.npmjs.com/package/react-player">npm</a>
        </div>
      </div>
    )
  }
}

export default App
