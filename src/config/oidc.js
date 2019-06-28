export const oidcSettings = {
  authority: 'https://unity.zih.tu-dresden.de:2443/oauth2',
  client_id: 'oauth-client',
  redirect_uri: 'https://www.test.gerdi.org/callback/oidc-callback',
  response_type: 'id_token',
  scope: 'openid profile',
  automaticSilentRenew: true,
  silent_redirect_uri: 'https://www.test.gerdi.org/callback/silent-renew-oidc.html',
  post_logout_redirect_uri: 'https://www.test.gerdi.org/'
}
