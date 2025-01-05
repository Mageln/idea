const getRouteParams = <T extends Record<string, boolean>>(object: T) => {
  return Object.keys(object).reduce((acc, key) => ({ ...acc, [key]: `:${key}` }), {}) as Record<keyof T, string>
}

export const getAllIdeaRoute = () => '/'

export const viewIdeaRouteParams = getRouteParams({ idea: true })
export type ViewIdeaRouteParams = typeof viewIdeaRouteParams
export const getViewIdeaRoute = ({ idea }: ViewIdeaRouteParams) => `/ideas/${idea}`
export const getSignUpRoute = () => "/sign-up"

export const getNewIdeaRoute = () => `ideas/new`
