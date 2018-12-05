#!/bin/bash

API="http://localhost:4741"
URL_PATH="/comics"

curl "${API}${URL_PATH}" \
  --include \
  --request POST \
  --header "Content-Type: application/json" \
  --header "Authorization: Bearer ${TOKEN}" \
  --data '{
    "comic": {
      "title": "'"${TITLE}"'",
      "issue": "'"${ISSUE}"'",
      "price": "'"${price}"'"
    }
  }'

echo
