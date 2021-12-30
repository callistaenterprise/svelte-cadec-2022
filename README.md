# svelte-cadec-2022
This project was shown on Cadec 2022 on the Svelte presentation if you wanna try it out.<br/>
This is a project setup an initialzied with Svelte Kit. <br/>
 Read everything about Svelte [`here`](https://svelte.dev/) <br/>
 And the application framework on top of Svelte called [Svelte Kit](https://svelte.dev/) <br/>


## After clone

After you have forked or clone the repo to your local machine

```bash
# download all the needed npm modules
npm install

```

> Note: the `@next` is temporary

## Developing

Once you've downloaded the project and installed dependencies with `npm install` , start a development server:

```bash
npm run dev

# or start the server and open the app in a new browser tab
npm run dev -- --open
```

## Testing
This project uses jest and svelte-jester to test the svelte components. <br/>
For the moment it only has a few tests but is shows principally how it could be done anyway
```bash
# to run the tests
npm run test
```

## Building

Before creating a production version of your app, install an [adapter](https://kit.svelte.dev/docs#adapters) for your target environment. Then:

```bash
npm run build
```

> You can preview the built app with `npm run preview`, regardless of whether you installed an adapter. This should _not_ be used to serve your app in production.

## Acknowledgements
This project was inspired and started after watching this video with James Q Quick <br/>
[SvelteKit Crash Course - SSR, API Routes, Stores, Tailwind CSS, and More!](https://www.youtube.com/watch?v=UU7MgYIbtAk&t=779s)

