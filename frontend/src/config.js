const config = {
  STRIPE_KEY: "pk_test_51M1c3bEric9PCEnP9Rk4TMQpw3LJdXnNrvHLIZMVjE854pAcpWHAHcQkoLSoL2tNZ23VYTUF2V622uzJM2RVTRV400FNFolB4S",
  SENTRY_DSN: "https://47d92315228f4476873a1211b06ef766@o4504143044411392.ingest.sentry.io/4504143067611136",
  MAX_ATTACHMENT_SIZE: 5000000,
  // Backend config
  s3: {
    REGION: process.env.REACT_APP_REGION,
    BUCKET: process.env.REACT_APP_BUCKET,
  },
  apiGateway: {
    REGION: process.env.REACT_APP_REGION,
    URL: process.env.REACT_APP_API_URL,
  },
  cognito: {
    REGION: process.env.REACT_APP_REGION,
    USER_POOL_ID: process.env.REACT_APP_USER_POOL_ID,
    APP_CLIENT_ID: process.env.REACT_APP_USER_POOL_CLIENT_ID,
    IDENTITY_POOL_ID: process.env.REACT_APP_IDENTITY_POOL_ID,
  },
};

export default config;