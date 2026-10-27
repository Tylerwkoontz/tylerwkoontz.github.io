---
title: Network
description: Segmented home network, OPNsense firewall, and encrypted DNS.
---

## Goal

Build a segmented home network with a real firewall in front of it, so lab
experiments stay isolated from my trusted devices and my DNS traffic is
private.

## Design

| Network | Subnet             | Interface | Purpose                                      |
|---------|--------------------|-----------|----------------------------------------------|
| LAN     | `192.168.1.0/24`   | `igc0`    | Trusted clients and management               |
| Lab     | `192.168.10.0/24`  | TODO      | GNS3, lab VMs, auxiliary services            |

Notable hosts:

| Host         | IP               | Role                         |
|--------------|------------------|------------------------------|
| OPNsense     | TODO             | Gateway / firewall           |
| Storage host | `192.168.10.160` | SMB file shares              |

```text
           Internet
               |
          [ OPNsense ]
           /        \
   LAN (igc0)      Lab (TODO)
 192.168.1.0/24   192.168.10.0/24
```

:::note[Why segment?]
Anything I break or test in the lab can't reach my personal devices
unless a firewall rule explicitly allows it. This is the same idea as
separating enclaves in an enterprise network.
:::

## Firewall

TODO: summarize the key rules. For example:

- LAN → Lab: allowed (manage lab from trusted devices)
- Lab → LAN: blocked by default, with specific exceptions (TODO)

## Encrypted DNS (DNS-over-TLS)

**Why:** normal DNS (port 53) is plaintext, so my ISP or anyone on the path
can see, log, or tamper with every domain I look up. DNS-over-TLS wraps those
queries in TLS on port 853.

### Setup

In OPNsense (menu names may vary slightly by version):

1. **Services → Unbound DNS → General**: enable Unbound and
   **Enable DNSSEC Support**.
2. **Services → Unbound DNS → DNS over TLS**: add Cloudflare upstreams:

    | Server     | Port | Verify CN            |
    |------------|------|----------------------|
    | `1.1.1.1`  | 853  | `cloudflare-dns.com` |
    | `1.0.0.1`  | 853  | `cloudflare-dns.com` |

3. TODO: anything else I changed (e.g. System → Settings → General DNS
   servers, "allow DNS override" unchecked).

### Verify

- Visit <https://1.1.1.1/help>. It should show
  **Using DNS over TLS (DoT): Yes**.
- From a LAN client:

    ```bash
    nslookup example.com     # server should be the OPNsense IP
    ```

## Lessons

TODO: what broke or surprised me while setting this up.

## Next steps

- [ ] Block outbound port 53 from clients so devices can't bypass Unbound
- [ ] Document firewall rules in detail
