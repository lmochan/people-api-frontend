# pull official base image
FROM node:latest as build

# set working directory
WORKDIR /app

# add `/app/node_modules/.bin` to...-g --silent

# add app
COPY . ./
RUN npm run build
# start app
#CMD ["npm", "run", "build"]

FROM nginx:alpine
WORKDIR /usr/share/nginx/html
COPY --... Show more