import BaseSender, { axios } from './base'

type BarkProvider = {
  text: string
  header?: string
  sound?: string
  isArchive?: 1 | number
  icon?: string
  group?: string
  level?: 'active' | 'timeSensitive' | 'passive'
  url?: string
  copy?: string
  badge?: number
  autoCopy?: 1 | number
}

export default class Bark extends BaseSender {
  webhook: string = 'https://api.day.app/'
  DocURL: string = 'https://apps.apple.com/us/app/bark-customed-notifications/id1403753865'
  name: string = 'Bark'
  protected readonly method: string = 'post'

  /**
   * @description Bark构造函数
   * @param token Bark APP Token
   */
  constructor(token: string) {
    super()
    this.webhook = `${this.webhook}${token}`
  }

  /**
   * @description 发送文本消息
   * @param text 推送消息内容
   * @param header 推送消息标题
   * @param copy 自动复制
   * @param group 分组推送
   * @param icon 自定义推送消息图标 仅支持 IOS15 以上
   * @param badge
   * @param level API时效性
   *    active: 当前消息会立即推送给用户，并且会更新角标
   *    timeSensitive: 当前消息会推送给用户，可在专注模式下通知
   *    passive: 当前消息会推送给用户，不会亮屏通知
   * @param sound
   * @param isArchive 值为 1 的时候是否归档
   * @param url 通知跳转URL链接
   */
  async notify(
    { text, header, copy, group, icon, badge, level, sound, isArchive, url }: BarkProvider
  ): Promise<any> {
    let encodeText
    // @ts-ignore
    if (header) {
      encodeText = encodeURIComponent(header) + '/' + encodeURIComponent(text)
    } else {
      encodeText = encodeURIComponent(text)
    }
    const URL = this.webhook + '/' + `${encodeText}`
    const data = {
      copy: copy,
      group: group,
      icon: icon,
      badge: badge,
      level: level,
      sound: sound,
      isArchive: isArchive
    }
    // console.log(data)
    try {
      const response = await axios.post(URL, null, {
        params: data,
        headers: {
          'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.149 Safari/537.36'
        }
      })
      return response.data
    } catch (e) {
      console.log(e)
    }
  }

}
