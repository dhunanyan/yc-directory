import * as Sentry from "@sentry/nextjs";

Sentry.init({
  dsn: "https://cefe7460f7e4e0c5545ec4782a75dbec@o4508450060304384.ingest.de.sentry.io/4508450062336080",
  integrations: [
    Sentry.replayIntegration(),
    Sentry.feedbackIntegration({ colorScheme: "system" }),
  ],
  tracesSampleRate: 1,
  replaysSessionSampleRate: 0.1,
  replaysOnErrorSampleRate: 1.0,
  debug: false,
});
