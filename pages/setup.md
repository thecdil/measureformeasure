---
title: Site Configuration
layout: setup
permalink: /setup/
custom-foot: js/setup-js.html
---

# Set up your play

{% include setup-forms.html %}

This page can temporarily configure the metadata used on the site to test your playscript's spreadsheet. The configurations are stored in your browser's session storage, so the changes will disappear after you close this window! If you'd like to make them permanent, see [these directions](#notgoinganywhereyet) for removing the scaffolding.

The site is currently configured to feature:
<div class="my-4">
<p class="ms-4">Play: <span id="play_title_check" class="fst-italic"></span></p>
<p class="ms-4">Play Spreadhseet: <span id="current-metadata" class="fst-italic"></span> </p>
</div>

To keep the currently configured metadata, simply navigate to another page!
To change the metadata you have two options: select a CSV file from your computer *or* paste in the full link for a CSV hosted online (such as a published Google Sheet).

## How to Publish Your Google Sheet

- On your Google Sheet, click "File" and select "Publish to the Web".
- On the popup modal, use the dropdowns in "Link" tab to select the sheet name of your metadata (usually "Sheet 1") and "Comma-separated values (.csv)" options, then click "Publish" button.
- Copy the link that is provided.
- Paste the link into form above and click Submit.

For example, our first annotated play for this project, *A Midsummer Night's Dream*, looks like:

`https://docs.google.com/spreadsheets/d/e/2PACX-1vT4-hSjZe4pN0R2-fzmNyc_yrE355W1RgOBmYJ4PF-Lsyo1bKpWVKgwYqGOxGnMvvV41__J66Yjyxa1/pub?output=csv`

If you'd like to test it out, go ahead and enter the link into the form above. 

## How to Download Your Google Sheet as CSV

- On your Google Sheet, click "File" and select “Download as Comma-separated values”
- The file should download to your computer's Downloads folder
- Click in the "Choose file" box in the form above and navigate in your file explorer to select the downloaded CSV.