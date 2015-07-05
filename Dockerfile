FROM digitallyseamless/nodejs-bower-grunt

ONBUILD ADD package.json /app/
ONBUILD RUN npm install

ONBUILD ADD bower.json /app/
ONBUILD ADD .bowerrc /app/
ONBUILD RUN bower install --allow-root

ONBUILD . /app

ONBUILD RUN grunt build

ENV PORT 5001



EXPOSE 5001

CMD ["node","index.js"]
