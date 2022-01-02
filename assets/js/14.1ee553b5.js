(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{392:function(e,a,t){"use strict";t.r(a);var s=t(54),n=Object(s.a)({},(function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h1",{attrs:{id:"setup"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#setup"}},[e._v("#")]),e._v(" Setup")]),e._v(" "),t("ol",[t("li",[t("p",[e._v("Install the script\n"),t("code",[e._v("curl https://raw.githubusercontent.com/nathanlytang/Cloudflare-DDNS/master/cloudflare-ddns.sh >> /** PATH TO FILE **/cloudflare-ddns/cloudflare-ddns.sh")])])]),e._v(" "),t("li",[t("p",[e._v("Change directory and enable execution permissions\n"),t("code",[e._v("chmod +x /** PATH TO FILE **/cloudflare-ddns.sh")])])]),e._v(" "),t("li",[t("p",[e._v("In the client file, input your Cloudflare account email, API key, and Zone ID in the "),t("em",[e._v("Global Variables")]),e._v(" section")]),e._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# Global Variables")]),e._v("\n"),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[e._v("auth_email")]),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# Insert Cloudflare account email here")]),e._v("\n"),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[e._v("cf_api_key")]),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# Insert global API key here")]),e._v("\n"),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[e._v("zone_id")]),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# Insert zone ID here")]),e._v("\n"),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[e._v("ip_record_loc")]),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[e._v('"/tmp/ip-record"')]),e._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# Location of ip records file")]),e._v("\n"),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[e._v("dns_entries_loc")]),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[e._v('"/srv/cloudflare-ddns/dns-entries"')]),e._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# Location of dns entries file")]),e._v("\n")])])]),t("ul",[t("li",[e._v("The zone ID can be found on your Cloudflare dashboard, and your API key can be found in your profile.")]),e._v(" "),t("li",[e._v("You may also wish to change the location of your dns entries and IP records files: you can do so here.")])])]),e._v(" "),t("li",[t("p",[e._v("Get your A-record ID's")]),e._v(" "),t("ul",[t("li",[e._v("Use your zone ID, Cloudflare account email, and account API key\n"),t("code",[e._v('curl -X GET "https://api.cloudflare.com/client/v4/zones/** ZONE ID **/dns_records?type=A" -H "X-Auth-Email: ** Cloudflare account email **" -H "X-Auth-Key: ** API KEY **" -H "Content-Type: application/json"')])])])]),e._v(" "),t("li",[t("p",[e._v("Create a new file called "),t("code",[e._v("dns-entries")]),e._v(" in the same directory and place each entry on a new line.")]),e._v(" "),t("ul",[t("li",[e._v("In each entry, list the A-Record Name, A-Record ID, TTL, and Proxied, each separated by a single space.")])]),e._v(" "),t("p",[e._v("Eg.")]),e._v(" "),t("blockquote",[t("p",[e._v("A-record-name A-record-ID TTL Proxied")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("www abcdefghijklmnopqrstuvwxyz 300 true\nroot 1234567890abcdefghijklmnop 180 false\n")])])])])]),e._v(" "),t("li",[t("p",[e._v("Set up the client to run automatically with cron.\n"),t("code",[e._v("crontab -e")])]),e._v(" "),t("p",[e._v("Eg. Set the client to check for IP updates every 5 minutes")]),e._v(" "),t("blockquote",[t("p",[t("code",[e._v("*/5 * * * * /** PATH TO FILE **/cloudflare-ddns/cloudflare-ddns.sh")])])])]),e._v(" "),t("li",[t("p",[e._v("You're done!  To test if your client is working, delete the IP records file and change your records to something random in the Cloudflare dashboard.  When the client is next run, your records will be matched with your current IP.")])])]),e._v(" "),t("div",{staticClass:"custom-block danger"},[t("p",{staticClass:"custom-block-title"},[e._v("WARNING")]),e._v(" "),t("p",[e._v("Do not share your API key.  Anyone who has it can make changes to your account.")])])])}),[],!1,null,null,null);a.default=n.exports}}]);