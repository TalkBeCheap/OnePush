import { bark } from './token'
import { Bark } from '../src/senders'

/**
 * Dummy test
 */
describe('Bark test', () => {
  it('works if true is truthy', () => {
    expect(true).toBeTruthy()
  })

  it('Bark is instantiable', () => {
    expect(bark).toBeInstanceOf(Bark)
  })

  it('Bark.help is string', () => {
    expect(bark.help).toEqual('Bark help: https://apps.apple.com/us/app/bark-customed-notifications/id1403753865')
  })

  it('Bark.webhook is string', () => {
    expect(bark.webhook).toMatch(/https:\/\/api\.day\.app\/[a-zA-Z0-9]{4}/)
  })

  it('Bark.notify is function', () => {
    expect(bark.notify).toBeInstanceOf(Function)
  })

  it('Bark.notify text', () => {
    return bark.notify({ text: '我的世界不能没有你' }
    ).then((r: any) => {
      expect(r.code).toEqual(200)
    })
  })

  it('Bark.notify header', () => {
    return bark.notify({ text: '我的世界不能没有你', header: '标题' }
    ).then((r: any) => {
      expect(r.code).toEqual(200)
    }).catch((e: any) => {
      console.log(e)
    })
  })

  it('Bark.notify copy', () => {
    return bark.notify({ text: '我的世界不能没有你', copy: '复制' }
    ).then((r: any) => {
      expect(r.code).toEqual(200)
    }).catch((e: any) => {
      console.log(e)
    })
  })

  it('Bark.notify group', () => {
    return bark.notify({ text: '我的世界不能没有你', group: '分组' }
    ).then((r: any) => {
      expect(r.code).toEqual(200)
    }).catch((e: any) => {
      console.log(e)
    })
  })

  it('Bark.notify icon', () => {
    return bark.notify({
        text: '我的世界不能没有你',
        icon: 'https://i.stack.imgur.com/djEOC.png?s=64&g=1'
      }
    ).then((r: any) => {
      expect(r.code).toEqual(200)
    }).catch((e: any) => {
      console.log(e)
    }).catch((e: any) => {
      console.log(e)
    })
  })

  it('Bark.notify sound', () => {
    return bark.notify({ text: '我的世界不能没有你', sound: 'minuet' }
    ).then((r: any) => {
      expect(r.code).toEqual(200)
    }).catch((e: any) => {
      console.log(e)
    })
  })

  it('Bark.notify isArchive', () => {
    return bark.notify({ text: '我的世界不能没有你', isArchive: 1 }
    ).then((r: any) => {
      expect(r.code).toEqual(200)
    }).catch((e: any) => {
      console.log(e)
    })
  })

  it('Bark.notify level', () => {
    return bark.notify({ text: '我的世界不能没有你', level: 'active' }
    ).then((r: any) => {
      expect(r.code).toEqual(200)
    }).catch((e: any) => {
      console.log(e)
    })
  })

  it('Bark.notify url', () => {
    return bark.notify({ text: '我的世界不能没有你', url: 'https://www.baidu.com' }
    ).then((r: any) => {
      expect(r.code).toEqual(200)
    }).catch((e: any) => {
      console.log(e)
    })
  })

  it('Bark.notify badge', () => {
    return bark.notify({ text: '我的世界不能没有你', badge: 100 }
    ).then((r: any) => {
      expect(r.code).toEqual(200)
    }).catch((e: any) => {
      console.log(e)
    })
  })
})
