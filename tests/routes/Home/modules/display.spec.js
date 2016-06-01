import reducer, { initialState } from 'routes/Home/modules/display'

describe('(Redux) display', () => {
  describe('(Reducer)', () => {
    it('sets up initial state', () => {
      expect(reducer(undefined, {})).to.eql(initialState)
    })
  })
})
