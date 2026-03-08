#!/bin/bash
set -euo pipefail

# quick assigned vars
start=$(date +%s)
BORDER="**************************************************"
PROTOCOL="https"
DOMAIN="www.alexanderlindholm.net" # subdomain + root domain + top level domain
URL="${PROTOCOL}://${DOMAIN}"
success=0
warning=0
fail=0
TIMEOUT=5

# loading vars
cert=$(timeout "$TIMEOUT" openssl s_client -connect "$DOMAIN":443 -servername "$DOMAIN" < /dev/null 2>/dev/null)

##########################################################################################################################################

printf "%s\nSTART [%s]\n\n" "$BORDER" "$0"

##########################################################################################################################################

#printf "\n%s\nTASK [PING]\n\n" "$BORDER"  # I think ICMP is blocked for GitHub Actions

#if ping -c 3 -w "$TIMEOUT" "$DOMAIN" > /dev/null; then
#  echo "SUCCESS"
#  ((++success))
#else
#  echo "FAIL: can't ping $DOMAIN"
#  ((++fail))
#fi

##########################################################################################################################################

printf "\n%s\nTASK [STATUS CODE]\n\n" "$BORDER"

STATUS_CODE=$(curl --location --silent --connect-timeout "$TIMEOUT" --max-time "$TIMEOUT" --output "/dev/null" --write-out "%{http_code}" "$URL")

if [ "$STATUS_CODE" -eq 200 ]; then
  echo "SUCCESS"
  ((++success))
else
  echo "FAIL: STATUS CODE: $STATUS_CODE"
  ((++fail))
fi

##########################################################################################################################################

printf "\n%s\nTASK [RESPONSE TIME]\n\n" "$BORDER"

response_time=$(curl --connect-timeout "$TIMEOUT" --max-time "$TIMEOUT" -o /dev/null -s -w "%{time_total}" "$URL")

if awk "BEGIN {exit !($response_time < 1)}"; then
  printf "SUCCESS: %ss\n" "$response_time"
  ((++success))
else
  printf "FAIL: slow response time: %ss\n" "$response_time"
  ((++fail))
fi

##########################################################################################################################################

printf "\n%s\nTASK [VIEW CONTENT]\n\n" "$BORDER"

if curl --connect-timeout "$TIMEOUT" --max-time "$TIMEOUT" -s -L "$URL" | grep --quiet --ignore-case '<!doctype html>'; then
  echo "SUCCESS"
  ((++success))
else
  echo "FAIL: can't find <!doctype html>"
  ((++fail))
fi

##########################################################################################################################################

printf "\n%s\nTASK [SSL CERT]\n\n" "$BORDER"

code=$(echo "$cert" | awk '/Verify return code/ {print $4; exit}')
code=${code:-1}

if [ "$code" -eq 0 ]; then
  echo "SUCCESS"
  ((++success))
else
  echo "FAIL"
  ((++fail))
fi

##########################################################################################################################################

printf "\n%s\nTASK [TLS EXPIRY]\n\n" "$BORDER"

expiry=$(echo "$cert" | openssl x509 -noout -enddate | cut -d= -f2)
expiry_epoch=$(date -d "$expiry" +%s) # Unix Epoch: Jan 1, 1970
now=$(date +%s)
days_left=$(( (expiry_epoch - now) / 86400 ))

if [ "$days_left" -gt 30 ]; then
  echo "SUCCESS: TLS expires in $days_left days"
  ((++success))
elif [ "$days_left" -gt 7 ]; then
  echo "WARN: TLS expires in $days_left days"
  ((++warning))
else
  echo "FAIL: TLS expires in $days_left days"
  ((++fail))
fi

##########################################################################################################################################

printf "\n%s\nDONE [RECAP]\n\n" "$BORDER"

printf "SUCCESS: %d\nWARN: %d\nFAIL: %d\n" "$success" "$warning" "$fail"
printf "Date: %s\n" "$(date '+%T %d/%m/%Y')"
end=$(date +%s)
printf "Runtime: %ss\n" "$(( end - start ))"

if [ "$fail" -gt 0 ]; then
  exit 1
fi
