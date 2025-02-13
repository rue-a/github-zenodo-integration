# Github-Zenodo-Integration

The documents in this repository and the links below are resources that describe the intricacies of the [GitHub-Zenodo-Integration feature](https://help.zenodo.org/docs/profile/linking-accounts/).

## [TL;DR](https://en.wikipedia.org/wiki/TL;DR)

> [!WARNING]
> Get used to the GitHub-Zenodo-Integration feature in the [Zenodo sandbox environment](https://sandbox.zenodo.org/login/). Zenodo records can not be deleted!

__Recommendations__
- Use a metadata file (`CITATION.cff` or `.zenodo.json`).
- Do not include license information in the metadata file, but let the
Zenodo agent interpret the `LICENSE` file itself.
- Handle the version management via the GitHub release tags.
- If sufficient, use the citation metadata file over the Zenodo metadata file.
- When using the Zenodo metadata file, be very careful. Only enter
information that is consistent over multiple releases.

> [!TIP]
> I think the easiest way to find a specific field name/identifier for the `.zenodo.json` metadata file is to create a Zenodo record with the search-for metadata field in the sandbox environment and then download the metadata in `json` format.

## Links

- Mapping GitHub metadata sources --> Zenodo metadata schema: https://docs.google.com/spreadsheets/d/14XAITKJBJQ8JJBGAX_rkhZtm3W_4EjkQBwkY5Up6xEk/edit?usp=sharing
- Slides: https://docs.google.com/presentation/d/107sWUOuTP_UIZXYF3QcefZrjXndOT11h9WE4Vxdf33c/edit?usp=sharing
- Detailed guide/documentation: https://tex.zih.tu-dresden.de/read/dcrjcwyfgsvh#453979
- Zenodo record linked to this repository: https://doi.org/10.5281/zenodo.14859938
- Zenodo help page on this topic: https://support.zenodo.org/help/en-gb/24-github-integration

