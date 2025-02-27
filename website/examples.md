---
layout: default
title: "examples"
permalink: /examples/
---

> [!ABSTRACT]
> This page shows examples of both a `CITATION.cff` and a `.zenodo.json` file. 

# Examples

Both example files are valid and can be used a templates. When a release is of a GitHub repository is published, the Zenodo agent fetches metadata-information from the marked lines only.

> [!WARNING]
> If a GitHub repository has both a Zenodo metadata file and a citation metadata file, the Zenodo agent will ignore the citation metadata file completely.

**Citation metadata file**
```custom
# This CITATION.cff file was generated with cffinit.
# Visit https://bit.ly/cffinit to generate yours today!

cff-version: 1.2.0
!title: Zenodo-GitHub-Integration Documentation
type: dataset
!authors:
!  - given-names: Arne
!    family-names: Rümmler
!    affiliation: SLUB Dresden
!    orcid: 0000-0001-8637-9071
!abstract: "Comprehensive documentation on integrating GitHub repositories with Zenodo for archiving and citation purposes."
!keywords:
!  - GitHub
!  - Zenodo
!license: "CC0-1.0"
repository-code: "https://github.com/rue-a/github-zenodo-integration"
doi: "10.5281/zenodo.14859938"
date-released: "2025-02-21"
```

**Zenodo metadata file**
```custom
{
!    "title": "Zenodo-GitHub-Integration Documentation",
!    "description": "This record is a result of enabling the GitHub-Zenodo-Integration feature. Find a documentation of the GitHub-Zenodo-Integration feature at <a href=\"https://rue-a.github.io/github-zenodo-integration\">https://rue-a.github.io/github-zenodo-integration</a>.",
    "doi": "10.5281/zenodo.14859938",
!    "upload_type": "publication-technicalnote",
!    "creators": [
        {
!            "affiliation": "SLUB Dresden",
!            "name": "Rümmler, Arne",
!            "orcid": "0000-0001-8637-9071",
            "role": "contactperson",
            "type": "personal"
        },
        {
!            "name": "SLUB Dresden",
            "ror": "03wf51b65",
!            "gnd": "5165770-3",
            "role": "hostinginstitution",
            "type": "organizational"
        }
    ],
!    "related_identifiers": [
        {
!            "scheme": "url",
!            "identifier": "https://rue-a.github.io/github-zenodo-integration/",
!            "relation": "compiles",
!            "resource_type": "publication-technicalnote"
        },
        {
!            "scheme": "doi",
!            "identifier": "10.58079/13cmg",
!            "relation": "isreferencedby",
!            "resource_type": "publication-other"
        }
    ],
!    "keywords": [
!        "RDM",
!        "GitHub",
!        "Zenodo"
    ]
}
```
