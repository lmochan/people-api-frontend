echo 'updating apk + certs'
echo '---------------------------------'
apk update
apk upgrade
apk add ca-certificates
update-ca-certificates
echo 'install wget'
echo '---------------------------------'
apk add wget
printf "\nca_directory=/etc/ssl/certs" | tee -a /etc/wgetrc
#update-ca-certificates



#apk search curl
#apk -a info curl
#apk -v info curl
#apk --no-cache add curl
#curl --version

#curl -u "$RANCHER_ACCESS_KEY":"$RANCHER_SECRET_KEY" \
#-X POST \
#-H 'Content-Type: application/json' \
#-d 

echo 'run wget request'
echo '---------------------------------'
wget --no-check-certificate --user "$RANCHER_AUTH" --post-data '{


      {
   "type":"serviceUpgrade",
   "inServiceStrategy":{
      "type":"inServiceUpgradeStrategy",
      "batchSize":1,
      "intervalMillis":2000,
      "launchConfig":{
         "type":"launchConfig",
         "blkioWeight":null,
         "capAdd":[
            
         ],
         "capDrop"[
            
         ],
         "cgroupParent":null,
         "count":null,
         "cpuCount":null,
         "cpuPercent":null,
         "cpuPeriod":null,
         "cpuQuota":null,
         "cpuRealtimePeriod":null,
         "cpuRealtimeRuntime":null,
         "cpuSet":null,
         "cpuSetMems":null,
         "cpuShares":null,
         "dataVolumes":[
            
         ],
         "dataVolumesFrom":[
            
         ],
         "description":null,
         "devices":[
            
         ],
         "diskQuota":null,
         "dns":[
            
         ],
         "dnsSearch"[
            
         ],
         "domainName":null,
         "healthInterval":null,
         "healthRetries":null,
         "healthTimeout":null,
         "hostname":null,
         "imageUuid":"docker:lchanif/people-api-frontend:latest",
         "instanceTriggeredStop":"stop",
         "ioMaximumBandwidth":null,
         "ioMaximumIOps":null,
         "ip":null,
         "ip6":null,
         "ipcMode":null,
         "isolation":null,
         "kernelMemory":null,
         "kind":"container",
         "labels":{
            "io.rancher.container.pull_image":"always"
         },
         "logConfig":{
            "type":"logConfig",
            "config":{
               
            },
            "driver":null
         },
         "memory":null,
         "memoryMb":null,
         "memoryReservation":null,
         "memorySwap":null,
         "memorySwappiness":null,
         "milliCpuReservation":null,
         "networkMode":"managed",
         "oomScoreAdj":null,
         "pidMode":null,
         "pidsLimit":null,
         "ports":[
            
         ],
         "privileged":false,
         "publishAllPorts":false,
         "readOnly":false,
         "requestedIpAddress":null,
         "runInit":false,
         "secrets":[
            
         ],
         "shmSize":null,
         "startOnCreate":true,
         "stdinOpen":true,
         "stopSignal":null,
         "stopTimeout":null,
         "system":false,
         "tty":true,
         "user":null,
         "userdata":null,
         "usernsMode":null,
         "uts":null,
         "version":"4c90c6b8-758e-4fb7-8cd1-189fcc92a91b",
         "volumeDriver":null,
         "workingDir":null,
         "dataVolumesFromLaunchConfigs":[
            
         ],
         "networkLaunchConfig":null,
         "vcpu":1,
         "drainTimeoutMs":0
      },
      "previousLaunchConfig":{
         "type":"launchConfig",
         "blkioWeight":null,
         "capAdd":[
            
         ],
         "capDrop":[
            
         ],
         "cgroupParent":null,
         "count":null,
         "cpuCount":null,
         "cpuPercent":null,
         "cpuPeriod":null,
         "cpuQuota":null,
         "cpuRealtimePeriod":null,
         "cpuRealtimeRuntime":null,
         "cpuSet":null,
         "cpuSetMems":null,
         "cpuShares":null,
         "dataVolumes":[
            
         ],
         "dataVolumesFrom":[
            
         ],
         "description":null,
         "devices":[
            
         ],
         "diskQuota":null,
         "dns":[
            
         ],
         "dnsSearch":[
            
         ],
         "domainName":null,
         "healthInterval":null,
         "healthRetries":null,
         "healthTimeout":null,
         "hostname":null,
         "imageUuid":"docker:lchanif/people-frontend:latest",
         "instanceTriggeredStop":"stop",
         "ioMaximumBandwidth":null,
         "ioMaximumIOps":null,
         "ip":null,
         "ip6":null,
         "ipcMode":null,
         "isolation":null,
         "kernelMemory":null,
         "kind":"container",
         "labels":{
            "io.rancher.container.pull_image":"always"
         },
         "logConfig":{
            "type":"logConfig",
            "config":{
               
            },
            "driver":null
         },
         "memory":null,
         "memoryMb":null,
         "memoryReservation":null,
         "memorySwap":null,
         "memorySwappiness":null,
         "milliCpuReservation":null,
         "networkMode":"managed",
         "oomScoreAdj":null,
         "pidMode":null,
         "pidsLimit":null,
         "ports":[
            
         ],
         "privileged":false,
         "publishAllPorts":false,
         "readOnly":false,
         "requestedIpAddress":null,
         "runInit":false,
         "secrets":[
            
         ],
         "shmSize":null,
         "startOnCreate":true,
         "stdinOpen":true,
         "stopSignal":null,
         "stopTimeout":null,
         "system":false,
         "tty":true,
         "user":null,
         "userdata":null,
         "usernsMode":null,
         "uts":null,
         "version":"e60233c2-6958-418b-9df1-b106d2e7b9df",
         "volumeDriver":null,
         "workingDir":null,
         "dataVolumesFromLaunchConfigs":[
            
         ],
         "networkLaunchConfig":null,
         "vcpu":1,
         "drainTimeoutMs":0
      },
      "previousSecondaryLaunchConfigs":[
         
      ],
      "secondaryLaunchConfigs":[
         
      ],
      "startFirst":false
   },
   "toServiceStrategy":null
}' https://18.170.150.5:8080/v2-beta/projects/1a5/services/1s20/?action=upgrade
