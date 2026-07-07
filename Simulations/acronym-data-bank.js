const acronymData = [
  {
    id: "aaa",
    acronym: "AAA",
    term: "Authentication, Authorization, and Accounting",
    useCase: "A security framework for intelligently controlling access to computer resources, enforcing policies, and auditing usage.",
    scenario: "A network administrator needs a central system that verifies user identities, determines which network switches they can configure, and logs all their configuration changes. Which framework best describes this requirement?",
    options: ["DHCP", "AAA", "DNS", "VLAN"],
    answer: 1
  },
  {
    id: "acl",
    acronym: "ACL",
    term: "Access Control List",
    useCase: "A set of rules configured on a router or firewall that determines which traffic is allowed or denied based on IP addresses or ports.",
    scenario: "A technician needs to block all incoming HTTP traffic from a specific subnet to a web server, while allowing all other traffic. Where should the technician configure this rule?",
    options: ["MAC address table", "DNS zone file", "DHCP scope", "ACL"],
    answer: 3
  },
  {
    id: "adf",
    acronym: "ADF",
    term: "Automatic Document Feeder",
    useCase: "A feature on printers and scanners that pulls multiple pages through the scanning bed one by one without user intervention.",
    scenario: "A user complains that when they try to scan a 30-page contract, the multi-function printer pulls multiple pages through at the exact same time, causing jams. Which component most likely needs its separation pad replaced?",
    options: ["Fuser assembly", "ADF", "Transfer roller", "Duplexer"],
    answer: 1
  },
  {
    id: "aes",
    acronym: "AES",
    term: "Advanced Encryption Standard",
    useCase: "A highly secure symmetric encryption algorithm used widely in modern network security, including WPA2 and WPA3 Wi-Fi networks.",
    scenario: "When configuring a small office wireless router for maximum security utilizing WPA2, which encryption standard should the technician select?",
    options: ["TKIP", "WEP", "AES", "DES"],
    answer: 2
  },
  {
    id: "apfs",
    acronym: "APFS",
    term: "Apple File System",
    useCase: "The default file system used by modern macOS and iOS devices, optimized for solid-state drives (SSDs) and encryption.",
    scenario: "A technician is preparing a new SSD to be used as the primary boot drive for a MacBook Pro running the latest macOS. Which file system should the drive be formatted with?",
    options: ["NTFS", "ext4", "APFS", "exFAT"],
    answer: 2
  },
  {
    id: "apipa",
    acronym: "APIPA",
    term: "Automatic Private Internet Protocol Addressing",
    useCase: "A Windows feature that automatically assigns an IP address in the 169.254.x.x range when a DHCP server cannot be reached.",
    scenario: "A workstation is unable to connect to the local file server. The technician opens the command prompt, types 'ipconfig', and notices the IPv4 address is 169.254.12.50. What is the most likely cause of the issue?",
    options: ["The DNS server is offline.", "The DHCP server is unreachable.", "The default gateway is misconfigured.", "The MAC address is blacklisted."],
    answer: 1
  },
  {
    id: "bios",
    acronym: "BIOS",
    term: "Basic Input/Output System",
    useCase: "Firmware used to perform hardware initialization during the booting process and provide runtime services for operating systems.",
    scenario: "A user wants to run a virtual machine on their desktop, but the hypervisor software returns an error stating that hardware-assisted virtualization is disabled. Where must the technician go to enable this feature?",
    options: ["Device Manager", "Disk Management", "BIOS/UEFI", "Command Prompt"],
    answer: 2
  },
  {
    id: "bsod",
    acronym: "BSOD",
    term: "Blue Screen of Death",
    useCase: "A full-screen error displayed by Windows following a fatal system crash or severe driver issue.",
    scenario: "Shortly after updating the graphics card drivers, a user reports their Windows PC crashes to a blue screen with a STOP code before restarting automatically. What is the best first step for the technician to resolve this?",
    options: ["Reinstall Windows.", "Boot into Safe Mode and roll back the driver.", "Replace the graphics card.", "Run a chkdsk command."],
    answer: 1
  },
  {
    id: "byod",
    acronym: "BYOD",
    term: "Bring Your Own Device",
    useCase: "A corporate policy that allows employees to use their personal smartphones and laptops for work purposes, often requiring MDM software.",
    scenario: "A company is implementing a new policy allowing employees to check corporate email on their personal smartphones. To ensure corporate data can be remotely wiped if a phone is lost, what should the IT department require?",
    options: ["VPN profile", "BYOD policy enforced via MDM", "MAC filtering", "Static IP addresses"],
    answer: 1
  },
  {
    id: "cpu",
    acronym: "CPU",
    term: "Central Processing Unit",
    useCase: "The primary component of a computer that acts as its 'brain,' executing instructions from the hardware and software.",
    scenario: "A technician is upgrading a desktop computer. The new component is an LGA 1700 package that requires thermal paste before securing the heat sink. Which component is being installed?",
    options: ["RAM", "GPU", "CPU", "NVMe SSD"],
    answer: 2
  },
  {
    id: "ddos",
    acronym: "DDoS",
    term: "Distributed Denial of Service",
    useCase: "A cyberattack where multiple compromised systems attack a single target, overwhelming it with traffic so legitimate users cannot access it.",
    scenario: "A company's e-commerce website becomes completely unresponsive. The hosting provider reports that the server is being flooded with millions of simultaneous HTTP requests from thousands of different IP addresses globally. What type of attack is this?",
    options: ["Phishing", "Ransomware", "DDoS", "Cross-site scripting"],
    answer: 2
  },
  {
    id: "dhcp",
    acronym: "DHCP",
    term: "Dynamic Host Configuration Protocol",
    useCase: "A network management protocol used to dynamically assign an IP address and other network configuration parameters to devices.",
    scenario: "A new network printer was just plugged into the wall. Without any manual IP configuration, the printer immediately acquires an IP address, subnet mask, and default gateway. Which protocol made this possible?",
    options: ["DNS", "DHCP", "FTP", "NTP"],
    answer: 1
  },
  {
    id: "dns",
    acronym: "DNS",
    term: "Domain Name System",
    useCase: "The internet's phonebook; translates human-readable domain names (like comptia.org) into machine-readable IP addresses.",
    scenario: "A user complains they cannot access 'www.google.com' via their web browser. A technician pings '8.8.8.8' successfully, but pinging 'www.google.com' fails. Which service is most likely experiencing an issue?",
    options: ["DHCP", "DNS", "Gateway", "Subnet Mask"],
    answer: 1
  }
  {
    id: "dos",
    acronym: "DoS",
    term: "Denial of Service",
    useCase: "A cyberattack meant to shut down a machine or network, making it inaccessible to its intended users by flooding it with traffic.",
    scenario: "A web server is suddenly overwhelmed by a flood of ICMP ping requests from a single malicious source IP, causing it to drop legitimate connections. What type of attack is occurring?",
    options: ["DDoS", "DoS", "Man-in-the-Middle", "Spoofing"],
    answer: 1
  },
  {
    id: "drm",
    acronym: "DRM",
    term: "Digital Rights Management",
    useCase: "Technologies used to control access to copyrighted digital content and restrict how users can copy, modify, or share it.",
    scenario: "A user downloads a movie legally from a digital storefront but finds they cannot transfer the file to a different device or burn it to a DVD. Which technology is enforcing this restriction?",
    options: ["DLP", "DRM", "EFS", "ACL"],
    answer: 1
  },
  {
    id: "dsl",
    acronym: "DSL",
    term: "Digital Subscriber Line",
    useCase: "A communications medium used to transfer high-speed digital signals over standard copper telephone lines.",
    scenario: "A SOHO user is setting up an internet connection that uses the existing copper telephone wiring in their house, but still allows them to make phone calls simultaneously. Which technology is this?",
    options: ["Cable Broadband", "Fiber to the Home", "DSL", "Dial-up"],
    answer: 2
  },
  {
    id: "dvi",
    acronym: "DVI",
    term: "Digital Visual Interface",
    useCase: "A video display interface developed to transmit uncompressed digital video, configured to support multiple modes such as DVI-A, DVI-D, or DVI-I.",
    scenario: "A technician is connecting an older monitor to a PC. The cable has a white connector with 24 pins arranged in a rectangular grid and a wider flat pin to the side. Which interface is this?",
    options: ["VGA", "HDMI", "DisplayPort", "DVI"],
    answer: 3
  },
  {
    id: "ecc",
    acronym: "ECC",
    term: "Error-correcting Code",
    useCase: "A type of memory (RAM) that can detect and correct the most common kinds of internal data corruption, typically used in enterprise servers.",
    scenario: "An IT administrator is building a mission-critical database server and needs memory that can automatically fix single-bit errors to prevent system crashes. Which type of memory should they purchase?",
    options: ["Non-parity RAM", "ECC RAM", "VRAM", "SODIMM"],
    answer: 1
  },
  {
    id: "edr",
    acronym: "EDR",
    term: "Endpoint Detection and Response",
    useCase: "A cybersecurity technology that continually monitors an endpoint (like a workstation) to detect and mitigate malicious cyber threats.",
    scenario: "A company wants to replace its legacy antivirus with a modern solution that continuously records system behaviors and provides automated remediation for advanced threats on user laptops. What should they implement?",
    options: ["Firewall", "EDR", "DLP", "UTM"],
    answer: 1
  },
  {
    id: "efs",
    acronym: "EFS",
    term: "Encrypting File System",
    useCase: "A feature introduced in Windows NTFS that provides file-level and folder-level encryption.",
    scenario: "A Windows user wants to secure a single folder containing sensitive financial documents so that other users who log into the exact same computer cannot read them. What Windows feature should they use?",
    options: ["BitLocker", "EFS", "APFS", "FileVault"],
    answer: 1
  },
  {
    id: "eol",
    acronym: "EOL",
    term: "End-of-life",
    useCase: "A term used to indicate that a product is at the end of its useful lifespan, and the vendor will no longer market, sell, or provide updates for it.",
    scenario: "The IT department issues a memo stating that Windows 10 will no longer receive security patches after a specific date. What lifecycle stage is the operating system entering?",
    options: ["EOL", "Beta", "RTM", "Deprecation"],
    answer: 0
  },
  {
    id: "esata",
    acronym: "eSATA",
    term: "External Serial Advanced Technology Attachment",
    useCase: "An extension to the SATA standard that enables SATA drives to be attached externally.",
    scenario: "A user needs to connect an external hard drive for backups and wants fast transfer speeds using a physical port that directly supports SATA signaling. Which connection should be used?",
    options: ["USB 2.0", "FireWire", "eSATA", "VGA"],
    answer: 2
  },
  {
    id: "esd",
    acronym: "ESD",
    term: "Electrostatic Discharge",
    useCase: "The sudden flow of electricity between two electrically charged objects, which can severely damage sensitive computer components.",
    scenario: "Before replacing a motherboard, a technician touches the unpainted metal chassis of the computer case and puts on an anti-static wrist strap. What is the technician trying to prevent?",
    options: ["Power surge", "ESD", "Overheating", "Short circuit"],
    answer: 1
  },
  {
    id: "eula",
    acronym: "EULA",
    term: "End-user License Agreement",
    useCase: "A legal contract between a software developer or vendor and the user of the software.",
    scenario: "During the installation of a new application, a prompt appears requiring the user to agree to the terms regarding how the software can be used and distributed. What is this document called?",
    options: ["NDA", "SLA", "EULA", "MSDS"],
    answer: 2
  },
  {
    id: "exfat",
    acronym: "exFAT",
    term: "Extended File Allocation Table",
    useCase: "A file system optimized for flash drives and SD cards, allowing file sizes larger than 4GB while maintaining cross-platform compatibility.",
    scenario: "A photographer needs to format a 128GB SD card to use in both a digital camera and a MacBook, and they frequently transfer 10GB video files. Which file system is the best choice?",
    options: ["FAT32", "NTFS", "exFAT", "ext4"],
    answer: 2
  },
  {
    id: "fat32",
    acronym: "FAT32",
    term: "32-bit File Allocation Table",
    useCase: "An older file system widely used for USB drives due to high compatibility across OS platforms, but limited to a maximum file size of 4GB.",
    scenario: "A user tries to copy a 6GB ISO file to a 32GB USB flash drive but receives an error saying the file is too large for the destination file system. Which file system is currently on the drive?",
    options: ["NTFS", "exFAT", "APFS", "FAT32"],
    answer: 3
  },
  {
    id: "frt",
    acronym: "FRT",
    term: "Facial Recognition Technology",
    useCase: "Biometric technology capable of identifying or verifying a person from a digital image or video frame.",
    scenario: "A corporate smartphone allows the user to unlock the device simply by looking at the front-facing camera. Which biometric authentication method is this?",
    options: ["MFA", "FRT", "Fingerprint scanner", "Retina scan"],
    answer: 1
  },
  {
    id: "ftp",
    acronym: "FTP",
    term: "File Transfer Protocol",
    useCase: "A standard, unencrypted network protocol used for the transfer of computer files between a client and server on a computer network.",
    scenario: "A web developer needs to upload a directory of HTML and image files to a remote web server over port 21. Which protocol are they using?",
    options: ["SSH", "HTTP", "FTP", "RDP"],
    answer: 2
  }
{
    id: "gfs",
    acronym: "GFS",
    term: "Grandfather-Father-Son",
    useCase: "A common backup rotation scheme used to maintain historical archives while minimizing the number of backup media required.",
    scenario: "An organization performs daily, weekly, and monthly tape backups. The monthly backups are stored offsite for a year, while daily backups are overwritten weekly. Which backup strategy is being utilized?",
    options: ["Incremental", "Differential", "3-2-1 Rule", "GFS"],
    answer: 3
  },
  {
    id: "gps",
    acronym: "GPS",
    term: "Global Positioning System",
    useCase: "A satellite-based radio navigation system owned by the US government, providing geolocation and time information to a GPS receiver anywhere on Earth.",
    scenario: "A fleet management company is deploying ruggedized tablets to their delivery trucks to track real-time routing and vehicle location. Which internal hardware component must these tablets have?",
    options: ["NFC", "RFID", "GPS", "Bluetooth"],
    answer: 2
  },
  {
    id: "gpt",
    acronym: "GPT",
    term: "GUID Partition Table",
    useCase: "A standard for the layout of partition tables on a physical storage disk, required for booting modern UEFI systems and supporting drives larger than 2TB.",
    scenario: "A technician is installing a new 4TB hard drive in a workstation, but Disk Management only allows the creation of a 2TB partition. What must the technician do to utilize the full capacity?",
    options: ["Format as FAT32", "Convert from MBR to GPT", "Enable Secure Boot", "Change SATA mode to AHCI"],
    answer: 1
  },
  {
    id: "guid",
    acronym: "GUID",
    term: "Globally Unique Identifier",
    useCase: "A 128-bit text string that represents an identification (ID) used in computer systems, ensuring uniqueness without a central coordinator.",
    scenario: "A developer is looking at a database schema and notices a 32-character hexadecimal string separated by hyphens used as the primary key for user profiles. What format is this identifier using?",
    options: ["MAC Address", "IPv6 Address", "GUID", "SSID"],
    answer: 2
  },
  {
    id: "hdd",
    acronym: "HDD",
    term: "Hard Disk Drive",
    useCase: "A traditional data storage device that uses magnetic storage to store and retrieve digital information using rapidly rotating platters.",
    scenario: "A company needs to purchase storage for a security camera NVR that will continuously record video 24/7. The budget is tight, and high capacity is the priority over speed. Which storage type is best?",
    options: ["NVMe", "SSD", "HDD", "Flash Drive"],
    answer: 2
  },
  {
    id: "hdmi",
    acronym: "HDMI",
    term: "High-Definition Multimedia Interface",
    useCase: "A proprietary audio/video interface for transmitting uncompressed video data and compressed or uncompressed digital audio data.",
    scenario: "A user is setting up a home theater PC and needs to run a single cable to their television that carries both the 4K video signal and surround sound audio. Which cable should they use?",
    options: ["DVI-D", "VGA", "HDMI", "USB-A"],
    answer: 2
  },
  {
    id: "hsm",
    acronym: "HSM",
    term: "Hardware Security Module",
    useCase: "A physical computing device that safeguards and manages digital keys, performs encryption and decryption functions for digital signatures, and provides strong authentication.",
    scenario: "An enterprise needs to securely generate and store cryptographic keys for their internal Certificate Authority (CA). To prevent the keys from being compromised via software exploits, what should they deploy?",
    options: ["TPM", "HSM", "Smart Card", "Radius Server"],
    answer: 1
  },
  {
    id: "http",
    acronym: "HTTP",
    term: "Hypertext Transfer Protocol",
    useCase: "The foundation of data communication for the World Wide Web, operating over TCP port 80 to transmit unencrypted web pages.",
    scenario: "A technician notices that when a user logs into a legacy internal web portal, their username and password can be captured in cleartext using a packet sniffer. Which protocol is the portal likely using?",
    options: ["HTTPS", "SSH", "HTTP", "SFTP"],
    answer: 2
  },
  {
    id: "https",
    acronym: "HTTPS",
    term: "Hypertext Transfer Protocol Secure",
    useCase: "An extension of HTTP that uses encryption (TLS/SSL) for secure communication over a computer network, operating over TCP port 443.",
    scenario: "A web administrator is configuring a new online store. To ensure that customer credit card data is encrypted while in transit between the web browser and the server, which protocol must be implemented?",
    options: ["HTTP", "HTTPS", "FTP", "SNMP"],
    answer: 1
  },
  {
    id: "iaas",
    acronym: "IaaS",
    term: "Infrastructure as a Service",
    useCase: "A form of cloud computing that provides virtualized computing resources (servers, storage, networking) over the internet.",
    scenario: "A startup company decides not to purchase physical servers for their datacenter. Instead, they rent virtual servers and network infrastructure from Amazon Web Services (AWS). Which cloud model is this?",
    options: ["PaaS", "SaaS", "IaaS", "DaaS"],
    answer: 2
  },
  {
    id: "iam",
    acronym: "IAM",
    term: "Identity and Access Management",
    useCase: "A framework of business processes, policies, and technologies that facilitates the management of electronic or digital identities.",
    scenario: "The IT department is implementing a new system to centrally manage employee onboarding, ensuring new hires are automatically granted the correct permissions to file shares and applications based on their role. What is this concept called?",
    options: ["IAM", "DLP", "UTM", "DRM"],
    answer: 0
  },
  {
    id: "imap",
    acronym: "IMAP",
    term: "Internet Mail Access Protocol",
    useCase: "An email retrieval protocol used by email clients to access messages on a mail server, synchronizing read/unread status across multiple devices (Ports 143/993).",
    scenario: "A user wants to check their corporate email on both their smartphone and their laptop. They specifically request that if they delete an email on their phone, it also deletes from the laptop. Which protocol should be configured?",
    options: ["SMTP", "POP3", "IMAP", "SNMP"],
    answer: 2
  },
  {
    id: "iops",
    acronym: "IOPS",
    term: "Input/Output Operations Per Second",
    useCase: "A common performance measurement used to benchmark computer storage devices like HDDs, SSDs, and SANs.",
    scenario: "A database administrator is evaluating two different solid-state drives for a high-transaction SQL server. Which metric should they look at to determine which drive can handle the highest number of simultaneous read/write requests?",
    options: ["RPM", "Bandwidth", "IOPS", "Latency"],
    answer: 2
  },
  {
    id: "iot",
    acronym: "IoT",
    term: "Internet of Things",
    useCase: "The network of physical objects embedded with sensors, software, and other technologies to connect and exchange data with other devices over the internet.",
    scenario: "A SOHO user has installed smart light bulbs, a Wi-Fi-enabled thermostat, and a smart refrigerator on their home network. What is the collective term for these types of devices?",
    options: ["SCADA", "IoT", "BYOD", "VDI"],
    answer: 1
  },
  {
    id: "ip",
    acronym: "IP",
    term: "Internet Protocol",
    useCase: "The principal set of rules for routing and addressing packets of data so that they can travel across networks and arrive at the correct destination.",
    scenario: "A technician is configuring a static logical address on a workstation so it can communicate with devices on different subnets across a router. Which type of address is being configured?",
    options: ["MAC Address", "IP Address", "Port Number", "GUID"],
    answer: 1
  },
  {
    id: "ips",
    acronym: "IPS",
    term: "In-plane Switching",
    useCase: "A screen technology for liquid-crystal displays (LCDs) known for providing excellent color reproduction and wide viewing angles.",
    scenario: "A graphic designer requests a new monitor. They specifically need a display that provides the most accurate color representation possible and does not distort colors when viewed from an angle. Which panel technology is best?",
    options: ["TN", "VA", "OLED", "IPS"],
    answer: 3
  },
  {
    id: "iso",
    acronym: "ISO",
    term: "International Organization for Standardization",
    useCase: "An international standard-setting body. In IT, 'ISO' also commonly refers to an archive file containing an identical copy of data found on an optical disc.",
    scenario: "A technician needs to install Windows on a virtual machine. They download a single file from Microsoft that contains the entire installation media, which they mount to the VM's virtual DVD drive. What type of file is this?",
    options: ["EXE", "MSI", "ISO", "ZIP"],
    answer: 2
  },
  {
    id: "itx",
    acronym: "ITX",
    term: "Information Technology extended",
    useCase: "A small motherboard form factor from VIA Technologies (most commonly Mini-ITX) used in compact computing systems.",
    scenario: "A customer wants a custom-built home theater PC (HTPC) that is as small and quiet as possible to fit inside an entertainment center. Which motherboard form factor should the technician select?",
    options: ["ATX", "Micro-ATX", "Mini-ITX", "E-ATX"],
    answer: 2
  },
  {
    id: "kvm",
    acronym: "KVM",
    term: "Keyboard-Video-Mouse",
    useCase: "A hardware device that allows a user to control multiple computers from one or more sets of keyboards, video monitors, and mice.",
    scenario: "A network administrator has four separate physical servers mounted in a rack but only has space for one monitor and keyboard. What device should they use to switch control between the four servers?",
    options: ["Network Switch", "KVM Switch", "Patch Panel", "Router"],
    answer: 1
  },
  {
    id: "lan",
    acronym: "LAN",
    term: "Local Area Network",
    useCase: "A computer network that interconnects computers within a limited area such as a residence, school, or office building.",
    scenario: "A company connects all of its employee workstations, printers, and a local file server together using ethernet cables plugged into a central switch in the office. What type of network is this?",
    options: ["WAN", "PAN", "MAN", "LAN"],
    answer: 3
  }
{
    id: "lc",
    acronym: "LC",
    term: "Lucent Connector",
    useCase: "A miniaturized version of the fiber-optic SC connector. It uses a push-pull latching mechanism and is highly favored for high-density network applications.",
    scenario: "A network technician is patching fiber optic cables in a dense server rack. They are using a small form-factor connector with a plastic clip that clicks into place. Which connector is being used?",
    options: ["ST", "SC", "LC", "RJ45"],
    answer: 2
  },
  {
    id: "lcd",
    acronym: "LCD",
    term: "Liquid Crystal Display",
    useCase: "A flat-panel display technology that uses the light-modulating properties of liquid crystals combined with polarizers. Requires a backlight to produce visible images.",
    scenario: "A user reports their laptop screen is extremely dim. The technician shines a flashlight closely at the screen and can faintly see the Windows desktop. Which display technology's backlight has most likely failed?",
    options: ["OLED", "Plasma", "CRT", "LCD"],
    answer: 3
  },
  {
    id: "ldap",
    acronym: "LDAP",
    term: "Lightweight Directory Access Protocol",
    useCase: "An open, vendor-neutral application protocol used for accessing and maintaining distributed directory information services over an IP network.",
    scenario: "An administrator needs to configure a third-party application to securely query their Microsoft Active Directory server to verify user credentials. Which protocol should be configured?",
    options: ["SNMP", "LDAP", "RDP", "SMB"],
    answer: 1
  },
  {
    id: "led",
    acronym: "LED",
    term: "Light-emitting Diode",
    useCase: "A semiconductor light source. In displays, it is typically used as the modern, energy-efficient backlighting source for LCD panels.",
    scenario: "A company is replacing all its older CCFL-backlit monitors with newer, thinner displays that consume less power and offer brighter images. What type of backlighting do the new monitors use?",
    options: ["OLED", "LED", "Plasma", "Fluorescent"],
    answer: 1
  },
  {
    id: "mac",
    acronym: "MAC",
    term: "Media Access Control",
    useCase: "A unique 48-bit identifier assigned to a network interface controller (NIC) for communications at the data link layer of a network segment.",
    scenario: "A network administrator is configuring port security on a switch to ensure only specific company laptops can connect to the physical wall jacks. What address type must the administrator add to the switch's allow list?",
    options: ["IPv4 Address", "IPv6 Address", "MAC Address", "Default Gateway"],
    answer: 2
  },
  {
    id: "man",
    acronym: "MAN",
    term: "Metropolitan Area Network",
    useCase: "A computer network that interconnects users with computer resources in a geographic area or region larger than a LAN but smaller than a WAN.",
    scenario: "A city government connects its city hall, police headquarters, and public library networks together using dedicated high-speed fiber optic lines laid across the city. Which network classification best describes this?",
    options: ["LAN", "PAN", "MAN", "WAN"],
    answer: 2
  },
  {
    id: "mbr",
    acronym: "MBR",
    term: "Master Boot Record",
    useCase: "An older partitioning architecture for storage drives that is limited to a maximum capacity of 2TB and a maximum of four primary partitions.",
    scenario: "A technician installs a 4TB hard drive into a legacy system, but the operating system only recognizes 2TB of usable space. The drive is currently limited by its partition style. What is it formatted as?",
    options: ["GPT", "MBR", "NTFS", "exFAT"],
    answer: 1
  },
  {
    id: "mdm",
    acronym: "MDM",
    term: "Mobile Device Management",
    useCase: "Software used by an IT department to monitor, manage, and secure employees' mobile devices that are deployed across multiple mobile service providers.",
    scenario: "A corporate employee loses their company-issued smartphone on a train. The IT department needs to immediately wipe the device remotely to protect sensitive data. What software enables this capability?",
    options: ["EDR", "MDM", "VDI", "VPN"],
    answer: 1
  },
  {
    id: "mdr",
    acronym: "MDR",
    term: "Managed Detection and Response",
    useCase: "An outsourced cybersecurity service that provides organizations with threat hunting services and responds to threats once they are discovered.",
    scenario: "A small business doesn't have the budget for a 24/7 security operations center (SOC), so they hire a third-party vendor to actively monitor their network, detect intrusions, and isolate compromised endpoints. What is this service called?",
    options: ["IaaS", "PaaS", "MDR", "SaaS"],
    answer: 2
  },
  {
    id: "mfa",
    acronym: "MFA",
    term: "Multifactor Authentication",
    useCase: "An electronic authentication method in which a user is granted access to a website or application only after successfully presenting two or more pieces of evidence (factors).",
    scenario: "To access the corporate VPN, employees must type in their password (something they know) and then approve a push notification on their smartphone (something they have). What security principle is being enforced?",
    options: ["SSO", "MFA", "Biometrics", "TACACS+"],
    answer: 1
  },
  {
    id: "mmc",
    acronym: "MMC",
    term: "Microsoft Management Console",
    useCase: "A component of Windows that provides system administrators and advanced users an interface for configuring and monitoring the system via snap-ins.",
    scenario: "A technician needs to view Event Viewer, Disk Management, and Device Manager from a single, unified interface. They open a Run dialog box and type 'compmgmt.msc'. Which underlying Windows framework is loading?",
    options: ["MMC", "UAC", "CMD", "PowerShell"],
    answer: 0
  },
  {
    id: "mnda",
    acronym: "MNDA",
    term: "Mutual Nondisclosure Agreement",
    useCase: "A legal contract between two or more parties that outlines confidential material, knowledge, or information they wish to share with one another but restrict access to by third parties.",
    scenario: "Two software companies are discussing a potential partnership to integrate their products. They want a legal guarantee that neither company will steal the other's source code during the talks. What document should they sign?",
    options: ["SLA", "EULA", "MNDA", "SOP"],
    answer: 2
  },
  {
    id: "msata",
    acronym: "mSATA",
    term: "Mini-serial Advanced Technology Attachment",
    useCase: "An older, bare-circuit-board form factor for solid-state drives, designed for use in space-constrained devices like thin laptops.",
    scenario: "A technician is upgrading the storage in an older ultra-thin laptop. The current drive is a small, rectangular circuit board that plugs into a slot on the motherboard, but it still uses the SATA bus rather than PCIe. What form factor is this?",
    options: ["M.2 NVMe", "2.5-inch SATA", "mSATA", "PCIe Add-in Card"],
    answer: 2
  },
  {
    id: "msds",
    acronym: "MSDS",
    term: "Material Safety Data Sheet",
    useCase: "A document that contains information on the potential hazards (health, fire, reactivity, and environmental) and how to work safely with a chemical product.",
    scenario: "A technician drops a laser printer toner cartridge, and it bursts open, spilling toner powder into the air and onto the floor. Where should the technician look to find the proper cleanup procedures and health risks?",
    options: ["SOP", "EULA", "MSDS", "SLA"],
    answer: 2
  },
  {
    id: "mx",
    acronym: "MX",
    term: "Mail Exchange",
    useCase: "A type of DNS record that specifies the mail server responsible for accepting email messages on behalf of a domain name.",
    scenario: "A company recently migrated their email hosting to Microsoft 365. Users can browse the internet, but outside clients report that emails sent to the company are bouncing back. Which DNS record most likely needs to be updated?",
    options: ["A Record", "CNAME", "MX", "TXT"],
    answer: 2
  },
  {
    id: "nda",
    acronym: "NDA",
    term: "Nondisclosure Agreement",
    useCase: "A legally binding contract establishing a confidential relationship, wherein the person signing agrees not to share sensitive information with competitors or the public.",
    scenario: "An IT contractor is hired to upgrade the servers at a military defense contractor. Before they are granted physical access to the building, they must sign a document promising not to discuss anything they see. What is this document?",
    options: ["NDA", "SLA", "BYOD", "AUP"],
    answer: 0
  },
  {
    id: "netbios",
    acronym: "NetBIOS",
    term: "Network Basic Input/Output System",
    useCase: "A legacy program that allows applications on different computers to communicate within a local area network, often responsible for older Windows name resolution.",
    scenario: "While troubleshooting a legacy Windows application that only works on the local subnet, the technician discovers it relies on a flat namespace for computer names rather than DNS. Which legacy protocol is the app likely using?",
    options: ["SNMP", "NetBIOS", "DHCP", "NTP"],
    answer: 1
  },
  {
    id: "nfc",
    acronym: "NFC",
    term: "Near-field Communication",
    useCase: "A set of communication protocols for communication between two electronic devices over a distance of 4 cm (1.5 in) or less, commonly used for contactless payments.",
    scenario: "A user walks into a coffee shop, opens a digital wallet app on their smartphone, and places the phone within an inch of the credit card terminal to pay. Which wireless technology enables this transaction?",
    options: ["Bluetooth", "NFC", "RFID", "Wi-Fi Direct"],
    answer: 1
  },
  {
    id: "nic",
    acronym: "NIC",
    term: "Network Interface Card",
    useCase: "A computer hardware component that connects a computer to a computer network, providing a physical port for an ethernet cable or a wireless antenna.",
    scenario: "A desktop PC cannot access the network. The technician checks the back of the PC and notices the Ethernet cable is securely plugged in, but there are no blinking link lights on the port. Which component has most likely failed?",
    options: ["CPU", "GPU", "NIC", "RAM"],
    answer: 2
  },
  {
    id: "ntfs",
    acronym: "NTFS",
    term: "New Technology File System",
    useCase: "The primary file system used by modern Windows operating systems, supporting large file sizes, file-level security (permissions), and encryption (EFS).",
    scenario: "A user is setting up a new 2TB internal hard drive on their Windows 11 desktop. They need the ability to assign folder-level security permissions to different local user accounts. Which file system must they choose?",
    options: ["exFAT", "FAT32", "NTFS", "APFS"],
    answer: 2
  }
{
    {
    id: "ntp",
    acronym: "NTP",
    term: "Network Time Protocol",
    useCase: "A networking protocol used to synchronize the clocks of computer systems over packet-switched, variable-latency data networks.",
    scenario: "Users are suddenly unable to log into the Windows domain. The administrator notices that the workstation clocks are completely out of sync with the domain controller, causing Kerberos authentication to fail. Which protocol needs to be fixed?",
    options: ["SNMP", "NTP", "DHCP", "FTP"],
    answer: 1
  },
  {
    id: "nvme",
    acronym: "NVMe",
    term: "Non-volatile Memory Express",
    useCase: "A modern, high-performance storage protocol designed to allow solid-state drives (SSDs) to communicate directly with the CPU via the PCIe bus.",
    scenario: "A technician is installing an M.2 solid-state drive into a high-end gaming PC. The customer specifically wants the drive to utilize the PCIe bus for maximum read/write speeds, bypassing the older SATA controller. Which standard does this drive use?",
    options: ["mSATA", "NVMe", "eSATA", "SCSI"],
    answer: 1
  },
  {
    id: "oled",
    acronym: "OLED",
    term: "Organic Light-emitting Diode",
    useCase: "A display technology where each pixel generates its own light, allowing for true blacks and infinite contrast since it does not require a separate backlight.",
    scenario: "A graphic designer is buying a new laptop and wants a screen that displays perfect, deep blacks without any 'backlight bleed' around the edges. Which display technology should they choose?",
    options: ["TN", "LCD", "IPS", "OLED"],
    answer: 3
  },
  {
    id: "ont",
    acronym: "ONT",
    term: "Optical Network Terminal",
    useCase: "A device that serves as the demarcation point for Fiber-to-the-Premises (FTTP), converting optical signals from the ISP's fiber line into electrical signals for a copper ethernet router.",
    scenario: "An ISP has just run a fiber optic cable to the outside of a customer's house. The technician mounts a box on the wall that takes the fiber line in and provides a standard RJ45 ethernet port out for the customer's router. What is this device?",
    options: ["Cable Modem", "DSL Router", "ONT", "Switch"],
    answer: 2
  },
  {
    id: "os",
    acronym: "OS",
    term: "Operating System",
    useCase: "System software that manages computer hardware, software resources, and provides common services for computer programs.",
    scenario: "A user turns on their PC, but instead of seeing the Windows login screen, they receive an error stating 'BOOTMGR is missing'. Which software layer is failing to load?",
    options: ["BIOS", "UEFI", "OS", "Hypervisor"],
    answer: 2
  },
  {
    id: "otp",
    acronym: "OTP",
    term: "One-time Password (or Passcode)",
    useCase: "A password that is valid for only one login session or transaction, often generated by an authenticator app or sent via SMS as part of Multifactor Authentication.",
    scenario: "After entering their password, a user receives a 6-digit text message on their smartphone that expires in 60 seconds. They must enter this code to complete the login process. What is this code called?",
    options: ["PIN", "OTP", "GUID", "SSO"],
    answer: 1
  },
  {
    id: "paas",
    acronym: "PaaS",
    term: "Platform as a Service",
    useCase: "A cloud computing model that provides a complete environment for developers to build, test, and deploy applications without managing the underlying OS or servers.",
    scenario: "A team of software developers needs a cloud environment to host their new web application. They want the cloud provider to manage the underlying servers, operating systems, and load balancing, so they can focus entirely on writing their code. Which cloud model is this?",
    options: ["IaaS", "PaaS", "SaaS", "DaaS"],
    answer: 1
  },
  {
    id: "pam",
    acronym: "PAM",
    term: "Privileged Access Management",
    useCase: "Cybersecurity strategies and technologies for exerting control over the elevated ('root' or 'admin') access and permissions for users, accounts, and systems.",
    scenario: "A company implements a new security policy where IT staff can no longer log in directly with domain admin credentials. Instead, they must check out a temporary, highly audited credential from a central vault. What concept does this enforce?",
    options: ["PAM", "SSO", "BYOD", "MDM"],
    answer: 0
  },
  {
    id: "pan",
    acronym: "PAN",
    term: "Personal Area Network",
    useCase: "A computer network used for data transmission amongst devices such as smartphones, tablets, and smartwatches, typically centered around a single person within a range of about 10 meters.",
    scenario: "A user syncs their Bluetooth smartwatch to their smartphone so they can receive text notifications on their wrist while running. What type of network have these two devices formed?",
    options: ["LAN", "WLAN", "PAN", "MAN"],
    answer: 2
  },
  {
    id: "pc",
    acronym: "PC",
    term: "Personal Computer",
    useCase: "A multi-purpose computer whose size, capabilities, and price make it feasible for individual use.",
    scenario: "A user visits an electronics store to buy a desktop tower for home office use, specifically looking for a system running a standard operating system for an individual. What broad category of device are they purchasing?",
    options: ["Mainframe", "Server", "Thin Client", "PC"],
    answer: 3
  },
  {
    id: "pci",
    acronym: "PCI",
    term: "Peripheral Component Interconnect",
    useCase: "An older, parallel local computer bus used for attaching hardware devices in a computer, mostly replaced by PCIe.",
    scenario: "A technician is attempting to install a legacy sound card into a modern motherboard. However, the card has a 32-bit parallel connector, and the motherboard only has smaller serial expansion slots. What type of card is the technician trying to install?",
    options: ["PCIe", "PCI", "AGP", "ISA"],
    answer: 1
  },
  {
    id: "pcie",
    acronym: "PCIe",
    term: "Peripheral Component Interconnect Express",
    useCase: "The modern standard internal interface for connecting high-speed components like graphics cards, NVMe SSDs, and network cards to the motherboard via serial lanes (x1, x4, x8, x16).",
    scenario: "A gamer is upgrading their desktop and purchases a new high-end graphics card. They open the case and insert the card into the longest expansion slot on the motherboard, which provides 16 lanes of data. Which slot did they use?",
    options: ["PCI", "PCIe", "DIMM", "SATA"],
    answer: 1
  },
  {
    id: "pii",
    acronym: "PII",
    term: "Personally Identifiable Information",
    useCase: "Any data that could potentially identify a specific individual, such as a Social Security Number, date of birth, or biometric records.",
    scenario: "A hospital experiences a data breach, and an unencrypted database is stolen. The database contains patients' full names, home addresses, and Social Security Numbers. What category of data has been compromised?",
    options: ["PHI", "PII", "EULA", "DRM"],
    answer: 1
  },
  {
    id: "pin",
    acronym: "PIN",
    term: "Personal Identification Number",
    useCase: "A numeric passcode used to authenticate a user to a system, commonly used with smart cards, smartphones, and ATMs.",
    scenario: "A user inserts their corporate smart card into a laptop to log in. Before access is granted, the system prompts them to enter a 6-digit numeric code. What is this code called?",
    options: ["OTP", "GUID", "PIN", "SSID"],
    answer: 2
  },
  {
    id: "piv",
    acronym: "PIV",
    term: "Personal Identity Verification",
    useCase: "A specific type of smart card standard used by United States federal employees and contractors to gain physical access to facilities and logical access to information systems.",
    scenario: "A newly hired government contractor is issued a photo ID card embedded with an integrated circuit chip. They must tap it to enter the building and insert it into a keyboard to log into their workstation. What type of card is this?",
    options: ["PIV", "RFID", "SIM", "SD"],
    answer: 0
  },
  {
    id: "poe",
    acronym: "POE",
    term: "Power over Ethernet",
    useCase: "A technology that allows network cables (like Cat 5e/Cat 6) to carry electrical power alongside data to remote devices.",
    scenario: "An IT technician is installing security cameras in the warehouse ceiling where there are no electrical outlets. They run a single Cat 6 cable from the network switch to each camera to provide both network connectivity and electricity. What technology enables this?",
    options: ["VPN", "POE", "VLAN", "QoS"],
    answer: 1
  },
  {
    id: "pop",
    acronym: "POP",
    term: "Post Office Protocol",
    useCase: "An older email protocol used by local email clients to retrieve email from a remote server over a TCP/IP connection. By default, it downloads the email and deletes it from the server.",
    scenario: "A user complains that when they check their email on their laptop, the messages disappear from their phone. The technician discovers the laptop is configured to download mail on Port 110 and not leave a copy on the server. Which protocol is the laptop using?",
    options: ["IMAP", "SMTP", "POP", "HTTP"],
    answer: 2
  },
  {
    id: "post",
    acronym: "POST",
    term: "Power-on Self-test",
    useCase: "The initial diagnostic testing sequence performed by a computer's BIOS/UEFI immediately after being powered on to verify that vital hardware is working properly.",
    scenario: "A technician turns on a desktop PC. The screen remains completely black, but the computer emits a series of three long beeps from its internal speaker. What process has failed?",
    options: ["OS Boot", "POST", "Windows Update", "Network Login"],
    answer: 1
  },
  {
    id: "pup",
    acronym: "PUP",
    term: "Potentially Unwanted Program",
    useCase: "Software that a user may perceive as unwanted, such as adware or browser toolbars, which often comes bundled with free software downloads.",
    scenario: "A user downloads a free PDF viewer from the internet. The next day, they notice their web browser's default search engine has changed and a new shopping toolbar has appeared. What type of software caused this?",
    options: ["Ransomware", "Rootkit", "PUP", "Keylogger"],
    answer: 2
  },
  {
    id: "radius",
    acronym: "RADIUS",
    term: "Remote Authentication Dial-in User Server",
    useCase: "A networking protocol that provides centralized Authentication, Authorization, and Accounting (AAA) management for users who connect and use a network service.",
    scenario: "A company wants to secure its enterprise Wi-Fi network. Instead of a shared Wi-Fi password, they want employees to authenticate using their Active Directory usernames and passwords. What type of server should the wireless controller forward these login requests to?",
    options: ["DHCP", "RADIUS", "DNS", "NTP"],
    answer: 1
  },
  {
    id: "raid",
    acronym: "RAID",
    term: "Redundant Array of Independent Disks",
    useCase: "A data storage virtualization technology that combines multiple physical disk drive components into one or more logical units for the purposes of data redundancy, performance improvement, or both.",
    scenario: "A small business purchases a Network Attached Storage (NAS) device with four hard drives. The technician configures it so that if any single hard drive physically fails, no data is lost and the system keeps running. What technology is providing this fault tolerance?",
    options: ["SAN", "RAID", "SMART", "NVMe"],
    answer: 1
  }
  {
    id: "ram",
    acronym: "RAM",
    term: "Random-access Memory",
    useCase: "Volatile computer memory used to store working data and machine code currently in active use by the processor.",
    scenario: "A user complains that their computer slows to a crawl and the hard drive activity light stays on solid whenever they open more than five browser tabs. Which component most likely needs to be upgraded?",
    options: ["CPU", "GPU", "SSD", "RAM"],
    answer: 3
  },
  {
    id: "rdp",
    acronym: "RDP",
    term: "Remote Desktop Protocol",
    useCase: "A proprietary protocol developed by Microsoft that provides a user with a graphical interface to connect to another computer over a network (TCP port 3389).",
    scenario: "An IT administrator is working from home and needs to securely log into the GUI of a Windows Server located in the corporate datacenter to run updates. Which protocol will they use?",
    options: ["SSH", "VNC", "RDP", "Telnet"],
    answer: 2
  },
  {
    id: "refs",
    acronym: "ReFS",
    term: "Resilient File System",
    useCase: "Microsoft's newest file system designed to maximize data availability, scale efficiently, and ensure data integrity by providing resilience to corruption without the need for chkdsk.",
    scenario: "A systems administrator is formatting a massive storage array on a Windows Server. They specifically want a file system that automatically detects and repairs data corruption on the fly. Which file system should they select?",
    options: ["NTFS", "FAT32", "ReFS", "exFAT"],
    answer: 2
  },
  {
    id: "rfid",
    acronym: "RFID",
    term: "Radiofrequency Identification",
    useCase: "A technology that uses electromagnetic fields to automatically identify and track tags attached to objects, commonly used in inventory management and ID badges.",
    scenario: "A warehouse uses automated scanners at the loading dock that instantly read the inventory information from passive tags attached to pallets as a forklift drives past. What technology are these tags using?",
    options: ["NFC", "Bluetooth", "RFID", "Infrared"],
    answer: 2
  },
  {
    id: "rj11",
    acronym: "RJ11",
    term: "Registered Jack Function 11",
    useCase: "A 6-position, 2-conductor modular connector used primarily for traditional analog telephone lines and DSL modems.",
    scenario: "A SOHO user is setting up a new DSL internet connection. They need to plug the modem into the wall jack using a small, square cable with two copper contacts. Which connector is this?",
    options: ["RJ45", "RJ11", "Coaxial", "F-Type"],
    answer: 1
  },
  {
    id: "rj45",
    acronym: "RJ45",
    term: "Registered Jack Function 45",
    useCase: "An 8-position, 8-conductor modular connector commonly used to terminate twisted-pair cables (like Cat 5e and Cat 6) for Ethernet networking.",
    scenario: "A network technician is creating custom-length patch cables to connect desktop PCs to a wall switch. They are crimping clear plastic connectors onto the ends of Cat 6 cable. What is the standard name for this connector?",
    options: ["RJ11", "BNC", "RJ45", "RS-232"],
    answer: 2
  },
  {
    id: "rmm",
    acronym: "RMM",
    term: "Remote Monitoring and Management",
    useCase: "A platform used by IT service providers (MSPs) to maintain client IT infrastructure and systems remotely, including patching, scripting, and alerting.",
    scenario: "A managed service provider (MSP) needs a central dashboard to track the CPU temperatures, antivirus status, and missing Windows updates for 500 client computers across different companies. What type of software do they need?",
    options: ["MDM", "RMM", "VDI", "UTM"],
    answer: 1
  },
  {
    id: "rsr",
    acronym: "RSR",
    term: "Rapid Security Response",
    useCase: "A software update mechanism used by Apple devices to deliver important security improvements between major software updates, often without requiring a full system reboot.",
    scenario: "An iPhone user receives a notification for a small download that patches a critical zero-day vulnerability in Safari, but does not upgrade their core iOS version. What is this update called?",
    options: ["RSR", "Service Pack", "Firmware Flash", "Rollup"],
    answer: 0
  },
  {
    id: "saas",
    acronym: "SaaS",
    term: "Software as a Service",
    useCase: "A cloud computing model where software applications are hosted by a vendor and made available to customers over the internet, typically on a subscription basis.",
    scenario: "A company stops hosting their own Microsoft Exchange email servers and instead purchases user licenses for Microsoft 365, accessing their email entirely through web browsers. Which cloud model have they adopted?",
    options: ["IaaS", "PaaS", "SaaS", "DaaS"],
    answer: 2
  },
  {
    id: "san",
    acronym: "SAN",
    term: "Storage Area Network",
    useCase: "A dedicated, high-speed network that provides block-level access to storage, making disk arrays appear to the operating system as locally attached drives.",
    scenario: "An enterprise data center needs to provide massive, highly redundant storage to a cluster of virtual machines. The storage must operate at block-level over high-speed Fibre Channel. What type of storage architecture is this?",
    options: ["NAS", "SAN", "DAS", "Cloud Storage"],
    answer: 1
  },
  {
    id: "saml",
    acronym: "SAML",
    term: "Security Assertions Markup Language",
    useCase: "An XML-based open standard for exchanging authentication and authorization data between an identity provider and a service provider, essential for web-based Single Sign-On (SSO).",
    scenario: "A company implements Single Sign-On (SSO) so employees can log into their corporate portal once and automatically gain access to third-party web apps like Salesforce and Workday. Which technology commonly facilitates this token exchange?",
    options: ["RADIUS", "LDAP", "SAML", "TACACS+"],
    answer: 2
  },
  {
    id: "sas",
    acronym: "SAS",
    term: "Serial Attached SCSI",
    useCase: "A point-to-point serial protocol that moves data to and from computer storage devices, largely used in enterprise servers for 10,000 to 15,000 RPM hard drives.",
    scenario: "A technician is replacing a failed hard drive in an enterprise database server. The drive has a connector similar to SATA, but it's a single continuous piece of plastic to support dual-porting, and operates at 15,000 RPM. What interface is this?",
    options: ["NVMe", "IDE", "SATA", "SAS"],
    answer: 3
  },
  {
    id: "sata",
    acronym: "SATA",
    term: "Serial Advanced Technology Attachment",
    useCase: "The standard internal computer bus interface for connecting host bus adapters to mass storage devices like consumer hard disk drives and 2.5-inch SSDs.",
    scenario: "A user is upgrading a 5-year-old desktop with a new 2.5-inch solid-state drive. They connect the drive to the motherboard using a thin cable with a distinctive L-shaped connector. What standard is being used?",
    options: ["PCIe", "SATA", "SCSI", "PATA"],
    answer: 1
  },
  {
    id: "sc",
    acronym: "SC",
    term: "Subscriber Connector",
    useCase: "A standard fiber-optic connector that uses a push-pull latching mechanism with a square shaped body, widely used for single-mode fiber.",
    scenario: "A network engineer is terminating a fiber optic run in a server room. They plug in a square-shaped, snap-in connector. What type of connector is this?",
    options: ["ST", "LC", "SC", "BNC"],
    answer: 2
  },
  {
    id: "scada",
    acronym: "SCADA",
    term: "Supervisory Control and Data Acquisition",
    useCase: "An industrial control system architecture comprising computers and networked data communications for high-level supervision of machines (e.g., manufacturing, power plants, water treatment).",
    scenario: "A cybersecurity analyst is auditing the network security of a municipal water treatment plant, specifically focusing on the systems that electronically monitor and open the physical water valves. What type of network is this?",
    options: ["SOHO", "SCADA", "PAN", "VLAN"],
    answer: 1
  },
  {
    id: "scsi",
    acronym: "SCSI",
    term: "Small Computer System Interface",
    useCase: "A legacy set of standards for physically connecting and transferring data between computers and peripheral devices using parallel ribbons, requiring ID numbers and a terminator.",
    scenario: "A technician is servicing a legacy server from the 1990s. The hard drives are daisy-chained together using a wide, 68-pin ribbon cable, and the last drive in the chain has a terminating resistor on it. What interface is this?",
    options: ["SAS", "IDE", "SCSI", "SATA"],
    answer: 2
  },
  {
    id: "sim",
    acronym: "SIM",
    term: "Subscriber Identity Module",
    useCase: "An integrated circuit card intended to securely store the international mobile subscriber identity (IMSI) number and related keys used to authenticate cellular devices.",
    scenario: "A user buys a brand new unlocked smartphone from an electronics store. In order to make phone calls and use 5G data using their existing cellular plan, what component must they transfer from their old phone to the new one?",
    options: ["SD Card", "SIM Card", "NFC Chip", "Battery"],
    answer: 1
  },
  {
    id: "sla",
    acronym: "SLA",
    term: "Service-level Agreement",
    useCase: "A formal commitment between a service provider and a client specifying measurable metrics like network uptime, responsiveness, and penalties for missing targets.",
    scenario: "An enterprise signs a contract with a cloud hosting provider. The contract stipulates that the provider guarantees 99.99% uptime, and if the servers go down for longer than that, the provider must pay financial penalties. What document contains this guarantee?",
    options: ["MNDA", "SOP", "EULA", "SLA"],
    answer: 3
  },
  {
    id: "smart",
    acronym: "S.M.A.R.T",
    term: "Self-monitoring Analysis and Reporting Technology",
    useCase: "A monitoring system built into hard disk drives and solid-state drives that detects and reports on various indicators of drive reliability, anticipating imminent hardware failures.",
    scenario: "Upon booting up their PC, a user sees a black screen with a warning message: 'Primary Disk Drive failure predicted. Backup your data immediately.' Which built-in hardware technology generated this warning?",
    options: ["UEFI", "S.M.A.R.T", "CHKDSK", "TPM"],
    answer: 1
  },
  {
    id: "smb",
    acronym: "SMB",
    term: "Server Message Block",
    useCase: "A network communication protocol used predominantly in Windows environments to provide shared access to files, directories, and printers across a network (TCP port 445).",
    scenario: "An employee opens File Explorer and maps a network drive (Z:) to a shared folder located on the corporate file server. Which protocol is primarily responsible for facilitating this file sharing over the network?",
    options: ["FTP", "SNMP", "SMB", "RDP"],
    answer: 2
  }
{
    id: "sms",
    acronym: "SMS",
    term: "Short Message Service",
    useCase: "A text messaging service component of most telephone, internet, and mobile device systems, frequently used for delivering MFA codes.",
    scenario: "An employee attempts to log into their corporate VPN. After entering their password, they receive a text message on their smartphone containing a 6-digit code they must enter to complete the login. What service delivered this code?",
    options: ["MMS", "SMTP", "SMS", "SNMP"],
    answer: 2
  },
  {
    id: "smtp",
    acronym: "SMTP",
    term: "Simple Mail Transfer Protocol",
    useCase: "The standard protocol for email transmission across the internet. It is used to push or send emails from a client to a server (TCP port 25 or 587).",
    scenario: "A user reports that they can successfully receive new emails in their Outlook client, but any message they try to send gets stuck in the Outbox. Which protocol's port is most likely blocked by the local firewall?",
    options: ["POP3", "IMAP", "SMTP", "HTTP"],
    answer: 2
  },
  {
    id: "sodimm",
    acronym: "SODIMM",
    term: "Small Outline Dual In-line Memory Module",
    useCase: "A smaller, physically shorter type of computer memory module intended primarily for laptops, small-footprint PCs, and highly compact motherboards.",
    scenario: "A technician needs to upgrade the RAM in a user's corporate laptop from 8GB to 16GB. Which memory form factor should the technician order?",
    options: ["DIMM", "SODIMM", "GDDR", "Flash"],
    answer: 1
  },
  {
    id: "soho",
    acronym: "SOHO",
    term: "Small Office/Home Office",
    useCase: "A term used to describe a small, localized business environment or the class of consumer-grade networking equipment designed to support it.",
    scenario: "A freelance graphic designer is setting up a single wireless router that also acts as an unmanaged switch and firewall for their 3-person studio. What network environment acronym best describes this setup?",
    options: ["WAN", "SOHO", "MAN", "SAN"],
    answer: 1
  },
  {
    id: "sop",
    acronym: "SOP",
    term: "Standard Operating Procedure",
    useCase: "A set of step-by-step instructions compiled by an organization to help workers carry out complex routine operations efficiently and uniformly.",
    scenario: "A new IT helpdesk agent receives a call about a locked account. They refer to a documented company manual that dictates the exact three steps required to verify the user's identity before unlocking it. What is this manual called?",
    options: ["SLA", "NDA", "EULA", "SOP"],
    answer: 3
  },
  {
    id: "spf",
    acronym: "SPF",
    term: "Sender Policy Framework",
    useCase: "An email authentication method designed to detect forging sender addresses during the delivery of the email, utilizing a DNS TXT record.",
    scenario: "A company's marketing emails are increasingly being rejected or marked as spam by Gmail and Outlook. The IT admin is told they need to update a DNS record to authorize their third-party marketing software to send emails on their behalf. Which record type handles this?",
    options: ["MX", "CNAME", "SPF", "A Record"],
    answer: 2
  },
  {
    id: "spice",
    acronym: "SPICE",
    term: "Software Process Improvement and Capability Determination",
    useCase: "An international framework (ISO/IEC 15504) for assessment of software processes, used to evaluate software development lifecycle capabilities.",
    scenario: "A software development firm is undergoing an external audit to ensure their coding practices, bug tracking, and version control methods meet international capability standards. Which framework is most likely being used?",
    options: ["ITIL", "SPICE", "GDPR", "PCI-DSS"],
    answer: 1
  },
  {
    id: "sql",
    acronym: "SQL",
    term: "Structured Query Language",
    useCase: "A standardized programming language that is used to manage relational databases and perform various operations on the data in them.",
    scenario: "A database administrator is typing commands like 'SELECT * FROM Users WHERE Department = HR' into a terminal. What language is the administrator using?",
    options: ["HTML", "Python", "SQL", "C++"],
    answer: 2
  },
  {
    id: "ssd",
    acronym: "SSD",
    term: "Solid-state Drive",
    useCase: "A new generation of storage device used in computers that stores data on flash memory chips, offering vastly superior speed and durability compared to spinning HDDs.",
    scenario: "A user drops their laptop while it is turned on. Surprisingly, their data is perfectly intact, and the storage drive did not suffer a physical head crash because it has no moving parts. What type of drive is it?",
    options: ["Optical Drive", "HDD", "Magnetic Tape", "SSD"],
    answer: 3
  },
  {
    id: "ssh",
    acronym: "SSH",
    term: "Secure Shell",
    useCase: "A cryptographic network protocol for operating network services securely over an unsecured network, heavily used for remote command-line login (TCP port 22).",
    scenario: "A network administrator needs to remotely configure a Linux-based enterprise router via a command-line interface. They want to ensure the session is encrypted against packet sniffing. Which protocol should they use?",
    options: ["Telnet", "FTP", "SSH", "HTTP"],
    answer: 2
  },
  {
    id: "ssid",
    acronym: "SSID",
    term: "Service Set Identifier",
    useCase: "The primary name associated with an 802.11 wireless local area network (WLAN), used by clients to identify and join the correct network.",
    scenario: "A user is attempting to connect their new tablet to the corporate Wi-Fi. They open the Wi-Fi settings and see names like 'Corp-Guest', 'Corp-Secure', and 'CoffeeShop'. What are these broadcasted names technically called?",
    options: ["MAC Addresses", "SSIDs", "VLANs", "WAPs"],
    answer: 1
  },
  {
    id: "sso",
    acronym: "SSO",
    term: "Single Sign-on",
    useCase: "An authentication property that allows a user to log in with a single ID and password to gain access to a connected system or multiple independent software systems.",
    scenario: "A new employee logs into their workstation in the morning. When they open their web browser, they seamlessly access the HR portal, the internal wiki, and their email without being prompted for a password again. What technology makes this possible?",
    options: ["MFA", "SSO", "VPN", "RDP"],
    answer: 1
  },
  {
    id: "st",
    acronym: "ST",
    term: "Straight Tip",
    useCase: "A legacy fiber-optic connector that uses a half-twist bayonet-style locking mechanism, commonly used with multimode fiber.",
    scenario: "A network technician is hooking up an older fiber optic patch panel. They push the connector into the port and give it a half-twist to lock it securely into place, similar to a BNC connector. Which fiber connector is this?",
    options: ["LC", "SC", "ST", "RJ45"],
    answer: 2
  },
  {
    id: "tacacs",
    acronym: "TACACS",
    term: "Terminal Access Controller Access-control System",
    useCase: "An older authentication protocol, largely replaced by TACACS+, which provides centralized AAA management primarily for network devices like Cisco routers and switches.",
    scenario: "A network engineer wants to configure their Cisco switches so that any administrator logging in must be authenticated against a centralized server, which also heavily encrypts the entire payload of the authentication packet. Which protocol should they use?",
    options: ["RADIUS", "TACACS+", "LDAP", "Kerberos"],
    answer: 1
  },
  {
    id: "tcp",
    acronym: "TCP",
    term: "Transmission Control Protocol",
    useCase: "A connection-oriented communications protocol that facilitates the exchange of messages between computing devices in a network, guaranteeing delivery and data order.",
    scenario: "A developer is writing a file transfer application and needs to ensure that every single packet of the file arrives intact. If a packet is dropped, the protocol must automatically request retransmission. Which transport layer protocol should they use?",
    options: ["UDP", "IP", "ICMP", "TCP"],
    answer: 3
  },
  {
    id: "tkip",
    acronym: "TKIP",
    term: "Temporal Key Integrity Protocol",
    useCase: "An older security protocol used in WPA as a stopgap replacement for WEP. It is now considered deprecated and insecure.",
    scenario: "A technician is configuring an older Wi-Fi access point and notices the security settings offer a choice between AES and TKIP. The technician specifically selects AES. Why did they avoid TKIP?",
    options: ["It consumes too much bandwidth.", "It is an outdated, vulnerable encryption protocol.", "It only supports 5GHz frequencies.", "It requires a RADIUS server."],
    answer: 1
  },
  {
    id: "tn",
    acronym: "TN",
    term: "Twisted Nematic",
    useCase: "An older LCD panel technology known for extremely fast response times but poor color reproduction and narrow viewing angles.",
    scenario: "A competitive gamer purchases a monitor with a 1ms response time and a 240Hz refresh rate. However, when they look at the screen from a side angle, the colors completely wash out and invert. Which panel technology is this most likely using?",
    options: ["IPS", "OLED", "VA", "TN"],
    answer: 3
  },
  {
    id: "totp",
    acronym: "TOTP",
    term: "Time-based One-time Password",
    useCase: "A temporary passcode generated by an algorithm that uses the current time of day as a proving factor, typically rotating every 30 to 60 seconds (e.g., Google Authenticator).",
    scenario: "An employee opens an app on their smartphone to get a 6-digit code to log into their email. They notice the code automatically changes to a new number every 30 seconds. What kind of MFA is this?",
    options: ["Biometric", "SMS", "TOTP", "Push Notification"],
    answer: 2
  },
  {
    id: "tpm",
    acronym: "TPM",
    term: "Trusted Platform Module",
    useCase: "A dedicated microcontroller designed to secure hardware through integrated cryptographic keys, commonly used for full disk encryption (BitLocker) and Windows 11 compliance.",
    scenario: "A user is trying to enable BitLocker to encrypt their entire C: drive, but Windows returns an error stating that a required security chip cannot be found on the motherboard. What is the missing or disabled chip?",
    options: ["CPU", "GPU", "TPM", "ROM"],
    answer: 2
  },
  {
    id: "uac",
    acronym: "UAC",
    term: "User Account Control",
    useCase: "A Windows security feature that prevents unauthorized changes to the operating system by prompting for administrative credentials before executing potentially risky actions.",
    scenario: "A standard user attempts to install a new software application on their Windows workstation. Suddenly, the desktop dims and a prompt appears asking for an Administrator password. What Windows feature generated this prompt?",
    options: ["Windows Defender", "UAC", "BitLocker", "EFS"],
    answer: 1
  }
{
    id: "udp",
    acronym: "UDP",
    term: "User Datagram Protocol",
    useCase: "A connectionless transport layer protocol that transmits data rapidly without guaranteeing delivery, order, or error checking.",
    scenario: "A company is implementing a new VoIP phone system and live video conferencing software. Which transport protocol is most appropriate for these applications to minimize latency, even if a few frames drop?",
    options: ["TCP", "UDP", "ICMP", "HTTPS"],
    answer: 1
  },
  {
    id: "uefi",
    acronym: "UEFI",
    term: "Unified Extensible Firmware Interface",
    useCase: "The modern firmware interface that replaced legacy BIOS, providing support for Secure Boot, mouse navigation, and storage drives larger than 2TB.",
    scenario: "An IT technician is attempting to install Windows 11, but the system states that Secure Boot is not enabled. Where must the technician go to enable this security feature?",
    options: ["Device Manager", "Control Panel", "UEFI", "Command Prompt"],
    answer: 2
  },
  {
    id: "upnp",
    acronym: "UPnP",
    term: "Universal Plug and Play",
    useCase: "A set of networking protocols that permits networked devices to seamlessly discover each other's presence and automatically open firewall ports, often considered a security risk.",
    scenario: "A security analyst recommends disabling a specific feature on all SOHO routers because it allows IoT devices to automatically configure port forwarding rules without administrative consent. Which feature is this?",
    options: ["QoS", "UPnP", "DHCP", "NAT"],
    answer: 1
  },
  {
    id: "ups",
    acronym: "UPS",
    term: "Uninterruptible Power Supply",
    useCase: "An electrical apparatus that provides emergency power to a load when the input power source or mains power fails, typically utilizing batteries.",
    scenario: "During a severe thunderstorm, the power to an office building cuts out for 30 seconds. However, the critical local file server remains powered on and running smoothly. What device prevented the server from shutting down?",
    options: ["Surge Protector", "Line Conditioner", "UPS", "Redundant Power Supply"],
    answer: 2
  },
  {
    id: "usb",
    acronym: "USB",
    term: "Universal Serial Bus",
    useCase: "An industry standard that establishes specifications for cables, connectors, and protocols for connection, communication, and power supply between computers and peripherals.",
    scenario: "A user purchases a new external hard drive and needs to connect it to their laptop using a rectangular, reversible Type-C connector. Which interface standard is this primarily associated with?",
    options: ["FireWire", "eSATA", "USB", "Lightning"],
    answer: 2
  },
  {
    id: "utm",
    acronym: "UTM",
    term: "Unified Threat Management",
    useCase: "A single security appliance that provides multiple security functions at a single point on the network, such as a firewall, intrusion prevention, antivirus, and content filtering.",
    scenario: "A small business has a limited IT budget but needs a firewall, a spam filter, an intrusion prevention system (IPS), and web content filtering. What is the most cost-effective hardware solution?",
    options: ["Managed Switch", "UTM appliance", "RADIUS Server", "Load Balancer"],
    answer: 1
  },
  {
    id: "va",
    acronym: "VA",
    term: "Vertical Alignment",
    useCase: "A type of LCD panel technology that offers the best contrast ratios and deep blacks compared to TN and IPS panels, but with slightly slower response times.",
    scenario: "A user is buying a computer monitor primarily for watching movies in a dark room. They want excellent contrast ratios and deep blacks, but don't want to pay the premium for an OLED. Which panel type is the best compromise?",
    options: ["TN", "VA", "IPS", "CRT"],
    answer: 1
  },
  {
    id: "vdi",
    acronym: "VDI",
    term: "Virtual Desktop Infrastructure",
    useCase: "A virtualization technology that hosts a desktop operating system on a centralized server in a data center, allowing users to access their desktop remotely from a thin client.",
    scenario: "An enterprise company removes traditional PC towers from all employee desks and replaces them with low-power thin clients. The employees' actual Windows 10 environments are running as virtual machines on a server. What is this architecture called?",
    options: ["VPN", "VDI", "SaaS", "IaaS"],
    answer: 1
  },
  {
    id: "vga",
    acronym: "VGA",
    term: "Video Graphics Array",
    useCase: "An older, analog video standard that uses a 15-pin D-subminiature connector, typically colored blue.",
    scenario: "A teacher needs to connect their laptop to an older classroom projector. The projector's only available video input is a blue, 15-pin analog port arranged in three rows. Which cable do they need?",
    options: ["HDMI", "DisplayPort", "DVI-D", "VGA"],
    answer: 3
  },
  {
    id: "vlan",
    acronym: "VLAN",
    term: "Virtual LAN",
    useCase: "A logical overlay network that groups together a subset of devices that share a physical LAN, isolating the traffic for security and broadcast management.",
    scenario: "A network administrator has only one physical 24-port switch but needs to completely separate the Sales department network traffic from the HR department network traffic. How can this be accomplished?",
    options: ["Implement a VPN", "Create VLANs", "Use subnet masks", "Enable UPnP"],
    answer: 1
  },
  {
    id: "vnc",
    acronym: "VNC",
    term: "Virtual Network Computer",
    useCase: "A graphical desktop-sharing system that uses the Remote Frame Buffer protocol (RFB) to remotely control another computer, commonly used for cross-platform (Linux/macOS) remote access.",
    scenario: "An IT technician using a Windows PC needs to remotely view and control the graphical desktop of a Linux server. Since RDP is a Windows-native protocol, which cross-platform alternative should they use?",
    options: ["SSH", "VNC", "Telnet", "FTP"],
    answer: 1
  },
  {
    id: "voip",
    acronym: "VoIP",
    term: "Voice over Internet Protocol",
    useCase: "A technology that allows you to make voice calls using a broadband internet connection instead of a regular (or analog) phone line.",
    scenario: "An office is upgrading its telecommunications. Instead of running traditional telephone wires (RJ11), they place new phones on the desks that plug directly into the Ethernet network using RJ45 cables. What technology are these new phones utilizing?",
    options: ["ISDN", "DSL", "VoIP", "POTS"],
    answer: 2
  },
  {
    id: "vpn",
    acronym: "VPN",
    term: "Virtual Private Network",
    useCase: "A service that creates a secure, encrypted connection (tunnel) between your device and a remote server over the public internet.",
    scenario: "A sales representative is working from a public coffee shop Wi-Fi network but needs to securely access a confidential file server located at the corporate headquarters. What software should they use to encrypt their traffic?",
    options: ["VNC", "VPN", "VLAN", "Proxy Server"],
    answer: 1
  },
  {
    id: "vram",
    acronym: "VRAM",
    term: "Video Random-access Memory",
    useCase: "A specialized type of memory used by computer graphics cards to store the image data that a computer displays, vital for rendering high-resolution graphics and games.",
    scenario: "A user complains that their video editing software stutters when trying to render 4K video effects. The technician notes the CPU and system RAM are barely being utilized, but the dedicated graphics card is struggling. What specifically needs to be upgraded?",
    options: ["L3 Cache", "NVMe SSD", "VRAM", "System ROM"],
    answer: 2
  },
  {
    id: "wan",
    acronym: "WAN",
    term: "Wide Area Network",
    useCase: "A telecommunications network that extends over a large geographic area for the primary purpose of computer networking. The internet is the largest example.",
    scenario: "A corporation has a headquarters in New York and a branch office in London. The routers in both locations are connected together using dedicated fiber optic lines leased from an ISP. What type of network is this?",
    options: ["LAN", "PAN", "MAN", "WAN"],
    answer: 3
  },
  {
    id: "winrm",
    acronym: "WinRM",
    term: "Windows Remote Management",
    useCase: "A Microsoft implementation of the WS-Management protocol, used for securely managing Windows hardware and operating systems locally or remotely via command line.",
    scenario: "A Windows system administrator needs to execute a PowerShell script on 50 different servers simultaneously without logging into their GUIs. Which service must be running and configured on those servers to accept these remote commands?",
    options: ["RDP", "WinRM", "VNC", "SSH"],
    answer: 1
  },
  {
    id: "wisp",
    acronym: "WISP",
    term: "Written Internet Service Provider",
    useCase: "An ISP that provides internet connections through point-to-point wireless links, heavily used in rural areas where laying cable/fiber is too expensive.",
    scenario: "A farmer living in a highly remote, rural area cannot get cable or DSL internet. Instead, an installer mounts a directional dish antenna on the roof and points it at a radio tower 5 miles away. What type of provider is this?",
    options: ["Satellite", "WISP", "WWAN", "FTTH"],
    answer: 1
  },
  {
    id: "wlan",
    acronym: "WLAN",
    term: "Wireless LAN",
    useCase: "A wireless computer network that links two or more devices using wireless communication (typically Wi-Fi) within a local area like a home or office.",
    scenario: "A technician installs a wireless access point in the ceiling of an office so that employees can connect their laptops to the corporate network without plugging in physical ethernet cables. What type of network has been created?",
    options: ["WPAN", "WWAN", "WLAN", "WISP"],
    answer: 2
  },
  {
    id: "wpa",
    acronym: "WPA",
    term: "Wi-Fi Protected Access",
    useCase: "A family of security protocols and security certification programs developed by the Wi-Fi Alliance to secure wireless computer networks (WPA2 and WPA3 are the modern standards).",
    scenario: "A technician is setting up a new SOHO router and navigates to the wireless security settings. To ensure the Wi-Fi network uses modern AES encryption rather than easily crackable legacy standards, what should they select?",
    options: ["WEP", "TKIP", "WPS", "WPA2/WPA3"],
    answer: 3
  },
  {
    id: "wwan",
    acronym: "WWAN",
    term: "Wireless Wide Area Network",
    useCase: "A form of wireless network that covers a broad geographic area using cellular network technologies such as LTE and 5G.",
    scenario: "A traveling executive opens their laptop while riding a train across the country. The laptop connects directly to the internet without Wi-Fi because it has a built-in cellular modem and SIM card. What type of network is the laptop using?",
    options: ["WLAN", "WWAN", "WISP", "WPAN"],
    answer: 1
  },
  {
    id: "xdr",
    acronym: "XDR",
    term: "Extended Detection and Response",
    useCase: "A cybersecurity toolset that collects and automatically correlates data across multiple security layers (endpoints, servers, cloud, network) for faster threat detection.",
    scenario: "A security operations center (SOC) wants to upgrade from standard EDR. They want a platform that can pull logs from endpoints, the corporate firewall, and AWS cloud servers, analyzing everything together in one dashboard. What technology is this?",
    options: ["UTM", "MDM", "XDR", "DLP"],
    answer: 2
  },
  {
    id: "xfs",
    acronym: "XFS",
    term: "Extended File System",
    useCase: "A highly scalable, high-performance 64-bit journaling file system commonly used as the default in enterprise Linux distributions (like RHEL and CentOS).",
    scenario: "A Linux administrator is formatting a massive storage partition for a new enterprise database server running Red Hat Enterprise Linux. They require a journaling file system built for extreme scalability. Which file system will they likely use?",
    options: ["NTFS", "APFS", "FAT32", "XFS"],
    answer: 3
  },
  {
    id: "xxs",
    acronym: "XXS",
    term: "Cross-site Scripting",
    useCase: "A type of security vulnerability typically found in web applications where attackers inject malicious client-side scripts into web pages viewed by other users.",
    scenario: "A developer notices that an attacker posted a malicious JavaScript payload into a forum's comment section. Whenever a legitimate user views that comment, the script steals their session cookie. What type of attack is this?",
    options: ["SQL Injection", "DDoS", "Phishing", "XXS (XSS)"],
    answer: 3
  }
];
