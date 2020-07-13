export default function reducer(state, action) {
  switch (action.type) {
    case 'SET_COUNTRIES': {
      return { ...state, countries: action.payload }
    }
    case 'SET_COUNTRY_BY_NAME': {
      let list
      if (state.filterByRegion !== '') {
        list = state.countriesByRegion
      } else {
        list = state.countries
      }

      const countriesByName = list.filter(country => country.name.toLowerCase().includes(action.payload.toLowerCase()))

      return { ...state, countriesByName}
    }
    case 'FILTER_BY_REGION': {
      const { regionSelected } = action.payload

      if (regionSelected === '') {
        return { ...state, countriesByRegion: [], filterByRegion: '' }
      }

      const countriesByRegion = state.countries.filter(country => country.region === regionSelected)

      return { ...state, countriesByRegion, filterByRegion: regionSelected }
    }
    default: {
      return state
    }
  }
}
