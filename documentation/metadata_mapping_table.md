---
layout: default
title: "Metadata Mapping Table"
permalink: /table/
---

> [!ABSTRACT]
> This table illustrates the compatibility of Zenodo metadata fields with different resources in a GitHub repository. 

# Metadata Mapping Table

The leftmost column in the table lists the Zenodo metadata fields that are supported by the Zendodo-GitHub-Integration. The other columns represent the different resources that are queried by the Zenodo agent, when a release of the repository is published. 
That means each cell corresponds to the Zenodo metadata field in the leftmost column in its row. The cells are color-coded: blue means the metadata field corresponding to the cell is fully supported by the resource corresponding to the cell, light yellow means its partially supported (mostly due to cardinality), and gray means its not supported. 

The resources follow an overwrite hierarchy from right to left, meaning metadata information in resources that belong to columns further right take precedence over those further left.

<div>
    <table>
        <thead>
            <tr>
                <th>Zenodo Metadata Field<br>[Cardinality]</th>
                <th>GitHub Repository Data</th>
                <th>GitHub Release Data</th>
                <th>LICENSE</th>
                <th>CITATION.cff</th>
                <th>.zenodo.json</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <th>Digital Object Identifier [1]</th>
                <td class="s1" colspan="2">Created automatically</td>
                <td class="s2">x</td>
                <td class="s2">x</td>
                <td class="s2">x</td>
            </tr>
            <tr>
                <th>Resource type [1]</th>
                <td class="s3" colspan="2">Software</td>
                <td class="s2">x</td>
                <td class="s2">x</td>
                <td class="s1">upload_type</td>
            </tr>
            <tr>
                <th>Title [1]</th>
                <td class="s3" colspan="2">Combination of GitHub user name, repository name and release
                    title/tag</td>
                <td class="s2">x</td>
                <td class="s1">title</td>
                <td class="s1">title</td>
            </tr>
            <tr>
                <th>Publication date [1]</th>
                <td class="s2">x</td>
                <td class="s3">Current date</td>
                <td class="s2">x</td>
                <td class="s2">x</td>
                <td class="s1">publication_date</td>
            </tr>
            <tr>
                <th>Creators (Person) [n]</th>
                <td class="s3" colspan="2">[1]</td>
                <td class="s2">x</td>
                <td class="s1">authors [n]</td>
                <td class="s1">creators [n]</td>
            </tr>
            <tr>
                <th>├─ Family name [1]</th>
                <td class="s1" colspan="2">Read from GitHub profile (Field: Name) [1]</td>
                <td class="s2">x</td>
                <td class="s1">authors:familiy-names [1]</td>
                <td class="s1">creators:name [1]</td>
            </tr>
            <tr>
                <th>├─ Given names [n]</th>
                <td class="s2" colspan="2">x</td>
                <td class="s2">x</td>
                <td class="s1">authors:given-names [n]</td>
                <td class="s1">creators:name [n]</td>
            </tr>
            <tr>
                <th>├─ Identifiers [n]</th>
                <td class="s2" colspan="2">x</td>
                <td class="s2">x</td>
                <td class="s3">authors:orcid [1]</td>
                <td class="s3">creators:orcid/gnd [0..2]</td>
            </tr>
            <tr style="height: 38px">
                <th>├─ Affiliations [n]</th>
                <td class="s3" colspan="2">Read from GitHub profile (Field: Organization) [1]</td>
                <td class="s2">x</td>
                <td class="s3">authors:affiliation [1]</td>
                <td class="s1">creators:affiliation/affiliations [n]</td>
            </tr>
            <tr>
                <th>└─ Role [n]</th>
                <td class="s2" colspan="2">x</td>
                <td class="s2">x</td>
                <td class="s2">x</td>
                <td class="s2">x</td>
            </tr>
            <tr>
                <th>Creators (Organization) [n]</th>
                <td class="s2" colspan="2">x</td>
                <td class="s2">x</td>
                <td class="s2">x</td>
                <td class="s2">x</td>
            </tr>
            <tr>
                <th>Description [1]</th>
                <td class="s1">Description from the GitHub About fields</td>
                <td class="s1">Release description</td>
                <td class="s2">x</td>
                <td class="s1">abstract</td>
                <td class="s1">description</td>
            </tr>
            <tr style="height: 39px">
                <th>Additional Description (Notes) [n]</th>
                <td class="s2" colspan="2">x</td>
                <td class="s2">x</td>
                <td class="s3">message [1]</td>
                <td class="s1">additional_descriptions [n]</td>
            </tr>
            <tr>
                <th>Licenses [n]</th>
                <td class="s3" colspan="2">CC-BY-4.0</td>
                <td class="s3">[1]</td>
                <td class="s3">license [1]</td>
                <td class="s3">license [1]</td>
            </tr>
            <tr>
                <th>Keywords [n]</th>
                <td class="s2" colspan="2">x</td>
                <td class="s2">x</td>
                <td class="s1">keywords [n]</td>
                <td class="s1">keywords [n]</td>
            </tr>
            <tr>
                <th>Version [1]</th>
                <td class="s1" colspan="2">Uses the tag of the release with the string “Version ”
                    prefixed</td>
                <td class="s2">x</td>
                <td class="s2">x</td>
                <td class="s1">version</td>
            </tr>
            <tr>
                <th>Related Works [n]</th>
                <td class="s3" colspan="2">creates reference to the release [1]</td>
                <td class="s2">x</td>
                <td class="s2">x</td>
                <td class="s1">related_identifiers [n]</td>
            </tr>
            <tr>
                <th>├─ Relation [1]</th>
                <td class="s3" colspan="2">Is supplement to</td>
                <td class="s2">x</td>
                <td class="s2">x</td>
                <td class="s1">related_identifiers:relation</td>
            </tr>
            <tr>
                <th>├─ Identifier [1]</th>
                <td class="s2">x</td>
                <td class="s3">URL of the release</td>
                <td class="s2">x</td>
                <td class="s2">x</td>
                <td class="s1">related_identifiers:identifier</td>
            </tr>
            <tr>
                <th>├─Scheme [1]</th>
                <td class="s3" colspan="2">URL</td>
                <td class="s2">x</td>
                <td class="s2">x</td>
                <td class="s1">related_identifiers:scheme</td>
            </tr>
            <tr>
                <th>└─ Resource type [1]</th>
                <td class="s3" colspan="2">Software</td>
                <td class="s2">x</td>
                <td class="s2">x</td>
                <td class="s1">related_identifiers:resource_type</td>
            </tr>
            <tr>
                <th>Software: Repository URL [1]</th>
                <td class="s1">URL of the GitHub repository</td>
                <td class="s2">x</td>
                <td class="s2">x</td>
                <td class="s2">x</td>
                <td class="s1">repository_url</td>
            </tr>
        </tbody>
    </table>
</div>

> [!WARNING]
>  If a GitHub repository has both a Zenodo metadata file and a citation metadata file, the Zenodo agent will ignore the citation metadata file completely.

> [!NOTE]
> The `.zenodo.json` file supports more Zenodo metadata fields than are listed in this table. All fields that are only supported by the `.zenodo.json` file and not by any other resource are omitted for clarity.