FROM google/nodejs

RUN npm install -g bower grunt-cli

RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

# Onbuild instructions
ONBUILD COPY package.json /usr/src/app/
ONBUILD RUN npm install
ONBUILD COPY bower.json .bowerrc* /usr/src/app/
ONBUILD RUN bower install --allow-root
ONBUILD COPY . /usr/src/app/
ONBUILD RUN [[ -f "Gruntfile.js" ]] && grunt build || /bin/true
ONBUILD ENV NODE_ENV production

ENV PORT 5001



EXPOSE 5001
CMD ["node","index.js"]
