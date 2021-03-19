# Introduction

<p align="center">
    <a href="https://github.com/nathanlytang/cloudflare-ddns" alt="Repo Size"><img src="https://img.shields.io/github/repo-size/nathanlytang/cloudflare-ddns" /></a>
    <a href="https://github.com/nathanlytang/cloudflare-ddns" alt="License"><img src="https://img.shields.io/github/license/nathanlytang/cloudflare-ddns" /></a>
    <a href="https://github.com/nathanlytang/cloudflare-ddns" alt="Language"><img src="https://img.shields.io/github/languages/top/nathanlytang/cloudflare-ddns" /></a>
</p>

## Cloudflare-DDNS
Cloudflare-DDNS is a dynamic DNS client to automatically update Cloudflare's DNS service as your public IP address changes using Cloudflare's API v4 -- no need for a third party dynamic DNS service.  The client will run in most shells, and is best suited to run as a cron job.

## Features
* Easy entry management.  All your records are placed in one file, making it easy to see what is being updated.
* Update multiple records at once.  By placing all your records in one file, you only have to run the service once to update all your entries.

## Notes
* Do not share your API key.  Anyone who has it can make changes to your account.