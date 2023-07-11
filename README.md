# Ozone Test Example Repository

This repository acts as a manual testing stage for ensuring that the service implementation works as expected.

## Requirements
- `git`
- `docker` or `podman`
- `docker compose` or `podman-compose`

## Setup
By default the every service thinks that the ozone core code is located as a sibling directory. Because of this, it's ideal that both repos are cloned at the same time.

### Grab the code

```bash
git clone https://github.com/f1yn/ozone
git clone https://github.com/f1yn/ozone-testing
```

### Setup the environment
This example uses the docker-compose file as a service manifest. It also expects a docker or podman network to be setup

#### Shared network
Ozone needs a share network interface to work. Ideally, this is done within the container namespace for easier dns. Create the ozone network as follows.

##### Podman
```bash
podman network create ozone
```

##### Docker
```bash
docker network create ozone
```

#### Secret setup
When opening and re-negotiating sockets, Ozone is reconfigured to look for container runtime secrets to confirm core identity.

##### Podman
```bash
podman secret create o3_key ./test_secret.key
```

##### Docker
```bash
docker secret create o3_key ./test_secret.key
```

### Starting

Running an example environment can be done with:

```bash
podman-compose up
```

or (docker):

```bash
docker-compose up
```