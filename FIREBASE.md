# Firebase Setup

This repo uses Firebase Hosting for deployment and Firestore for the contact-form submission flow.

## Current project

- Firebase project: `junipra-da9b4`
- Hosting site: `junipra-da9b4`
- Firestore database: `(default)` in `us-east4`
- Contact mail extension: `firebase/firestore-send-email`
- Mail collection used by the extension: `submissions`

## Source of truth

The GitHub deployment setup in this repo is the Firebase-generated setup created by:

```bash
firebase init hosting:github
```

That command was the cleanest setup path and should be the default pattern for future projects based on this repo.

The active workflow files are:

- [firebase-hosting-merge.yml](/Users/cameronbaffuto/Developer/Junipra/.github/workflows/firebase-hosting-merge.yml)
- [firebase-hosting-pull-request.yml](/Users/cameronbaffuto/Developer/Junipra/.github/workflows/firebase-hosting-pull-request.yml)

There is no separate custom CI or deploy workflow anymore.

## What the workflows do

- Pull requests run `npm ci && npm run build` and deploy a Firebase Hosting preview channel.
- Pushes to `main` run `npm ci && npm run build` and deploy to the live Hosting channel.

This means the Firebase Hosting workflows already include the build step. No separate build-only workflow is required unless you want an additional status check for branch protection.

## GitHub secrets

`firebase init hosting:github` creates and wires the GitHub secret automatically.

For this project, the generated workflow expects:

- `FIREBASE_SERVICE_ACCOUNT_JUNIPRA_DA9B4`

That secret name is safe to keep in a public repository. Only the JSON value stored in the secret must remain private.

## Local CLI behavior

Local Firebase commands use [.firebaserc](/Users/cameronbaffuto/Developer/Junipra/.firebaserc), which currently points to:

- default project: `junipra-da9b4`

Relevant local commands:

```bash
npm run build
npm run deploy:firebase
npm run preview:firebase
npm run emulate:firebase
```

## Contact form pattern

The contact form writes a Firestore document to the `submissions` collection. The installed `firestore-send-email` extension sends the email from that document.

The document includes:

- `to`: recipient inbox
- `replyTo`: visitor email
- `message`: subject, plain text body, and HTML body
- `form`: structured submitted fields
- `submittedAt`: server timestamp

The Firestore validation for that payload lives in [firestore.rules](/Users/cameronbaffuto/Developer/Junipra/firestore.rules).

## Reusing this repo for a new project

Use this process when duplicating the repo:

1. Create the new Firebase project.
2. Run `firebase use --add` or update [.firebaserc](/Users/cameronbaffuto/Developer/Junipra/.firebaserc) so the new repo points at the correct Firebase project.
3. If needed, create the Hosting site with `firebase hosting:sites:create`.
4. Run `firebase init hosting:github` from the repo root.
5. Accept the generated GitHub workflow setup.
6. Confirm the generated workflow files reference the new project and secret name.
7. If the project uses the contact form pattern, install or configure `firebase/firestore-send-email` for the new project.
8. Update any project-specific copy, recipient email, and Firebase web config values.

If you rerun `firebase init hosting:github`, treat the generated workflow files as the new source of truth and review the diff before committing.

## Public repo guidance

Safe to commit:

- Firebase Hosting workflow files
- `.firebaserc`
- `firebase.json`
- Firestore rules and indexes
- Firebase web app config used by the frontend

Not safe to commit:

- service account JSON keys
- SMTP passwords
- private mailbox credentials
- legacy `.env` files that contain secrets

The legacy secret files from the old site were removed from this repo and ignored so they do not get pushed again.
