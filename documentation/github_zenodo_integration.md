---
layout: default
title: "Zenodo-GitHub-Integration Documentation"
permalink: /documentation/
---

> [!ABSTRACT]
> When the Zenodo-GitHub-Integration is enabled, each new release of a GitHub repository triggers Zenodo to archive the repository in its current state in Zenodo with a DOI assigned, thus fostering proper citation and long-term accessibility. This document describes this functionality and details what metadata is extracted from the GitHub repository and transferred to Zenodo.

## Configuring the Integration

Configuring the Zenodo-GitHub-Integration is a straightforward process. To enable it, navigate to the Zenodo settings page and link your GitHub account to your Zenodo account. Then, locate the repository of interest and activate the integration by toggling the corresponding switch. Once enabled, the next release of the repository will automatically generate a Zenodo record.

> [!IMPORTANT]
> It is strongly advised to **test the integration on the [Zenodo Sandbox](https://sandbox.zenodo.org/)** before deploying it in a production environment. Once a record is published on Zenodo, it cannot be deleted.

<p align="right" width="100%">
    <img width="90%" src="../documentation/images/integration_enabling.png">
    <br>
    <i>Enabling the GitHub-Zenodo-Integration.</i>
</p>


## Effects of the Integration 

As soon as a connection between a GitHub repository and Zenodo is established, each new release of the GitHub repository causes the Zenodo integration software (Zenodo agent) to download the repository as a compressed ZIP archive and to publish it subsequently on Zenodo as a new record (or a new version if a record was already created by a previous release). The Zenodo agent also extracts metadata from the GitHub repository and from its release, and uses it to populate the Zenodo record.

<p align="right" width="100%">
    <img width="90%" src="../documentation/images/default_metadata.png">
    <br>
    <i>Default metadata extracted from the GitHub repository.</i>
</p>

Besides metadata that is extracted directly from the repository, the Zenodo agent also searches the root directory of the GitHub repository for certain files from which it can extract metadata for the Zenodo record. Namely, these files are `LICENSE`, `CITATION.cff`, and `.zenodo.json`. Refer to the [metadata mapping table]({{ '/table/' | relative_url }}) for details.

> [!NOTE]
> Data in the `.zenodo.json` file has the highest priority, followed by information in the `CITATION.cff` file, and then details in the `LICENSE` file. Lastly, any remaining data from the GitHub repository and its release is used, with release information taking precedence over repository information.

> [!WARNING]
> If a GitHub repository has both a Zenodo metadata file and a citation metadata file, the Zenodo agent will ignore the citation metadata file completely.

<p align="right" width="100%">
    <img width="90%" src="../documentation/images/metadata_sources.png">
    <br>
    <i>Different sources from which the Zenodo agent extracts metadata (non-comprehensive).</i>
</p>


### Recommendations

- Use a metadata file (`CITATION.cff` or `.zenodo.json`).
  
- Do not include license information in the metadata file, but let the
Zenodo agent interpret the `LICENSE` file itself.

- Handle the version management via the GitHub release tags.
 
- When using the Zenodo metadata file, only enter
information that is consistent over multiple releases.


## Metadata File References

### `LICENSE`

If a license file is found in the root directory of the repository, the Zenodo agent reads the file and generates a corresponding metadata entry for the Zenodo record, thereby overwriting the default license (CC-BY-4.0). Although, the Zenodo metadata schema supports multi-licensing, if more than one license is found in the GitHub repository, only one of them is used for the metadata of the Zenodo record (whichever comes first alphabetically).

> [!NOTE] 
> If the license text is erroneous, the process fails and nothing is published on Zenodo. Ideally, use the [GitHub license templates](https://docs.github.com/en/communities/setting-up-your-project-for-healthy-contributions/adding-a-license-to-a-repository) to generate the license text.

License information in the `CITATION.cff` file or `.zenodo.json` file cause the Zenodo agent to ignore any license file present in the repository.

### `CITATION.cff`

“`CITATION.cff` files are plain text files with human- and machine-readable citation information for software (and datasets). Code developers can include them in their repositories to let others know how to correctly cite their software” ([Citation File Format](https://citation-file-format.github.io/)).

If a citation metadata file is found in the root directory of the GitHub repository, the Zenodo agent fetches its contents and fills the metadata fields of the Zenodo record accordingly, thereby overwriting default metadata. Only a subset of the citation metadata fields is interpreted by the Zenodo agent. These fields are `abstract`, `authors`, `keywords`, `license`, `title` and `message`. The mapping is detailed in the [metadata mapping table]({{ '/table/' | relative_url }}).

> [!NOTE]
>  If the citation metadata file is structurally invalid or contains invalid values, the process fails and nothing is published on Zenodo. Ideally, use the [CFF INIT tool](https://citation-file-format.github.io/cff-initializer-javascript/#/) to create valid citation metadata files.

> [!TIP]
> Comprehensive [Guide to Citation File Format schema version 1.2.0](https://github.com/citation-file-format/citation-file-format/blob/main/schema-guide.md).
> 
> The source code for the interpretation of the `CITATION.cff` file is defined in [zenodo-rdm/site/zenodo_rdm/github](https://github.com/zenodo/zenodo-rdm/blob/master/site/zenodo_rdm/github/).



### `.zenodo.json`

The Zenodo metadata file is similar to the citation metadata file, but with the explicit and sole function of providing predefined metadata for the Zenodo record to the Zenodo agent. As such, it allows defining the most fields of the resulting Zenodo record. Details can be found on the [Zenodo developers page](https://developers.zenodo.org/#add-metadata-to-your-github-repository-release) and in the [metadata mapping table]({{ '/table/' | relative_url }}).


> [!NOTE]
> Every information defined in the Zenodo metadata file is transmitted to the resulting Zenodo record as is. This means, for example, not changing the version value in the Zenodo metadata file across multiple releases results in multiple Zenodo record versions with the same version label. 
><p align="right" width="100%">
>    <img width="50%" src="../documentation/images/same_versions.png"><br>
>    <i>Different versions, same version labels.</i>
></p>

> [!NOTE]
> If the Zenodo metadata file is structurally invalid or contains invalid values, the process fails and nothing is published on Zenodo. Ideally, validate your Zenodo metadata file against the [Zenodo record legacy schema](https://github.com/zenodo/zenodo/blob/master/zenodo/modules/deposit/jsonschemas/deposits/records/legacyrecord.json). To do this, e.g., go to [JSON Schema Validator](https://www.jsonschemavalidator.net/), paste the schema in the left box, and your Zenodo metadata file in the right box.

> [!TIP]
> The source code for the interpretation of the `.zenodo.json` file is defined in [zenodo-rdm/site/zenodo_rdm/github](https://github.com/zenodo/zenodo-rdm/blob/master/site/zenodo_rdm/github/) and [zenodo-rdm/site/zenodo_rdm/legacy/deserializers](https://github.com/zenodo/zenodo-rdm/tree/master/site/zenodo_rdm/legacy/deserializers).



## Limitations

It is not possible to link a GitHub repository with an existing Zenodo record. Populating the `doi` field in the [Zenodo Metadata File](#subsec:zenodo-json) has no effect. It is [impossible to reserve a DOI for a GitHub release](https://support.zenodo.org/help/en-gb/24-github-integration/73-can-i-pre-reserved-a-doi-before-a-github-release) or to get informed about the DOI before it is being minted upon the GitHub release. As a result, it is also impossible to connect a GitHub repository to an already existing Zenodo [Concept DOI](https://zenodo.org/help/versioning). 

