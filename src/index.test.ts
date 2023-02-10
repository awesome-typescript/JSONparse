import { JSONParse } from '.'

describe('json-parse', () => {
  test('json-parse', async () => {
    const value = JSONParse('[{ "name": 1 }]')

    expect(value).toEqual([{ name: 1 }])
  })

  test('json-parse - 2', async () => {
    const value = JSONParse<{ name: number }>([{ name: 1 }])

    expect(value).toEqual([{ name: 1 }])
  })

  test('json-parse - 3', async () => {
    const value = JSONParse(1)

    expect(value).toEqual(1)
  })

  test('json-parse - 4', async () => {
    const value = JSONParse('1')

    expect(value).toEqual('1')
  })

  test('json-parse - 5', async () => {
    const value = JSONParse(true)

    expect(value).toEqual(true)
  })

  test('json-parse - 6', async () => {
    const value = JSONParse(false)

    expect(value).toEqual(false)
  })

  test('json-parse - 7', async () => {
    const value = JSONParse(null)

    expect(value).toBeNull()
  })

  test('json-parse - 8', async () => {
    const value = JSONParse(undefined)

    expect(value).toBeUndefined()
  })
})
