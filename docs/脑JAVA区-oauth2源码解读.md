

_### 请求token源码解读


+ 访问：http://localhost:9992/oauth/token?client_id=hmh-cloud-system&client_secret=123456&grant_type=password&username=admin&password=1234&redirect_uri=http://www.taobao.com


>进入AbstractAuthenticationProcessingFilter的doFilter方法

>

>> 调用实现类ClientCredentialsTokenEndpointFilter的attemptAuthentication方法进行验证

>>

>> >通过clientId和clientSecret构建未认证的UsernamePasswordAuthenticationToken对象，调用authenticate方法对其进行认证

>>

```java

>> //ClientCredentialsTokenEndpointFilter类的attemptAuthentication方法

>> @Override

>> public Authentication attemptAuthentication(HttpServletRequest request, HttpServletResponse response){

>>     String clientId = request.getParameter("client_id");

>>     String clientSecret = request.getParameter("client_secret");

>>     // If the request is already authenticated we can assume that this

>>     // filter is not needed

>>     Authentication authentication = SecurityContextHolder.getContext().getAuthentication();

>>     if (authentication != null && authentication.isAuthenticated()) {

>>         return authentication;

>>     }

>>     UsernamePasswordAuthenticationToken authRequest = new UsernamePasswordAuthenticationToken(clientId,clientSecret);

>>     return this.getAuthenticationManager().authenticate(authRequest);

>> }

```

>>

>> >进入ProviderManager类的authentication方法中对AuthenticationProvider列表进行遍历，直到获得可以匹配传入的UsernamePasswordAuthenticationToken类的AuthenticationProvider类，即DaoAuthenticationProvider。

>> >

```java

>> >//ProviderManager类的authentication方法

>> >public Authentication authenticate(Authentication authentication)

>> >    throws AuthenticationException {

>> >    Class<? extends Authentication> toTest = authentication.getClass();

>> >    for (AuthenticationProvider provider : getProviders()) {

>> >        if (!provider.supports(toTest)) {

>> >            continue;

>> >        }

>> >        try {

>> >            result = provider.authenticate(authentication);

>> >            if (result != null) {

>> >                copyDetails(authentication, result);

>> >                break;

>> >            }

>> >        }

>> >    }

>> >    if (result != null) {

>> >        return result;

>> >    }

>> >}

```

>> >

>> >进入AbstractUserDetailsAuthenticationProvider的authenticate方法

>> >

```java

>> >public Authentication authenticate(Authentication authentication){

>> >    // Determine username

>> >    String username = (authentication.getPrincipal() == null) ? "NONE_PROVIDED": authentication.getName();

>> >    UserDetails user = this.userCache.getUserFromCache(username);

>> >    if (user == null) {

>> >        try {

>> >            user = retrieveUser(username,(UsernamePasswordAuthenticationToken)authentication);

>> >        }

>> >    }

>> >    return createSuccessAuthentication(principalToReturn, authentication, user);

>> >}

```

>> >

>> >进入DaoAuthenticationProvider的retrieveUser方法调用loadUserByUsername方法

>> >

```java

>> >@Override

>> >protected final UserDetails retrieveUser(String username, UsernamePasswordAuthenticationToken authentication){

>> >    try {

>> >        UserDetails loadedUser = this.getUserDetailsService().loadUserByUsername(username);

>> >        return loadedUser;

>> >    }

>> >}

```

>> >

>> >返回AbstractUserDetailsAuthenticationProvider的authenticate方法

>> >

>> >调用 createSuccessAuthentication() 返回认证信息

>> >

```java

>> >//AbstractUserDetailsAuthenticationProvider的createSuccessAuthentication方法

>> >protected Authentication createSuccessAuthentication(Object principal,

>> >Authentication authentication, UserDetails user) {

>> >    //在该方法中创建已认证的UsernamePasswordAuthenticationToken（将authenticated属性设置为true），并设置UserDetails后返回

>> >    UsernamePasswordAuthenticationToken result = new UsernamePasswordAuthenticationToken(principal, authentication.getCredentials(),authoritiesMapper.mapAuthorities(user.getAuthorities()));

>> >    result.setDetails(authentication.getDetails());

>> >    return result;

>> >}

```

>> >

>> >最后返回调用AbstractAuthenticationProcessingFilter的successfulAuthentication方法

>> >

>> >在其父类的successfulAuthentication方法中将已认证的UsernamePasswordAuthenticationToken放置到安全上下文中

>> >

```java

>> >//ClientCredentialsTokenEndpointFilter的父类AbstractAuthenticationProcessingFilter的successfulAuthentication方法

>> >protected void successfulAuthentication(HttpServletRequest request,

>> >HttpServletResponse response, FilterChain chain, Authentication authResult) {

>> >    SecurityContextHolder.getContext().setAuthentication(authResult);

>> >    rememberMeServices.loginSuccess(request, response, authResult);

>> >    // Fire event

>> >    if (this.eventPublisher != null) {

>> >        eventPublisher.publishEvent(new InteractiveAuthenticationSuccessEvent(

>> >            authResult, this.getClass()));

>> >    }

>> >    successHandler.onAuthenticationSuccess(request, response, authResult);

>> >}

```

>> >

>> >>最后调用下一级过滤器。因为已经设置到安全上下文中，所以过滤器放行，请求最终到达TokenEndpoint类的/oauth/token接口中




### 生成token源码解读




+ 进入到了TokenEndpoint类的/oauth/token接口


```java

@FrameworkEndpoint

public class TokenEndpoint extends AbstractEndpoint {

    @RequestMapping(value = "/oauth/token", method=RequestMethod.POST)

    public ResponseEntity<OAuth2AccessToken> postAccessToken(Principal principal, @RequestParam Map<String, String> parameters) {

        // 1. 从 principal 中获取 clientId, 进而 load client 信息

        String clientId = getClientId(principal);

        ClientDetails authenticatedClient = getClientDetailsService().loadClientByClientId(clientId);

        // 2. 从 parameters 中拿 clientId、scope、grantType 组装 TokenRequest

        TokenRequest tokenRequest = getOAuth2RequestFactory().createTokenRequest(parameters, authenticatedClient);

        // 3. 校验 client 信息

        if (clientId != null && !clientId.equals("")) {

            if (!clientId.equals(tokenRequest.getClientId())) {

                // 双重校验: 确保从 principal 拿到的 client 信息与根据 parameters 得到的 client 信息一致

                throw new InvalidClientException("Given client ID does not match authenticated client");

            }

        }

        if (authenticatedClient != null) {

            oAuth2RequestValidator.validateScope(tokenRequest, authenticatedClient);

        }

        // 4. 根据 grantType 设置 TokenRequest 的 scope。

        // 授权类型有: password 模式、authorization_code 模式、refresh_token 模式、client_credentials 模式、implicit 模式

        if (!StringUtils.hasText(tokenRequest.getGrantType())) {

            throw new InvalidRequestException("Missing grant type");

        }

        if (tokenRequest.getGrantType().equals("implicit")) {

            throw new InvalidGrantException("Implicit grant type not supported from token endpoint");

        }

        // 如果是授权码模式, 则清空从数据库查询到的 scope。 因为授权请求过程会确定 scope, 所以没必要传。

        if (isAuthCodeRequest(parameters)) {

            if (!tokenRequest.getScope().isEmpty()) {

                logger.debug("Clearing scope of incoming token request");

                tokenRequest.setScope(Collections.<String> emptySet());

            }

        }

        // 如果是刷新 Token 模式, 解析并设置 scope

        if (isRefreshTokenRequest(parameters)) {

            // A refresh token has its own default scopes, so we should ignore any added by the factory here.

            tokenRequest.setScope(OAuth2Utils.parseParameterList(parameters.get(OAuth2Utils.SCOPE)));

        }

        // 5. 通过令牌授予者获取 token

        OAuth2AccessToken token = getTokenGranter().grant(tokenRequest.getGrantType(), tokenRequest);

        if (token == null) {

            throw new UnsupportedGrantTypeException("Unsupported grant type: " + tokenRequest.getGrantType());

        }

        return getResponse(token);

    }

}

```


+ 各授权模式对应的 TokenGranter


| 实现类                            | 对应的授权模式  |

| --------------------------------- | --------------- |

| AuthorizationCodeTokenGranter     | 授权码模式      |

| ClientCredentialsTokenGranter     | 客户端模式      |

| ImplicitTokenGranter              | implicit 模式   |

| RefreshTokenGranter               | 刷新 token 模式 |

| ResourceOwnerPasswordTokenGranter | 密码模式        |

|                                   |                 |


>通过getTokenGranter方法获取AuthorizationServerEndpointsConfigurer，以tokenRequest作为参数，调用grant方法获取token

>

>在该方法中调用了CompositeTokenGranter类的grant方法，

>

>CompositeTokenGranter的属性`List<TokenGranter>`中包含了如下5种授权模式。

>

```java

>//CompositeTokenGranter类的grant方法

>public OAuth2AccessToken grant(String grantType, TokenRequest tokenRequest) {

>for (TokenGranter granter : tokenGranters) {

>   OAuth2AccessToken grant = granter.grant(grantType, tokenRequest);

>   if (grant!=null) {

>       return grant;

>   }

>}

>return null;

>}

```

>

>遍历`List<TokenGranter>`寻找合适的TokenGranter，调用grant方法返回生成的OAuth2AccessToken。其子类继承了grant方法，判断每个子类的grantType属性是否和请求的grantType一致，最终匹配到**ResourceOwnerPasswordTokenGranter**。

>

```java

>//AbstractTokenGranter类的grant，getAccessToken和方法

>public OAuth2AccessToken grant(String grantType, TokenRequest tokenRequest) {

>if (!this.grantType.equals(grantType)) {

>   return null;

>}

>String clientId = tokenRequest.getClientId();

>ClientDetails client = clientDetailsService.loadClientByClientId(clientId);

>validateGrantType(grantType, client);

>if (logger.isDebugEnabled()) {

>   logger.debug("Getting access token for: " + clientId);

>}

>return getAccessToken(client, tokenRequest);

>}

>protected OAuth2AccessToken getAccessToken(ClientDetails client, TokenRequest tokenRequest) {

>return tokenServices.createAccessToken(getOAuth2Authentication(client, tokenRequest));

>}

```

>

>> createAccessToken方法的参数是OAuth2Authentication，通过getOAuth2Authentication方法获得，ResourceOwnerPasswordTokenGranter重写了父类的该方法

>>

```java

>> @Override

>> protected OAuth2Authentication getOAuth2Authentication(ClientDetails client, TokenRequest tokenRequest) {

>>  Map<String, String> parameters = new LinkedHashMap<String, String>(tokenRequest.getRequestParameters());

>>  String username = parameters.get("username");

>>  String password = parameters.get("password");

>>  // Protect from downstream leaks of password

>>  parameters.remove("password");

>>  Authentication userAuth = new UsernamePasswordAuthenticationToken(username, password);

>>  ((AbstractAuthenticationToken) userAuth).setDetails(parameters);

>>  try {

>>      userAuth = authenticationManager.authenticate(userAuth);

>>  }

>>  if (userAuth == null || !userAuth.isAuthenticated()) {

>>      throw new InvalidGrantException("Could not authenticate user: " + username);

>>  }

>>  OAuth2Request storedOAuth2Request = getRequestFactory().createOAuth2Request(client, tokenRequest);		

>>  return new OAuth2Authentication(storedOAuth2Request, userAuth);

>> }

```

>>

>> 调用AuthorizationServerTokenServices的子类DefaultTokenServices的createAccessToken方法生成OAuth2AccessToken。

>>

>> 该方法使用了tokenStore.getAccessToken(authentication)来获取的token。如果getAccessToken返回的token是null，则直接创建新的token；如果getAccessToken返回了持久化的token，则判断token是否过期，如果未过期则根据OAuth2Authentication 信息重新存储token以防信息变更

>>

>> >在DefaultTokenServices的createAccessToken方法中创建DefaultOAuth2AccessToken 并将expiration、refreshToken、scopes等信息存储到其中，得到token

>> >

```java

>> >//DefaultTokenServices类

>> >private OAuth2AccessToken createAccessToken(OAuth2Authentication authentication, OAuth2RefreshToken refreshToken) {

>> >String tokenValue = new String(Base64.encodeBase64URLSafe(DEFAULT_TOKEN_GENERATOR.generateKey()),  US_ASCII);

>> >DefaultOAuth2AccessToken token = new DefaultOAuth2AccessToken(tokenValue);

>> >int validitySeconds = getAccessTokenValiditySeconds(authentication.getOAuth2Request());

>> >if (validitySeconds > 0) {

>> >   token.setExpiration(new Date(System.currentTimeMillis() + (validitySeconds * 1000L)));

>> >}

>> >token.setRefreshToken(refreshToken);

>> >token.setScope(authentication.getOAuth2Request().getScope());

>> >return accessTokenEnhancer != null ? accessTokenEnhancer.enhance(token, authentication) : token;

>> >}

```

>> >

>> >>在最后会通过accessTokenEnhancer的enhance方法对该token进行强化

>> >>

```java

>> >>public class TokenEnhancerChain implements TokenEnhancer {

>> >>private List<TokenEnhancer> delegates = Collections.emptyList();

>> >>/**

>> >>    * @param delegates the delegates to set

>> >>    */

>> >>   public void setTokenEnhancers(List<TokenEnhancer> delegates) {

>> >>       this.delegates = delegates;

>> >>   }

>> >>   /**

>> >>    * Loop over the {@link #setTokenEnhancers(List) delegates} passing the result into the next member of the chain.

>> >>    */

>> >>   public OAuth2AccessToken enhance(OAuth2AccessToken accessToken, OAuth2Authentication authentication) {

>> >>       OAuth2AccessToken result = accessToken;

>> >>       for (TokenEnhancer enhancer : delegates) {

>> >>           result = enhancer.enhance(result, authentication);

>> >>       }

>> >>       return result;

>> >>   }

>> >>}

```

>> >>

>> >>此处会遍历`List<TokenEnhancer>`寻找合适的 TokenEnhancer ，并调用enhance方法对OAuth2AccessToken 进行加强。

>> >>

>> >>>最后在TokenEndpoint类中调用getResponse方法将OAuth2AccessToken 设置到返回参数中

>> >>>

```java

>> >>>//TokenEndpoint类的getResponse方法

>> >>>private ResponseEntity<OAuth2AccessToken> getResponse(OAuth2AccessToken accessToken) {

>> >>>    HttpHeaders headers = new HttpHeaders();

>> >>>    headers.set("Cache-Control", "no-store");

>> >>>    headers.set("Pragma", "no-cache");

>> >>>    headers.set("Content-Type", "application/json;charset=UTF-8");

>> >>>    return new ResponseEntity<OAuth2AccessToken>(accessToken, headers, HttpStatus.OK);

>> >>>}

```




<img src="https://hayes-typora.oss-cn-shenzhen.aliyuncs.com/%E7%94%9F%E6%88%90token%E6%B5%81%E7%A8%8B%E5%9B%BE.png" width="50%" />




### 验证token流程_


