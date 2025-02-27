---
layout: default
title: "tldr"
permalink: /
---
> [!ABSTRACT] 
> These pages describe the intricacies of the [GitHub-Zenodo-Integration feature](https://help.zenodo.org/docs/profile/linking-accounts/).

## In Short


- **Use a metadata file (`CITATION.cff` or `.zenodo.json`).**
- **Do not include license information in the metadata file, but let the Zenodo agent interpret the `LICENSE` file itself.**
- **Handle the version management via the GitHub release tags.**
- **When using the Zenodo metadata file, only enter information that is consistent over multiple releases.**

> [!WARNING]
> Zenodo records can not be deleted! Get used to the GitHub-Zenodo-Integration feature in the [Zenodo sandbox environment](https://sandbox.zenodo.org/login/). 

> [!NOTE]
>  If both a `CITATION.cff` file and a `.zenodo.json` file exist, the `CITATION.cff` file will be ignored, regardless of the contents of the `.zenodo.json` file.

> [!TIP]
> I think the easiest way to find a specific field name/identifier for the `.zenodo.json` metadata file is to create a Zenodo record with the metadata field you are looking for in the Zenodo sandbox environment and then review the metadata in `JSON` format. 