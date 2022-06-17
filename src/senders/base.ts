export const axios = require('axios').default

export default class BaseSender {
  webhook: string = ''
  DocURL: string = ''
  name: string | undefined = 'BaseSender'
  protected readonly method: string = 'post'

  // constructor(webhook: string) {
  //   this.webhook = webhook
  // }

  get help() {
    return `${this.name} help: ${this.DocURL}`
  }


  /**
   * 利用axios发送请求
   * @param data
   */
  async _post(data: any): Promise<any> {
    const http = axios.create({
        method: this.method
      }
    )
    try {
      const response = await http(this.webhook, {
        data: JSON.stringify(data),
        headers: {
          'Content-Type': 'application/json; charset=utf-8',
          'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.149 Safari/537.36'
        }
      })
      return response.data
    } catch (e) {
      console.log(e)
    }
  }
}
