This project was created with the following steps

```
yarn run build:test-project ~/rw-db-auth-test --typescript

yarn rw setup auth dbAuth
```

- Changing the db to use postgres and then running `yarn rw prisma migrate dev`
- Setting up a new db on railway
- Setting up the site on netlify
- Setting up netlify's identity service.

```
yarn rw setup deploy aws-serverless
```

add DATABASE_URL_PROD env var and te serverless.yml

```
yarn rw deploy aws
```
