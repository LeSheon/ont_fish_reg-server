# Ontario Fishing Regulation Server

### Original Document used for Data
```
https://www.ontario.ca/document/ontario-fishing-regulations-summary
```

### Built with
![image](https://github.com/LeSheon/ont_fish_reg-server/assets/110301827/2c0aecdb-c0bc-4267-9961-97b0a29f0ca6)

It is required to have a Database connected to a node application to store data with migration and retreive.

### API Endpoint

#### /zone
(Get Request) to recieve a List of Ontario Fishing Zone in Array.
```
[
  {
        "id": 1,
        "zone": "Zone 01"
  }, ... and more ]
```

#### /zone/:zoneId
(Get Request) to recieve a List of data according to Zone Id.
```
[
    {
        "id": 1,
        "species": "Trout and Salmon (Aggregate and Including Splake)",
        "season": null,
        "s_limit": 5,
        "s_limit_desc": null,
        "c_limit": 2,
        "c_limit_desc": "Total daily catch and possession limit for all trout and salmon species combined",
        "valid_year": "Valid for 2023",
        "ont_zone_id": 5
    }, ... and more ]
```
