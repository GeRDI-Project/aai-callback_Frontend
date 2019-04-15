export const oidcSettings = {
  authority: 'https://test.gerdi.org/admin/auth/realms/master',
  client_id: 'test',
  redirect_uri: 'https://test.gerdi.org/callback/oidc-callback',
  response_type: 'id_token token roles',
  scope: 'openid email',
  automaticSilentRenew: true,
  silent_redirect_uri: 'https://test.gerdi.org/callback/silent-renew-oidc.html'
}
