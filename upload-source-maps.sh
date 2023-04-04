#!/bin/bash

commit_id="2"
hostname="https://deploy-preview-4--recoiltodo.netlify.app"

npm run build

# Create source_maps directory and copy all map files into it.
mkdir source_maps && mv build/static/js/*.map source_maps/

for filename in ./source_maps/*; do
  chunk_name=${filename//.\/source_maps/""}
  without_map=${chunk_name//.map/""}
  minified_url=$hostname/static/js$without_map
  source_map=@${filename//.\//""}

  curl https://api.rollbar.com/api/1/sourcemap \
  -F access_token=$post_server_item \
  -F version=$commit_id \
  -F minified_url=$minified_url \
  -F source_map=$source_map
done