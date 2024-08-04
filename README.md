# SS Generator 
## Requirements
Node 18.* <sub><sup>(not tested for other versions but it may work)</sup></sub>
## Preparation
```
npm install
npm install -g .
```
## Usage
```
ss_generator -m <method>  -w <password> -a <ip_address> -p <port> -t <title>
```

## Options
        --version   Show version number                     [boolean]
    -m, --method    VPN encoding method           [string] [required]
    -w, --password  VPN client password           [string] [required]
    -a, --address   Server IP address             [string] [required]
    -p, --port      VPN client port               [string] [required]
    -t, --title     Connaction name               [string] [required]
        --help      Show help                               [boolean]