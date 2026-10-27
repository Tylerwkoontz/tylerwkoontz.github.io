# Tyler's Homelab

A self-hosted lab where I practice network engineering and security, and take back
control of my personal data. Everything I build is documented here, partly so I
don't forget and partly to show my work.

**Docs site:** coming soon

## What's running

| Component   | Role                                          | Status  |
|-------------|-----------------------------------------------|---------|
| OPNsense    | Firewall / router between LAN and lab subnets | Running |
| Unbound DNS | Encrypted DNS (DNS-over-TLS) with DNSSEC      | Running |
| Proxmox VE  | Hypervisor for VMs and containers             | Running |
| Vaultwarden | Self-hosted password manager                  | Planned |

## Roadmap

- [x] OPNsense firewall with separate LAN and lab subnets
- [x] Encrypted DNS (DoT + DNSSEC)
- [ ] Vaultwarden behind an HTTPS reverse proxy
- [ ] Automated, tested backups
- [ ] WireGuard VPN for remote access
- [ ] Monitoring and logging

## Working on the docs locally

```bash
cd website
npm install        # first time only
npm run dev        # then open http://localhost:4321
```
