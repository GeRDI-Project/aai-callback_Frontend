export const oidcSettings = {
  authority: 'https://www.test.gerdi.org/admin/auth/realms/master',
  client_id: 'test',
  redirect_uri: 'https://www.test.gerdi.org/callback/oidc-callback',
  response_type: 'id_token token',
  scope: 'openid profile',
  automaticSilentRenew: true,
  silent_redirect_uri: 'https://www.test.gerdi.org/callback/silent-renew-oidc.html',
  post_logout_redirect_uri: 'https://www.test.gerdi.org'
}
