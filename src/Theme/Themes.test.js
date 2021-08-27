import themes from './Themes'

describe('Themes', () => {
  it('should return an object', () => {
    expect(typeof themes).toBe('object')
  })

  it('should return an object with 3 themes', () => {
    expect(Object.keys(themes).length).toBe(3)
  })
})
