# WordWrap API (NodeJS)
![Deploy](https://github.com/wmemorgan/wordwrap-nodejs/workflows/Deploy/badge.svg)

API which inserts line breaks in a string based on the specified line length

<a name="toc"></a>

## Table of Contents
- [Endpoints](#endpoints)
- [Functions](#functions)
- [Installation](#installation)
- [Setup and Usage](#setup-and-usage)
- [License](#license)


---
<a name="endpoints"></a>

## Endpoints

#### WordWrap

| Method | Endpoint               | Description                                                             |
| ------ | ---------------------- | ----------------------------------------------------------------------- |
| POST   | <code>/api/wordwrap</code> | Formats submitted string based on specified line width. Requires 'str', and 'lineWidth'. |


---
<a name="functions"></a>

## Functions

<dl>
<dt><a href="#wordWrap">wordWrap(str, lineWidth)</a></dt>
<dd><p>Format string based on specified line width</p>
</dd>
<dt><a href="#splitString">splitString(str, lineWidth, updatedStr)</a></dt>
<dd><p>Inserts line breaks into string based on line width</p>
</dd>
<dt><a href="#requiredData">requiredData(fn, dataFields)</a></dt>
<dd><p>Higher-order function that enforces required
data is being received</p>
</dd>
<dt><a href="#inputDataChecker">inputDataChecker(arr, target)</a></dt>
<dd><p>Helper function that confirms all required data is received</p>
</dd>
</dl>


---
<a name="wordWrap"></a>

### wordWrap(str, lineWidth)
Format string based on specified line width

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| str | <code>string</code> | String input |
| lineWidth | <code>integer</code> | maximum line width |


---
<a name="splitString"></a>

### splitString(str, lineWidth, updatedStr)
Inserts line breaks into string based on line width

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| str | <code>string</code> | String input |
| lineWidth | <code>integer</code> | maximum line width |
| updatedStr | <code>string</code> | stores formatted string |


---
<a name="requiredData"></a>

### requiredData(fn, dataFields)
Higher-order function that enforces required
data is being received

**Kind**: global function  

| Param | Type |
| --- | --- |
| fn | <code>function</code> | 
| dataFields | <code>array</code> | 


---
<a name="inputDataChecker"></a>

### inputDataChecker(arr, target)
Helper function that confirms all required data is received

**Kind**: global function  

| Param | Type |
| --- | --- |
| arr | <code>array</code> | 
| target | <code>array</code> | 



## Installation
- Clone this repo to your local machine using `https://github.com/wmemorgan/wordwrap-nodejs`

## Setup and Usage
Go to your repo directory and enter the following commands to install project dependencies
```bash
$ yarn install
```
Inside your repo directory run the app locally on your machine
```bash
$ yarn start
```


## License
[MIT](https://github.com/wmemorgan/wordwrap-nodejs/blob/main/LICENSE)