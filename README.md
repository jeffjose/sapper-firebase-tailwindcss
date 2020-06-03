# sapper-firebase-tailwindcss starter template

- [x] [Sapper](https://sapper.svelte.dev)
- [x] [Firebase Auth](https://firebase.google.com/docs/auth)
- [x] [Firestore](https://firebase.google.com/docs/firestore)
- [x] [Firebase Hosting](https://firebase.google.com/docs/hosting)
- [x] [Firebase Functions](https://firebase.google.com/docs/functions)
- [x] [Tailwind CSS](https://tailwindcss.com)

## Getting started

### 1. Install dependancies

```bash
yarn
```

### 2. Update firebase config

```bash
cat src/firebase/config.js
```

### 3. Setup firebase project

1. **Auth**: Enable Google and/or Facebook login
2. **Cloud Firestore**: Create 2 collections `publiclist` and `privilagedlist`. Rules are in `firestore.rules`

### 4. Run the project

```bash
# Terminal 1
yarn watch:tailwind

# Terminal 2
yarn dev
```

Open up [localhost:3000](http://localhost:3000)

### Thanks

This starter project was inspired by/builds on the following projects

- https://github.com/sveltecasts/009-sapper-firestore (For Firestore setup)
- https://github.com/drejohnson/sapper-graphql-firebase (For rxjs/rxfire setup)
