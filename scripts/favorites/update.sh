#!/bin/bash

API="http://localhost:4741"
URL_PATH="/favorites"

curl "${API}${URL_PATH}/${FAV_ID}" \
  --include \
  --request PATCH \
  --header "Content-Type: application/json" \
  --header "Authorization: Bearer ${TOKEN}" \
  --data '{
    "favorite": {
      "comicId": "'"${C_ID}"'",
      "rating": "'"${RATE}"'"

    }
  }'

echo
