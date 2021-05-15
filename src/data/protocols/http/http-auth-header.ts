export interface HttpAuthHeader {
  getAuthToken: () => string | null;
}