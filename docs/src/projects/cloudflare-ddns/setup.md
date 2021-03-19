# Setup

1. Install the script
    `
    curl https://raw.githubusercontent.com/nathanlytang/Cloudflare-DDNS/master/cloudflare-ddns.sh >> /** PATH TO FILE **/cloudflare-ddns/cloudflare-ddns.sh
    `


2. Change directory and enable execution permissions
    `
    chmod +x /** PATH TO FILE **/cloudflare-ddns.sh
    `


3.  In the client file, input your Cloudflare account email, API key, and Zone ID in the *Global Variables* section

    ```bash
    # Global Variables
    auth_email= # Insert Cloudflare account email here
    cf_api_key= # Insert global API key here
    zone_id= # Insert zone ID here
    ip_record_loc="/tmp/ip-record" # Location of ip records file
    dns_entries_loc="/srv/cloudflare-ddns/dns-entries" # Location of dns entries file
    ```

    * The zone ID can be found on your Cloudflare dashboard, and your API key can be found in your profile.
    * You may also wish to change the location of your dns entries and IP records files: you can do so here.


4.  Get your A-record ID's
    * Use your zone ID, Cloudflare account email, and account API key
    `
    curl -X GET "https://api.cloudflare.com/client/v4/zones/** ZONE ID **/dns_records?type=A" -H "X-Auth-Email: ** Cloudflare account email **" -H "X-Auth-Key: ** API KEY **" -H "Content-Type: application/json"
    `


5.  Create a new file called `dns-entries` in the same directory and place each entry on a new line.  
    * In each entry, list the A-Record Name, A-Record ID, TTL, and Proxied, each separated by a single space.

    Eg.
    > A-record-name A-record-ID TTL Proxied
    > ```
    > www abcdefghijklmnopqrstuvwxyz 300 true
    > root 1234567890abcdefghijklmnop 180 false
	> ```

6.  Set up the client to run automatically with cron.
    `
    crontab -e
    `

    Eg. Set the client to check for IP updates every 5 minutes
    > `*/5 * * * * /** PATH TO FILE **/cloudflare-ddns/cloudflare-ddns.sh`

7.  You're done!  To test if your client is working, delete the IP records file and change your records to something random in the Cloudflare dashboard.  When the client is next run, your records will be matched with your current IP.