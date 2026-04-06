# Firebase Deployment

This repo is configured for Firebase Hosting classic and a Firestore-backed contact form.

## Current project

- Firebase project: `junipra-da9b4`
- Hosting site: `junipra-da9b4`
- Firestore database: `(default)` in `us-east4`
- Contact mail extension: `firebase/firestore-send-email`, active on the `submissions` collection

## Contact form pattern

The frontend writes a document to `submissions` in Firestore. The installed `firestore-send-email` extension sends the email from that document.

Each submission includes:

- `to`: the inbox that should receive the message
- `replyTo`: the visitor email so replying from the mailbox goes back to the lead
- `message`: the subject plus plain text and HTML bodies
- `form`: the structured copy of the submitted fields used by Firestore rules

Current extension config already present in the Firebase project:

- Mail collection: `submissions`
- Default from: `info@junipra.com`
- Default reply-to: `info@junipra.com`
- SMTP transport: existing iCloud SMTP configuration in the extension

That means the web app does not need SMTP credentials or mail secrets.

## GitHub Actions

This repo includes:

- CI: [.github/workflows/ci.yml](/Users/cameronbaffuto/Developer/Junipra/.github/workflows/ci.yml)
- Hosting deploys: [.github/workflows/deploy.yml](/Users/cameronbaffuto/Developer/Junipra/.github/workflows/deploy.yml)

Required GitHub secret:

- `FIREBASE_SERVICE_ACCOUNT_JUNIPRA_DA9B4`

The secret name is fine to keep in a public repository. Only the JSON value stored in that secret must remain private.

## Local commands

```bash
npm run build
npm run deploy:firebase
npm run preview:firebase
```
