
# multi-stage
---


### Build targets

> 如何实现一个 `Dockerfile` 编译多个 `image` ? 

``` bash
  # syntax=docker/dockerfile:1
  FROM golang:1.21-alpine AS base
  WORKDIR /src
  COPY go.mod go.sum .
  RUN go mod download
  COPY . .

  FROM base AS build-client
  RUN go build -o /bin/client ./cmd/client

  FROM base AS build-server
  RUN go build -o /bin/server ./cmd/server

# - FROM scratch
# - COPY --from=build-client /bin/client /bin/
# - COPY --from=build-server /bin/server /bin/
# - ENTRYPOINT [ "/bin/server" ]

FROM scratch AS client
COPY --from=build-client /bin/client /bin/
ENTRYPOINT [ "/bin/client" ]

FROM scratch AS server
COPY --from=build-server /bin/server /bin/
ENTRYPOINT [ "/bin/server" ]

 ```

 ```bash
    docker build --tag=buildme-client --target=client .
    docker build --tag=buildme-server --target=server .
 ```



