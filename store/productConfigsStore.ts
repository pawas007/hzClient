import { create } from "zustand";

export interface ProductConfigsStore {
  billingCycles: { label: string; value: string; price: number }[];
  operatingSystems: { label: string; value: string }[];
  raidSetups: { label: string; value: string; price: number }[];
  volumes: { label: string; value: string; price: number }[];
}

export const useProductConfigsStore = create<ProductConfigsStore>(() => ({
  billingCycles: [
    { label: "Monthly (€49)", value: "Monthly", price: 0 },
    { label: "Quarterly (€147, -5%)", value: "Quarterly", price: -5 },
    { label: "Semi-Annually (€280, -10%)", value: "Semi-Annually", price: -10 },
    { label: "Annually (€530, -15%)", value: "Annually", price: -15 },
  ],

  operatingSystems: [
    "AlmaLinux 8",
    "AlmaLinux 9",
    "Rocky Linux 8",
    "Rocky Linux 9",
    "CentOS 7 EOL",
    "CentOS 9 Stream",
    "Ubuntu 18 LTS",
    "Ubuntu 20 LTS",
    "Debian 10",
    "Debian 11",
    "Debian 12",
    "FreeBSD 13",
    "FreeBSD 14",
    "Proxmox VE 7",
    "Proxmox VE 8",
    "ESXi (VMware)",
    "Other (contact sales)",
  ].map((os) => ({ label: os, value: os })),

  raidSetups: [
    { label: "JBOD (no RAID) (€0)", value: "JBOD", price: 0 },
    { label: "Software RAID0 (Stripe) (€10)", value: "RAID0", price: 10 },
    { label: "Software RAID1 (Mirror) (€15)", value: "RAID1", price: 15 },
    {
      label: "Hardware RAID1 (needs adapter) (€30)",
      value: "HARD_RAID1",
      price: 30,
    },
  ],

  volumes: [
    { label: "Unselected (€0)", value: "Unselected", price: 0 },
    { label: "10 TB (€0)", value: "10TB", price: 0 },
    { label: "20 TB (€19)", value: "20TB", price: 19 },
    { label: "30 TB (€38)", value: "30TB", price: 38 },
  ],
}));
