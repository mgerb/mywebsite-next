FROM golang:1.17-alpine

WORKDIR /go/src/github.com/mgerb/mywebsite-next
ADD . .
RUN go build -o /build/server .


FROM node:14-alpine

WORKDIR /build

ADD . .
RUN npm install
RUN npm run build


FROM alpine:3.14

WORKDIR /home

ADD ./static ./static
COPY --from=0 /build/server ./server
COPY --from=1 /build/dist ./dist

ENTRYPOINT ["./server"]
