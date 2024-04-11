# Command Center
Technical test by Daniel Monsalve

### Getting Started

For a dev version use:

```bash
npm run dev
# or
yarn dev
```

For a production version use:

```bash
npm run build
# or
yarn build
```

and then

```bash
npm run start
# or
yarn start
```

Project Organization:

`/src/app/api` In this section the API for the offices is created, the /office/model file is in charge of managing the local data served by the API

`/src/components` In this section you will find the global components of the application.

`/src/componentes/atoms` This is the section for the smallest components of the application, following the Atomic Design specification.

`/src/layouts` Here are the components for the Layout, such as the Header and Footer

`/src/modules` Here the application modules are defined and developed, each one separate and independent from the other, here you will find modules such as: home, auth, profile, etc.

`/src/modules/home` Home module, with the Container, which is the file that includes the module, the module's own components and the utils folder that contains the hooks and functions of each module.

`/src/types` Where the types of data that the application has are defined.