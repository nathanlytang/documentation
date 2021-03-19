# Multiple Domains

Use `cloudflare-multi-ddns.sh`.  Rather than having the authentication email, API key, and zone id specified by the script, they are stored in the `dns-entries` file.
Your `dns-entries` file will look like this:
    * In each entry, list the Auth_email, api_key, zone_id, A-Record Name, A-Record ID, TTL, and Proxied, each separated by a single space.

Eg.
> Auth_email Api_key Zone_id A-record-name A-record-ID TTL Proxied
> ```
> example@email.com cf_api_key_here zone_id_here www a_record_id_here 300 true
> differentemail@email.com different_cf_api_key_here different_zone_id_here @ a_record_id_here 180 false
> ```
