FROM node:14 as build

WORKDIR /usr/
COPY ./ .

# Install prerequisites
RUN apt-get update && apt-get install -y curl

RUN npm cache clean --force
RUN npm install -g @angular/cli --force
RUN npm install --no-package-lock --legacy-peer-deps

# generate build
ARG configuration=production
RUN npm run build -- --outputPath=dist 

############
### prod ###
############

# base image
FROM nginx:1.16.0-alpine

# copy artifact build from the 'build environment'
COPY --from=build /usr/dist /usr/share/nginx/html

# expose port 80
EXPOSE 80

# run nginx
CMD ["nginx", "-g", "daemon off;"]