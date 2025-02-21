# Github-Zenodo-Integration

The documents in this repository and the links below are resources that describe the intricacies of the [GitHub-Zenodo-Integration feature](https://help.zenodo.org/docs/profile/linking-accounts/).


> [!IMPORTANT]
> **[Detailed documentation](documentation/github_zenodo_integration.md)** 
> 
> **[Metadata mapping table](https://docs.google.com/spreadsheets/d/14XAITKJBJQ8JJBGAX_rkhZtm3W_4EjkQBwkY5Up6xEk/edit?usp=sharing)**

## [TL;DR](https://en.wikipedia.org/wiki/TL;DR)


**Use a metadata file (`CITATION.cff` or `.zenodo.json`).**
  
**Do not include license information in the metadata file, but let the
Zenodo agent interpret the `LICENSE` file itself.**

**Handle the version management via the GitHub release tags.**
 
**When using the Zenodo metadata file, only enter
information that is consistent over multiple releases.**

> [!WARNING]
> Zenodo records can not be deleted! Get used to the GitHub-Zenodo-Integration feature in the [Zenodo sandbox environment](https://sandbox.zenodo.org/login/). 

> [!NOTE]
>  If both a `CITATION.cff` file and a `.zenodo.json` file exist, the `CITATION.cff` file will be ignored, regardless of the contents of the `.zenodo.json` file.

> [!TIP]
> I think the easiest way to find a specific field name/identifier for the `.zenodo.json` metadata file is to create a Zenodo record with the searched-for metadata field in the Zenodo sandbox environment and then download the metadata in `json` format.