FROM ruphin/webserve

# Serves the static site built by `npm run build`
COPY dist /usr/share/nginx/html
