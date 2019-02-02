export const setAccessToken = (accessToken: string) => {
  return {
    type: 'SET_ACCESS_TOKEN',
    accessToken
  }
}
