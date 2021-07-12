
# Build Partners


## Dependencies

* Node
* Yarn
* Hugo

### Deployments
* GitPages
* Forestry
* Netlify
* Cloudflare

## Build/s

The repositories are stored in the PIXELPIXALAU organisation. Contact gary@pixelpixel.com.au for access.

### Development

```sh
yarn install
hugo server -D
```

### Production

```sh
yarn install
hugo build
```


## Deployments/s

### Develop
A demo of the site can be published to GitPages. Review the deployment instructions in `.deloy.sh`

```
https://pixelpixelau.github.io/buildpartners/
```


### Staging

[![Netlify Status](https://api.netlify.com/api/v1/badges/54755822-c410-4b2c-a276-d973e72734c0/deploy-status)](https://app.netlify.com/sites/relaxed-hermann-14f4bb/deploys)


The staging website is deployed through netlify.
```
https://gallant-pasteur-e54076.netlify.app/
```

### Master
[![Website lukemurraybuilder.com.au](https://img.shields.io/website-up-down-green-red/https/lukemurraybuilder.com.au.svg)](http://www.lukemurraybuilder.com.au/)

To be confirmed.

# CMS Editor

The CMS editor is setup in forestry and is currently connected  to the `develop` branch. Configuration settings for forestry are stored in `config/default`


