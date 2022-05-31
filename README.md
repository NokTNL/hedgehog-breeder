# Hedgehog Breeder

A hedgehog incubator where you can register as a breeder and breed some hedgehogs! 🦔🦔🦔🦔 (they have special hedgehoooogy accent though)

- Preview: https://noktnl.github.io/hedgehog-breeder/
- [Project Plan](https://rumbling-sleep-60c.notion.site/Hedgehog-breeder-Plan-086f64102b8f4aed95c5f9a1bfc4dd20)
- [Project Kanban](https://www.notion.so/4909215f468c479f95ed2ea53c07df7f?v=294b53b61a544c2f9785ab8515274073)

## Techinical Aspects

Files are grouped according to features [(the "ducks" pattern)](https://redux.js.org/style-guide/#structure-files-as-feature-folders-with-single-file-logic). The `app` folder contains the main `App`.

- **State management:** Redux + RTK for global states, `useContext` + `useImmerReducer` + `useState` for more local states
- **Data fetching**: Built a fetch client with vanilla JavaScript `fetch` (see the `fetch` folder) and used inside action creator thunks.
- **Styling**: vainlla CSS (flexbox, grid, animations) with full responsiveness, as well as some SVGs for aesthetics. CSS injected with Styled Components,

The repo was initiated from my own [React Boilerplate](https://github.com/NokTNL/react-boilerplate) to save some precious time on downloading packages.

## Tests

Manual testing was performed. See the `src/test` folder for more explanation.
