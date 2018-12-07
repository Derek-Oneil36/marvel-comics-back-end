#!/bin/bash

API="http://localhost:4741"
URL_PATH="/favorites"

curl "${API}${URL_PATH}/${_Id}" \
  --include \
  --request DELETE \
  --header "Authorization: Bearer ${TOKEN}"

echo
