const getters = {
  theme: state => state.page.screenTheme,
  title: state => state.page.templateConfig.title || state.page.templateConfig.projectName
}

export default getters
