# Rosie-Dashboard

A test area for a specific requirement. This repo is unlikely to be of help to you but feel free to have a look.

Part of prospective ROSIE project - more details on that project are not available as yet.

### Requirements

The need is for a section of website that is affectively a **dashboard** to show the performance of number of subjects according to a number of measures. The other areas of the website (e.g. menu) will be built elsewhere. There should be no sidebar and other features and the dashboard should take up the full width of the screen. There is a need to display data in a succinct manner so use sparklines for visualisation.

The user would select a subject of interest and the details of performance by each measure will be displayed in a table along with details of the subject (name, short description etc). Also displayed will be another table of performances of individuals within the group that the individual subject belongs to, defaulted to the first performance measure. The measure by which the group is measured can be changed by clicking a different measure on the first table. The details (units of measure, short description, url etc) of selected measure will be displayed in the second table.

R will be used to generate the performance analyses (averages per group, trends, year-to-date etc). R will obtain raw data and push them to a JSON files, which  will be used by this dashboard section to display performance of each subject.

These are short names used:

* `H` represents subjects of interest e.g. collection of Heroes (or hotels, hospitals or employees)
* `G` represents groups that an individual `H` is a member of e.g. a region or skill-set or area of activity
* `M` represents measures used to gauge the performance of e.g. speed, agility (or complaints). These could be grouped for future reference
* `A` represents performance analyses (averages per group, trends, year-to-date etc).)

Elements to display:

Element | Description | Type | Filter 
------- | -------------------------- | -------------- | ------------------
**L1**  | List of `H` items | Drop-down list | None 
**T1**  | Details | Form layout | Selected or default `H` item 
**T2**  | Table of performance analyses for each `M` | Tabular layout | `A` on selected or default `H`
**L2**  | List of `G` items | Group of buttons | None
**T3**  | Table of performance analyses for each `H` within `G` that `H` in T1 belongs to | Tabular layout  | `A` on `G` in T1 and first or selected item `M` as in T2
**L3**  | List of `M` items | Group of buttons | None
**T4**  | Details | Form layout | Selected or default `M` item 

Actions for each element:

Element | Actions 
------- | -------------------------- 
**L1**  | Change will trigger new H to be loaded in T1, T2, L2 and T3 (with filters)
**T1**  | None (perhaps urls for external links)
**T2**  | Click on individual M will change L3 selected item and filter of T3
**L2**  | Selection will change L1 and trigger filtering of T1, T2 and T3 but not L3 and T4
**T3**  | None
**L3**  | Selection will change T3 filtering and new item will be loaded in T4
**T4**  | None (perhaps urls for external links)

Available data (all as JSON files):

* __hList__ is list of subjects (the H items) with summary details
* __gList__ is list of groups for H items with minimal details
* __mList__ is list of measures 
* __aData__ is the analysis produced by R

###Road map

####Step 0: Development Environment

RStudio project as the analyses from the raw data will take place here and easy to manage via GitHub. Angular JS 1.5 will be used as framework. (: Not ready for 2.0 but using Heroes! :) The background project will use Bootstarp CSS and so JQuery will be available.

####Step 1: Concept testing

These are important areas to test out before full coding can take place. See project Kanbans for progress on GitHub

* Controllers, components and design/layout with fake data
* Double-check with site host that background website can support layout/folders/libs
* Sparklines within AngularJS directive (use JQuery as it is there already)
* Data access via ngResource to fetch JSON files or similar
* Routing of secondary set of measures or different grouping parameter into tabs

####Step 2: 

Do up the section with fake data and stage up slowly to add features from step 1

####Step 3: Quick display to start off project

Do up the section with realistic data

####Step 4: Code-up 

Full section deployed in the site

####Step 5: Testing and closing


## License

(c) 2017 AjayOza under MIT