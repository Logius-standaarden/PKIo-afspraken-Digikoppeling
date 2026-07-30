import { loadRespecWithConfiguration } from "https://logius-standaarden.github.io/publicatie/respec/organisation-config.mjs";

loadRespecWithConfiguration({
  specStatus: "DEF",
  specType: "HR",
  pubDomain: "dk",
  shortName: "oin-pkio",
  publishDate: "2026-07-30",
  publishVersion: "1.1.0",
  prevVersion: [],

  editors:
    [
      {
        name: "Nil Barua",
        company: "Logius",
        companyURL: "https://www.logius.nl",
      }
    ],
  authors:
    [
      {
        name: "Peter Haasnoot",
        company: "Logius",
        companyURL: "https://www.logius.nl",
      }
    ],
  github: "https://github.com/Logius-standaarden/PKIo-afspraken-Digikoppeling",
});
