import * as Mock from './mock'
jest.mock('./mock')
describe('myFunc', () => {
  it('should be mocked', () => {
    Mock.myFunc.mockReturnValue('Gotcha!!')
    expect(Mock.myFunc()).toEqual('Gotcha!!')
  })
})
