export default {
  STRIPE_KEY: "pk_test_51HDLm3Jdrqais98HzLELToTPVXwRwW2XGC6fM4Gs94fnFjWL1ERzJf6mYgTtP6LocvCrZX4tQEg6VCdloAKAYHaS00l6HjRFV2",
	MAX_ATTACHMENT_SIZE: 5000000,
    s3: {
      REGION: "us-east-2",
      BUCKET: "project-baccano-notes-uploads"
    },
    apiGateway: {
      REGION: "us-east-2",
      URL: "https://89cp9ilo5b.execute-api.us-east-2.amazonaws.com/prod"
    },
    cognito: {
      REGION: "us-east-2",
      USER_POOL_ID: "us-east-2_B0qdSAmnB",
      APP_CLIENT_ID: "6in0k9obm4hvee79uhsq000n3q",
      IDENTITY_POOL_ID: "us-east-2:75d5556a-fb8e-4830-9475-79bcde02e34a"
    }
  };