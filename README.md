# Github-Zenodo-Integration

The documents in this repository and the links below are resources that describe the intricacies of the [GitHub-Zenodo-Integration feature](https://help.zenodo.org/docs/profile/linking-accounts/).


 \>>> **[Detailed documentation](documentation/github_zenodo_integration.md)** <<<

## [TL;DR](https://en.wikipedia.org/wiki/TL;DR)


 - **Use a metadata file (`CITATION.cff` or `.zenodo.json`).**
  
 - **Do not include license information in the metadata file, but let the
Zenodo agent interpret the `LICENSE` file itself.**

 - **Handle the version management via the GitHub release tags.**
 
 - **When using the Zenodo metadata file, only enter
information that is consistent over multiple releases.**

> [!WARNING]
> Get used to the GitHub-Zenodo-Integration feature in the [Zenodo sandbox environment](https://sandbox.zenodo.org/login/). Zenodo records can not be deleted!



> [!NOTE]
>  If both a `CITATION.cff` file and a `.zenodo.json` file exist, the `CITATION.cff` file will be ignored, regardless of the contents of the `.zenodo.json` file.

> [!TIP]
> I think the easiest way to find a specific field name/identifier for the `.zenodo.json` metadata file is to create a Zenodo record with the searched-for metadata field in the Zenodo sandbox environment and then download the metadata in `json` format.

## Links

- [Mapping GitHub metadata sources --> Zenodo metadata schema](https://docs.google.com/spreadsheets/d/14XAITKJBJQ8JJBGAX_rkhZtm3W_4EjkQBwkY5Up6xEk/edit?usp=sharing)
- [Slides](https://docs.google.com/presentation/d/107sWUOuTP_UIZXYF3QcefZrjXndOT11h9WE4Vxdf33c/edit?usp=sharing)
- [Detailed documentation](documentation/github_zenodo_integration.md)
- [Zenodo record linked to this repository](https://doi.org/10.5281/zenodo.14859938)
- [Zenodo help page on this topic](https://support.zenodo.org/help/en-gb/24-github-integration)

