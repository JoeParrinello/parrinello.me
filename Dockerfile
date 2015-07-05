FROM google/nodejs

RUN npm install -g bower grunt-cli

RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

# Onbuild instructions
COPY package.json /usr/src/app/
RUN npm install
COPY bower.json .bowerrc* /usr/src/app/
RUN bower install --allow-root
COPY . /usr/src/app/
RUN grunt build
ENV PORT 5001



EXPOSE 5001
CMD ["node","index.js"]
