#!/bin/bash

commit_id="3"
hostname="https://deploy-preview-4--recoiltodo.netlify.app"

# Create source_maps directory and copy all map files into it.
# rm -rf source_maps
# mkdir source_maps
# mv build/static/js/*.map source_maps/

for filename in ./source_maps/*; do
  chunk_name=${filename//.\/source_maps/""}
  echo "chunk_name $chunk_name"
  without_map=${chunk_name//.map/""}
  echo "without_map $without_map"
  minified_url=$hostname/static/js$without_map
  echo "minified_url $minified_url"
  source_map=@source_maps$chunk_name
  echo "source_map $source_map"
  curl https://api.rollbar.com/api/1/sourcemap \
  -F access_token=$post_server_item \
  -F version=$commit_id \
  -F minified_url=$minified_url \
  -F source_map=$source_map
done